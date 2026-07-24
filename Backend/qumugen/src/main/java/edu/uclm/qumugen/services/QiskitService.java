package edu.uclm.qumugen.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.CustomizedGate;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.InitColumn;
import edu.uclm.qumugen.model.InitialValue;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.utils.Utils;

@Service
public class QiskitService {

	/** Nombre de la variable del circuito principal en la plantilla de Qiskit. */
	private static final String MAIN_CIRCUIT = "circuit";
	/** Variable del sub-circuito dentro de la función de una puerta customizada. */
	private static final String GATE_CIRCUIT = "U";
	private static final String INDENT = "\t";

	private static final Pattern MATRIX_ROW = Pattern.compile("\\{([^{}]*)\\}");
	private static final Pattern SAFE_NUMBER = Pattern.compile("[-+*/().0-9jeE ]+");

	/**
	 * Contexto de una traducción: puertas customizadas indexadas por id y la
	 * función Python que construye cada una.
	 */
	private static class TranslationContext {
		private final Map<String, CustomizedGate> customGatesById = new LinkedHashMap<>();
		private final Map<String, String> functionByGateId = new HashMap<>();
		private final Set<String> usedFunctionNames = new HashSet<>();
		private final Map<String, Integer> heightCache = new HashMap<>();
		private final Map<String, Object> result;

		TranslationContext(Map<String, Object> result) {
			this.result = result;
		}

		void markNotExecutable() {
			this.result.put("executable", false);
		}

		boolean isCustom(String gateName) {
			return this.customGatesById.containsKey(gateName);
		}

		/** Llamada a la función que construye la puerta: "getOracle()". */
		String callFor(String gateId) {
			return this.functionByGateId.get(gateId) + "()";
		}
	}

	public Map<String, Object> getCode(Map<String, Object> quirk, List<Integer> outputQubits, int totalQubits) {

		/*
		 * Transforma el código de quirk a código python de qiskit
		 */

		Circuit circuit = new Circuit(new JSONObject(quirk));
		InitColumn init = circuit.getInit();
		Map<String, Object> result = new HashMap<>();
		result.put("executable", true);

		TranslationContext ctx = new TranslationContext(result);
		this.indexCustomGates(circuit, ctx);

		StringBuilder declaration = this.getDeclaration(circuit, outputQubits, totalQubits);

		// Cada puerta customizada (oráculo) se traduce a una función que devuelve la
		// puerta; el circuito final se construye llamando a esas funciones.
		//
		// Las definiciones van en la declaración, ANTES de #Initialization, porque
		// Delco trocea el código por los marcadores #Initialization y #Translation
		// para inyectar cada combinación de entradas: lo que quede entre ambos se
		// pierde. Si se emitieran junto al cálculo, las funciones desaparecerían del
		// código ejecutado y solo quedarían sus llamadas (NameError).
		StringBuilder definitions = new StringBuilder();
		this.emitCustomGateFunctions(ctx, definitions);
		if (definitions.length() > 0) {
			declaration.append("#Custom gates (oracles) translated from Quirk\n");
			declaration.append(definitions);
		}
		result.put("declaration", declaration);

		if (init != null) {
			StringBuilder sb = new StringBuilder();
			sb.append("#Initialization\n");
			for (int i = 0; i < init.size(); i++) {
				if (init.getValue(i) == InitialValue.ONE)
					sb.append("circuit.x(" + i + ")\n");
			}
			sb.append("\n");
			sb.append("circuit.barrier()\n");
			result.put("initialization", sb.toString());
		}

		StringBuilder sb = new StringBuilder();
		sb.append("#Translation of the Quirk circuit into Qiskit code\n");
		this.translateColumns(circuit, MAIN_CIRCUIT, ctx, sb, true, "");
		result.put("calculus", sb.toString());

		StringBuilder measures = this.getMeasures(circuit, outputQubits);
		result.put("measures", measures.toString());
		return result;
	}

	// --------------------------------------------------
	// Puertas customizadas
	// --------------------------------------------------

