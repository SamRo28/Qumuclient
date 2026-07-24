package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public class StrategyMutantsExecutionConfiguration {
	
	private String algorithm;
	private double toleratedError;
	private double zombieError;
	private List<ProgramExecutionResult> originalResults;
	private int qubits;
	private List<Mutant> mutants;
	private List<Integer> inputQubits;
	private List<Integer> outputQubits;
	private boolean reduceTable;
	private List<String> inputs;
	
	public StrategyMutantsExecutionConfiguration() {
		this.inputQubits = new ArrayList<>();
		this.outputQubits = new ArrayList<>();
		this.inputs = new ArrayList<>();
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

	public List<ProgramExecutionResult> getOriginalResults() {
		return originalResults;
	}
	
	public void setOriginalResults(List<ProgramExecutionResult> originalResults) {
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
	
	public void setInputQubits(String inputQubits) {
		String[] tokens = inputQubits.split(",");
		for (int i=0; i<tokens.length; i++)
			this.inputQubits.add(Integer.parseInt(tokens[i].trim()));
	}
	
	public List<Integer> getInputQubits() {
		return inputQubits;
	}
	
	public int getInputsSize() {
		return (int) Math.pow(2, inputQubits.size());
	}
	
	public int getOutputsSize() {
		return (int) Math.pow(2, outputQubits.size());
	}
	
	public String getAlgorithm() {
		return algorithm;
	}
	
	public void setAlgorithm(String algorithm) {
		this.algorithm = algorithm;
	}

	public boolean isReduceTable() {
		return reduceTable;
	}

	public void setReduceTable(boolean reduceTable) {
		this.reduceTable = reduceTable;
	}
	
	public List<String> getInputs() {
		return inputs;
	}
	
	public void setInputs(List<String> inputs) {
		this.inputs = inputs;
	}
}
