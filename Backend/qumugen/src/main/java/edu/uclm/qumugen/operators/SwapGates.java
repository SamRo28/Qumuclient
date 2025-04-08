package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class SwapGates extends Operator {
	
	private String originalGate;
	private String mutantGate;
	
	@Override
	public void setName(String name) {
		this.name = name; 	
		int posBarra = this.name.indexOf('_');
		this.originalGate = this.name.substring(0, posBarra);
		this.mutantGate = this.name.substring(posBarra+1);
	}

	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate) {
		for (int i=0; i<circuit.getColumns().size(); i++) {
			if (columnsToMutate!=null && !columnsToMutate.contains(i))
				continue;
			QColumn column = circuit.getColumns().get(i);
			List<Integer> mutableGates = this.getApplicableGates(rowsToMutate, column);
			for (int j=0; j<mutableGates.size(); j++)
				this.apply(circuit, i, mutableGates.get(j), mutants);
		}
		
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Circuit mutant = new Circuit(circuit);
		Gate newGate = Gate.findGate(this.mutantGate);
		mutant.setGate(column, row, newGate);
		
		mutant.setMutationOperator(this.getName());
		mutant.setMutatedColumn(column);
		mutant.setMutatedRow(row);
		mutants.add(mutant);
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		List<Integer> result = new ArrayList<>();
		if (!column.getControlGates().isEmpty())
			return result;
		for (int i=0; i<column.getGates().size(); i++) {
			if (!rowsToMutate.contains(i))
				continue;
			Gate gate = column.getGates().get(i);
			if (gate.getName().equals(this.originalGate))
				result.add(i);
		}
		return result;
	}

	@Override
	public String getPrintedName() {
		return this.getClass().getSimpleName();
	}
}
