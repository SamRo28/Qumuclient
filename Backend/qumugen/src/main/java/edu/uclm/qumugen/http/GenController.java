package edu.uclm.qumugen.http;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.operators.Operator;
import edu.uclm.qumugen.services.MutantService;
import edu.uclm.qumugen.services.QiskitService;
import edu.uclm.qumugen.services.UnexService;


@RestController
@RequestMapping(value = "qumugen", produces = { "application/json"} )
@CrossOrigin(origins = "*")
public class GenController {
	
	@Autowired
	private MutantService mutantService;
	
	@Autowired
	private UnexService unexService;
	
	@Autowired
	private QiskitService qiskitService;
	
	@SuppressWarnings("unchecked")
	@PutMapping("/generateQuirkMutants")
	public List<Circuit> generateQuirkMutants(@RequestBody Map<String, Object> info) {
		Map<String, Object> quirk = this.get("circuit", info);
		List<String> operatorNames = (List<String>) info.get("operatorNames");
		String mutableColumns = info.get("mutableColumns").toString();
		String mutableRows = info.get("mutableRows").toString();
		boolean generateWithAllInputs = (boolean) info.get("generateWithAllInputs");
		String sInputQubits = info.get("inputQubits").toString(); 
		
		List<Circuit> result = this.mutantService.generateQuirkMutants(quirk, operatorNames, mutableRows, mutableColumns, generateWithAllInputs, sInputQubits);
		
		return result;
	}
	
	@PutMapping("/getQiskitCode")
	public Map<String, Object> getQiskitCode(@RequestParam(required = false) boolean useTemplate, @RequestParam(required = false) int shots, @RequestParam String qiskitTemplate, @RequestBody Map<String, Object> info) {
		Map<String, Object> quirk = this.get("quirkCode", info);
		List<Integer> outputQubits = null; 
		outputQubits = getOutputQubits(info, outputQubits);
		int totalQubits = (int) info.get("qubits");
		Map<String, Object> result = this.qiskitService.getCode(quirk, outputQubits, totalQubits);
		if (useTemplate) {
			try {
				result.put("wholeCode", this.qiskitService.getWholeCode(result, shots, qiskitTemplate));
			} catch (IOException e) {
				result.put("wholeCode", "There was an error opening the template file qiskitTemplate.txt: " + e.getMessage());
			}
		}
		return result;
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("/getMultipleQiskitCode")
	public List<Map<String, Object>> getMultipleQiskitCode(@RequestParam(required = false) int shots, @RequestParam String qiskitTemplate, @RequestBody Map<String, Object> info) {
			List<Integer> outputQubits = null; 
			outputQubits = getOutputQubits(info, outputQubits);
			List<Map<String, Object>> mutants = (List<Map<String, Object>>) info.get("mutants");
			List<Map<String, Object>> result = new ArrayList<>();
			for (int i=0; i<mutants.size(); i++) {
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
			outputQubits= (List<Integer>) info.get("outputQubits");
		} catch (Exception e) {
			if (info.containsKey("outputQubits")) {
				String[] tokens = info.get("outputQubits").toString().split(",");
				outputQubits = new ArrayList<>();
				for (int i=0; i<tokens.length; i++)
					outputQubits.add(Integer.parseInt(tokens[i].trim()));
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


	