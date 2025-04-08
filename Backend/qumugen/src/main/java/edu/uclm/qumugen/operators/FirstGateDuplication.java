package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class FirstGateDuplication extends InitializationErrors {
	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate) {
		if (columnsToMutate.contains(0)) {
			QColumn column = circuit.getColumns().get(0);
			List<Integer> mutableGates = this.getApplicableGates(rowsToMutate, column);
			for (int i=0; i<mutableGates.size(); i++) { 
				this.apply(circuit, 0, mutableGates.get(i), mutants);
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
		Gate gate = mutant.getGate(column, row);
		QColumn originalColumn = mutant.getColumns().get(column);
		QColumn mutatedColumn = new QColumn(originalColumn);
		mutatedColumn.setGate(row, gate);
		mutant.getColumns().add(column+1, mutatedColumn);
		
		mutant.setMutationOperator(this.getName());
		mutant.setMutatedColumn(column);
		mutant.setMutatedRow(row);
		mutants.add(mutant);
	}
	
}