	/**
	 * Indexa recursivamente las puertas customizadas declaradas en el circuito y
	 * asigna a cada una el nombre de la función que la construirá.
	 */
	private void indexCustomGates(Circuit circuit, TranslationContext ctx) {
		if (circuit == null || circuit.getCustomizedGates() == null)
			return;
		for (CustomizedGate cg : circuit.getCustomizedGates()) {
			if (cg == null || cg.getId() == null || ctx.customGatesById.containsKey(cg.getId()))
				continue;
			ctx.customGatesById.put(cg.getId(), cg);
			ctx.functionByGateId.put(cg.getId(), this.functionName(cg, ctx));
			// Una puerta customizada puede declarar internamente otras.
			this.indexCustomGates(cg.getCircuit(), ctx);
		}
	}

	/** Nombre único y válido en Python para la función de una puerta. */
	private String functionName(CustomizedGate cg, TranslationContext ctx) {
		String base = cg.getName() != null && !cg.getName().trim().isEmpty() ? cg.getName() : cg.getId();
		String name = "get" + this.sanitize(base);
		if (ctx.usedFunctionNames.contains(name)) {
			int i = 2;
			while (ctx.usedFunctionNames.contains(name + "_" + i))
				i++;
			name = name + "_" + i;
		}
		ctx.usedFunctionNames.add(name);
		return name;
	}

	private void emitCustomGateFunctions(TranslationContext ctx, StringBuilder sb) {
		Set<String> defined = new HashSet<>();
		Set<String> visiting = new HashSet<>();
		for (String id : new ArrayList<>(ctx.customGatesById.keySet()))
			this.defineCustomGate(id, ctx, sb, defined, visiting);
	}

	/**
	 * Declara la función de una puerta customizada. Si está definida por un
	 * sub-circuito se traduce recursivamente y se devuelve con to_gate(); si está
	 * definida por una matriz se devuelve una UnitaryGate.
	 */
	private void defineCustomGate(String id, TranslationContext ctx, StringBuilder sb, Set<String> defined,
			Set<String> visiting) {
		if (defined.contains(id))
			return;
		CustomizedGate cg = ctx.customGatesById.get(id);
		if (cg == null)
			return;
		if (!visiting.add(id)) {
			sb.append("# The custom gate '" + id + "' is defined recursively and can't be translated\n\n");
			ctx.markNotExecutable();
			return;
		}

		String function = ctx.functionByGateId.get(id);
		int height = this.customGateHeight(cg, ctx);

		if (cg.getCircuit() != null) {
			// Primero las puertas de las que depende, para que el fichero se lea en orden.
			for (String dependency : this.referencedCustomGates(cg.getCircuit(), ctx))
				if (!dependency.equals(id))
					this.defineCustomGate(dependency, ctx, sb, defined, visiting);

			sb.append("def " + function + "() :\n");
			sb.append(INDENT + GATE_CIRCUIT + " = QuantumCircuit(" + height + ", name=" + this.pyString(cg.getName())
					+ ")\n");
			// Sin barreras: to_gate() solo admite operaciones unitarias.
			this.translateColumns(cg.getCircuit(), GATE_CIRCUIT, ctx, sb, false, INDENT);
			sb.append(INDENT + "return " + GATE_CIRCUIT + ".to_gate()\n\n");
		} else if (cg.getMatrix() != null) {
			String matrix = this.quirkMatrixToNumpy(cg.getMatrix());
			if (matrix == null) {
				sb.append("# We can't currently translate the matrix of the custom gate '" + cg.getName() + "' ("
						+ cg.getMatrix() + ") into Qiskit code\n\n");
				ctx.markNotExecutable();
			} else {
				sb.append("def " + function + "() :\n");
				sb.append(INDENT + "return UnitaryGate(numpy.array(" + matrix + "), label="
						+ this.pyString(cg.getName()) + ")\n\n");
			}
		} else {
			sb.append("# The custom gate '" + cg.getName() + "' has neither a circuit nor a matrix definition\n\n");
			ctx.markNotExecutable();
		}

		visiting.remove(id);
		defined.add(id);
	}

