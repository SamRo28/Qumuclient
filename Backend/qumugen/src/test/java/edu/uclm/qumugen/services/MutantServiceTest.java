package edu.uclm.qumugen.services;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.uclm.qumugen.model.Circuit;

@SpringBootTest
public class MutantServiceTest {

	@Autowired
	private MutantService mutantService;

	@Test
	public void testGenerateQuirkMutantsWithEmptyCustomizedGate() {
		JSONObject circuitJson = new JSONObject();
		JSONArray cols = new JSONArray();
		cols.put(new JSONArray().put("~InitialH"));
		cols.put(new JSONArray().put("~0"));
		circuitJson.put("cols", cols);

		JSONArray gates = new JSONArray();
		JSONObject gate0 = new JSONObject();
		gate0.put("id", "~0");
		gate0.put("name", "0");
		gate0.put("circuit", new JSONObject().put("cols", new JSONArray()));
		gates.put(gate0);

		JSONObject gateH = new JSONObject();
		gateH.put("id", "~InitialH");
		gateH.put("name", "InitialH");
		JSONObject circuitH = new JSONObject();
		JSONArray colsH = new JSONArray();
		colsH.put(new JSONArray().put("H").put("H").put("H").put("H"));
		circuitH.put("cols", colsH);
		gateH.put("circuit", circuitH);
		gates.put(gateH);

		circuitJson.put("gates", gates);

		Map<String, Object> quirkMap = circuitJson.toMap();
		List<String> operatorNames = List.of("H_X");

		List<Circuit> mutants = mutantService.generateQuirkMutants(
				quirkMap, operatorNames, "0,1,2,3", "-1,0,1", false, ""
		);

		assertNotNull(mutants);
	}
}
