package edu.uclm.qumugen.model;

import org.json.JSONArray;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class QColumnTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new QColumnTest());
    }

    @Test
    void testQColumnConstructorsAndMethods() throws Exception {
        QColumn emptyCol = new QColumn(3, 0);
        assertEquals(3, emptyCol.getGates().size());
        assertEquals("1", emptyCol.getGates().get(0).getName().toString());

        JSONArray jsa = new JSONArray();
        jsa.put("•");
        jsa.put("X");
        jsa.put("1");
        
        QColumn col = new QColumn(1, jsa);
        assertEquals(3, col.getGates().size());
        assertEquals(1, col.getControlGates().size());
        assertNotNull(col.getControlledGate());
        assertEquals("X", col.getControlledGate().getName());

        QColumn copy = new QColumn(col);
        assertEquals(3, copy.getGates().size());
        assertEquals(1, copy.getControlGates().size());
        assertNotNull(copy.getControlledGate());
        assertEquals("X", copy.getControlledGate().getName());

        assertEquals("•X1", col.toString());

        col.setGate(2, new Gate("H", 2));
        assertEquals("H", col.getGates().get(2).getName());

        JSONArray quirk = col.toQuirk();
        assertEquals(3, quirk.length());
        assertEquals("•", quirk.getString(0));
        assertEquals("X", quirk.getString(1));
        assertEquals("H", quirk.getString(2));

        col.removeGate(1);
        assertEquals(1, col.getGates().get(1).getName());
        
        col.setGate(1, new Gate("X", 1));
        assertFalse(col.removeGate(1));

        col.fill(4);
        assertEquals(5, col.getGates().size());
        
        JSONArray barrierJsa = new JSONArray();
        barrierJsa.put("…");
        barrierJsa.put("…");
        QColumn barrierCol = new QColumn(2, barrierJsa);
        assertTrue(barrierCol.isBarrier());
        
        JSONArray notBarrierJsa = new JSONArray();
        notBarrierJsa.put("…");
        notBarrierJsa.put("X");
        QColumn notBarrierCol = new QColumn(3, notBarrierJsa);
        assertFalse(notBarrierCol.isBarrier());
    }
}
