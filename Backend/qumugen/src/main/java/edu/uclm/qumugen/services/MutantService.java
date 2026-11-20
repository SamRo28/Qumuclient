package edu.uclm.qumugen.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Collection;
import java.util.Map;
import java.util.function.Consumer;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.CustomizedGate;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.operators.NoiseConfig;
import edu.uclm.qumugen.operators.NoiseInsertion;
import edu.uclm.qumugen.operators.Operator;

@Service
public class MutantService {

	@Autowired
	private OperatorsService operatorsService;

	public MutantService() throws Exception {
		Gate.loadGates(this);
		Operator.loadOperators(this);
	}

	public List<Circuit> generateQuirkMutants(Map<String, Object> quirk, List<String> operatorNames, String mutableRows,
			String mutableColumns, boolean generateWithAllInputs, String sInputQubits) {
		return this.generateQuirkMutants(quirk, operatorNames, mutableRows, mutableColumns, generateWithAllInputs,
				sInputQubits, NoiseConfig.DEFAULT);
	}

	public List<Circuit> generateQuirkMutants(Map<String, Object> quirk, List<String> operatorNames, String mutableRows,
			String mutableColumns, boolean generateWithAllInputs, String sInputQubits, NoiseConfig noiseConfig) {
		return generateQuirkMutants(quirk, operatorNames, mutableRows, mutableColumns, generateWithAllInputs,
				sInputQubits,
				List.of(noiseConfig == null ? NoiseConfig.DEFAULT : noiseConfig));
	}

	public List<Circuit> generateQuirkMutants(Map<String, Object> quirk, List<String> operatorNames, String mutableRows,
			String mutableColumns, boolean generateWithAllInputs, String sInputQubits, List<NoiseConfig> noiseConfigs) {
		List<Circuit> result = new ArrayList<>();
		this.generateQuirkMutants(quirk, operatorNames, mutableRows, mutableColumns, generateWithAllInputs,
				sInputQubits, noiseConfigs, result::add);
		return result;
	}

	public void generateQuirkMutants(Map<String, Object> quirk, List<String> operatorNames, String mutableRows,
			String mutableColumns, boolean generateWithAllInputs, String sInputQubits, List<NoiseConfig> noiseConfigs,
			Consumer<Circuit> emitter) {
		if (noiseConfigs == null || noiseConfigs.isEmpty()) {
			noiseConfigs = List.of(NoiseConfig.DEFAULT);
		}
		JSONObject jsoQuirk = new JSONObject(quirk);
		Circuit circuit = new Circuit(jsoQuirk);
		int[] nextIndex = { 0 };
		List<Integer> columns = new ArrayList<>();
		if (mutableColumns != null && !mutableColumns.trim().isEmpty()) {
			String[] sTokens = mutableColumns.split(",");
			for (int i = 0; i < sTokens.length; i++) {
				String token = sTokens[i].trim();
				if (!token.isEmpty()) {
					try {
						columns.add(Integer.parseInt(token));
					} catch (NumberFormatException e) {
					}
				}
			}
		}

		List<Integer> rows = new ArrayList<>();
		if (mutableRows != null && !mutableRows.trim().isEmpty()) {
			String[] sTokens = mutableRows.split(",");
			for (int i = 0; i < sTokens.length; i++) {
				String token = sTokens[i].trim();
				if (!token.isEmpty()) {
					try {
						rows.add(Integer.parseInt(token));
					} catch (NumberFormatException e) {
					}
				}
			}
		}

		int numberOfInputQubits = -1;
		if (generateWithAllInputs && sInputQubits != null && !sInputQubits.trim().isEmpty()) {
			String[] tokens = sInputQubits.split(",");
			int count = 0;
			for (String t : tokens) {
				if (!t.trim().isEmpty()) {
					count++;
				}
			}
			if (count > 0) {
				numberOfInputQubits = count;
			}
		}

		for (String operatorName : operatorNames) {
			Operator operator = this.operatorsService.find(operatorName);
			if (operator instanceof NoiseInsertion) {
				for (NoiseConfig cfg : noiseConfigs) {
					List<Circuit> auxi = new MutantSink(emitter, numberOfInputQubits, cfg.label(), nextIndex);
					((NoiseInsertion) operator).withConfig(cfg).apply(circuit, auxi, rows, columns);
				}
			} else {
				List<Circuit> auxi = new MutantSink(emitter, numberOfInputQubits, null, nextIndex);
				operator.apply(circuit, auxi, rows, columns);
			}
		}

		if (circuit.getCustomizedGates() != null) {
			for (int cgIdx = 0; cgIdx < circuit.getCustomizedGates().size(); cgIdx++) {
				CustomizedGate cg = circuit.getCustomizedGates().get(cgIdx);
				if (cg.getCircuit() != null) {
					Circuit subCircuit = cg.getCircuit();

					List<String> subColsList = new ArrayList<>();
					for (int i = 0; i < subCircuit.getColumns().size(); i++) {
						subColsList.add(String.valueOf(i));
					}
					String subMutableColumns = String.join(",", subColsList);

					List<String> subRowsList = new ArrayList<>();
					for (int i = 0; i < subCircuit.getQubits(); i++) {
						subRowsList.add(String.valueOf(i));
					}
					String subMutableRows = String.join(",", subRowsList);

					List<Circuit> subMutants = generateQuirkMutants(
							subCircuit.toQuirk().toMap(),
							operatorNames,
							subMutableRows,
							subMutableColumns,
							false,
							"",
							noiseConfigs);

					for (int mIdx = 0; mIdx < subMutants.size(); mIdx++) {
						Circuit subMutant = subMutants.get(mIdx);
						Circuit mutantMain = new Circuit(circuit);
						CustomizedGate noiseGate = this.hoistNoiseGate(subMutant);

						String oldId = cg.getId();
						String oldName = cg.getName();

						String newId = oldId + "_mut_" + cgIdx + "_" + mIdx;
						String newName = oldName + " (" + subMutant.getMutationOperator() + ")";

						CustomizedGate mutatedCG = new CustomizedGate(cg, subMutant, newId, newName);
						mutantMain.getCustomizedGates().set(cgIdx, mutatedCG);
						if (noiseGate != null) {
							NoiseInsertion.ensureNoiseGate(mutantMain, noiseGate);
						}
						mutantMain.replaceGateName(oldId, newId);

						mutantMain.setMutationOperator(subMutant.getMutationOperator());
						mutantMain.setMutatedColumn(subMutant.getMutatedColumn());
						mutantMain.setMutatedRow(subMutant.getMutatedRow());
						mutantMain.setMutationDetail(subMutant.getMutationDetail());
						mutantMain.setOracleName(oldName);

						new MutantSink(emitter, numberOfInputQubits, null, nextIndex).add(mutantMain);
					}
				}
			}
		}

	}

