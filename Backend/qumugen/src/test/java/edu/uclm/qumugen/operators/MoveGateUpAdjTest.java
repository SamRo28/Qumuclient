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

class MoveGateUpAdjTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new MoveGateUpAdjTest());
        Operator.loadOperators(new MoveGateUpAdjTest());
    }

    @Test
    void testApply() {
        MoveGateUpAdj op = new MoveGateUpAdj();
        op.setName("MoveGateUpAdj");

        String json = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"1\",\"X\"],[\"H\",\"1\"]]}";
        Circuit circuit = new Circuit(new JSONObject(json));
        
        List<Circuit> mutants = new ArrayList<>();
        List<Integer> rows = Arrays.asList(0, 1);
        List<Integer> cols = Arrays.asList(0, 1);

        op.apply(circuit, mutants, rows, cols);

        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
    }
}
