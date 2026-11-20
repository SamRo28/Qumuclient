package edu.uclm.qiskitexec.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
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
