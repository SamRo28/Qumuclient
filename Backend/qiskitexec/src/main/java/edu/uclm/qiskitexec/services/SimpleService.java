package edu.uclm.qiskitexec.services;

import java.util.List;
import org.springframework.stereotype.Service;

import edu.uclm.qiskitexec.model.SimpleMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.runners.CentralizedProxyRunner;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

@Service
public class SimpleService extends ExecutionService {

	public ProgramExecutionResult executeOne(ProgramExecutionConf pec) {
		CentralizedProxyRunner runner = this.newRunner();
		return runner.executeOne(pec);
	}

	public List<ProgramExecutionResult> executeMany(SimpleMutantsExecutionConfiguration mec) {
		CentralizedProxyRunner runner = this.newRunner();
		return runner.executeMutants(mec.getMutants(), mec.getOutputsSize());
	}
}
