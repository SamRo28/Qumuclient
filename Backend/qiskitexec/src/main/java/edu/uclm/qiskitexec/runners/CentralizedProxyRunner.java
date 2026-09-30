package edu.uclm.qiskitexec.runners;

import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;

/**
 * Envía los programas al runner remoto (/run_code_async o /run_code)
 * y traduce sus respuestas a ProgramExecutionResult.
 */
public class CentralizedProxyRunner {

    private static final Logger log = LoggerFactory.getLogger(CentralizedProxyRunner.class);

    private String proxyUrl;
    private String remoteRunnerUrl;
    private int batchSize;
    private int timeoutSeconds;
    private String mode;
    private int pollMaxMs;
    /**
     * timeoutSeconds = segundos máximos sin progreso, es decir, sin que aumente done.
     * maxTotalSeconds = tope absoluto por lote.
     */
    private int maxTotalSeconds;
    private RestTemplate asyncRestTemplate;
    private RestTemplate syncRestTemplate;

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl, int batchSize, int timeoutSeconds,
            String mode, int pollMaxMs, int maxTotalSeconds) {
        this.proxyUrl = proxyUrl;
        this.remoteRunnerUrl = remoteRunnerUrl;
        this.batchSize = batchSize > 0 ? batchSize : Integer.MAX_VALUE;
        this.timeoutSeconds = timeoutSeconds > 0 ? timeoutSeconds : 600;
        this.mode = mode != null ? mode.trim().toLowerCase() : "async";
        this.pollMaxMs = pollMaxMs > 0 ? pollMaxMs : 2000;
        this.maxTotalSeconds = maxTotalSeconds > 0 ? maxTotalSeconds : 3000;

        SimpleClientHttpRequestFactory asyncFactory = new SimpleClientHttpRequestFactory();
        asyncFactory.setConnectTimeout(30000);
        asyncFactory.setReadTimeout(30000);
        this.asyncRestTemplate = new RestTemplate(asyncFactory);

        SimpleClientHttpRequestFactory syncFactory = new SimpleClientHttpRequestFactory();
        syncFactory.setConnectTimeout(30000);
        syncFactory.setReadTimeout(this.timeoutSeconds * 1000);
        this.syncRestTemplate = new RestTemplate(syncFactory);
    }

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl, int batchSize, int timeoutSeconds,
            String mode, int pollMaxMs) {
        this(proxyUrl, remoteRunnerUrl, batchSize, timeoutSeconds, mode, pollMaxMs, 3000);
    }

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl, int batchSize, int timeoutSeconds) {
        this(proxyUrl, remoteRunnerUrl, batchSize, timeoutSeconds, "async", 2000);
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
        } else if (url.endsWith("/run_code_async")) {
            url = url.substring(0, url.length() - "/run_code_async".length());
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

    private void cancelRemoteBatch(String baseUrl, String batchId) {
        try {
            asyncRestTemplate.exchange(this.targetUrl(baseUrl + "/run_code_async/" + batchId), HttpMethod.DELETE, null, String.class);
        } catch (Exception ex) {
            log.warn("Could not cancel remote batch {}: {}", batchId, ex.getMessage());
        }
    }

    private List<ProgramExecutionResult> executeAndParse(List<String> codes, List<Mutant> mutants,
            ProgramExecutionConf pec, int outputsSize) {

        List<ProgramExecutionResult> programResults = new ArrayList<>();

        for (int from = 0; from < codes.size(); from += this.batchSize) {
            int to = Math.min(from + this.batchSize, codes.size());
            List<String> batchCodes = codes.subList(from, to);
            JSONArray results = "sync".equals(this.mode)
                    ? executeBatchSync(batchCodes)
                    : executeBatchAsync(batchCodes);

            if (results.length() != to - from) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "The remote runner returned " + results.length() + " results for a batch of " + (to - from) + " programs");
            }

            for (int i = 0; i < results.length(); i++) {
                int mutantIndex = mutants != null ? mutants.get(from + i).getMutantIndex() : 0;
                programResults.add(this.parseResult(results.getJSONObject(i), outputsSize, mutantIndex));
            }
        }

        return programResults;
    }

    private JSONArray executeBatchSync(List<String> codes) {
        try {
            String baseUrl = getBaseRemoteUrl();
            String runUrl = baseUrl + "/run_code";

            HttpEntity<List<String>> request = new HttpEntity<>(codes);
            long t0 = System.nanoTime();
            ResponseEntity<String> response = syncRestTemplate.postForEntity(this.targetUrl(runUrl), request, String.class);
            long submitMs = (System.nanoTime() - t0) / 1_000_000;

            if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Error from the remote runner: " + response.getStatusCode());
            }

            JSONObject responseJson = new JSONObject(response.getBody());
            if (responseJson.optString("error", null) != null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Remote runner error: " + responseJson.getString("error"));
            }

            log.info("[PERF] runner mode=sync batch=N/A codes={} submitMs={} waitMs=0 polls=0 resultsMs=0",
                    codes.size(), submitMs);

            return responseJson.getJSONArray("results");
        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed centralized sync execution: " + e.getMessage(), e);
        }
    }

    private JSONArray executeBatchAsync(List<String> codes) {
        String baseUrl = getBaseRemoteUrl();
        String runUrl = baseUrl + "/run_code_async";

        HttpEntity<List<String>> request = new HttpEntity<>(codes);
        long tSubmitStart = System.nanoTime();
        ResponseEntity<String> response = asyncRestTemplate.postForEntity(this.targetUrl(runUrl), request, String.class);
        long submitMs = (System.nanoTime() - tSubmitStart) / 1_000_000;

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

        boolean completed = false;
        try {
            // Polling loop
            String statusUrl = baseUrl + "/run_code_async/status/" + batchId;
            long startTime = System.currentTimeMillis();
            long lastProgressAt = startTime;
            int lastDone = -1;
            boolean runnerReportsDone = false;
            int polls = 0;
            long sleepMs = 200;
            long tWaitStart = System.nanoTime();

            while (true) {
                try {
                    Thread.sleep(sleepMs);
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Execution interrupted");
                }

                polls++;
                try {
                    ResponseEntity<String> statusResp = asyncRestTemplate.getForEntity(this.targetUrl(statusUrl), String.class);
                    if (statusResp.getStatusCode().is2xxSuccessful() && statusResp.getBody() != null) {
                        JSONObject statusJson = new JSONObject(statusResp.getBody());
                        String state = statusJson.optString("state", "running");
                        int done = statusJson.optInt("done", -1);
                        long now = System.currentTimeMillis();
                        if (done >= 0) {
                            runnerReportsDone = true;
                            if (done > lastDone) {
                                lastDone = done;
                                lastProgressAt = now;
                            }
                        }

                        if ("finished".equalsIgnoreCase(state)) {
                            break;
                        } else if ("cancelled".equalsIgnoreCase(state)) {
                            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                                    "Remote runner batch " + batchId + " was cancelled");
                        } else if ("error".equalsIgnoreCase(state)) {
                            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                                    "Remote runner finished with error for batch " + batchId + ": " + statusJson.optString("error"));
                        }
                    }
                } catch (ResponseStatusException rse) {
                    throw rse;
                } catch (Exception ex) {
                    log.warn("Warning polling status for batch {}: {}", batchId, ex.getMessage());
                }

                long now = System.currentTimeMillis();
                if (now - startTime > maxTotalSeconds * 1000L) {
                    throw new ResponseStatusException(HttpStatus.GATEWAY_TIMEOUT,
                            "Remote runner batch " + batchId + " exceeded " + maxTotalSeconds + " s in total (done " + lastDone + "/" + codes.size() + ")");
                }
                if (now - (runnerReportsDone ? lastProgressAt : startTime) > timeoutSeconds * 1000L) {
                    throw new ResponseStatusException(HttpStatus.GATEWAY_TIMEOUT,
                            "No progress from remote runner batch " + batchId + " in " + timeoutSeconds + " s (done " + lastDone + "/" + codes.size() + ")");
                }

                sleepMs = Math.min((long) (sleepMs * 1.5), this.pollMaxMs);
            }

            long waitMs = (System.nanoTime() - tWaitStart) / 1_000_000;

            // Retrieval of results
            String resultsUrl = baseUrl + "/run_code_async/results/" + batchId;
            long tResultsStart = System.nanoTime();
            ResponseEntity<String> resultsResp = asyncRestTemplate.getForEntity(this.targetUrl(resultsUrl), String.class);
            long resultsMs = (System.nanoTime() - tResultsStart) / 1_000_000;
            if (!resultsResp.getStatusCode().is2xxSuccessful() || resultsResp.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Could not retrieve results for batch " + batchId);
            }

            JSONObject resultsJson = new JSONObject(resultsResp.getBody());
            log.info("[PERF] runner mode=async batch={} codes={} submitMs={} waitMs={} polls={} resultsMs={} done={}",
                    batchId, codes.size(), submitMs, waitMs, polls, resultsMs, lastDone);

            completed = true;
            return resultsJson.getJSONArray("results");

        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed async centralized execution: " + e.getMessage(), e);
        } finally {
            if (!completed) {
                cancelRemoteBatch(baseUrl, batchId);
            }
        }
    }

    private ProgramExecutionResult parseResult(JSONObject result, int outputsSize, int mutantIndex) {
        int returncode = result.isNull("returncode") ? -1 : result.optInt("returncode", 0);
        if (returncode != 0) {
            log.warn("Remote execution failed for program {} (mutantIndex {}, returncode {}): {}",
                    result.optString("file", "?"), mutantIndex, returncode, result.optString("stderr", ""));
        }
        return parseStdout(result.optString("stdout", "{}"), outputsSize, mutantIndex);
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
            log.warn("Failed to parse remote stdout: {}", stdout);
        }

        ProgramExecutionResult result = new ProgramExecutionResult();
        result.setMutantIndex(mutantIndex);
        result.setExecutionResults(executionResults);
        return result;
    }
}
