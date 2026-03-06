package edu.uclm.qiskitexec.runners.algorithms;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.ISimpleRunnerListener;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.SimpleRunner;

public class OnlyAlive extends Strategy implements ISimpleRunnerListener {
	
	private List<List<ProgramExecutionResult>> wholeResults;
	private ProgramExecutionResult currentOriginalResult;
	private List<ProgramExecutionResult> currentMutantResults;
	private double shots;
	private double toleratedError;
	
	public OnlyAlive() {
		this.wholeResults = new ArrayList<>();
	}

	@Override
	public List<List<ProgramExecutionResult>> execute(String pythonPath, String[] commands, String outputDirectory, String workingDirectory, StrategyMutantsExecutionConfiguration smec) {
		this.shots = 0;
		ProgramExecutionResult per = smec.getOriginalResults().get(0);
		for (int i=0; i<per.size(); i++)
			shots = shots + (int) per.getExecutionResults().get(i).get("frequency");
		shots = 2*shots;
		this.toleratedError = smec.getToleratedError();
		
		List<Mutant> mutants = smec.getMutants();
		int outputSize = smec.getOutputsSize();
		int iterations = smec.getOriginalResults().size() * outputSize;
		int qubits = smec.getQubits();
		List<Thread> runners = new ArrayList<>();
		for (int i=0; i<iterations; i++) {
			this.currentOriginalResult = smec.getOriginalResults().get(i);
			this.currentMutantResults = new ArrayList<>();
			for (int j=0; j<mutants.size(); j++) {
				Mutant mutant = new Mutant(mutants.get(j));
				String variantCode = mutant.getWholeCode();
				int initialization = variantCode.indexOf("#Initialization");
				if (initialization!=-1) {
					mutants.remove(j);
					j--;
					continue;
				}
				//mutant = Initializer.initialize(mutant, i, qubits);
				List<Mutant> variants = Initializer.getVariants(mutant, qubits, outputSize);
				for (int k=0; k<variants.size(); k++) {
					Mutant variant = variants.get(k);
					SimpleRunner sr = new SimpleRunner(variant, outputSize, outputDirectory, workingDirectory);
					sr.setPythonPath(pythonPath);
					sr.setCommands(commands);
					sr.setReceiver(this);
					runners.add(new Thread(sr));
				}
				for (int k=0; k<variants.size(); k++)
					runners.get(k).start();
				for (int k=0; k<runners.size(); k++) {
					try {
						runners.get(k).join();
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}	
				//sr.run();
				runners.clear();
				this.wholeResults.add(this.currentMutantResults);
			}
		}		
		
		return this.wholeResults;
	}

	@Override
	public synchronized void addResult(ProgramExecutionResult mutantResult) {
		List<Map<String, Object>> mutantExecutionResults = mutantResult.getExecutionResults();
		double error = this.calculateMutant(mutantExecutionResults);
		double mutantError = error/shots;
		mutantError = Math.round(mutantError*100.0)/100.0;
		
		mutantResult.setError(mutantError);
		mutantResult.setKilled(toleratedError<=mutantError);
		this.currentMutantResults.add(mutantResult);
	}

	private double calculateMutant(List<Map<String, Object>> executionResults) {
		double totalError = 0;
		for (int i=0; i<this.currentOriginalResult.size(); i++) {
			int originalFreq = (int) this.currentOriginalResult.get(i).get("frequency");
			int mutantFreq = (int) executionResults.get(i).get("frequency");
			int error = originalFreq - mutantFreq;
			if (error<0)
				error = -error;
			totalError+=error;
		}
		return totalError;
	}
}
