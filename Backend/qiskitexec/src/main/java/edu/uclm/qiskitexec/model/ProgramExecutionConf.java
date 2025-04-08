package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.List;

public class ProgramExecutionConf {

	private Circuit program;
	private String outputQubits;
	private int qubits;
	private String algorithm;
	private boolean reduceTable;
	private List<String> inputs = new ArrayList<>();	
	
	public Circuit getProgram() {
		return program;
	}
	
	public void setProgram(Circuit program) {
		this.program = program;
	}
	
	public String getOutputQubits() {
		return outputQubits;
	}
	
	public void setOutputQubits(String outputQubits) {
		this.outputQubits = outputQubits;
	}
	
	public int getQubits() {
		return qubits;
	}
	
	public void setQubits(int qubits) {
		this.qubits = qubits;
	}
	
	public String getAlgorithm() {
		return algorithm;
	}
	
	public void setAlgorithm(String algorithm) {
		this.algorithm = algorithm;
	}
	
	public String getCode() {
		return this.program.getCode();
	}
	
	public int getOutputsSize() {
		return this.program.getOutputsSize();
	}

	public boolean isReduceTable() {
		return reduceTable;
	}

	public void setReduceTable(boolean reduceTable) {
		this.reduceTable = reduceTable;
	}
	
	public void setInputs(List<String> inputs) {
		this.inputs = inputs;
	}
	
	public List<String> getInputs() {
		return inputs;
	}
	
	@Override
	public String toString() {
		return "ProgramExecutionConf (PEC) for circuit " + this.program.getId() + "; " + this.qubits + " qubits, " + 
				this.outputQubits + " output qubits.";
	}
}
