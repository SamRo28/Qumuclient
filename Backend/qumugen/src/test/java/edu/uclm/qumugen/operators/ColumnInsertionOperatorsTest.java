package edu.uclm.qumugen.operators;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.File;
import java.io.PrintWriter;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.services.MutantService;
import edu.uclm.qumugen.services.QiskitService;

@SpringBootTest
public class ColumnInsertionOperatorsTest {

	@Autowired
	private MutantService mutantService;

	@Autowired
	private QiskitService qiskitService;

	// Circuitos de prueba
	public static final String C1_BELL = "{\"cols\":[[\"H\"],[\"•\",\"X\"]]}";
	public static final String C2_GHZ = "{\"cols\":[[\"H\"],[\"•\",\"X\"],[1,\"•\",\"X\"]]}";
	public static final String C3_INIT = "{\"init\":[0,1],\"cols\":[[\"H\",\"H\"],[\"•\",\"X\"],[\"H\"]]}";
	public static final String C4_GROVER = "{\"cols\":[[\"H\",\"H\"],[\"•\",\"Z\"],[\"H\",\"H\"],[\"X\",\"X\"],[\"•\",\"Z\"],[\"X\",\"X\"],[\"H\",\"H\"]]}";
	public static final String C5_SUB = "{\"cols\":[[\"H\",\"H\"],[\"~ora\"],[\"H\",\"H\"]],\"gates\":[{\"id\":\"~ora\",\"name\":\"ora\",\"circuit\":{\"cols\":[[\"•\",\"X\"]]}}]}";
	public static final String C6_MATRIX = "{\"cols\":[[\"H\"],[\"~m\"]],\"gates\":[{\"id\":\"~m\",\"name\":\"m\",\"matrix\":\"{{0,1},{1,0}}\"}]}";
	public static final String C7_PHASE = "{\"cols\":[[\"Z^½\",\"Y^-¼\",\"X^½\"],[\"•\",1,\"Z^¼\"]]}";
	public static final String C8_ONE_COL = "{\"cols\":[[\"H\",\"X\"]]}";

