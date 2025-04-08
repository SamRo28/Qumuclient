package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class SwapControlAndControlledQubits extends Operator {
	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate) {
		for (int i=0; i<circuit.getColumns().size(); i++) { 
			if (columnsToMutate!=null && !columnsToMutate.contains(i))
				continue;
			QColumn column = circuit.getColumns().get(i);
			List<Integer> controlGates = column.getControlGates().stream().map(Gate::getQubit).collect(Collectors.toList());
			for (int j=0; j<controlGates.size(); j++) { 
				if (rowsToMutate.contains(j))
					this.apply(circuit, i, controlGates.get(j), mutants);
			}
		}
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Gate controlGate = new Gate(circuit.getColumns().get(column).getGates().get(row));
		Gate controlledGate = new Gate(circuit.getColumns().get(column).getControlledGate());
		int controlledGateQubit = controlledGate.getQubit();
		
		Circuit mutant = new Circuit(circuit);
		mutant.setGate(column, row, controlledGate);
		mutant.setGate(column, controlledGateQubit, controlGate);
		
		mutant.setMutationOperator(this.getName());
		mutant.setMutatedColumn(column);
		mutant.setMutatedRow(row);
		mutants.add(mutant);
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
	public String getPrintedName() {
		return "Swap Control and Controlled Qubits";
	}

}
