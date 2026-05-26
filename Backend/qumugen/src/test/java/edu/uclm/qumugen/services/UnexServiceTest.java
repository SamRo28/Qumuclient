package edu.uclm.qumugen.services;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class UnexServiceTest {

    @Test
    void testBuildUnexCurls() {
        UnexService service = new UnexService();

        JSONObject mutant = new JSONObject();
        JSONObject circuit = new JSONObject();
        circuit.put("textQuirkCode", "encoded_circuit_data");
        mutant.put("circuit", circuit);

        JSONArray mutants = new JSONArray();
        mutants.put(mutant);

        JSONObject jso = new JSONObject();
        jso.put("mutants", mutants);

        List<Map<String, Object>> curls = service.buildUnexCurls(jso);

        assertEquals(1, curls.size());
        Map<String, Object> curlInfo = curls.get(0);
        
        assertEquals("http://quantumservicesdeployment.spilab.es:8082/url", curlInfo.get("location"));
        assertTrue(curlInfo.containsKey("header"));
        assertTrue(curlInfo.containsKey("data"));
        assertTrue(curlInfo.containsKey("curlText"));
        
        Map<String, Object> data = (Map<String, Object>) curlInfo.get("data");
        assertEquals("https://alarcosj.esi.uclm.es/quirk/#circuit=encoded_circuit_data", data.get("url"));
    }
}