	/**
	 * Recibe los mutantes de un operador y los emite en cuanto estan terminados,
	 * para no acumular miles de circuitos
	 * completos en memoria.
	 */
	private class MutantSink extends ArrayList<Circuit> {
		private static final long serialVersionUID = 1L;

		private final transient Consumer<Circuit> emitter;
		private final int numberOfInputQubits;
		private final String mutationDetail;
		private final int[] nextIndex;

		MutantSink(Consumer<Circuit> emitter, int numberOfInputQubits, String mutationDetail, int[] nextIndex) {
			this.emitter = emitter;
			this.numberOfInputQubits = numberOfInputQubits;
			this.mutationDetail = mutationDetail;
			this.nextIndex = nextIndex;
		}

		@Override
		public boolean add(Circuit mutant) {
			if (this.mutationDetail != null) {
				mutant.setMutationDetail(this.mutationDetail);
			}
			List<Circuit> expanded = this.numberOfInputQubits != -1
					? insertColumns(List.of(mutant), this.numberOfInputQubits)
					: List.of(mutant);
			for (Circuit m : expanded) {
				m.setMutantIndex(this.nextIndex[0]++);
				m.toQuirk();
				this.emitter.accept(m);
			}
			return true;
		}

		@Override
		public boolean addAll(Collection<? extends Circuit> c) {
			for (Circuit m : c) {
				this.add(m);
			}
			return !c.isEmpty();
		}
	}

	private List<Circuit> insertColumns(List<Circuit> auxi, int inputQubits) {
		int n = (int) Math.pow(2, inputQubits);
		List<QColumn> qqcc = new ArrayList<>();

		List<Circuit> result = new ArrayList<>();
		for (int i = 0; i < n; i++) {
			String binary = Integer.toBinaryString(i);
			for (int j = binary.length(); j < inputQubits; j++)
				binary = "0" + binary;
			// 0001 -> 111X
			// 0010 -> 11X1
			// 1101 -> XX1X
			binary = binary.replace('1', 'X');
			binary = binary.replace('0', '1');
			JSONArray jsa = new JSONArray();
			for (int j = 0; j < binary.length(); j++)
				jsa.put(binary.charAt(j) == '1' ? 1 : "X");
			QColumn qc = new QColumn(0, jsa);
			qqcc.add(qc);
		}

		for (int i = 0; i < auxi.size(); i++) {
			for (int j = 0; j < qqcc.size(); j++) {
				Circuit mutant = new Circuit(auxi.get(i));
				mutant.getColumns().add(0, qqcc.get(j));
				result.add(mutant);
			}
		}
		return result;
	}

	private CustomizedGate hoistNoiseGate(Circuit subMutant) {
		if (subMutant.getCustomizedGates() != null) {
			for (int i = 0; i < subMutant.getCustomizedGates().size(); i++) {
				CustomizedGate cg = subMutant.getCustomizedGates().get(i);
				if (NoiseInsertion.NOISE_GATE_ID.equals(cg.getId())) {
					subMutant.getCustomizedGates().remove(i);
					if (subMutant.getCustomizedGates().isEmpty()) {
						subMutant.setCustomizedGates(null);
					}
					return cg;
				}
			}
		}
		return null;
	}

}
