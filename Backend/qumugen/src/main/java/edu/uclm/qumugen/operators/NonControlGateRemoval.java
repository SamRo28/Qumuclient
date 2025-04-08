package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class NonControlGateRemoval extends Operator {
	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate) {
		for (int i=0; i<circuit.getColumns().size(); i++) { 
			if (columnsToMutate!=null && !columnsToMutate.contains(i))
				continue;
			QColumn column = circuit.getColumns().get(i);
			List<Integer> mutableGates = this.getApplicableGates(rowsToMutate, column);
			for (int j=0; j<mutableGates.size(); j++) { 
				int mutableGateIndex = mutableGates.get(j);
				this.apply(circuit, i, mutableGateIndex, mutants);
			}
		}
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		List<Integer> result = new ArrayList<>();
		for (int i=0; i<column.getGates().size(); i++) {
			if (!rowsToMutate.contains(i))
				continue;
			Gate gate = column.getGates().get(i);
			if (gate.isDuplicable())
				result.add(i);				
		}
		return result;
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Circuit mutant = new Circuit(circuit);
		QColumn mutatedColumn = mutant.getColumns().get(column);
		boolean removableColumn = mutatedColumn.removeGate(row);
		if (removableColumn)
			mutant.getColumns().remove(column);
		
		mutant.setMutationOperator(this.getName());
		mutant.setMutatedColumn(column);
		mutant.setMutatedRow(row);
		mutants.add(mutant);
	}

	@Override
	public String getPrintedName() {
		return this.getName();
	}
	
}