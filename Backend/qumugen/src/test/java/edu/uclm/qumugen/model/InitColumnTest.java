package edu.uclm.qumugen.model;

import org.json.JSONArray;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class InitColumnTest {

    @Test
    void testInitColumnConstructorsAndMethods() throws Exception {
        InitColumn initColumn = new InitColumn(3);
        assertEquals(3, initColumn.size());
        assertEquals(InitialValue.ZERO, initColumn.getValue(0));
        assertEquals(InitialValue.ZERO, initColumn.getValue(1));
        assertEquals(InitialValue.ZERO, initColumn.getValue(2));

        initColumn.setValue(1, InitialValue.ONE);
        assertEquals(InitialValue.ONE, initColumn.getValue(1));

        initColumn.add(InitialValue.PLUS);
        assertEquals(4, initColumn.size());
        assertEquals(InitialValue.PLUS, initColumn.getValue(3));

        InitColumn copy = new InitColumn(initColumn);
        assertEquals(4, copy.size());
        assertEquals(InitialValue.ONE, copy.getValue(1));

        JSONArray jsa = new JSONArray();
        jsa.put("0");
        jsa.put("i");
        jsa.put("-");
        
        InitColumn loaded = new InitColumn();
        int loadedSize = loaded.load(jsa);
        assertEquals(3, loadedSize);
        assertEquals(InitialValue.ZERO, loaded.getValue(0));
        assertEquals(InitialValue.POS_I, loaded.getValue(1));
        assertEquals(InitialValue.MINUS, loaded.getValue(2));

        JSONArray quirkArray = loaded.toQuirk();
        assertEquals(3, quirkArray.length());
        assertEquals(0, quirkArray.getInt(0));
        assertEquals("i", quirkArray.getString(1));
        assertEquals("-", quirkArray.getString(2));

        assertNotNull(loaded.toString());
        
        Circuit circuit = new Circuit(new org.json.JSONObject("{\"cols\":[[\"X\"]]}"));
        loaded.setContainerCircuit(circuit);
        assertEquals(circuit, loaded.getContainerCircuit());
    }
}
