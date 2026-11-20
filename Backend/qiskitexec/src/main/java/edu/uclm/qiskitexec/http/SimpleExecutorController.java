package edu.uclm.qiskitexec.http;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.SimpleMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.algorithms.SimpleFitnesser;
import edu.uclm.qiskitexec.services.SimpleService;

@RestController
@RequestMapping(value = "simple")
@CrossOrigin(origins = "*")
public class SimpleExecutorController {
	
	@Autowired
	private SimpleService service;
	
	@GetMapping("/getQiskitTemplate")
	public String getQiskitTemplate() {
		try {
			return this.service.getQiskitTemplate();
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
	
	@PutMapping("/executeOne")
	public ProgramExecutionResult executeOne(@RequestBody ProgramExecutionConf pec) {
		try {
			SimpleService.debug(pec.toString());
			return this.service.executeOne(pec);
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}	
	}
	
	@PutMapping("/executeWithoutStrategy")
	public List<ProgramExecutionResult> executeWithoutStrategy(@RequestBody SimpleMutantsExecutionConfiguration mec) {
		try {
			SimpleService.debug(mec.toString());
			List<ProgramExecutionResult> result = this.service.executeMany(mec);
			SimpleFitnesser fitnesser = new SimpleFitnesser();
			fitnesser.setOriginalResults(mec.getOriginalResults());
			fitnesser.setToleratedError(mec.getToleratedError());
			fitnesser.setZombieError(mec.getZombieError());
			fitnesser.calculate(result);
			return result;
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
}
