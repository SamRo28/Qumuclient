package edu.uclm.qumugen.operators;

import java.util.ArrayList;

import org.json.JSONObject;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.CustomizedGate;
import edu.uclm.qumugen.model.Gate;

/**
 * Operador de inserción de ruido Rx(0.1 rad).
 */
public class NoiseInsertion extends ColumnInsertion {

	public static final String NOISE_GATE_ID = "~qsnoise";
	public static final String NOISE_GATE_NAME = "Noise";
	public static final String NOISE_MATRIX = "{{0.99875026,-0.04997917i},{-0.04997917i,0.99875026}}";

	private NoiseConfig noiseConfig = NoiseConfig.DEFAULT;

	public NoiseConfig getNoiseConfig() {
		return this.noiseConfig;
	}

	public NoiseInsertion withConfig(NoiseConfig config) {
		NoiseInsertion copy = new NoiseInsertion();
		copy.setName(this.name);
		copy.noiseConfig = (config == null ? NoiseConfig.DEFAULT : config);
		return copy;
	}

	@Override
	public void setName(String name) {
		this.name = name;
		String token = name.substring("NoiseInsertion".length());
		this.position = InsertionPosition.fromToken(token);
	}

	@Override
	protected Gate gateFor(Circuit mutant, int row) {
		ensureNoiseGate(mutant, this.noiseConfig);
		return new Gate(NOISE_GATE_ID, row);
	}

	public static void ensureNoiseGate(Circuit c) {
		ensureNoiseGate(c, NoiseConfig.DEFAULT);
	}

	public static void ensureNoiseGate(Circuit c, CustomizedGate noiseGate) {
		if (c.getCustomizedGates() == null) {
			c.setCustomizedGates(new ArrayList<>());
		}
		boolean exists = false;
		for (CustomizedGate cg : c.getCustomizedGates()) {
			if (NOISE_GATE_ID.equals(cg.getId())) {
				exists = true;
				break;
			}
		}
		if (!exists && noiseGate != null) {
			c.getCustomizedGates().add(0, new CustomizedGate(noiseGate));
		}
	}

	public static void ensureNoiseGate(Circuit c, NoiseConfig config) {
		if (c.getCustomizedGates() == null) {
			c.setCustomizedGates(new ArrayList<>());
		}
		boolean exists = false;
		for (CustomizedGate cg : c.getCustomizedGates()) {
			if (NOISE_GATE_ID.equals(cg.getId())) {
				exists = true;
				break;
			}
		}
		if (!exists) {
			JSONObject jso = new JSONObject();
			jso.put("id", NOISE_GATE_ID);
			jso.put("name", NOISE_GATE_NAME);
			jso.put("matrix", config == null ? NOISE_MATRIX : config.toQuirkMatrix());
			c.getCustomizedGates().add(0, new CustomizedGate(jso));
		}
	}

	@Override
	public String getPrintedName() {
		return "Noise Insertion (" + this.position.getToken() + ")";
	}

}
