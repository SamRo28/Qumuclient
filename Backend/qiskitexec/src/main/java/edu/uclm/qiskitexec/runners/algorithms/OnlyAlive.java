package edu.uclm.qiskitexec.runners.algorithms;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public class OnlyAlive extends Strategy {

	private List<List<ProgramExecutionResult>> wholeResults;
	private ProgramExecutionResult currentOriginalResult;
	private List<ProgramExecutionResult> currentMutantResults;
	private double shots;
	private double toleratedError;
	private double zombieError;

	public OnlyAlive() {
		this.wholeResults = new ArrayList<>();
	}

	@Override
	public List<List<ProgramExecutionResult>> execute(edu.uclm.qiskitexec.runners.CentralizedProxyRunner runner,
			StrategyMutantsExecutionConfiguration smec) {
		this.shots = 0;
		ProgramExecutionResult per = smec.getOriginalResults().get(0);
		for (int i = 0; i < per.size(); i++)
			shots = shots + (int) per.getExecutionResults().get(i).get("frequency");
		shots = 2 * shots;
		this.toleratedError = smec.getToleratedError();
		this.zombieError = smec.getZombieError();

		List<Mutant> mutants = smec.getMutants();
		int outputSize = smec.getOutputsSize();
		int iterations = smec.getOriginalResults().size() * outputSize;
		int qubits = smec.getQubits();

		for (int i = 0; i < iterations; i++) {
			this.currentOriginalResult = smec.getOriginalResults().get(i);
			this.currentMutantResults = new ArrayList<>();
			for (int j = 0; j < mutants.size(); j++) {
				Mutant mutant = new Mutant(mutants.get(j));
				String variantCode = mutant.getWholeCode();
				int initialization = variantCode.indexOf("#Initialization");
				if (initialization != -1) {
					mutants.remove(j);
					j--;
					continue;
				}

				List<Mutant> variants = Initializer.getVariants(mutant, qubits, outputSize);

				// Here we just execute all variants together in the remote runner
				List<ProgramExecutionResult> results = runner.executeMutants(variants, outputSize);

				// Process results for this set of variants
				for (ProgramExecutionResult res : results) {
					this.addResult(res);
				}

				this.wholeResults.add(this.currentMutantResults);
			}
		}

		return this.wholeResults;
	}

	public synchronized void addResult(ProgramExecutionResult mutantResult) {
		List<Map<String, Object>> mutantExecutionResults = mutantResult.getExecutionResults();
		double error = this.calculateMutant(mutantExecutionResults);
		double mutantError = error / shots;
		mutantError = Math.round(mutantError * 100.0) / 100.0;

		mutantResult.setError(mutantError);
		double killThreshold = toleratedError + zombieError;
		mutantResult.setKilled(killThreshold <= mutantError);
		mutantResult.setZombie(toleratedError <= mutantError && mutantError < killThreshold);
		this.currentMutantResults.add(mutantResult);
	}

	private double calculateMutant(List<Map<String, Object>> executionResults) {
		double totalError = 0;
		for (int i = 0; i < this.currentOriginalResult.size(); i++) {
			int originalFreq = (int) this.currentOriginalResult.get(i).get("frequency");
			int mutantFreq = (int) executionResults.get(i).get("frequency");
			int error = originalFreq - mutantFreq;
			if (error < 0)
				error = -error;
			totalError += error;
		}
		return totalError;
	}
}
