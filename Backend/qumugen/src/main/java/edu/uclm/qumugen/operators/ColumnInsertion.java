package edu.uclm.qumugen.operators;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Random;
import java.util.TreeSet;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;

/**
 * Clase base para operadores de mutación que insertan una nueva columna.
 */
public abstract class ColumnInsertion extends Operator {

	protected InsertionPosition position;

	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate) {
		if (rowsToMutate == null)
			return;

		TreeSet<Integer> validRows = new TreeSet<>();
		for (Integer r : rowsToMutate) {
			if (r != null && r >= 0 && r < circuit.getQubits()) {
				validRows.add(r);
			}
		}

		for (int r : validRows) {
			this.apply(circuit, this.insertionIndex(circuit, r), r, mutants);
		}
	}

	protected int insertionIndex(Circuit circuit, int row) {
		int n = circuit.getColumns().size();
		if (this.position == InsertionPosition.START) {
			return 0;
		} else if (this.position == InsertionPosition.END) {
			return n;
		} else if (this.position == InsertionPosition.RANDOM) {
			Random random = new Random(this.seed(circuit, row));
			if (n >= 2) {
				return 1 + random.nextInt(n - 1);
			} else {
				return random.nextInt(n + 1);
			}
		}
		throw new IllegalStateException("Posición de inserción desconocida: " + this.position);
	}

	protected long seed(Circuit circuit, int row) {
		StringBuilder sb = new StringBuilder();
		sb.append(circuit.getQubits()).append("|");
		for (QColumn col : circuit.getColumns()) {
			sb.append(col.toString()).append("|");
		}
		String firma = sb.toString();
		return Objects.hash(firma, this.getName(), row);
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		return Collections.emptyList();
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		Circuit mutant = new Circuit(circuit);
		QColumn inserted = new QColumn(circuit.getQubits(), column);
		inserted.setGate(row, this.gateFor(mutant, row));
		mutant.getColumns().add(column, inserted);
		mutant.setMutationOperator(this.getName());
		mutant.setMutatedColumn(column);
		mutant.setMutatedRow(row);
		mutants.add(mutant);
	}

	protected abstract Gate gateFor(Circuit mutant, int row);

}
