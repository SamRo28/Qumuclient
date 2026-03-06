package edu.uclm.qiskitexec.services;

import java.util.List;
import org.springframework.stereotype.Service;

import edu.uclm.qiskitexec.model.SimpleMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.runners.Delco;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

@Service
public class SimpleService extends ExecutionService {

	public ProgramExecutionResult executeOne(ProgramExecutionConf pec) {
		SimpleRunnerListener ser = new SimpleRunnerListener();
		ProgramExecutionResult result = ser.execute(this.path, this.commands, this.outputDirectory, this.workingDirectory, pec);
		return result;
	}

	public List<ProgramExecutionResult> executeMany(SimpleMutantsExecutionConfiguration mec) {
		Delco delco = new Delco(mec);
		return delco.executeMutants(this.path, this.commands, this.outputDirectory, this.workingDirectory);
	}
}
