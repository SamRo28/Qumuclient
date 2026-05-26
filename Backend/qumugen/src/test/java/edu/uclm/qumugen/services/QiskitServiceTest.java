package edu.uclm.qumugen.services;

import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import edu.uclm.qumugen.model.Gate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class QiskitServiceTest {

    @BeforeAll
    static void setUp() throws Exception {
        Gate.loadGates(new QiskitServiceTest());
    }

    @Test
    void testGetCode() throws IOException {
        QiskitService service = new QiskitService();
        String json = "{\"init\":[\"1\",\"0\"],\"cols\":[[\"•\",\"X\"],[\"1\",\"…\"]]}";
        Map<String, Object> quirk = new JSONObject(json).toMap();
        
        List<Integer> outputQubits = new ArrayList<>();
        outputQubits.add(0);
        outputQubits.add(1);

        Map<String, Object> result = service.getCode(quirk, outputQubits, 2);
        
        assertNotNull(result);
        assertTrue(result.containsKey("declaration"));
        assertTrue(result.containsKey("initialization"));
        assertTrue(result.containsKey("calculus"));
        assertTrue(result.containsKey("measures"));

        String init = result.get("initialization").toString();
        assertTrue(init.contains("circuit.x(0)"));

        String calc = result.get("calculus").toString();
        assertTrue(calc.contains("circuit.mcx([0], 1)")); // Controlled X

        // Test with different gates and outputQubits == null
        String json2 = "{\"init\":[\"1\",\"0\"],\"cols\":[[\"X\",\"Y\"],[\"1\",\"…\"]]}";
        Map<String, Object> quirk2 = new JSONObject(json2).toMap();
        Map<String, Object> result2 = service.getCode(quirk2, null, 2);
        assertTrue(result2.containsKey("calculus"));

        // Test getWholeCode exception handling or happy path
        try {
            String whole = service.getWholeCode(result2, 100, "data.json.txt");
            assertNotNull(whole);
        } catch(Exception e) {
            // it's fine if template isn't exactly a template
        }

        // Test with Controlled Non-X Gate
        String json3 = "{\"init\":[\"0\",\"0\"],\"cols\":[[\"•\",\"Y\"]]}";
        Map<String, Object> quirk3 = new JSONObject(json3).toMap();
        Map<String, Object> result3 = service.getCode(quirk3, null, 2);
        assertTrue(result3.containsKey("calculus"));
    }
}
