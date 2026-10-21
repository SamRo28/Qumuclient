
package edu.uclm.qumugen.http;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import tools.jackson.core.JsonGenerator;
import tools.jackson.core.StreamWriteFeature;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.operators.NoiseConfig;
import edu.uclm.qumugen.operators.Operator;
import edu.uclm.qumugen.services.MutantService;
import edu.uclm.qumugen.services.OperatorsService;
import edu.uclm.qumugen.services.QiskitService;
import edu.uclm.qumugen.services.UnexService;

@RestController
@RequestMapping(value = "qumugen", produces = { "application/json" })
@CrossOrigin(origins = "*")
public class GenController {

	private static final Logger log = LoggerFactory.getLogger(GenController.class);

	@Autowired
	private tools.jackson.databind.json.JsonMapper jsonMapper;

	@Autowired
	private OperatorsService operatorsService;

	@Autowired
	private MutantService mutantService;

	@Autowired
	private UnexService unexService;

	@Autowired
	private QiskitService qiskitService;

	@SuppressWarnings("unchecked")
	@PutMapping("/generateQuirkMutants")
	public void generateQuirkMutants(
			@RequestBody Map<String, Object> info,
			@RequestParam(required = false) String format,
			HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		Map<String, Object> quirk = this.get("circuit", info);
		List<String> operatorNames = (List<String>) info.get("operatorNames");
		String mutableColumns = info.get("mutableColumns").toString();
		String mutableRows = info.get("mutableRows").toString();
		boolean generateWithAllInputs = (boolean) info.get("generateWithAllInputs");
		String sInputQubits = info.get("inputQubits").toString();

		List<NoiseConfig> noiseConfigs;
		try {
			noiseConfigs = NoiseConfig.listFrom(info.get("noiseConfigs"), info.get("noiseConfig"));
		} catch (IllegalArgumentException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}

		// Un operador desconocido debe dar su 404 de siempre antes de escribir nada
		for (String name : operatorNames)
			this.operatorsService.find(name);

		boolean gzip = LazyGzipOutputStream.acceptsGzip(request.getHeader("Accept-Encoding"));
		OutputStream out = gzip ? new LazyGzipOutputStream(response) : response.getOutputStream();
		CountingOutputStream counted = new CountingOutputStream(out);
		boolean ndjson = "ndjson".equalsIgnoreCase(format);
		response.setContentType(ndjson ? "application/x-ndjson" : MediaType.APPLICATION_JSON_VALUE);

		log.info("PUT /generateQuirkMutants: starting generation with {} operators (mutableRows='{}', mutableCols='{}', noiseConfigs={}, gzip={}, format={})",
				operatorNames != null ? operatorNames.size() : 0, mutableRows, mutableColumns,
				noiseConfigs != null ? noiseConfigs.size() : 0, gzip, ndjson ? "ndjson" : "json");

		JsonGenerator gen = null;
		if (!ndjson) {
			gen = this.jsonMapper.writer().without(StreamWriteFeature.AUTO_CLOSE_TARGET)
					.without(StreamWriteFeature.AUTO_CLOSE_CONTENT)
					.createGenerator(counted);
		}
		final JsonGenerator finalGen = gen;
		boolean[] started = { false };
		int[] emittedCount = { 0 };
		long start = System.currentTimeMillis();
		try {
			this.mutantService.generateQuirkMutants(quirk, operatorNames, mutableRows, mutableColumns,
					generateWithAllInputs, sInputQubits, noiseConfigs, mutant -> {
						try {
							if (ndjson) {
								counted.write(this.jsonMapper.writeValueAsBytes(mutant));
								counted.write('\n');
							} else {
								if (!started[0]) {
									finalGen.writeStartArray();
									started[0] = true;
								}
								finalGen.writePOJO(mutant);
							}
							emittedCount[0]++;
						} catch (IOException e) {
							throw new RuntimeException(e);
						}
					});
			if (!ndjson) {
				if (!started[0])
					finalGen.writeStartArray();
				finalGen.writeEndArray();
				finalGen.flush();
			} else {
				counted.flush();
			}
			long rawBytesMb = counted.getCount() / (1024 * 1024);
			log.info("PUT /generateQuirkMutants: successfully streamed {} mutants ({} MB sin comprimir) in {} ms (gzip={}, format={})",
					emittedCount[0], rawBytesMb, System.currentTimeMillis() - start, gzip, ndjson ? "ndjson" : "json");
		} catch (RuntimeException e) {
			if (response.isCommitted())
				log.error("Error generando mutantes en streaming tras emitir {} mutantes: {}",
						emittedCount[0], e.getMessage(), e);
			throw e;
		} finally {
			if (finalGen != null) {
				finalGen.close();
			}
			if (gzip) {
				counted.close();
			}
		}
	}