	/** Ids de las puertas customizadas usadas dentro de un circuito. */
	private Set<String> referencedCustomGates(Circuit circuit, TranslationContext ctx) {
		Set<String> referenced = new LinkedHashSet<>();
		if (circuit == null || circuit.getColumns() == null)
			return referenced;
		for (QColumn column : circuit.getColumns())
			for (Gate gate : column.getGates()) {
				String name = String.valueOf(gate.getName());
				if (ctx.isCustom(name))
					referenced.add(name);
			}
		return referenced;
	}

	/** Número de qubits que ocupa una puerta customizada. */
	private int customGateHeight(CustomizedGate cg, TranslationContext ctx) {
		return Circuit.heightOfGate(cg.getId(), ctx.customGatesById, ctx.heightCache);
	}

	// --------------------------------------------------
	// Traducción de columnas
	// --------------------------------------------------

	private void translateColumns(Circuit circuit, String target, TranslationContext ctx, StringBuilder sb,
			boolean allowBarriers, String indent) {
		for (int i = 0; i < circuit.getColumns().size(); i++) {
			QColumn column = circuit.getColumns().get(i);
			if (column.isBarrier())
				continue;
			if (column.getControlGates().isEmpty()) {
				for (int j = 0; j < column.getGates().size(); j++)
					this.translateGate(column.getGates().get(j), j, target, ctx, sb, indent);
				if (allowBarriers)
					sb.append(indent + target + ".barrier()\n");
			} else {
				this.translateControlledColumn(column, target, ctx, sb, indent);
			}
			if (allowBarriers)
				sb.append("\n");
		}
	}

	/** Traduce una puerta simple situada en la fila (qubit) indicada. */
	private void translateGate(Gate circuitGate, int row, String target, TranslationContext ctx, StringBuilder sb,
			String indent) {
		String name = String.valueOf(circuitGate.getName());

		// 1. Puerta customizada (oráculo): se llama a su función y ocupa varios qubits
		// a partir de su fila.
		if (ctx.isCustom(name)) {
			CustomizedGate cg = ctx.customGatesById.get(name);
			sb.append(indent + target + ".append(" + ctx.callFor(name) + ", ["
					+ this.qubitList(row, this.customGateHeight(cg, ctx)) + "])\n");
			return;
		}

		// 2. Los huecos (0, 1), los controles (•) y las barreras (…) no generan
		// código. Se consulta la propia puerta de la columna y no la tabla, porque
		// '…' no está en data.json.txt y si no se descartaría como intraducible.
		if (!circuitGate.isDuplicable())
			return;

		Gate gate = Gate.findGate(circuitGate.getName());
		if (gate == null) {
			// Antes se descartaba en silencio, generando mutantes sin la puerta.
			sb.append(indent + "# We can't currently translate the '" + name + "' gate into Qiskit code\n");
			ctx.markNotExecutable();
			return;
		}
		if (gate.getDescription().length() <= 2) {
			sb.append(indent + "# We can't currently translate the " + gate.getName() + " gate into Qiskit code\n");
			ctx.markNotExecutable();
			return;
		}
		String description = gate.getDescription().getString(2).replace("#QUBIT#", String.valueOf(row));
		sb.append(indent + this.retarget(description, target) + "\n");
	}

	/**
	 * Crea el código para las columnas con puertas de control. Cada puerta objetivo
	 * de la columna se aplica controlada por todos los controles.
	 */
	private void translateControlledColumn(QColumn column, String target, TranslationContext ctx, StringBuilder sb,
			String indent) {
		List<Integer> controls = new ArrayList<>();
		for (Gate control : column.getControlGates())
			controls.add(control.getQubit());

		boolean anyTarget = false;
		for (int row = 0; row < column.getGates().size(); row++) {
			Gate gate = column.getGates().get(row);
			if (gate.isControl() || !gate.isDuplicable())
				continue;
			anyTarget = true;
			this.translateControlledGate(gate, row, controls, column, target, ctx, sb, indent);
		}

		if (!anyTarget) {
			sb.append(indent + "# We can't currently translate the " + column.toString()
					+ " column into Qiskit code\n");
			ctx.markNotExecutable();
		}
	}

