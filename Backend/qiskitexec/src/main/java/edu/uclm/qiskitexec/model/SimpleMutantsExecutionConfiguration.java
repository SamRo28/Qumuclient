package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public class SimpleMutantsExecutionConfiguration {
	
	private double toleratedError;
	private double zombieError;
	private ProgramExecutionResult originalResults;
	private int qubits;
	private List<Mutant> mutants;
	private List<Integer> outputQubits;
	
	public SimpleMutantsExecutionConfiguration() {
		this.outputQubits = new ArrayList<>();
	}
	
	public double getToleratedError() {
		return toleratedError;
	}
	
	public void setToleratedError(double toleratedError) {
		this.toleratedError = toleratedError;
	}

	public double getZombieError() {
		return zombieError;
	}

	public void setZombieError(double zombieError) {
		this.zombieError = zombieError;
	}

	public ProgramExecutionResult getOriginalResults() {
		return originalResults;
	}
	
	public void setOriginalResults(ProgramExecutionResult originalResults) {
		this.originalResults = originalResults;
	}	
	
	public int getQubits() {
		return qubits;
	}
	
	public void setQubits(int qubits) {
		this.qubits = qubits;
	}
	
	public List<Mutant> getMutants() {
		return mutants;
	}
	
	public void setMutants(List<Mutant> mutants) {
		this.mutants = mutants;
	}
	
	public List<Integer> getOutputQubits() {
		return outputQubits;
	}
	
	public void setOutputQubits(String outputQubits) {
		String[] tokens = outputQubits.split(",");
		for (int i=0; i<tokens.length; i++)
			this.outputQubits.add(Integer.parseInt(tokens[i].trim()));
	}
	
	public int getOutputsSize() {
		return (int) Math.pow(2, outputQubits.size());
	}

	public void setOutputQubits(List<Integer> outputQubits) {
		this.outputQubits = outputQubits;
	}

	@Override
	public String toString() {
		return "SimpleMutantsExecutionConfiguration (SMEC) for mutant " + originalResults.getMutantIndex() + ", " +
				this.qubits + "qubits, " + this.outputQubits.size() + " output qubits";
	}
}
