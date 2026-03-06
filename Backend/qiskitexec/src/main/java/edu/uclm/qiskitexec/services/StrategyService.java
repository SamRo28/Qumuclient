package edu.uclm.qiskitexec.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.Delco;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.algorithms.Strategy;

@Service
public class StrategyService extends ExecutionService {
	
	public List<ProgramExecutionResult> executeOne(ProgramExecutionConf pec) {
		Delco delco = new Delco(pec.getCode(), pec.getProgram().getInputQubits(), pec.getOutputsSize(), pec.getInputs());
		return delco.executeWithAllInputs(this.path, this.commands, this.outputDirectory, this.workingDirectory);
	}
	
	public List<List<ProgramExecutionResult>> executeMany(StrategyMutantsExecutionConfiguration smec) {
		List<List<ProgramExecutionResult>> wholeResults = new ArrayList<>();
		Strategy strategy = Strategy.newInstance(smec.getAlgorithm());
		try {
			wholeResults.addAll(strategy.execute(this.path, this.commands, this.outputDirectory, this.workingDirectory, smec));
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		return wholeResults;
	}
}
