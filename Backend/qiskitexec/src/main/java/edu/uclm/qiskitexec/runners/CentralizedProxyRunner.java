package edu.uclm.qiskitexec.runners;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;

/**
 * Envía los programas al runner remoto de forma asíncrona mediante /run_qiskit_editor
 * y traduce sus respuestas a ProgramExecutionResult.
 */
public class CentralizedProxyRunner {

    private String proxyUrl;
    private String remoteRunnerUrl;
    private int batchSize;
    private int timeoutSeconds;
    private RestTemplate restTemplate;

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl, int batchSize, int timeoutSeconds) {
        this.proxyUrl = proxyUrl;
        this.remoteRunnerUrl = remoteRunnerUrl;
        this.batchSize = batchSize > 0 ? batchSize : Integer.MAX_VALUE;
        this.timeoutSeconds = timeoutSeconds > 0 ? timeoutSeconds : 600;

        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(30000);
        // Cada petición HTTP individual es inmediata (<1-2s); 30s de timeout de lectura es más que suficiente
        factory.setReadTimeout(30000);
        this.restTemplate = new RestTemplate(factory);
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

    private String getBaseRemoteUrl() {
        String url = this.remoteRunnerUrl != null ? this.remoteRunnerUrl.trim() : "";
        if (url.endsWith("/run_code")) {
            url = url.substring(0, url.length() - "/run_code".length());
        }
        while (url.endsWith("/")) {
            url = url.substring(0, url.length() - 1);
        }
        return url;
    }

    /** Destino real: el proxy solo se interpone si está configurado. */
    private URI targetUrl(String target) {
        if (this.proxyUrl == null || this.proxyUrl.trim().isEmpty()) {
            return URI.create(target);
        }
        String connector = this.proxyUrl.contains("?url=") ? "" : (this.proxyUrl.contains("?") ? "&url=" : "?url=");
        return URI.create(this.proxyUrl + connector + target);
    }

    private List<ProgramExecutionResult> executeAndParse(List<String> codes, List<Mutant> mutants,
            ProgramExecutionConf pec, int outputsSize) {

        List<ProgramExecutionResult> programResults = new ArrayList<>();

        for (int from = 0; from < codes.size(); from += this.batchSize) {
            int to = Math.min(from + this.batchSize, codes.size());
            List<String> batchCodes = codes.subList(from, to);
            List<ProgramExecutionResult> batchResults = this.executeBatchAsync(batchCodes, mutants, from, outputsSize);
            programResults.addAll(batchResults);
        }

        return programResults;
    }

    private List<ProgramExecutionResult> executeBatchAsync(List<String> codes, List<Mutant> mutants, int from,
            int outputsSize) {
        try {
            String baseUrl = getBaseRemoteUrl();
            String runUrl = baseUrl + "/run_qiskit_editor?iterations=1&overwrite=n&runner=1";

            List<String> preparedCodes = new ArrayList<>();
            for (String c : codes) {
                preparedCodes.add(ensureShotsVariable(c));
            }

            HttpEntity<List<String>> request = new HttpEntity<>(preparedCodes);
            ResponseEntity<String> response = restTemplate.postForEntity(this.targetUrl(runUrl), request, String.class);

            if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Error from the remote runner: " + response.getStatusCode());
            }

            JSONObject responseJson = new JSONObject(response.getBody());
            if (responseJson.optString("error", null) != null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Remote runner error: " + responseJson.getString("error"));
            }

            String batchId = String.valueOf(responseJson.get("batch_id"));

            // Polling loop
            String statusUrl = baseUrl + "/run_qiskit_editor/status/" + batchId;
            long startTime = System.currentTimeMillis();
            long maxWaitMillis = this.timeoutSeconds * 1000L;
            boolean finished = false;

            while (System.currentTimeMillis() - startTime < maxWaitMillis) {
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Execution interrupted");
                }

                try {
                    ResponseEntity<String> statusResp = restTemplate.getForEntity(this.targetUrl(statusUrl), String.class);
                    if (statusResp.getStatusCode().is2xxSuccessful() && statusResp.getBody() != null) {
                        JSONObject statusJson = new JSONObject(statusResp.getBody());
                        String state = statusJson.optString("state", "running");
                        if ("finished".equalsIgnoreCase(state)) {
                            finished = true;
                            break;
                        } else if ("error".equalsIgnoreCase(state)) {
                            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                                    "Remote runner finished with error for batch " + batchId);
                        }
                    }
                } catch (ResponseStatusException rse) {
                    throw rse;
                } catch (Exception ex) {
                    System.err.println("Warning polling status for batch " + batchId + ": " + ex.getMessage());
                }
            }

            if (!finished) {
                throw new ResponseStatusException(HttpStatus.GATEWAY_TIMEOUT,
                        "Timeout waiting for remote runner batch " + batchId + " after " + this.timeoutSeconds + " seconds");
            }

            // Descarga de all_results.csv
            String fileUrl = baseUrl + "/run_qiskit_editor/get_file/" + batchId + "/all_results.csv";
            ResponseEntity<String> csvResp = restTemplate.getForEntity(this.targetUrl(fileUrl), String.class);
            if (!csvResp.getStatusCode().is2xxSuccessful() || csvResp.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Could not retrieve all_results.csv for batch " + batchId);
            }

            String csvContent = csvResp.getBody();
            Map<String, Map<Integer, Integer>> problemFrequencies = parseResultsCsv(csvContent);

            List<ProgramExecutionResult> batchResults = new ArrayList<>();
            for (int i = 0; i < codes.size(); i++) {
                String problemName = "p" + (i + 1);
                Map<Integer, Integer> freqMap = problemFrequencies.getOrDefault(problemName, Collections.emptyMap());

                List<Map<String, Object>> executionResults = new ArrayList<>();
                for (int o = 0; o < outputsSize; o++) {
                    Map<String, Object> line = new HashMap<>();
                    line.put("order", o);
                    line.put("binary", Integer.toBinaryString(o));
                    line.put("frequency", freqMap.getOrDefault(o, 0));
                    executionResults.add(line);
                }

                int mutantIndex = mutants != null ? mutants.get(from + i).getMutantIndex() : 0;
                ProgramExecutionResult result = new ProgramExecutionResult();
                result.setMutantIndex(mutantIndex);
                result.setExecutionResults(executionResults);
                batchResults.add(result);
            }

            return batchResults;

        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed async centralized execution: " + e.getMessage(), e);
        }
    }

    private Map<String, Map<Integer, Integer>> parseResultsCsv(String csvContent) {
        Map<String, Map<Integer, Integer>> problemFrequencies = new HashMap<>();
        if (csvContent == null || csvContent.trim().isEmpty()) {
            return problemFrequencies;
        }

        String[] lines = csvContent.split("\r?\n");
        for (String line : lines) {
            line = line.trim();
            if (line.isEmpty() || line.startsWith("Iter")) {
                continue;
            }
            String[] parts = line.split("\t");
            if (parts.length >= 7) {
                String problem = parts[1].trim(); // e.g. "p1"
                try {
                    int dec = Integer.parseInt(parts[4].trim());
                    int obtained = Integer.parseInt(parts[6].trim());
                    problemFrequencies
                            .computeIfAbsent(problem, k -> new HashMap<>())
                            .put(dec, obtained);
                } catch (NumberFormatException ignored) {}
            }
        }
        return problemFrequencies;
    }

    private String ensureShotsVariable(String code) {
        if (code == null) return "";
        if (code.contains("shots =") || code.contains("shots=")) {
            return code;
        }
        return "shots = 1000\n" + code;
    }
}
