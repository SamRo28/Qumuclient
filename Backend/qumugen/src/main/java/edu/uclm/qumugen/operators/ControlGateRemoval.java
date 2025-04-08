package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class ControlGateRemoval extends Operator {
	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columns) {
		for (int i=0; i<circuit.getColumns().size(); i++) { 
			if (columns!=null && !columns.contains(i))
				continue;
			QColumn column = circuit.getColumns().get(i);
			List<Integer> mutableGates = this.getApplicableGates(rowsToMutate, column);
			for (int j=0; j<mutableGates.size(); j++) { 
				this.apply(circuit, i, mutableGates.get(j), mutants);
			}
		}
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		if (column.getControlGates().isEmpty())
			return Collections.emptyList();
		List<Integer> result = new ArrayList<>();
		for (int i=0; i<column.getGates().size(); i++) {
			if (!rowsToMutate.contains(i))
				continue;
			Gate gate = column.getGates().get(i);
			if (gate.isControl())
				result.add(i);				
		}
		return result;
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Circuit mutant = new Circuit(circuit);
		QColumn mutatedColumn = new QColumn(mutant.getColumns().get(column));
		boolean removableColumn = mutatedColumn.removeGate(row);
		//if (removableColumn)
			//mutant.getColumns().remove(mutatedColumn);
		//else
			//mutant.getColumns().add(column+1, mutatedColumn);
		
		mutant.getColumns().set(column, mutatedColumn);
		
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