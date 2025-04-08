package edu.uclm.qumugen.model;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;

public class InitColumn {
	private List<InitialValue> initialValues;
	private Circuit containerCircuit;
	
	public InitColumn() {
		this.initialValues = new ArrayList<>();
	}

	public InitColumn(int rows) {
		this();
		for (int i=0; i<rows; i++)
			this.initialValues.add(InitialValue.ZERO);
	}

	public InitColumn(InitColumn init) {
		this();
		for (int i=0; i<init.size(); i++)
			this.initialValues.add(init.getValue(i));
	}

	public int load(JSONArray jsa) {
		for (int i=0; i<jsa.length(); i++)
			this.initialValues.add(InitialValue.parse(jsa.get(i)));
		return jsa.length();
	}

	public int size() {
		return this.initialValues.size();
	}

	public InitialValue getValue(int wireIndex) {
		return this.initialValues.get(wireIndex);
	}

	public void add(InitialValue value) {
		this.initialValues.add(value);
	}

	public void setValue(int row, InitialValue value) {
		this.initialValues.set(row, value);
	}
	
	public void setContainerCircuit(Circuit containerCircuit) {
		this.containerCircuit = containerCircuit;
	}
	
	public Circuit getContainerCircuit() {
		return containerCircuit;
	}

	public JSONArray toQuirk() {
		JSONArray jsa = new JSONArray();
		for (int i=0; i<this.initialValues.size(); i++) {
			InitialValue value = this.initialValues.get(i);
			jsa.put(value.getValue());
		}
		return jsa;
	}
	
	@Override
	public String toString() {
		return this.toQuirk().toString();
	}
}
