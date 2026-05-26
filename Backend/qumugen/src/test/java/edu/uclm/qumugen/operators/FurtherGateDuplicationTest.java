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

class FurtherGateDuplicationTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new FurtherGateDuplicationTest());
        Operator.loadOperators(new FurtherGateDuplicationTest());
    }

    @Test
    void testApply() {
        FurtherGateDuplication op = new FurtherGateDuplication();
        op.setName("FurtherGateDuplication");

        String json = "{\"init\":[\"0\",\"0\",\"0\"],\"cols\":[[\"H\",\"H\",\"X\"], [\"X\",\"H\",\"H\"]]}";
        Circuit circuit = new Circuit(new JSONObject(json));
        
        List<Circuit> mutants = new ArrayList<>();
        List<Integer> rows = Arrays.asList(0, 1, 2);
        List<Integer> cols = Arrays.asList(0, 1);

        op.apply(circuit, mutants, rows, cols);

        assertNotNull(mutants);
        assertTrue(mutants.size() > 0);
    }
}
