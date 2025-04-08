package edu.uclm.qumugen.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.operators.Operator;

@Service
public class MutantService {
	
	@Autowired
	private OperatorsService operatorsService;
	
	public MutantService() throws Exception {
		Gate.loadGates(this);
		Operator.loadOperators(this);
	}

	public List<Circuit> generateQuirkMutants(Map<String, Object> quirk, List<String> operatorNames, String mutableRows, String mutableColumns, boolean generateWithAllInputs, String sInputQubits) {
		JSONObject jsoQuirk = new JSONObject(quirk);
		Circuit circuit = new Circuit(jsoQuirk);
		List<Circuit> mutants = new ArrayList<>();
		List<Integer> columns = new ArrayList<>();
		String[] sTokens = mutableColumns.split(",");
		for (int i=0; i<sTokens.length; i++)
			columns.add(Integer.parseInt(sTokens[i]));
		
		sTokens = mutableRows.split(",");
		List<Integer> rows = new ArrayList<>();
		for (int i=0; i<sTokens.length; i++)
			rows.add(Integer.parseInt(sTokens[i]));
		
		int numberOfInputQubits = -1;
		if (generateWithAllInputs)
			numberOfInputQubits = sInputQubits.split(",").length;
		
		for (String operatorName : operatorNames) {
			Operator operator = this.operatorsService.find(operatorName);
			List<Circuit> auxi = new ArrayList<>();
			operator.apply(circuit, auxi, rows, columns);
			if (numberOfInputQubits!=-1) {
				auxi = this.insertColumns(auxi, numberOfInputQubits);
			}
			mutants.addAll(auxi);
		}
		Circuit mutant;
		for (int i=0; i<mutants.size(); i++) {
			mutant = mutants.get(i);
			mutant.setMutantIndex(i);
			mutant.toQuirk();
		}
		return mutants;
	}

	private List<Circuit> insertColumns(List<Circuit> auxi, int inputQubits) {
		int n = (int) Math.pow(2, inputQubits);
		List<QColumn> qqcc = new ArrayList<>();

		List<Circuit> result = new ArrayList<>();
		for (int i=0; i<n; i++) {
			String binary = Integer.toBinaryString(i);
			for (int j=binary.length(); j<inputQubits; j++)
				binary = "0" + binary;
			// 0001 -> 111X
			// 0010 -> 11X1
			// 1101 -> XX1X
			binary = binary.replace('1', 'X');
			binary = binary.replace('0', '1');
			JSONArray jsa = new JSONArray();
			for (int j=0; j<binary.length(); j++)
				jsa.put(binary.charAt(j)=='1' ? 1 : "X");
			QColumn qc = new QColumn(0, jsa);
			qqcc.add(qc);
		}
		
		for (int i=0; i<auxi.size(); i++) {
			for (int j=0; j<qqcc.size(); j++) {
				Circuit mutant = new Circuit(auxi.get(i));
				mutant.getColumns().add(0, qqcc.get(j));
				result.add(mutant);
			}
		}
		return result;
	}
	
}
	