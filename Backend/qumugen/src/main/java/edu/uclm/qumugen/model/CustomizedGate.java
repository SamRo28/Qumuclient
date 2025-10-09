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
		this.originalQuirk = customizedGate.originalQuirk;
	}

	public JSONObject toQuirk() {
		return this.originalQuirk;
	}

}
