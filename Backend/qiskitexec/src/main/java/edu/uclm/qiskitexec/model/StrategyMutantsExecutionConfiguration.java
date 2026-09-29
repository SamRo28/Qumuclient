package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

@JsonIgnoreProperties(ignoreUnknown = true)
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
	
	public void setOutputQubits(Object outputQubits) {
		this.outputQubits.clear();
		if (outputQubits == null) {
			return;
		}
		if (outputQubits instanceof List) {
			for (Object item : (List<?>) outputQubits) {
				if (item instanceof Number) {
					this.outputQubits.add(((Number) item).intValue());
				} else if (item != null) {
					try {
						this.outputQubits.add(Integer.parseInt(item.toString().trim()));
					} catch (NumberFormatException ignored) {}
				}
			}
		} else {
			String[] tokens = outputQubits.toString().split(",");
			for (int i = 0; i < tokens.length; i++) {
				String t = tokens[i].trim();
				if (!t.isEmpty()) {
					try {
						this.outputQubits.add(Integer.parseInt(t));
					} catch (NumberFormatException ignored) {}
				}
			}
		}
	}
	
	public void setInputQubits(Object inputQubits) {
		this.inputQubits.clear();
		if (inputQubits == null) {
			return;
		}
		if (inputQubits instanceof List) {
			for (Object item : (List<?>) inputQubits) {
				if (item instanceof Number) {
					this.inputQubits.add(((Number) item).intValue());
				} else if (item != null) {
					try {
						this.inputQubits.add(Integer.parseInt(item.toString().trim()));
					} catch (NumberFormatException ignored) {}
				}
			}
		} else {
			String[] tokens = inputQubits.toString().split(",");
			for (int i = 0; i < tokens.length; i++) {
				String t = tokens[i].trim();
				if (!t.isEmpty()) {
					try {
						this.inputQubits.add(Integer.parseInt(t));
					} catch (NumberFormatException ignored) {}
				}
			}
		}
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
