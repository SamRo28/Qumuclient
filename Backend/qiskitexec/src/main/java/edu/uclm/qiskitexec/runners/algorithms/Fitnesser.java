package edu.uclm.qiskitexec.runners.algorithms;

import java.util.List;

import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public abstract class Fitnesser {

	protected double toleratedError;
	protected ProgramExecutionResult originalResults;

	public abstract void calculate(List<ProgramExecutionResult> mutantResults);
	
	public void setOriginalResults(ProgramExecutionResult originalResults) {
		this.originalResults = originalResults;
	}

	public void setToleratedError(double toleratedError) {
		this.toleratedError = toleratedError;
	}
}
