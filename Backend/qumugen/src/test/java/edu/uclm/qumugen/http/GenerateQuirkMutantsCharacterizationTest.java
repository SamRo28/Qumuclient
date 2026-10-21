package edu.uclm.qumugen.http;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HexFormat;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import edu.uclm.qumugen.operators.Operator;
import tools.jackson.databind.json.JsonMapper;

@SpringBootTest
public class GenerateQuirkMutantsCharacterizationTest {

	private static final JsonMapper MAPPER = JsonMapper.builder().build();

	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;

	@BeforeEach
	public void setUp() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.context).build();
	}

	public static Map<String, Object> circuit(int qubits, int columns, boolean withOracle) {
		JSONArray cols = new JSONArray();
		for (int c = 0; c < columns; c++) {
			JSONArray col = new JSONArray();
			if (c % 2 == 0) {
				for (int q = 0; q < qubits; q++)
					col.put(q % 3 == 0 ? "H" : q % 3 == 1 ? "X" : "Z");
			} else {
				for (int q = 0; q < qubits; q++) {
					if (q == c % qubits)
						col.put("•");
					else if (q == (c + 1) % qubits)
						col.put("X");
					else
						col.put(1);
				}
			}
			cols.put(col);
		}
		JSONObject jso = new JSONObject();
		if (withOracle) {
			JSONArray col = new JSONArray();
			col.put("~orc");
			for (int q = 1; q < qubits; q++)
				col.put(1);
			cols.put(col);
			JSONObject gate = new JSONObject();
			gate.put("id", "~orc");
			gate.put("name", "orc");
			gate.put("circuit", new JSONObject().put("cols",
					new JSONArray().put(new JSONArray().put("H").put("X")).put(new JSONArray().put("•").put("X"))));
			jso.put("gates", new JSONArray().put(gate));
		}
		jso.put("cols", cols);
		return jso.toMap();
	}

	static String body(Map<String, Object> circuit, List<String> ops, String rows, String cols, boolean allInputs,
			String inputQubits, List<Map<String, Object>> noiseConfigs) {
		JSONObject jso = new JSONObject();
		jso.put("circuit", new JSONObject(circuit));
		jso.put("operatorNames", new JSONArray(ops));
		jso.put("mutableColumns", cols);
		jso.put("mutableRows", rows);
		jso.put("generateWithAllInputs", allInputs);
		jso.put("inputQubits", inputQubits);
		if (noiseConfigs != null)
			jso.put("noiseConfigs", new JSONArray(noiseConfigs));
		return jso.toString();
	}

	static String canonicalHash(String json) throws Exception {
		Object parsed = MAPPER.readValue(json, Object.class);
		String canonical = MAPPER.writeValueAsString(canonical(parsed));
		byte[] digest = MessageDigest.getInstance("SHA-256").digest(canonical.getBytes(StandardCharsets.UTF_8));
		return HexFormat.of().formatHex(digest);
	}

	@SuppressWarnings("unchecked")
	private static Object canonical(Object o) {
		if (o instanceof Map) {
			TreeMap<String, Object> result = new TreeMap<>();
			for (Map.Entry<String, Object> e : ((Map<String, Object>) o).entrySet())
				result.put(e.getKey(), canonical(e.getValue()));
			return result;
		}
		if (o instanceof List) {
			List<Object> result = new ArrayList<>();
			for (Object e : (List<Object>) o)
				result.add(canonical(e));
			return result;
		}
		return o;
	}

	private static List<String> all() {
		List<String> all = new ArrayList<>(Operator.operators.keySet());
		Collections.sort(all);
		return all;
	}

	private String call(String content, int expectedStatus) throws Exception {
		var result = this.mockMvc.perform(
				put("/qumugen/generateQuirkMutants").contentType(MediaType.APPLICATION_JSON).content(content))
				.andReturn().getResponse();
		assertEquals(expectedStatus, result.getStatus());
		return result.getContentAsString(StandardCharsets.UTF_8);
	}

	private org.springframework.mock.web.MockHttpServletResponse callGzip(String content, int expectedStatus)
			throws Exception {
		var result = this.mockMvc.perform(put("/qumugen/generateQuirkMutants").contentType(MediaType.APPLICATION_JSON)
				.header("Accept-Encoding", "gzip, deflate, br").content(content)).andReturn().getResponse();
		assertEquals(expectedStatus, result.getStatus());
		return (org.springframework.mock.web.MockHttpServletResponse) result;
	}

	private String gunzip(org.springframework.mock.web.MockHttpServletResponse r) throws Exception {
		assertEquals("gzip", r.getHeader("Content-Encoding"));
		return new String(new java.util.zip.GZIPInputStream(new java.io.ByteArrayInputStream(r.getContentAsByteArray()))
				.readAllBytes(), StandardCharsets.UTF_8);
	}

	private int size(String json) throws Exception {
		return ((List<?>) MAPPER.readValue(json, Object.class)).size();
	}

	@Test
	public void smallCircuitWithOracleNoiseAndAllInputs() throws Exception {
		String body = body(circuit(6, 12, true), all(), "0,1,2,3,4,5", "0,1,2,3,4,5,6,7,8,9,10,11,12", true, "0,1",
				List.of(Map.of("axis", "X", "angle", 0.1), Map.of("axis", "Z", "angle", 0.5)));
		String json = call(body, 200);
		assertEquals(3736, size(json));
		assertEquals("bf1b6574ad42101bee982d7ac64c8574770eb1c58920154504cf15a598801928", canonicalHash(json));
	}

	@Test
	public void mediumCircuitNoInputs() throws Exception {
		String body = body(circuit(8, 20, false), all(), "0,1,2,3,4,5,6,7",
				"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19", false, "", null);
		String json = call(body, 200);
		assertEquals(1620, size(json));
		assertEquals("030c8c51d2904e025cb5fe8f3a2c4e3cc39d1983ce61991a9e919a9e52be0e57", canonicalHash(json));
	}

	@Test
	public void unknownOperatorKeepsStatus() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoExiste"), "0,1,2,3", "0,1,2,3", false, "", null);
		call(body, 404);
	}

	@Test
	public void invalidNoiseKeepsStatus() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoiseInsertionStart"), "0,1,2,3", "0,1,2,3", false, "",
				List.of(Map.of("axis", "X", "angle", 0)));
		call(body, 400);
	}

	private String mediumBody() {
		return body(circuit(8, 20, false), all(), "0,1,2,3,4,5,6,7",
				"0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19", false, "", null);
	}

	@Test
	public void mediumCircuitGzipSameResult() throws Exception {
		String json = gunzip(callGzip(mediumBody(), 200));
		assertEquals(1620, size(json));
		assertEquals("030c8c51d2904e025cb5fe8f3a2c4e3cc39d1983ce61991a9e919a9e52be0e57", canonicalHash(json));
	}

	@Test
	public void smallCircuitGzipSameResult() throws Exception {
		String body = body(circuit(6, 12, true), all(), "0,1,2,3,4,5", "0,1,2,3,4,5,6,7,8,9,10,11,12", true, "0,1",
				List.of(Map.of("axis", "X", "angle", 0.1), Map.of("axis", "Z", "angle", 0.5)));
		String json = gunzip(callGzip(body, 200));
		assertEquals(3736, size(json));
		assertEquals("bf1b6574ad42101bee982d7ac64c8574770eb1c58920154504cf15a598801928", canonicalHash(json));
	}

	@Test
	public void unknownOperatorWithGzipIsPlainError() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoExiste"), "0,1,2,3", "0,1,2,3", false, "", null);
		assertNull(callGzip(body, 404).getHeader("Content-Encoding"));
	}

	@Test
	public void invalidNoiseWithGzipIsPlainError() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoiseInsertionStart"), "0,1,2,3", "0,1,2,3", false, "",
				List.of(Map.of("axis", "X", "angle", 0)));
		assertNull(callGzip(body, 400).getHeader("Content-Encoding"));
	}

	@Test
	public void withoutAcceptEncodingIsPlain() throws Exception {
		var r = this.mockMvc.perform(put("/qumugen/generateQuirkMutants").contentType(MediaType.APPLICATION_JSON)
				.content(mediumBody())).andReturn().getResponse();
		assertEquals(200, r.getStatus());
		assertNull(r.getHeader("Content-Encoding"));
	}

	private org.springframework.mock.web.MockHttpServletResponse callNdjson(String content, boolean gzip,
			int expectedStatus) throws Exception {
		var req = put("/qumugen/generateQuirkMutants").param("format", "ndjson").contentType(MediaType.APPLICATION_JSON)
				.content(content);
		if (gzip)
			req = req.header("Accept-Encoding", "gzip");
		var result = this.mockMvc.perform(req).andReturn().getResponse();
		assertEquals(expectedStatus, result.getStatus());
		return (org.springframework.mock.web.MockHttpServletResponse) result;
	}

	private String ndjsonToArray(String ndjson, int expectedLines) {
		List<String> lines = ndjson.lines().filter(l -> !l.isBlank()).toList();
		assertEquals(expectedLines, lines.size());
		for (String l : lines)
			assertEquals('{', l.charAt(0));
		return "[" + String.join(",", lines) + "]";
	}

	@Test
	public void mediumCircuitNdjsonSameResult() throws Exception {
		var r = callNdjson(mediumBody(), false, 200);
		assertEquals(true, r.getContentType().startsWith("application/x-ndjson"));
		String array = ndjsonToArray(r.getContentAsString(StandardCharsets.UTF_8), 1620);
		assertEquals("030c8c51d2904e025cb5fe8f3a2c4e3cc39d1983ce61991a9e919a9e52be0e57", canonicalHash(array));
	}

	@Test
	public void smallCircuitNdjsonGzipSameResult() throws Exception {
		String body = body(circuit(6, 12, true), all(), "0,1,2,3,4,5", "0,1,2,3,4,5,6,7,8,9,10,11,12", true, "0,1",
				List.of(Map.of("axis", "X", "angle", 0.1), Map.of("axis", "Z", "angle", 0.5)));
		String array = ndjsonToArray(gunzip(callNdjson(body, true, 200)), 3736);
		assertEquals("bf1b6574ad42101bee982d7ac64c8574770eb1c58920154504cf15a598801928", canonicalHash(array));
	}

	@Test
	public void unknownOperatorNdjsonIsPlainError() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoExiste"), "0,1,2,3", "0,1,2,3", false, "", null);
		assertNull(callNdjson(body, true, 404).getHeader("Content-Encoding"));
	}

	@Test
	public void invalidNoiseNdjsonIsPlainError() throws Exception {
		String body = body(circuit(4, 4, false), List.of("NoiseInsertionStart"), "0,1,2,3", "0,1,2,3", false, "",
				List.of(Map.of("axis", "X", "angle", 0)));
		assertNull(callNdjson(body, true, 400).getHeader("Content-Encoding"));
	}
}