	private String allRows(int qubits) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < qubits; i++) {
			if (i > 0)
				sb.append(",");
			sb.append(i);
		}
		return sb.toString();
	}

	@Test
	public void allNewOperatorsAreRegistered() {
		List<Operator> noiseOps = Operator.operatorsByFamily.get("Noise insertion");
		assertNotNull(noiseOps, "Familia 'Noise insertion' no registrada");
		assertEquals(3, noiseOps.size());

		List<Operator> gateOps = Operator.operatorsByFamily.get("Gate addition");
		assertNotNull(gateOps, "Familia 'Gate addition' no registrada");
		assertEquals(48, gateOps.size());

		for (Operator op : noiseOps) {
			Operator registered = Operator.operators.get(op.getName());
			assertNotNull(registered);
			assertTrue(registered instanceof NoiseInsertion);
			assertFalse(registered instanceof SwapGates);
		}

		for (Operator op : gateOps) {
			Operator registered = Operator.operators.get(op.getName());
			assertNotNull(registered);
			assertTrue(registered instanceof GateAddition);
			assertFalse(registered instanceof SwapGates);
		}
	}

	@Test
	public void startEndRandomPlacement() {
		Map<String, String> circuits = Map.of(
			"C1", C1_BELL,
			"C2", C2_GHZ,
			"C3", C3_INIT,
			"C4", C4_GROVER,
			"C7", C7_PHASE,
			"C8", C8_ONE_COL
		);

		List<String> testOps = List.of(
			"NoiseInsertionStart", "NoiseInsertionEnd", "NoiseInsertionRandom",
			"AddGateStart_H", "AddGateEnd_H", "AddGateRandom_H"
		);

		for (Map.Entry<String, String> entry : circuits.entrySet()) {
			String circuitJson = entry.getValue();
			Circuit orig = new Circuit(new JSONObject(circuitJson));
			int qubits = orig.getQubits();
			int n = orig.getColumns().size();
			String rowsAll = allRows(qubits);

			for (String op : testOps) {
				List<Circuit> allMutants = mutantService.generateQuirkMutants(
					new JSONObject(circuitJson).toMap(),
					List.of(op),
					rowsAll,
					"",
					false,
					""
				);

				List<Circuit> mutants = allMutants.stream()
					.filter(m -> m.getOracleName() == null)
					.collect(Collectors.toList());

				assertEquals(qubits, mutants.size(), "Número incorrecto de mutantes para " + op + " en " + entry.getKey());

				for (Circuit m : mutants) {
					assertEquals(n + 1, m.getColumns().size());
					int mutatedCol = m.getMutatedColumn();
					int mutatedRow = m.getMutatedRow();

					if (op.contains("Start")) {
						assertEquals(0, mutatedCol);
					} else if (op.contains("End")) {
						assertEquals(n, mutatedCol);
					} else if (op.contains("Random")) {
						if (n >= 2) {
							assertTrue(mutatedCol >= 1 && mutatedCol <= n - 1, "mutatedCol " + mutatedCol + " fuera de [1, " + (n-1) + "]");
						} else {
							assertTrue(mutatedCol >= 0 && mutatedCol <= n, "mutatedCol " + mutatedCol + " fuera de [0, " + n + "]");
						}
					}

					QColumn insertedCol = m.getColumns().get(mutatedCol);
					String expectedGateName = op.startsWith("NoiseInsertion") ? NoiseInsertion.NOISE_GATE_ID : "H";
					assertEquals(expectedGateName, insertedCol.getGates().get(mutatedRow).getName().toString());

					for (int r = 0; r < qubits; r++) {
						if (r != mutatedRow) {
							assertEquals("1", insertedCol.getGates().get(r).getName().toString());
						}
					}

					// Las demás columnas deben coincidir en orden con el original
					JSONArray origCols = orig.toQuirk().getJSONArray("cols");
					JSONArray mutantCols = m.toQuirk().getJSONArray("cols");
					int origIdx = 0;
					for (int c = 0; c < mutantCols.length(); c++) {
						if (c == mutatedCol)
							continue;
						assertEquals(origCols.get(origIdx).toString(), mutantCols.get(c).toString());
						origIdx++;
					}

					// init (C3) no cambia
					if (orig.getInit() != null) {
						assertEquals(
							new JSONObject(circuitJson).optJSONArray("init").toString(),
							m.toQuirk().optJSONArray("init").toString()
						);
					}
				}
			}
		}
	}

	@Test
	public void randomIsReproducible() {
		Circuit orig = new Circuit(new JSONObject(C4_GROVER));
		String rows = allRows(orig.getQubits());

		List<Circuit> m1Noise = mutantService.generateQuirkMutants(new JSONObject(C4_GROVER).toMap(), List.of("NoiseInsertionRandom"), rows, "", false, "");
		List<Circuit> m2Noise = mutantService.generateQuirkMutants(new JSONObject(C4_GROVER).toMap(), List.of("NoiseInsertionRandom"), rows, "", false, "");
		List<Integer> cols1Noise = m1Noise.stream().map(Circuit::getMutatedColumn).collect(Collectors.toList());
		List<Integer> cols2Noise = m2Noise.stream().map(Circuit::getMutatedColumn).collect(Collectors.toList());
		assertEquals(cols1Noise, cols2Noise);

		List<Circuit> m1Gate = mutantService.generateQuirkMutants(new JSONObject(C4_GROVER).toMap(), List.of("AddGateRandom_X"), rows, "", false, "");
		List<Circuit> m2Gate = mutantService.generateQuirkMutants(new JSONObject(C4_GROVER).toMap(), List.of("AddGateRandom_X"), rows, "", false, "");
		List<Integer> cols1Gate = m1Gate.stream().map(Circuit::getMutatedColumn).collect(Collectors.toList());
		List<Integer> cols2Gate = m2Gate.stream().map(Circuit::getMutatedColumn).collect(Collectors.toList());
		assertEquals(cols1Gate, cols2Gate);
	}

	@Test
	public void respectsMutableRows() {
		List<Circuit> mutants = mutantService.generateQuirkMutants(
			new JSONObject(C2_GHZ).toMap(),
			List.of("NoiseInsertionStart"),
			"1",
			"",
			false,
			""
		);
		List<Circuit> mainMutants = mutants.stream()
			.filter(m -> m.getOracleName() == null)
			.collect(Collectors.toList());
		assertEquals(1, mainMutants.size());
		assertEquals(1, mainMutants.get(0).getMutatedRow());
	}

	@Test
	public void noiseGateDeclaredAtTopLevel() {
		List<String> noiseOps = List.of("NoiseInsertionStart", "NoiseInsertionEnd", "NoiseInsertionRandom");

		for (String op : noiseOps) {
			// C1
			Circuit c1 = new Circuit(new JSONObject(C1_BELL));
			List<Circuit> mC1 = mutantService.generateQuirkMutants(new JSONObject(C1_BELL).toMap(), List.of(op), allRows(c1.getQubits()), "", false, "");
			for (Circuit m : mC1) {
				JSONObject q = m.toQuirk();
				assertTrue(q.has("gates"));
				JSONArray gates = q.getJSONArray("gates");
				JSONObject g0 = gates.getJSONObject(0);
				assertEquals(NoiseInsertion.NOISE_GATE_ID, g0.getString("id"));
				assertEquals(NoiseInsertion.NOISE_MATRIX, g0.getString("matrix"));
			}

			// C5
			Circuit c5 = new Circuit(new JSONObject(C5_SUB));
			List<Circuit> mC5 = mutantService.generateQuirkMutants(new JSONObject(C5_SUB).toMap(), List.of(op), allRows(c5.getQubits()), "", false, "");
			for (Circuit m : mC5) {
				JSONObject q = m.toQuirk();
				assertTrue(q.has("gates"));
				JSONArray gates = q.getJSONArray("gates");
				JSONObject g0 = gates.getJSONObject(0);
				assertEquals(NoiseInsertion.NOISE_GATE_ID, g0.getString("id"));
				assertEquals(NoiseInsertion.NOISE_MATRIX, g0.getString("matrix"));

				// En C5, ninguna puerta custom con circuit contiene gates en su circuit
				for (int i = 0; i < gates.length(); i++) {
					JSONObject g = gates.getJSONObject(i);
					if (g.has("circuit")) {
						JSONObject subCircuit = g.getJSONObject("circuit");
						assertFalse(subCircuit.has("gates"), "El sub-circuito no debe contener la clave 'gates'");
					}
				}

				// Si el mutante es de sub-circuito, la puerta mutada contiene ~qsnoise en cols
				if (m.getOracleName() != null) {
					boolean foundNoiseInSubCols = false;
					for (int i = 0; i < gates.length(); i++) {
						JSONObject g = gates.getJSONObject(i);
						if (g.getString("id").startsWith("~ora_mut_")) {
							String colsStr = g.getJSONObject("circuit").getJSONArray("cols").toString();
							if (colsStr.contains(NoiseInsertion.NOISE_GATE_ID)) {
								foundNoiseInSubCols = true;
							}
						}
					}
					assertTrue(foundNoiseInSubCols, "La puerta mutada del oráculo debe contener ~qsnoise en circuit.cols");
				}
			}
		}
	}

	@Test
	public void allGatesAddable() {
		List<Operator> gateOps = Operator.operatorsByFamily.get("Gate addition");
		assertNotNull(gateOps);
		assertEquals(48, gateOps.size());

		Circuit c1 = new Circuit(new JSONObject(C1_BELL));
		String rows = allRows(c1.getQubits());

		for (Operator op : gateOps) {
			String opName = op.getName();
			String expectedGate = opName.substring(opName.indexOf('_') + 1);

			List<Circuit> mutants = mutantService.generateQuirkMutants(
				new JSONObject(C1_BELL).toMap(),
				List.of(opName),
				rows,
				"",
				false,
				""
			);
			assertFalse(mutants.isEmpty(), "No se generaron mutantes para " + opName);

			for (Circuit m : mutants) {
				QColumn insertedCol = m.getColumns().get(m.getMutatedColumn());
				assertEquals(expectedGate, insertedCol.getGates().get(m.getMutatedRow()).getName().toString());
			}
		}
	}

	@Test
	public void generatedQiskitCodeIsExecutable() {
		List<String> allCircuits = List.of(
			C1_BELL, C2_GHZ, C3_INIT, C4_GROVER, C5_SUB, C6_MATRIX, C7_PHASE, C8_ONE_COL
		);

		List<String> allOps = new ArrayList<>();
		Operator.operatorsByFamily.get("Noise insertion").forEach(op -> allOps.add(op.getName()));
		Operator.operatorsByFamily.get("Gate addition").forEach(op -> allOps.add(op.getName()));
		assertEquals(51, allOps.size());

		for (String cJson : allCircuits) {
			Circuit c = new Circuit(new JSONObject(cJson));
			String rows = allRows(c.getQubits());

			for (String opName : allOps) {
				List<Circuit> mutants = mutantService.generateQuirkMutants(
					new JSONObject(cJson).toMap(),
					List.of(opName),
					rows,
					"",
					false,
					""
				);

				for (Circuit m : mutants) {
					Map<String, Object> code = qiskitService.getCode(m.toQuirk().toMap(), null, m.getQubits());
					assertEquals(
						Boolean.TRUE,
						code.get("executable"),
						"Código no ejecutable para " + opName + " en circuito"
					);

					if (opName.startsWith("NoiseInsertion")) {
						String decl = code.get("declaration").toString();
						String calc = code.get("calculus").toString();
						assertTrue(decl.contains("UnitaryGate("), "Falta UnitaryGate en declaración");
						if (m.getOracleName() == null) {
							assertTrue(calc.contains("append(getNoise()"), "Falta append(getNoise() en cálculo");
						} else {
							assertTrue(decl.contains("append(getNoise()"), "Falta append(getNoise() en función del oráculo");
						}
					} else if (opName.startsWith("AddGate") && opName.endsWith("_H")) {
						String decl = code.get("declaration").toString();
						String calc = code.get("calculus").toString();
						if (m.getOracleName() == null) {
							assertTrue(calc.contains("circuit.h("), "Falta circuit.h en cálculo");
						} else {
							assertTrue(decl.contains(".h("), "Falta .h en función del oráculo");
						}
					}
				}
			}
		}
	}

	@Test
	public void writesQuirkUrlsForManualCheck() throws Exception {
		Map<String, String> selectedCircuits = Map.of(
			"C1", C1_BELL,
			"C4", C4_GROVER,
			"C5", C5_SUB
		);

		List<String> selectedOps = List.of(
			"NoiseInsertionStart", "NoiseInsertionEnd", "NoiseInsertionRandom",
			"AddGateStart_H", "AddGateEnd_Z^½", "AddGateRandom_Y^-¼"
		);

		File targetDir = new File("target");
		if (!targetDir.exists()) {
			targetDir.mkdirs();
		}
		File outputFile = new File(targetDir, "quirk-mutants.txt");

		try (PrintWriter writer = new PrintWriter(outputFile, StandardCharsets.UTF_8)) {
			for (Map.Entry<String, String> entry : selectedCircuits.entrySet()) {
				String cName = entry.getKey();
				String cJson = entry.getValue();
				Circuit orig = new Circuit(new JSONObject(cJson));
				String rows = allRows(orig.getQubits());

				for (String opName : selectedOps) {
					List<Circuit> mutants = mutantService.generateQuirkMutants(
						new JSONObject(cJson).toMap(),
						List.of(opName),
						rows,
						"",
						false,
						""
					);

					for (Circuit m : mutants) {
						String encodedQuirk = URLEncoder.encode(m.toQuirk().toString(), StandardCharsets.UTF_8).replace("+", "%20");
						String url = "https://algassert.com/quirk#circuit=" + encodedQuirk;
						writer.println(opName + " " + cName + " " + url);
					}
				}
			}
		}

		assertTrue(outputFile.exists() && outputFile.length() > 0, "quirk-mutants.txt debe existir y tener contenido");
	}

	@Test
	public void noiseConfigIsApplied() {
		NoiseConfig cfg = new NoiseConfig(NoiseAxis.Y, Math.PI / 2);
		List<String> noiseOps = List.of("NoiseInsertionStart", "NoiseInsertionEnd", "NoiseInsertionRandom");
		List<String> testCircuits = List.of(C1_BELL, C5_SUB);

		for (String cJson : testCircuits) {
			Circuit c = new Circuit(new JSONObject(cJson));
			String rows = allRows(c.getQubits());

			for (String op : noiseOps) {
				List<Circuit> mutants = mutantService.generateQuirkMutants(
					new JSONObject(cJson).toMap(),
					List.of(op),
					rows,
					"",
					false,
					"",
					cfg
				);

				for (Circuit m : mutants) {
					JSONObject q = m.toQuirk();
					assertTrue(q.has("gates"));
					JSONArray gates = q.getJSONArray("gates");
					JSONObject g0 = gates.getJSONObject(0);
					assertEquals(NoiseInsertion.NOISE_GATE_ID, g0.getString("id"));
					assertEquals(cfg.toQuirkMatrix(), g0.getString("matrix"));

					if (cJson.equals(C5_SUB)) {
						for (int i = 0; i < gates.length(); i++) {
							JSONObject g = gates.getJSONObject(i);
							if (g.has("circuit")) {
								assertFalse(g.getJSONObject("circuit").has("gates"),
										"El sub-circuito en C5 no debe contener la clave 'gates'");
							}
						}
					}
				}
			}
		}
	}

	@Test
	public void noiseConfigDoesNotLeakBetweenRequests() {
		NoiseConfig cfg = new NoiseConfig(NoiseAxis.Z, 1.0);
		Circuit c1 = new Circuit(new JSONObject(C1_BELL));
		String rows = allRows(c1.getQubits());

		// 1. Llamada con configuración personalizada
		mutantService.generateQuirkMutants(
			new JSONObject(C1_BELL).toMap(),
			List.of("NoiseInsertionStart"),
			rows,
			"",
			false,
			"",
			cfg
		);

		// 2. Llamada posterior con la sobrecarga de 6 parámetros (por defecto)
		List<Circuit> defaultMutants = mutantService.generateQuirkMutants(
			new JSONObject(C1_BELL).toMap(),
			List.of("NoiseInsertionStart"),
			rows,
			"",
			false,
			""
		);

		for (Circuit m : defaultMutants) {
			JSONObject g0 = m.toQuirk().getJSONArray("gates").getJSONObject(0);
			assertEquals(NoiseInsertion.NOISE_MATRIX, g0.getString("matrix"));
		}

		Operator registeredOp = Operator.operators.get("NoiseInsertionStart");
		assertTrue(registeredOp instanceof NoiseInsertion);
		assertEquals(NoiseConfig.DEFAULT.toQuirkMatrix(), ((NoiseInsertion) registeredOp).getNoiseConfig().toQuirkMatrix());
	}

	@Test
	public void configuredNoiseQiskitIsExecutable() {
		List<String> testCircuits = List.of(C1_BELL, C5_SUB);
		for (NoiseAxis axis : NoiseAxis.values()) {
			NoiseConfig cfg = new NoiseConfig(axis, Math.PI / 3);
			for (String cJson : testCircuits) {
				Circuit c = new Circuit(new JSONObject(cJson));
				String rows = allRows(c.getQubits());
				List<Circuit> mutants = mutantService.generateQuirkMutants(
					new JSONObject(cJson).toMap(),
					List.of("NoiseInsertionStart"),
					rows,
					"",
					false,
					"",
					cfg
				);

				for (Circuit m : mutants) {
					Map<String, Object> code = qiskitService.getCode(m.toQuirk().toMap(), null, m.getQubits());
					assertEquals(Boolean.TRUE, code.get("executable"),
							"Qiskit no ejecutable para eje " + axis + " en " + cJson);
					String decl = code.get("declaration").toString();
					assertTrue(decl.contains("UnitaryGate("),
							"Falta UnitaryGate en declaración para eje " + axis);
				}
			}
		}
	}

	@Test
	public void multipleRotationsGenerateOneSetEach() {
		List<NoiseConfig> cfgs = List.of(
			new NoiseConfig(NoiseAxis.X, 0.1),
			new NoiseConfig(NoiseAxis.Y, Math.PI / 2),
			new NoiseConfig(NoiseAxis.Z, 1.0)
		);
		List<Circuit> mutants = mutantService.generateQuirkMutants(
			new JSONObject(C1_BELL).toMap(),
			List.of("NoiseInsertionStart"),
			"0,1",
			"",
			false,
			"",
			cfgs
		);
		assertEquals(6, mutants.size());

		for (int i = 0; i < 6; i++) {
			NoiseConfig expectedCfg = cfgs.get(i / 2);
			Circuit m = mutants.get(i);
			assertEquals(expectedCfg.label(), m.getMutationDetail());
			JSONObject g0 = m.toQuirk().getJSONArray("gates").getJSONObject(0);
			assertEquals(expectedCfg.toQuirkMatrix(), g0.getString("matrix"));
		}
	}

	@Test
	public void subCircuitMutantsKeepTheirOwnRotation() {
		List<NoiseConfig> cfgs = List.of(
			new NoiseConfig(NoiseAxis.X, 0.1),
			new NoiseConfig(NoiseAxis.Y, Math.PI / 2),
			new NoiseConfig(NoiseAxis.Z, 1.0)
		);
		List<Circuit> mutants = mutantService.generateQuirkMutants(
			new JSONObject(C5_SUB).toMap(),
			List.of("NoiseInsertionEnd"),
			"0,1",
			"",
			false,
			"",
			cfgs
		);
		boolean foundSubMutant = false;
		for (Circuit m : mutants) {
			if (m.getOracleName() != null) {
				foundSubMutant = true;
				assertNotNull(m.getMutationDetail());
				NoiseConfig matchedCfg = cfgs.stream()
						.filter(c -> c.label().equals(m.getMutationDetail()))
						.findFirst()
						.orElse(null);
				assertNotNull(matchedCfg, "No matching config found for detail: " + m.getMutationDetail());
				JSONObject g0 = m.toQuirk().getJSONArray("gates").getJSONObject(0);
				assertEquals(matchedCfg.toQuirkMatrix(), g0.getString("matrix"));
			}
		}
		assertTrue(foundSubMutant, "No subcircuit mutants generated");
	}

	@Test
	public void nonNoiseOperatorsHaveNoDetail() {
		List<Circuit> mutants = mutantService.generateQuirkMutants(
			new JSONObject(C1_BELL).toMap(),
			List.of("AddGateStart_H"),
			"0,1",
			"",
			false,
			""
		);
		assertFalse(mutants.isEmpty());
		for (Circuit m : mutants) {
			assertNull(m.getMutationDetail());
		}
	}

	@Test
	public void allInputsKeepsMutationData() {
		List<Circuit> mutants = mutantService.generateQuirkMutants(
			new JSONObject(C1_BELL).toMap(),
			List.of("NoiseInsertionStart"),
			"0,1",
			"",
			true,
			"0",
			List.of(NoiseConfig.DEFAULT)
		);
		assertFalse(mutants.isEmpty());
		for (Circuit m : mutants) {
			assertEquals("NoiseInsertionStart", m.getMutationOperator());
			assertEquals("Rx(0.1)", m.getMutationDetail());
		}
	}

}
