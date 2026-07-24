package edu.uclm.qumugen.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.json.JSONArray;
import org.json.JSONObject;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Circuit {

	private static final Pattern MATRIX_ROW = Pattern.compile("\\{([^{}]*)\\}");
	private int qubits;
	private InitColumn init;
	private List<QColumn> columns;
	private List<CustomizedGate> customizedGates;
	private String mutationOperator;
	private int mutatedColumn;
	private int mutatedRow;
	private int mutantIndex;
	private Map<String, Object> quirk;
	private String qiskitCode;
	private String oracleName;

	public Circuit(JSONObject jso) {
		JSONArray init = jso.optJSONArray("init");
		if (init!=null) {
			this.qubits = this.loadInit(init);
		}
		JSONArray gates = jso.optJSONArray("gates");
		if (gates!=null) {
			this.loadGates(gates);
		}
		this.columns = new ArrayList<>();
		JSONArray cols = jso.getJSONArray("cols");
		for (int i=0; i<cols.length(); i++) {
			JSONArray col = cols.getJSONArray(i);
			QColumn column = new QColumn(i, col);
			this.columns.add(column);
			if (column.getGates().size()>this.qubits)
				this.qubits = column.getGates().size();
		}
		// El número de filas de una columna no basta: una puerta customizada ocupa
		// varios qubits a partir de su fila (p. ej. una columna ["~oraculo"] tiene
		// una sola fila pero puede ocupar 4 qubits).
		this.qubits = Math.max(this.qubits, heightOfCircuit(this, this.customGatesById(), new HashMap<>()));
	}

	/** Indexa por id las puertas customizadas declaradas en este circuito. */
	public Map<String, CustomizedGate> customGatesById() {
		Map<String, CustomizedGate> byId = new HashMap<>();
		if (this.customizedGates != null)
			for (CustomizedGate cg : this.customizedGates)
				if (cg != null && cg.getId() != null)
					byId.put(cg.getId(), cg);
		return byId;
	}

	/** Qubits que ocupa un circuito, teniendo en cuenta la altura de cada puerta. */
	public static int heightOfCircuit(Circuit circuit, Map<String, CustomizedGate> byId, Map<String, Integer> cache) {
		return heightOfCircuit(circuit, byId, cache, new HashSet<>());
	}

	/** Qubits que ocupa una puerta: 1, salvo que sea customizada. */
	public static int heightOfGate(String gateName, Map<String, CustomizedGate> byId, Map<String, Integer> cache) {
		return heightOfGate(gateName, byId, cache, new HashSet<>());
	}

	private static int heightOfCircuit(Circuit circuit, Map<String, CustomizedGate> byId, Map<String, Integer> cache,
			Set<String> visiting) {
		int max = 1;
		if (circuit == null || circuit.columns == null)
			return max;
		for (QColumn column : circuit.columns)
			for (int row = 0; row < column.getGates().size(); row++) {
				String name = String.valueOf(column.getGates().get(row).getName());
				int height = heightOfGate(name, byId, cache, visiting);
				if (row + height > max)
					max = row + height;
			}
		return max;
	}

	private static int heightOfGate(String gateName, Map<String, CustomizedGate> byId, Map<String, Integer> cache,
			Set<String> visiting) {
		CustomizedGate cg = byId.get(gateName);
		if (cg == null)
			return 1;
		if (cache.containsKey(gateName))
			return cache.get(gateName);
		if (!visiting.add(gateName))
			return 1; // definición cíclica: se corta aquí

		int height = 1;
		if (cg.getCircuit() != null)
			height = heightOfCircuit(cg.getCircuit(), byId, cache, visiting);
		else if (cg.getMatrix() != null) {
			int dimension = matrixDimension(cg.getMatrix());
			if (dimension > 1)
				height = Math.max(1, (int) Math.round(Math.log(dimension) / Math.log(2)));
		}

		visiting.remove(gateName);
		cache.put(gateName, height);
		return height;
	}

	/** Filas de una matriz en formato Quirk ("{{1,0},{0,1}}" -> 2). */
	private static int matrixDimension(String matrix) {
		Matcher matcher = MATRIX_ROW.matcher(matrix);
		int rows = 0;
		while (matcher.find())
			rows++;
		return rows;
	}

	public Circuit(Circuit circuit) {
		if (circuit.init!=null)
			this.init = new InitColumn(circuit.init);
		if (circuit.customizedGates!=null) {
			this.customizedGates = new ArrayList<>();
			for (int i=0; i<circuit.customizedGates.size(); i++)
				this.customizedGates.add(new CustomizedGate(circuit.customizedGates.get(i)));
		}
		this.columns = new ArrayList<>();
		for (int i=0; i<circuit.columns.size(); i++) 
			this.columns.add(new QColumn(circuit.columns.get(i)));
		this.qubits = circuit.getQubits();
		this.oracleName = circuit.oracleName;
	}

	public JSONObject toQuirk() {
		JSONObject jso = new JSONObject();
		if (this.init!=null)
			jso.put("init", this.init.toQuirk());
		
		if (this.customizedGates!=null) {
			JSONArray jsaGates = new JSONArray();
			for (int i=0; i<this.customizedGates.size(); i++)
				jsaGates.put(this.customizedGates.get(i).toQuirk());
			jso.put("gates", jsaGates);
		}
		
		JSONArray jsaCols = new JSONArray();
		for (int i=0; i<this.columns.size(); i++)
			jsaCols.put(this.columns.get(i).toQuirk());
		jso.put("cols", jsaCols);
		this.quirk = jso.toMap();
		return jso;
	}

	private int loadInit(JSONArray jsaInitColumn) {
		this.init= new InitColumn();
		this.init.setContainerCircuit(this);
		return this.init.load(jsaInitColumn);
	}

	private void loadGates(JSONArray gates) {
		this.customizedGates = new ArrayList<>();
		for (int i=0; i<gates.length(); i++) {
			JSONObject jsoGate = gates.getJSONObject(i);
			this.customizedGates.add(new CustomizedGate(jsoGate));
		}
	}

	@JsonIgnore
	public List<QColumn> getColumns() {
		return columns;
	}

	public Gate getGate(int column, int row) {
		return this.columns.get(column).getGates().get(row);
	}

	public void setGate(int column, int row, Gate newGate) {
		this.columns.get(column).setGate(row, newGate);
	}

	public void setMutationOperator(String mutationOperator) {
		this.mutationOperator = mutationOperator;
	}
	
	public void setMutatedColumn(int mutatedColumn) {
		this.mutatedColumn = mutatedColumn;
	}
	
	public void setMutatedRow(int mutatedRow) {
		this.mutatedRow = mutatedRow;
	}
	
	public String getMutationOperator() {
		return mutationOperator;
	}
	
	public int getMutatedColumn() {
		return mutatedColumn;
	}
	
	public int getMutatedRow() {
		return mutatedRow;
	}

	public void setMutantIndex(int mutantIndex) {
		this.mutantIndex = mutantIndex;
	}
	
	public int getMutantIndex() {
		return mutantIndex;
	}
	
	public Map<String, Object> getQuirk() {
		return quirk;
	}
	
	public InitColumn getInit() {
		return init;
	}
	
	public int getQubits() {
		return qubits;
	}

	public void setInit(InitColumn init) {
		this.init = init;
	}
	
	public String getQiskitCode() {
		return qiskitCode;
	}
	
	public void setQiskitCode(String qiskitCode) {
		this.qiskitCode = qiskitCode;
	}

	public List<CustomizedGate> getCustomizedGates() {
		return this.customizedGates;
	}

	public void setCustomizedGates(List<CustomizedGate> customizedGates) {
		this.customizedGates = customizedGates;
	}

	public String getOracleName() {
		return this.oracleName;
	}

	public void setOracleName(String oracleName) {
		this.oracleName = oracleName;
	}

	public void replaceGateName(Object oldName, Object newName) {
		if (this.columns != null) {
			for (QColumn column : this.columns) {
				if (column.getGates() == null) continue;
				for (Gate gate : column.getGates()) {
					if (oldName.equals(gate.getName())) {
						gate.setName(newName);
					}
				}
			}
		}
		if (this.customizedGates != null) {
			for (CustomizedGate cg : this.customizedGates) {
				if (cg.getCircuit() != null) {
					cg.getCircuit().replaceGateName(oldName, newName);
					cg.getOriginalQuirk().put("circuit", cg.getCircuit().toQuirk());
				}
			}
		}
	}
}