	private void translateControlledGate(Gate gate, int row, List<Integer> controls, QColumn column, String target,
			TranslationContext ctx, StringBuilder sb, String indent) {
		String name = String.valueOf(gate.getName());
		String controlPart = this.join(controls);

		// Oráculo controlado.
		if (ctx.isCustom(name)) {
			CustomizedGate cg = ctx.customGatesById.get(name);
			sb.append(indent + target + ".append(" + ctx.callFor(name) + ".control(" + controls.size() + "), ["
					+ controlPart + ", " + this.qubitList(row, this.customGateHeight(cg, ctx)) + "])\n");
			return;
		}

		// X controlada: mcx cubre cualquier número de controles.
		if (name.equals("X")) {
			sb.append(indent + target + ".mcx([" + controlPart + "], " + row + ")\n");
			return;
		}

		// Resto de puertas conocidas: se usa la versión controlada de su clase.
		Gate known = Gate.findGate(gate.getName());
		if (known != null && known.getDescription().length() > 3) {
			sb.append(indent + target + ".append(" + known.getDescription().getString(3) + ".control("
					+ controls.size() + "), [" + controlPart + ", " + row + "])\n");
			return;
		}

		sb.append(indent + "# We can't currently translate the controlled '" + name + "' gate of the "
				+ column.toString() + " column into Qiskit code\n");
		ctx.markNotExecutable();
	}

	// --------------------------------------------------
	// Utilidades
	// --------------------------------------------------

	/**
	 * Las descripciones de data.json.txt están escritas sobre el circuito
	 * principal; al traducir un sub-circuito hay que apuntar a su variable.
	 */
	private String retarget(String description, String target) {
		if (MAIN_CIRCUIT.equals(target))
			return description;
		return description.replace(MAIN_CIRCUIT + ".", target + ".");
	}

