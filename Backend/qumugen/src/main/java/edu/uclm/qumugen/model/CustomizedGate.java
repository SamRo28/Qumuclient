package edu.uclm.qumugen.model;

import org.json.JSONObject;

public class CustomizedGate {

	private String id;
	private String name;
	private Circuit circuit;
	private String matrix;
	private JSONObject originalQuirk;

	public CustomizedGate(JSONObject jso) {
		this.id = jso.getString("id");
		this.name = jso.getString("name");
		if (jso.has("matrix"))
			this.matrix = jso.getString("matrix");
		else
			this.circuit = new Circuit(jso.getJSONObject("circuit"));
		this.originalQuirk = jso;
	}

	public CustomizedGate(CustomizedGate customizedGate) {
		this.id = customizedGate.id;
		this.name = customizedGate.name;
		if (customizedGate.matrix!=null)
			this.matrix = customizedGate.matrix;
		else
			this.circuit = new Circuit(customizedGate.circuit);
		this.originalQuirk = new JSONObject(customizedGate.originalQuirk.toString());
	}

	public CustomizedGate(CustomizedGate original, Circuit mutatedCircuit, String newId, String newName) {
		this.id = newId;
		this.name = newName;
		this.circuit = mutatedCircuit;
		this.originalQuirk = new JSONObject();
		this.originalQuirk.put("id", newId);
		this.originalQuirk.put("name", newName);
		this.originalQuirk.put("circuit", mutatedCircuit.toQuirk());
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Circuit getCircuit() {
		return circuit;
	}

	public void setCircuit(Circuit circuit) {
		this.circuit = circuit;
	}

	public JSONObject getOriginalQuirk() {
		return originalQuirk;
	}

	public void setOriginalQuirk(JSONObject originalQuirk) {
		this.originalQuirk = originalQuirk;
	}

	public JSONObject toQuirk() {
		return this.originalQuirk;
	}

}
