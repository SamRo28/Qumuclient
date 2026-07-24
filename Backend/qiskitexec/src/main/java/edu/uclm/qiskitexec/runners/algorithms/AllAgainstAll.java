package edu.uclm.qiskitexec.runners.algorithms;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.Delco;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public class AllAgainstAll extends Strategy {

	private List<List<ProgramExecutionResult>> wholeResults;

	public AllAgainstAll() {
		super();
		this.wholeResults = new ArrayList<>();
	}

	@Override
	public List<List<ProgramExecutionResult>> execute(edu.uclm.qiskitexec.runners.CentralizedProxyRunner runner,
			StrategyMutantsExecutionConfiguration smec) {
		double shots = 0;
		ProgramExecutionResult per = smec.getOriginalResults().get(0);
		for (int i = 0; i < per.size(); i++)
			shots = shots + (int) per.getExecutionResults().get(i).get("frequency");
		shots = 2 * shots;
		double toleratedError = smec.getToleratedError();
		double zombieError = smec.getZombieError();
		List<Integer> inputQubits = smec.getInputQubits();
		boolean reduceTable = smec.isReduceTable();

		List<Mutant> mutants = smec.getMutants();
		for (int i = 0; i < mutants.size(); i++) {
			String mutantCode = mutants.get(i).getWholeCode();
			Delco delco = new Delco(mutantCode, inputQubits, smec.getOutputsSize(), smec.getInputs());
			List<ProgramExecutionResult> mutantResults = delco.executeWithAllInputsRemote(runner);
			mutantResults.sort((o1, o2) -> {
				Integer mI1 = (int) o1.getMutantIndex();
				Integer mI2 = (int) o2.getMutantIndex();
				return mI1.compareTo(mI2);
			});

			this.calculate(smec.getOriginalResults(), mutantResults, toleratedError, zombieError, shots, reduceTable);
			this.wholeResults.add(mutantResults);
		}
		return this.wholeResults;
	}

	private void calculate(List<ProgramExecutionResult> originalResults, List<ProgramExecutionResult> mutantResults,
			double toleratedError, double zombieError, double shots, boolean reduceTable) {
		double killThreshold = toleratedError + zombieError;
		for (int i = 0; i < originalResults.size(); i++) {
			ProgramExecutionResult originalResult = originalResults.get(i);
			ProgramExecutionResult mutantResult = mutantResults.get(i);
			int error = this.calculateMutant(originalResult, mutantResult, reduceTable);
			double mutantError = error / shots;
			mutantError = Math.round(mutantError * 100.0) / 100.0;

			mutantResult.setError(mutantError);
			mutantResult.setKilled(killThreshold <= mutantError);
			mutantResult.setZombie(toleratedError <= mutantError && mutantError < killThreshold);
		}
	}

	private int calculateMutant(ProgramExecutionResult originalResult, ProgramExecutionResult mutantResult,
			boolean reduceTable) {
		int totalError = 0;
		for (int i = originalResult.size() - 1; i >= 0; i--) {
			int originalFreq = (int) originalResult.get(i).get("frequency");
			int mutantFreq = (int) mutantResult.get(i).get("frequency");
			int error = originalFreq - mutantFreq;
			if (error < 0)
				error = -error;
			totalError += error;
			if (reduceTable && originalFreq == 0)
				originalResult.getExecutionResults().remove(i);
			if (reduceTable && mutantFreq == 0)
				mutantResult.getExecutionResults().remove(i);
		}
		return totalError;
	}
}
