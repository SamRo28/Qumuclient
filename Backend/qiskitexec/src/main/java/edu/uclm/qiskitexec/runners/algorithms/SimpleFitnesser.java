package edu.uclm.qiskitexec.runners.algorithms;

import java.util.List;
import java.util.Map;

import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public class SimpleFitnesser extends Fitnesser {
	
	public void calculate(List<ProgramExecutionResult> mutantResults) {
		double shots = 0;
		for (int i=0; i<this.originalResults.size(); i++) {
			Map<String, Object> executionResult = this.originalResults.get(i);
			shots = shots + (int) executionResult.get("frequency");
		}
		shots = 2*shots;
		
		for (int i=0; i<mutantResults.size(); i++) {
			ProgramExecutionResult mutantResult = mutantResults.get(i);
			List<Map<String, Object>> mutantExecutionResults = mutantResult.getExecutionResults();
			int error = this.calculateMutant(mutantExecutionResults);
			double mutantError = error/shots;
			mutantError =  Math.round(mutantError*100.0)/100.0;
			
			mutantResult.setError(mutantError);
			mutantResult.setKilled(toleratedError<=mutantError);
		}
		
		mutantResults.sort((o1, o2) -> {
			Integer mI1 = (int) o1.getMutantIndex();
			Integer mI2 = (int) o2.getMutantIndex();
			return mI1.compareTo(mI2);
		});
	}

	protected int calculateMutant(List<Map<String, Object>> executionResults) {
		int totalError = 0;
		for (int i=0; i<originalResults.size(); i++) {
			int originalFreq = (int) originalResults.get(i).get("frequency");
			int mutantFreq = (int) executionResults.get(i).get("frequency");
			int error = originalFreq - mutantFreq;
			if (error<0)
				error = -error;
			totalError+=error;
		}
		return totalError;
	}

}
