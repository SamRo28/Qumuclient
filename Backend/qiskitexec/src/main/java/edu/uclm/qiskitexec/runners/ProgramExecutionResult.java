package edu.uclm.qiskitexec.runners;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ProgramExecutionResult {

	private int mutantIndex;
	private List<Map<String, Object>> executionResults = new ArrayList<>();
	private double error;
	private boolean killed;
	private boolean zombie;

	public void setMutantIndex(int mutantIndex) {
		this.mutantIndex = mutantIndex;
	}

	public void setExecutionResults(List<Map<String, Object>> executionResults) {
		this.executionResults = executionResults;
	}

	public int getMutantIndex() {
		return mutantIndex;
	}
	
	public List<Map<String, Object>> getExecutionResults() {
		return executionResults;
	}

	public void setError(double error) {
		this.error = error;
	}

	public void setKilled(boolean killed) {
		this.killed = killed;
	}
	
	public double getError() {
		return error;
	}
	
	public boolean isKilled() {
		return killed;
	}

	public void setZombie(boolean zombie) {
		this.zombie = zombie;
	}

	public boolean isZombie() {
		return zombie;
	}

	public int size() {
		return this.executionResults.size();
	}

	public Map<String, Object> get(int index) {
		return this.executionResults.get(index);
	}
}
