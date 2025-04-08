package edu.uclm.qumugen.operators;

import java.util.Collections;
import java.util.List;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.InitColumn;
import edu.uclm.qumugen.model.InitialValue;
import edu.uclm.qumugen.model.QColumn;

public class ChangeInitialValue extends InitializationErrors {
	
	@Override
	public void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columns) {
		if (columns.contains(-1))
			this.apply(circuit, -1, -1, mutants);
	}

	@Override
	protected void apply(Circuit circuit, int column, int row, List<Circuit> mutants) {
		int qubits = circuit.getQubits();
	    InitColumn init = circuit.getInit();
	    if (init == null || init.size() == 0) {
	    	for (int i = 0; i < qubits; i++) {
		        init = new InitColumn(qubits);
		        createMutant(circuit, init, i, mutants);
	    	}
	    } else {
	    	for (int i = 0; i < qubits; i++) {
	    		InitColumn mutatedInit = new InitColumn(init);
				createMutant(circuit, mutatedInit, i, mutants);
	    	}
	    }
	}
	
	private void createMutant(Circuit circuit, InitColumn init, int j, List<Circuit> mutants) {
	    Circuit mutant = new Circuit(circuit);
	    mutant.setInit(init);
	    InitialValue value = init.getValue(j);
	    if (value == InitialValue.ZERO) {
	        mutant.getInit().setValue(j, InitialValue.ONE);
	    } else {
	        mutant.getInit().setValue(j, InitialValue.ZERO);
	    }
	    mutant.setMutationOperator(this.getName());
	    mutant.setMutatedColumn(-1);
	    mutant.setMutatedRow(j);
	    mutants.add(mutant);
	}

	@Override
	protected List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column) {
		return Collections.emptyList();
	}

}
