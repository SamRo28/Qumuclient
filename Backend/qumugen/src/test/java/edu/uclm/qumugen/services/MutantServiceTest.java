package edu.uclm.qumugen.services;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MutantServiceTest {

    @Autowired
    private MutantService mutantService;

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new MutantServiceTest());
    }

    @Test
    void testGenerateQuirkMutants() {
        String json = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"H\",\"1\"],[\"•\",\"X\"]]}";
        Map<String, Object> quirk = new JSONObject(json).toMap();

        List<String> operators = new ArrayList<>();
        operators.add("MoveGateDownAll");

        List<Circuit> mutants = mutantService.generateQuirkMutants(quirk, operators, "0,1", "0,1", false, "2");
        
        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
    }

    @Test
    void testGenerateQuirkMutantsWithAllInputs() {
        String json = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"H\",\"1\"],[\"•\",\"X\"]]}";
        Map<String, Object> quirk = new JSONObject(json).toMap();

        List<String> operators = new ArrayList<>();
        operators.add("MoveGateDownAll");

        List<Circuit> mutants = mutantService.generateQuirkMutants(quirk, operators, "0,1", "0,1", true, "2,1");
        
        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
    }
}
