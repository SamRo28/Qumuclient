package edu.uclm.qumugen.operators;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;

/**
 * Operador de agregación de puertas de un qubit.
 */
public class GateAddition extends ColumnInsertion {

	private String gateName;

	@Override
	public void setName(String name) {
		this.name = name;
		int posBarra = name.indexOf('_');
		this.position = InsertionPosition.fromToken(name.substring("AddGate".length(), posBarra));
		this.gateName = name.substring(posBarra + 1);
	}

	@Override
	protected Gate gateFor(Circuit mutant, int row) {
		Gate g = Gate.findGate(this.gateName);
		if (g == null) {
			throw new IllegalStateException("Unknown gate " + this.gateName);
		}
		return g;
	}

	@Override
	public String getPrintedName() {
		return "Gate Addition (" + this.gateName + ", " + this.position.getToken() + ")";
	}

}
