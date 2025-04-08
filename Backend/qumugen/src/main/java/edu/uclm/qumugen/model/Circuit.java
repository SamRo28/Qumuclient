package edu.uclm.qumugen.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Circuit {
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
			this.customizedGates.add(new CustomizedGate(gates.getJSONObject(i)));
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
}