	@PutMapping("/getQiskitCode")
	public Map<String, Object> getQiskitCode(@RequestParam(required = false) boolean useTemplate,
			@RequestParam(required = false) int shots, @RequestParam String qiskitTemplate,
			@RequestBody Map<String, Object> info) {
		Map<String, Object> quirk = this.get("quirkCode", this.get("qCircuit", info));
		List<Integer> outputQubits = null;
		outputQubits = getOutputQubits(info, outputQubits);
		int totalQubits = (int) info.get("qubits");
		Map<String, Object> result = this.qiskitService.getCode(quirk, outputQubits, totalQubits);
		if (useTemplate) {
			try {
				result.put("wholeCode", this.qiskitService.getWholeCode(result, shots, qiskitTemplate));
			} catch (IOException e) {
				result.put("wholeCode",
						"There was an error opening the template file qiskitTemplate.txt: " + e.getMessage());
			}
		}
		return result;
	}

	@SuppressWarnings("unchecked")
	@PutMapping("/getMultipleQiskitCode")
	public List<Map<String, Object>> getMultipleQiskitCode(@RequestParam(required = false) int shots,
			@RequestParam String qiskitTemplate, @RequestBody Map<String, Object> info) {
		List<Integer> outputQubits = null;
		outputQubits = getOutputQubits(info, outputQubits);
		List<Map<String, Object>> mutants = (List<Map<String, Object>>) info.get("mutants");
		List<Map<String, Object>> result = new ArrayList<>();
		for (int i = 0; i < mutants.size(); i++) {
			Map<String, Object> mutant = mutants.get(i);
			Map<String, Object> mutantCircuit = (Map<String, Object>) mutant.get("circuit");
			Map<String, Object> quirk = (Map<String, Object>) mutantCircuit.get("quirkCode");
			int totalQubits = (int) mutantCircuit.get("qubits");
			Map<String, Object> mutantResult = this.qiskitService.getCode(quirk, outputQubits, totalQubits);
			try {
				String code = this.qiskitService.getWholeCode(mutantResult, shots, qiskitTemplate);
				mutantResult.put("wholeCode", code);
				mutantResult.put("mutantIndex", mutant.get("mutantIndex"));
				result.add(mutantResult);
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.I_AM_A_TEAPOT, "Error generating code for mutant " + i);
			}
		}
		return result;
	}

	@GetMapping("/getOperatorsByFamily")
	public Map<String, List<Operator>> getOperatorsByFamily() {
		return Operator.operatorsByFamily;
	}

	@GetMapping("/getOperators/{family}")
	public List<Operator> getOperators(@PathVariable String family) {
		return Operator.operatorsByFamily.get(family);
	}

	@GetMapping("/getGates")
	public List<Gate> getGates() {
		return Gate.gates;
	}

	@SuppressWarnings("unchecked")
	private List<Integer> getOutputQubits(Map<String, Object> info, List<Integer> outputQubits) {
		try {
			outputQubits = (List<Integer>) info.get("outputQubits");
		} catch (Exception e) {
			if (info.containsKey("outputQubits") && info.get("outputQubits") != null) {
				String val = info.get("outputQubits").toString().trim();
				if (!val.isEmpty()) {
					String[] tokens = val.split(",");
					outputQubits = new ArrayList<>();
					for (int i = 0; i < tokens.length; i++) {
						String token = tokens[i].trim();
						if (!token.isEmpty()) {
							try {
								outputQubits.add(Integer.parseInt(token));
							} catch (NumberFormatException nfe) {
							}
						}
					}
				}
			}
		}
		return outputQubits;
	}

	@SuppressWarnings("unchecked")
	private Map<String, Object> get(String key, Map<String, Object> info) {
		Map<String, Object> result;
		try {
			result = (Map<String, Object>) info.get(key);
		} catch (ClassCastException e) {
			result = new JSONObject(info.get(key).toString()).toMap();
		}
		return result;
	}

	@PostMapping("/buildUnexCurls")
	public List<Map<String, Object>> buildUnexCurls(@RequestBody Map<String, Object> data) {
		JSONObject jso = new JSONObject(data);
		return this.unexService.buildUnexCurls(jso);
	}

	@PostMapping("/sendToUnex")
	public void sendToUnex(@RequestBody Map<String, Object> info) {
		JSONObject jso = new JSONObject(info);
		this.unexService.sendtoUnex(jso);
	}

}
