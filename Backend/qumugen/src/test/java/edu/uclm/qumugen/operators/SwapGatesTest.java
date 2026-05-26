package edu.uclm.qumugen.operators;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SwapGatesTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new SwapGatesTest());
        Operator.loadOperators(new SwapGatesTest());
    }

    @Test
    void testSwapGatesApply() {
        SwapGates op = new SwapGates();
        op.setName("H_X");

        String json = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"H\",\"1\"],[\"•\",\"X\"],[\"H\",\"1\"]]}";
        Circuit circuit = new Circuit(new JSONObject(json));
        
        List<Circuit> mutants = new ArrayList<>();
        List<Integer> rows = Arrays.asList(0, 1);
        List<Integer> cols = Arrays.asList(0, 1, 2);

        op.apply(circuit, mutants, rows, cols);

        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
        
        // H should be replaced by X
        boolean foundMutant = false;
        for (Circuit c : mutants) {
            if ("X".equals(c.getGate(0, 0).getName().toString())) {
                foundMutant = true;
                break;
            }
        }
        assertTrue(foundMutant);
    }
}
