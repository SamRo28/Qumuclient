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
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;

/**
 * Envía los programas al runner remoto y traduce sus respuestas.
 *
 * El runner ejecuta en paralelo la lista de códigos que se le pase, pero un lote
 * grande de circuitos pesados puede tardar minutos. Por eso el envío se trocea:
 * así ninguna petición se eterniza y el progreso es incremental.
 *
 * El proxy es opcional: solo hace falta para alcanzar al runner desde fuera de
 * la red de la UCLM. Yendo directo se evita además su timeout, ya que nginx
 * responde 504 al pasarse de proxy_read_timeout aunque el runner siga trabajando.
 */
public class CentralizedProxyRunner {

    private String proxyUrl;
    private String remoteRunnerUrl;
    private int batchSize;
    private RestTemplate restTemplate;

    public CentralizedProxyRunner(String proxyUrl, String remoteRunnerUrl, int batchSize, int timeoutSeconds) {
        this.proxyUrl = proxyUrl;
        this.remoteRunnerUrl = remoteRunnerUrl;
        this.batchSize = batchSize > 0 ? batchSize : Integer.MAX_VALUE;

        SimpleClientHttpRequestFactory factory = new SimpleClientHttpRequestFactory();
        factory.setConnectTimeout(30000);
        factory.setReadTimeout(timeoutSeconds > 0 ? timeoutSeconds * 1000 : 600000);
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

    /** Destino real: el proxy solo se interpone si está configurado. */
    private URI targetUrl() throws Exception {
        if (this.proxyUrl == null || this.proxyUrl.trim().isEmpty())
            return new URI(this.remoteRunnerUrl);
        return new URI(this.proxyUrl + "?url=" + this.remoteRunnerUrl);
    }

    private List<ProgramExecutionResult> executeAndParse(List<String> codes, List<Mutant> mutants,
            ProgramExecutionConf pec, int outputsSize) {

        List<ProgramExecutionResult> programResults = new ArrayList<>();

        for (int from = 0; from < codes.size(); from += this.batchSize) {
            int to = Math.min(from + this.batchSize, codes.size());
            JSONArray resultsArray = this.executeBatch(codes.subList(from, to));

            if (resultsArray.length() != to - from)
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "The remote runner returned "
                        + resultsArray.length() + " results for a batch of " + (to - from) + " programs");

            for (int i = 0; i < resultsArray.length(); i++) {
                // El índice del mutante es global, no relativo al lote.
                int mutantIndex = mutants != null ? mutants.get(from + i).getMutantIndex() : 0;
                programResults.add(this.parseResult(resultsArray.getJSONObject(i), outputsSize, mutantIndex));
            }
        }

        return programResults;
    }

    private JSONArray executeBatch(List<String> codes) {
        try {
            HttpEntity<List<String>> request = new HttpEntity<>(codes);
            ResponseEntity<String> response = restTemplate.postForEntity(this.targetUrl(), request, String.class);

            if (!response.getStatusCode().is2xxSuccessful() || response.getBody() == null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Error from the remote runner: " + response.getStatusCode());
            }

            JSONObject responseJson = new JSONObject(response.getBody());
            if (responseJson.optString("error", null) != null) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                        "Remote runner error: " + responseJson.getString("error"));
            }

            return responseJson.getJSONArray("results");

        } catch (ResponseStatusException e) {
            throw e;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                    "Failed centralized execution: " + e.getMessage());
        }
    }

    private ProgramExecutionResult parseResult(JSONObject result, int outputsSize, int mutantIndex) {
        int returncode = result.optInt("returncode", 0);
        if (returncode != 0) {
            // Si el script falla, stdout viene vacío y las frecuencias se quedan a cero,
            // que aguas arriba parece un error máximo (mutante muerto). Se deja
            // constancia para poder distinguir un mutante muerto de uno que no ejecuta.
            System.err.println("Remote execution failed for mutant " + mutantIndex + " (returncode " + returncode
                    + "): " + result.optString("stderr", ""));
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
