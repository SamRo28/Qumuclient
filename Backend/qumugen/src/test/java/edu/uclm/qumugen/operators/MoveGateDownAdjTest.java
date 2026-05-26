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

class MoveGateDownAdjTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new MoveGateDownAdjTest());
        Operator.loadOperators(new MoveGateDownAdjTest());
    }

    @Test
    void testApply() {
        MoveGateDownAdj op = new MoveGateDownAdj();
        op.setName("MoveGateDownAdj");

        String json = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"X\",\"1\"],[\"1\",\"H\"]]}";
        Circuit circuit = new Circuit(new JSONObject(json));
        
        List<Circuit> mutants = new ArrayList<>();
        List<Integer> rows = Arrays.asList(0, 1);
        List<Integer> cols = Arrays.asList(0, 1);

        op.apply(circuit, mutants, rows, cols);

        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
    }
}
