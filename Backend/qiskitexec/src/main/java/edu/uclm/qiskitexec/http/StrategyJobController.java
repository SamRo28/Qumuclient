package edu.uclm.qiskitexec.http;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.ProgramExecutionConf;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.services.JobService;
import edu.uclm.qiskitexec.services.StrategyService;

@RestController
@RequestMapping(value = "strategy/jobs", produces = { "application/json" })
@CrossOrigin(origins = "*")
public class StrategyJobController {

    @Autowired
    private StrategyService service;

    @Autowired
    private JobService jobs;

    @PostMapping("/executeOne")
    public ResponseEntity<Map<String, String>> executeOne(@RequestBody ProgramExecutionConf pec) {
        String id = jobs.submit("executeOne", () -> {
            List<ProgramExecutionResult> r = service.executeOne(pec);
            r.sort((o1, o2) -> {
                Integer mI1 = (int) o1.getMutantIndex();
                Integer mI2 = (int) o2.getMutantIndex();
                return mI1.compareTo(mI2);
            });
            return r;
        });
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(Map.of("jobId", id));
    }

    @PostMapping("/executeWithStrategy")
    public ResponseEntity<Map<String, String>> executeWithStrategy(
            @RequestBody StrategyMutantsExecutionConfiguration smec) {
        String id = jobs.submit("executeWithStrategy", () -> service.executeMany(smec));
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(Map.of("jobId", id));
    }

    @GetMapping("/{id}")
    public Map<String, Object> status(@PathVariable("id") String id) {
        return jobs.toStatusMap(jobs.status(id));
    }

    @GetMapping("/{id}/result")
    public Object result(@PathVariable("id") String id) {
        return jobs.takeResult(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> cancel(@PathVariable("id") String id) {
        boolean cancelled = jobs.cancel(id);
        if (cancelled) {
            return ResponseEntity.ok(Map.of("jobId", id, "cancelled", true));
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Job " + id + " not found");
        }
    }
}
