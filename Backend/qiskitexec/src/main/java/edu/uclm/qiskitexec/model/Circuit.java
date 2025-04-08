package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Circuit {
	private String id;
	private Map<String, Object> quirkCode;
	private List<String> qiskitCode;
	private int qubits;
	private List<Integer> inputQubits;
	private List<Integer> outputQubits;
	
	public Circuit() {
		this.quirkCode = new HashMap<>();
		this.qiskitCode = new ArrayList<>();
		this.inputQubits = new ArrayList<>();
		this.outputQubits = new ArrayList<>();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Map<String, Object> getQuirkCode() {
		return quirkCode;
	}

	public void setQuirkCode(Map<String, Object> quirkCode) {
		this.quirkCode = quirkCode;
	}

	public List<String> getQiskitCode() {
		return qiskitCode;
	}

	public void setQiskitCode(List<String> qiskitCode) {
		this.qiskitCode = qiskitCode;
	}

	public int getQubits() {
		return qubits;
	}

	public void setQubits(int qubits) {
		this.qubits = qubits;
	}

	public List<Integer> getOutputQubits() {
		return outputQubits;
	}
	
	public void setInputQubits(String inputQubits) {
		String[] tokens = inputQubits.split(",");
		for (int i=0; i<tokens.length; i++)
			this.inputQubits.add(Integer.parseInt(tokens[i].trim()));
	}
	
	public List<Integer> getInputQubits() {
		return inputQubits;
	}

	public void setOutputQubits(String outputQubits) {
		String[] tokens = outputQubits.split(",");
		for (int i=0; i<tokens.length; i++)
			this.outputQubits.add(Integer.parseInt(tokens[i].trim()));
	}
	
	public int getOutputsSize() {
		return (int) Math.pow(2, outputQubits.size());
	}

	public String getCode() {
		StringBuilder sb = new StringBuilder();
		for (String line : this.qiskitCode)
			sb.append(line + "\n");
		return sb.toString();
	}
}
