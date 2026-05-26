package edu.uclm.qumugen.model;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class CustomizedGateTest {

    @Test
    void testCustomizedGateWithMatrix() throws Exception {
        JSONObject jso = new JSONObject();
        jso.put("id", "gateId1");
        jso.put("name", "gateName1");
        jso.put("matrix", "{{1,0},{0,1}}");

        CustomizedGate gate = new CustomizedGate(jso);
        assertNotNull(gate);

        JSONObject quirk = gate.toQuirk();
        assertEquals("gateId1", quirk.getString("id"));
        assertEquals("gateName1", quirk.getString("name"));
        assertEquals("{{1,0},{0,1}}", quirk.getString("matrix"));
        
        CustomizedGate copy = new CustomizedGate(gate);
        assertNotNull(copy);
        assertEquals("gateId1", copy.toQuirk().getString("id"));
    }

    @Test
    void testCustomizedGateWithCircuit() throws Exception {
        JSONObject jso = new JSONObject();
        jso.put("id", "gateId2");
        jso.put("name", "gateName2");
        
        JSONObject circuitObj = new JSONObject();
        JSONArray cols = new JSONArray();
        JSONArray col1 = new JSONArray();
        col1.put("X");
        cols.put(col1);
        circuitObj.put("cols", cols);
        jso.put("circuit", circuitObj);

        CustomizedGate gate = new CustomizedGate(jso);
        assertNotNull(gate);

        JSONObject quirk = gate.toQuirk();
        assertEquals("gateId2", quirk.getString("id"));
        
        CustomizedGate copy = new CustomizedGate(gate);
        assertNotNull(copy);
    }
}
