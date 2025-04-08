package edu.uclm.qiskitexec.runners;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.SimpleMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.algorithms.Initializer;
import edu.uclm.qiskitexec.runners.algorithms.Strategy;

public class Delco implements ISimpleRunnerListener {

	private String code;
	private List<ProgramExecutionResult> mutantResults = new ArrayList<>();
	private List<Mutant> mutants;
	private int outputsSize;
	private List<Integer> inputQubits;
	private List<String> inputs;

	public Delco(String code, List<Integer> inputQubits, int outputsSize, List<String> inputs) {
		this.code = code;
		this.inputQubits = inputQubits;
		this.outputsSize = outputsSize;
		this.inputs = inputs;
	}
	
	public Delco(SimpleMutantsExecutionConfiguration mec) {
		this.outputsSize = mec.getOutputsSize();
		this.mutants = mec.getMutants();
	}
	
	public List<ProgramExecutionResult> executeWithAllInputs(String pythonPath, String[] commands, String outputDirectory, String workingDirectory) {
		int initialization = this.code.indexOf("#Initialization");
		int translation = code.indexOf(Strategy.translationString);
		String start, end;
		if (initialization!=-1) {
			start = this.code.substring(0, initialization);
			end = this.code.substring(translation);
		} else {		
			start = code.substring(0, translation);
			end = code.substring(translation + Strategy.translationString.length());
		}
		this.mutants = Initializer.buildCircuitsWithAllEntries(start, end, this.inputQubits, this.inputs);
		return this.executeMutants(pythonPath, commands, outputDirectory, workingDirectory);
	}
	
	public List<ProgramExecutionResult> executeMutants(String pythonPath, String[] commands, String outputDirectory, String workingDirectory) {
		int processors = Runtime.getRuntime().availableProcessors();
		int cont = 0;
		int chunk = 2*processors;
		if (this.mutants.size()<chunk)
			chunk = this.mutants.size();
		
		int loops = this.mutants.size()/chunk;
		int remainder = this.mutants.size()%chunk;
		for (int i=0; i<loops; i++) {
			Thread[] tt = new Thread[chunk];
			for (int j=0; j<chunk; j++) {
				Mutant mutant = mutants.get(cont++);
				SimpleRunner sr = new SimpleRunner(mutant, outputsSize, outputDirectory, workingDirectory);
				sr.setPythonPath(pythonPath);
				sr.setCommands(commands);
				sr.setReceiver(this);
				tt[j] = new Thread(sr);
				tt[j].start();
			}
			for (int j=0; j<chunk; j++) {
				try {
					tt[j].join();
				} catch (InterruptedException e) {
					e.printStackTrace();
				}		
			}	
		}

		Thread[] tt = new Thread[remainder];
		for (int i=0; i<remainder; i++) {
			Mutant mutant = mutants.get(cont++);
			SimpleRunner sr = new SimpleRunner(mutant, outputsSize, outputDirectory, workingDirectory);
			sr.setPythonPath(pythonPath);
			sr.setCommands(commands);
			sr.setReceiver(this);
			tt[i] = new Thread(sr);
			tt[i].start();
		}
		for (int i=0; i<remainder; i++) {
			try {
				tt[i].join();
			} catch (InterruptedException e) {
				e.printStackTrace();
			}		
		}	
		
		return this.mutantResults;
	}

	@Override
	public synchronized void addResult(ProgramExecutionResult result) {
		result.getExecutionResults().sort((o1, o2) -> {
			Integer order1 = (int) o1.get("order");
			Integer order2 = (int) o2.get("order");
			return order1.compareTo(order2);
		});
		this.mutantResults.add(result);
	}
}
