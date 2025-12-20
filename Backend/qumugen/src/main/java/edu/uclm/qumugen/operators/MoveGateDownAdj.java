package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

public class MoveGateDownAdj extends Operator {

	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columns) {
		for (int i = 0; i < circuit.getColumns().size(); i++) {
			if (columns != null && !columns.contains(i))
				continue;
			QColumn column = circuit.getColumns().get(i);
			column.fill(circuit.getQubits());
			List<Integer> mutableGates = this.getApplicableGates(rowsToMutate, column);
			for (int j = 0; j < mutableGates.size(); j++) {
				this.apply(circuit, i, mutableGates.get(j), mutants);
			}

		}
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		List<Integer> result = new ArrayList<>();
		if (column.getControlGates().isEmpty()) {
			for (int i = 0; i < column.getGates().size() - 1; i++) {
				if (!rowsToMutate.contains(i))
					continue;
				/*
				 * Creo que se puede reutilizar a no ser que se quiera agregar las puertas de
				 * control que en
				 * ese caso habría que crear otro método parecido al isDuplicable que te quita
				 * las puertas de
				 * control, las ZERO y las _ (estas dos últimas no sé a cuales se refiera)
				 */
				Gate gate = column.getGates().get(i);

				if (gate.isDuplicable())
					result.add(i);
			}
		}
		return result;
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Circuit mutant = new Circuit(circuit);
		Gate gate = mutant.getGate(column, row);
		if (row + 2 <= circuit.getQubits()) {
			QColumn mutatedColumn = new QColumn(row + 2, column + 1);
			QColumn OColumn = new QColumn(mutant.getColumns().get(column));

			if (row + 1 <= circuit.getQubits()) {
				boolean removableColumn = OColumn.removeGate(row);
				mutatedColumn.setGate(row + 1, gate);
				mutant.getColumns().set(column, OColumn);
				mutant.getColumns().add(column + 1, mutatedColumn);

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
