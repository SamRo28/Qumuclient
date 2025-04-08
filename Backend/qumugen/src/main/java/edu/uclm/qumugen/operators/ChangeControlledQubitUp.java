package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.List;
import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class ChangeControlledQubitUp extends Operator{

	
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
		List<Integer> result = new ArrayList<>();
		
		if(!column.getControlGates().isEmpty()) {
			for (int i=1; i<column.getGates().size(); i++) {
				if (!rowsToMutate.contains(i))
					continue;
				
				Gate gate = column.getGates().get(i);
				Gate UpGate = column.getGates().get(i-1);
		
				if (gate.isDuplicable() && (!UpGate.isDuplicable() && !UpGate.isControl())) {
					result.add(i);		
				}
			}
		}
		
		return result;
	}
	
	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		
		for(int i = 1; i <= row; i++) {
			
			Circuit mutant = new Circuit(circuit);
			Gate gate = mutant.getGate(column, row);
			QColumn mutatedColumn = new QColumn(mutant.getColumns().get(column));
			boolean column_filled = mutatedColumn.fill(circuit.getQubits());
			Gate UpGate = mutant.getGate(column, row-i);
			
			if (!UpGate.isDuplicable() && !UpGate.isControl()) {
				boolean removableColumn = mutatedColumn.removeGate(row);				
				mutatedColumn.setGate(row-i, gate);
				mutant.getColumns().set(column, mutatedColumn);
				mutant.setMutationOperator(this.getName());
				mutant.setMutatedColumn(column);
				mutant.setMutatedRow(row);
				mutants.add(mutant);
			}
			
		}

	}
	
	@Override
	public String getPrintedName() {
		return this.getName();
	}
	 

}
