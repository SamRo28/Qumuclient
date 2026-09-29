package edu.uclm.qiskitexec;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

import org.junit.jupiter.api.Test;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.CentralizedProxyRunner;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;
import edu.uclm.qiskitexec.runners.algorithms.AllAgainstAll;
import edu.uclm.qiskitexec.runners.algorithms.OnlyAlive;
import edu.uclm.qiskitexec.runners.algorithms.Strategy;

public class StrategyBatchingTest {

    private StrategyMutantsExecutionConfiguration createConfig() {
        StrategyMutantsExecutionConfiguration smec = new StrategyMutantsExecutionConfiguration();
        smec.setInputQubits(List.of(0));
        smec.setOutputQubits(List.of(0));
        smec.setToleratedError(0.1);
        smec.setZombieError(0.1);

        // 3 mutants with Strategy.translationString in code
        List<Mutant> mutants = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            Mutant m = new Mutant();
            m.setMutantIndex(i);
            m.setWholeCode("qc = None\n" + Strategy.translationString + "\nqc.measure()");
            mutants.add(m);
        }
        smec.setMutants(mutants);

        // 2 originalResults
        List<ProgramExecutionResult> origResults = new ArrayList<>();
        for (int i = 0; i < 2; i++) {
            ProgramExecutionResult orig = new ProgramExecutionResult();
            orig.setMutantIndex(i);
            List<Map<String, Object>> execList = new ArrayList<>();
            Map<String, Object> map = new HashMap<>();
            map.put("frequency", 100);
            map.put("order", 0);
            execList.add(map);
            orig.setExecutionResults(execList);
            origResults.add(orig);
        }
        smec.setOriginalResults(origResults);

        return smec;
    }

    @Test
    public void testOnlyAliveSingleRunnerCall() {
        StrategyMutantsExecutionConfiguration smec = createConfig();
        AtomicInteger callCount = new AtomicInteger(0);
        AtomicInteger totalVariantsReceived = new AtomicInteger(0);

        CentralizedProxyRunner stubRunner = new CentralizedProxyRunner(null, "http://localhost:8081", 64, 60) {
            @Override
            public List<ProgramExecutionResult> executeMutants(List<Mutant> mutants, int outputsSize) {
                callCount.incrementAndGet();
                totalVariantsReceived.set(mutants.size());
                List<ProgramExecutionResult> results = new ArrayList<>();
                for (Mutant m : mutants) {
                    ProgramExecutionResult res = new ProgramExecutionResult();
                    res.setMutantIndex(m.getMutantIndex());
                    List<Map<String, Object>> execList = new ArrayList<>();
                    Map<String, Object> map = new HashMap<>();
                    map.put("frequency", 100);
                    map.put("order", 0);
                    execList.add(map);
                    res.setExecutionResults(execList);
                    results.add(res);
                }
                return results;
            }
        };

        OnlyAlive strategy = new OnlyAlive();
        List<List<ProgramExecutionResult>> wholeResults = strategy.execute(stubRunner, smec);

        assertEquals(1, callCount.get(), "Must call runner exactly once");
        assertEquals(6, totalVariantsReceived.get(), "Must send all 6 variants in one batch");
        assertNotNull(wholeResults);
        assertEquals(3, wholeResults.size(), "Must have 3 mutant result lists");
        for (List<ProgramExecutionResult> list : wholeResults) {
            assertEquals(2, list.size(), "Each mutant must have 2 variant results");
            assertEquals(0, list.get(0).getMutantIndex());
            assertEquals(1, list.get(1).getMutantIndex());
        }
    }

    @Test
    public void testAllAgainstAllSingleRunnerCall() {
        StrategyMutantsExecutionConfiguration smec = createConfig();
        AtomicInteger callCount = new AtomicInteger(0);
        AtomicInteger totalVariantsReceived = new AtomicInteger(0);

        CentralizedProxyRunner stubRunner = new CentralizedProxyRunner(null, "http://localhost:8081", 64, 60) {
            @Override
            public List<ProgramExecutionResult> executeMutants(List<Mutant> mutants, int outputsSize) {
                callCount.incrementAndGet();
                totalVariantsReceived.set(mutants.size());
                List<ProgramExecutionResult> results = new ArrayList<>();
                for (Mutant m : mutants) {
                    ProgramExecutionResult res = new ProgramExecutionResult();
                    res.setMutantIndex(m.getMutantIndex());
                    List<Map<String, Object>> execList = new ArrayList<>();
                    Map<String, Object> map = new HashMap<>();
                    map.put("frequency", 100);
                    map.put("order", 0);
                    execList.add(map);
                    res.setExecutionResults(execList);
                    results.add(res);
                }
                return results;
            }
        };

        AllAgainstAll strategy = new AllAgainstAll();
        List<List<ProgramExecutionResult>> wholeResults = strategy.execute(stubRunner, smec);

        assertEquals(1, callCount.get(), "Must call runner exactly once");
        assertEquals(6, totalVariantsReceived.get(), "Must send all 6 variants in one batch");
        assertNotNull(wholeResults);
        assertEquals(3, wholeResults.size(), "Must have 3 mutant result lists");
        for (List<ProgramExecutionResult> list : wholeResults) {
            assertEquals(2, list.size(), "Each mutant must have 2 variant results");
            assertEquals(0, list.get(0).getMutantIndex());
            assertEquals(1, list.get(1).getMutantIndex());
        }
    }
}
