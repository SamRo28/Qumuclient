package edu.uclm.qiskitexec.services;

import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.runners.ISimpleRunnerListener;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.SimpleRunner;

public class SimpleRunnerListener implements ISimpleRunnerListener {

	private ProgramExecutionResult result = new ProgramExecutionResult();

	public ProgramExecutionResult execute(String pythonPath, String[] commands, String outputDirectory, String workingDirectory, ProgramExecutionConf pec) {
		
		if (ExecutionService.DEBUG) {
			String cmds = ""; for (int i=0; i<commands.length; i++) cmds = cmds + " " + commands[i];
			ExecutionService.debug("Executing PEC:", "pythonPath= " + pythonPath, "outputDirectory= " + outputDirectory +
					"workingDirectory= " + workingDirectory, "commands= " + cmds);
		}
		
		SimpleRunner sr = new SimpleRunner(pec, outputDirectory, workingDirectory);
		sr.setPythonPath(pythonPath);
		sr.setCommands(commands);
		sr.setReceiver(this);
		sr.run();
		return this.result;
	}

	@Override
	public void addResult(ProgramExecutionResult result) {
		this.result = result;
	}

}
