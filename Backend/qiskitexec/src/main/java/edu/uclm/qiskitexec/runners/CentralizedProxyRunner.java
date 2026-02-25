package edu.uclm.qiskitexec.runners;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;

public class CentralizedProxyRunner {

    private String proxyUrl;
    private String remoteRunnerUrl;
    private RestTemplate restTemplate;

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl) {
        this.proxyUrl = proxyUrl;
        this.remoteRunnerUrl = remoteRunnerUrl;
        this.restTemplate = new RestTemplate();
    }

    public List<ProgramExecutionResult> executeMutants(List<Mutant> mutants, int outputsSize) {
        List<String> codes = new ArrayList<>();
        for (Mutant mutant : mutants) {
            codes.add(mutant.getWholeCode());
        }

        return executeAndParse(codes, mutants, null, outputsSize);
    }

    public ProgramExecutionResult executeOne(ProgramExecutionConf pec) {
        List<String> codes = new ArrayList<>();
        codes.add(pec.getCode());

        List<ProgramExecutionResult> results = executeAndParse(codes, null, pec, pec.getOutputsSize());
        return results.get(0);
    }

    private List<ProgramExecutionResult> executeAndParse(List<String> codes, List<Mutant> mutants,
            ProgramExecutionConf pec, int outputsSize) {
        try {
            // El proxy recibe los parámetros para reenviar: ?url=<remoteRunnerUrl>
            String url = this.proxyUrl + "?url=" + this.remoteRunnerUrl;

            HttpEntity<List<String>> request = new HttpEntity<>(codes);
            ResponseEntity<String> response = restTemplate.postForEntity(new URI(url), request, String.class);

            if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Error from Proxy: " + response.getStatusCode());
            }

            JSONObject responseJson = new JSONObject(response.getBody());
            if (responseJson.optString("error", null) != null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Remote runner error: " + responseJson.getString("error"));
            }

            JSONArray resultsArray = responseJson.getJSONArray("results");
            List<ProgramExecutionResult> programResults = new ArrayList<>();

            for (int i = 0; i < resultsArray.length(); i++) {
                JSONObject res = resultsArray.getJSONObject(i);
                String stdout = res.optString("stdout", "{}");

                int mutantIndex = 0;
                if (mutants != null) {
                    mutantIndex = mutants.get(i).getMutantIndex();
                }

                ProgramExecutionResult per = parseStdout(stdout, outputsSize, mutantIndex);
                programResults.add(per);
            }

            return programResults;

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed centralized execution via proxy: " + e.getMessage());
        }
    }

    private ProgramExecutionResult parseStdout(String stdout, int outputsSize, int mutantIndex) {
        List<Map<String, Object>> executionResults = new ArrayList<>();

        for (int i = 0; i < outputsSize; i++) {
            Map<String, Object> line = new HashMap<>();
            line.put("order", i);
            line.put("binary", Integer.toBinaryString(i));
            line.put("frequency", 0);
            executionResults.add(line);
        }

        try {
            // El stdout de los scripts qiskit con qiskitTemplate suele ser JSON
            // En `run_code` se devuelve por stdout exactamente lo que imprime el script
            if (stdout != null && !stdout.trim().isEmpty()) {
                JSONObject jso = new JSONObject(stdout);
                Iterator<String> keys = jso.keys();
                while (keys.hasNext()) {
                    String key = keys.next();
                    int order = Integer.parseInt(key, 2);
                    int frequency = jso.getInt(key);
                    Map<String, Object> line = executionResults.get(order);
                    line.put("frequency", frequency);
                }
            }
        } catch (Exception e) {
            System.err.println("Failed to parse remote stdout: " + stdout);
            // Mantenemos frecuencias a 0, similar al control de excepciones original
        }

        ProgramExecutionResult result = new ProgramExecutionResult();
        result.setMutantIndex(mutantIndex);
        result.setExecutionResults(executionResults);
        return result;
    }
}
