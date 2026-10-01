
package edu.uclm.qiskitexec.services;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.CentralizedProxyRunner;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.algorithms.Strategy;

@Service
public class StrategyService extends ExecutionService {

    private static final Logger log = LoggerFactory.getLogger(StrategyService.class);

	public List<ProgramExecutionResult> executeOne(ProgramExecutionConf pec) {
		// CentralizedProxyRunner can execute all mutants in one batch.
		// However, executeOne originally built a Delco with ALL inputs and returned a
		// list of results.
		CentralizedProxyRunner runner = this.newRunner();
		// Strategy executeOne was previously rebuilding mutants using Initializer.
		// We still need to call Initializer to build the mutants if needed, or if we
		// should use Delco?
		// Note from plan: Replace Delco with CentralizedProxyRunner.
		edu.uclm.qiskitexec.runners.Delco delco = new edu.uclm.qiskitexec.runners.Delco(pec.getCode(),
				pec.getProgram().getInputQubits(), pec.getOutputsSize(), pec.getInputs());
		return delco.executeWithAllInputsRemote(runner);
	}

	public List<List<ProgramExecutionResult>> executeMany(StrategyMutantsExecutionConfiguration smec) {
		long t0 = System.nanoTime();
		List<List<ProgramExecutionResult>> wholeResults = new ArrayList<>();
		Strategy strategy = Strategy.newInstance(smec.getAlgorithm());
		CentralizedProxyRunner runner = this.newRunner();
		try {
			wholeResults.addAll(
					strategy.execute(runner, smec));
		} catch (ResponseStatusException e) {
			throw e;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		long totalMs = (System.nanoTime() - t0) / 1_000_000;
		int mutants = smec.getMutants() != null ? smec.getMutants().size() : 0;
		log.info("[PERF] executeMany algorithm={} mutants={} totalMs={}", smec.getAlgorithm(), mutants, totalMs);
		return wholeResults;
	}
}
