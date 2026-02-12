package edu.uclm.qiskitexec.http;

import java.util.List;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.services.StrategyService;

@RestController
@RequestMapping(value = "strategy", produces = { "application/json" })
@CrossOrigin(origins = "*")
public class StrategyExecutorController {

	@Autowired
	private StrategyService service;

	@PutMapping("/executeOne")
	public List<ProgramExecutionResult> executeOne(@RequestBody ProgramExecutionConf pec) {
		try {
			List<ProgramExecutionResult> result = this.service.executeOne(pec);
			result.sort((o1, o2) -> {
				Integer mI1 = (int) o1.getMutantIndex();
				Integer mI2 = (int) o2.getMutantIndex();
				return mI1.compareTo(mI2);
			});
			return result;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@PutMapping("/executeWithStrategy")
	public List<List<ProgramExecutionResult>> executeWithStrategy(
			@RequestBody StrategyMutantsExecutionConfiguration smec) {
		try {
			return this.service.executeMany(smec);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	@GetMapping("/getCores")
	public int getCores(HttpServletResponse resp) throws Exception {
		return Runtime.getRuntime().availableProcessors() / 3;
	}
}