	private String qubitList(int firstQubit, int height) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < height; i++) {
			if (i > 0)
				sb.append(", ");
			sb.append(firstQubit + i);
		}
		return sb.toString();
	}

	private String join(List<Integer> qubits) {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < qubits.size(); i++) {
			if (i > 0)
				sb.append(", ");
			sb.append(qubits.get(i));
		}
		return sb.toString();
	}

	private String sanitize(String id) {
		String sanitized = id.replaceAll("[^A-Za-z0-9_]", "_");
		if (sanitized.length() > 40)
			sanitized = sanitized.substring(0, 40);
		return sanitized;
	}

	private String pyString(String value) {
		String escaped = value == null ? "" : value.replace("\\", "\\\\").replace("'", "\\'");
		return "'" + escaped + "'";
	}

	/**
	 * Convierte una matriz en formato Quirk ("{{1,0},{0,i}}") en un literal de
	 * lista Python. Devuelve null si contiene notación que no sabemos traducir; en
	 * ese caso el circuito se marca como no ejecutable en vez de generar código
	 * incorrecto en silencio.
	 */
	private String quirkMatrixToNumpy(String matrix) {
		if (matrix == null)
			return null;
		Matcher matcher = MATRIX_ROW.matcher(matrix.trim());
		List<String> rows = new ArrayList<>();
		while (matcher.find())
			rows.add(matcher.group(1));
		if (rows.isEmpty())
			return null;

		StringBuilder sb = new StringBuilder("[");
		for (int i = 0; i < rows.size(); i++) {
			String[] cells = rows.get(i).split(",");
			if (cells.length != rows.size())
				return null; // la matriz debe ser cuadrada
			if (i > 0)
				sb.append(", ");
			sb.append("[");
			for (int j = 0; j < cells.length; j++) {
				String cell = this.quirkNumberToPython(cells[j]);
				if (cell == null)
					return null;
				if (j > 0)
					sb.append(", ");
				sb.append(cell);
			}
			sb.append("]");
		}
		sb.append("]");
		return sb.toString();
	}

	/** Traduce un elemento de matriz de Quirk a una expresión numérica de Python. */
	private String quirkNumberToPython(String token) {
		if (token == null)
			return null;
		String value = token.trim();
		if (value.isEmpty())
			return null;

		value = value.replace("√½", "0.7071067811865476");
		value = value.replace("√⅓", "0.5773502691896258");
		value = value.replace("√¼", "0.5");
		value = value.replace("√2", "1.4142135623730951");
		value = value.replace("√3", "1.7320508075688772");
		value = value.replace("½", "0.5");
		value = value.replace("¼", "0.25");
		value = value.replace("¾", "0.75");
		value = value.replace("⅓", "0.3333333333333333");
		value = value.replace("⅔", "0.6666666666666666");
		value = value.replace("⅛", "0.125");

		if (value.equals("i") || value.equals("+i"))
			return "1j";
		if (value.equals("-i"))
			return "-1j";

		// 2i -> 2j ; 1+i -> 1+1j
		value = value.replaceAll("(?<=[0-9.)])\\s*i", "j");
		value = value.replaceAll("(?<![0-9.jJ])i", "1j");

		if (!SAFE_NUMBER.matcher(value).matches())
			return null;
		return value;
	}

	private StringBuilder getMeasures(Circuit circuit, List<Integer> outputQubits) {

		/*
		 * Agrega al código qiskit las puertas necesarias para realizar las mediciones
		 */

		StringBuilder sb = new StringBuilder();
		if (outputQubits != null) {
			for (int i = 0; i < outputQubits.size(); i++)
				sb.append("circuit.measure(" + outputQubits.get(i) + ", " + (outputQubits.size() - i - 1) + ")\n");
		} else {
			for (int i = 0; i < circuit.getQubits(); i++)
				sb.append("circuit.measure(" + circuit.getQubits() + ", " + (i - 1) + ")\n");
		}
		return sb;
	}

	private StringBuilder getDeclaration(Circuit circuit, List<Integer> outputQubits, int totalQubits) {

		/*
		 * Crea las declaraciones en qiskit, crea el circuito
		 */

		StringBuilder sb = new StringBuilder();
		sb.append("qreg = QuantumRegister(" + totalQubits + ")\n");
		if (outputQubits != null)
			sb.append("creg = ClassicalRegister(" + outputQubits.size() + ")\n");
		else
			sb.append("creg = ClassicalRegister(" + circuit.getQubits() + ")\n");
		sb.append("\ncircuit = QuantumCircuit(qreg, creg)\n\n");
		return sb;
	}

	/** Shots por defecto si no llega ninguno: es el valor por defecto de Aer. */
	private static final int DEFAULT_SHOTS = 1024;

	public String getWholeCode(Map<String, Object> result, int shots, String qiskitTemplate) throws IOException {

		/*
		 * Transforma el código a partir de la plantillas
		 */

		String wholeCode = Utils.readFileAsString(this, qiskitTemplate);
		wholeCode = wholeCode.replace("#DECLARATION#", result.get("declaration").toString());
		if (result.containsKey("initialization"))
			wholeCode = wholeCode.replace("#INITIALIZATION#", result.get("initialization").toString());
		else
			wholeCode = wholeCode.replace("#INITIALIZATION#", "");
		wholeCode = wholeCode.replace("#CALCULUS#", result.get("calculus").toString());
		wholeCode = wholeCode.replace("#MEASURES#", result.get("measures").toString());

		// La plantilla usa #SHOTS# en la llamada de ejecución, así que siempre hay que
		// sustituirlo: dejarlo sin resolver rompería el Python generado.
		wholeCode = wholeCode.replace("#SHOTS#", "" + (shots > 0 ? shots : DEFAULT_SHOTS));
		return wholeCode;
	}

}
