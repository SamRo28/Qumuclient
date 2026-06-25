package edu.uclm.qumugen.model;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import edu.uclm.qumugen.utils.Utils;

public class Gate {

	private Object name;
	private JSONArray description;
	private boolean control;
	private List<Gate> controlGates;
	private int qubit;
	
	public static List<Gate> gates;
	private static Integer ZERO = 0;
	private static Integer ONE = 1;
	
	private Gate() {
		this.controlGates = new ArrayList<>();		
	}

	private Gate(JSONArray jsaGate) {
		this();
		this.name = jsaGate.get(0);
		this.description = jsaGate;
	}

	public Gate(Object name, int qubit) {
		this();
		this.qubit = qubit;
		String sName = name.toString();
		
		this.name = name;
		boolean found = false;
		for (int i=0; i<Gate.gates.size(); i++) {
			Gate gate = Gate.gates.get(i);
			if (sName.equals(gate.getName().toString())) {
				found = true;
				break;
			}
		}
		if (!found) 
			this.description = new JSONArray().put(this.name).put(this.name);
					
		if (sName.equals("•"))
			this.control = true;
	}
	
	public static void loadGates(Object o) throws JSONException, IOException {
		JSONObject s = new JSONObject(Utils.readFileAsString(o, "data.json.txt"));
		gates = new ArrayList<>();
		JSONArray jsaGates = s.getJSONArray("gates");
		for (int i=0; i<jsaGates.length(); i++) {
			JSONArray jsaGate = jsaGates.getJSONArray(i);
			gates.add(new Gate(jsaGate));
		}
	}
	
	public boolean isDuplicable() {
		return !this.name.equals(ZERO) && !this.name.equals(ONE) && !this.name.equals("•") && !this.name.equals("…");
	}

	public Gate(Gate gate) {
		this.name = gate.name;
		this.description = gate.description;
		this.control = gate.control;
		this.qubit = gate.qubit;
		
	}

	public boolean isControl() {
		return control;
	}
	
	public List<Gate> getControlGates() {
		return controlGates;
	}
	
	public void setControlGates(List<Gate> controlGates) {
		this.controlGates = controlGates;
	}
	
	public Object getName() {
		return this.name;
	}
	
	public void setName(Object name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return this.name.toString();
	}

	public static Gate findGate(Object gateName) {
		Gate gate = null;
		for (int i=0; i<gates.size(); i++ ) {
			gate = gates.get(i);
			if (gate.getName().equals(gateName))
				return gate;
		}
		return null;
	}
	
	public int getQubit() {
		return qubit;
	}
	
	public JSONArray getDescription() {
		return description;
	}
}
