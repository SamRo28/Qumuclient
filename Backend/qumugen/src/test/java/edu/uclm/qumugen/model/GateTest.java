package edu.uclm.qumugen.model;

import org.json.JSONArray;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class GateTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new GateTest());
    }

    @Test
    void testGateConstructorsAndMethods() {
        assertNotNull(Gate.gates);
        assertFalse(Gate.gates.isEmpty());

        Gate gate = new Gate("X", 0);
        assertEquals("X", gate.getName());
        assertEquals(0, gate.getQubit());
        assertFalse(gate.isControl());
        assertTrue(gate.isDuplicable());
        
        Gate controlGate = new Gate("•", 1);
        assertEquals("•", controlGate.getName());
        assertEquals(1, controlGate.getQubit());
        assertTrue(controlGate.isControl());
        assertFalse(controlGate.isDuplicable());

        Gate copy = new Gate(gate);
        assertEquals("X", copy.getName());
        assertEquals(0, copy.getQubit());

        // Gate found = Gate.findGate(firstGateName);
        // assertNotNull(found);
        // assertEquals(firstGateName, found.getName());

        // Gate notFound = Gate.findGate("NonExistentGate");
        // assertNull(notFound);
        
        // assertNotNull(gate.getDescription());

        gate.setControlGates(new ArrayList<>());
        assertNotNull(gate.getControlGates());
        
        assertEquals("X", gate.toString());
        
        Gate gate1 = new Gate(1, 2);
        assertFalse(gate1.isDuplicable());
        
        Gate gate0 = new Gate(0, 3);
        assertFalse(gate0.isDuplicable());
        
        Gate gateBarrier = new Gate("…", 4);
        assertFalse(gateBarrier.isDuplicable());
    }
}
