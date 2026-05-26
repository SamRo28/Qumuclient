package edu.uclm.qumugen.model;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class CircuitTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new CircuitTest());
    }

    @Test
    void testCircuitConstructorsAndMethods() throws Exception {
        String json = "{\"init\":[\"0\",\"1\",\"i\"],\"cols\":[[\"•\",\"X\",\"1\"],[\"1\",\"H\",\"1\"]],\"gates\":[{\"id\":\"custom1\",\"name\":\"C1\",\"matrix\":\"{{1,0},{0,1}}\"}]}";
        JSONObject jso = new JSONObject(json);

        Circuit circuit = new Circuit(jso);
        assertNotNull(circuit.getInit());
        assertEquals(3, circuit.getInit().size());
        assertEquals(2, circuit.getColumns().size());
        assertEquals(3, circuit.getQubits());

        Gate gate = circuit.getGate(0, 1);
        assertEquals("X", gate.getName());

        circuit.setGate(1, 2, new Gate("Y", 2));
        assertEquals("Y", circuit.getGate(1, 2).getName());

        Circuit copy = new Circuit(circuit);
        assertEquals(3, copy.getQubits());
        assertEquals(2, copy.getColumns().size());
        assertEquals("Y", copy.getGate(1, 2).getName());

        JSONObject quirk = circuit.toQuirk();
        assertTrue(quirk.has("init"));
        assertTrue(quirk.has("cols"));
        assertTrue(quirk.has("gates"));

        circuit.setMutationOperator("SwapGates");
        assertEquals("SwapGates", circuit.getMutationOperator());

        circuit.setMutatedColumn(1);
        assertEquals(1, circuit.getMutatedColumn());

        circuit.setMutatedRow(2);
        assertEquals(2, circuit.getMutatedRow());

        circuit.setMutantIndex(5);
        assertEquals(5, circuit.getMutantIndex());

        circuit.setQiskitCode("code");
        assertEquals("code", circuit.getQiskitCode());

        Map<String, Object> quirkMap = circuit.getQuirk();
        assertNotNull(quirkMap);
    }
}
