package edu.uclm.qumugen.http;

import org.json.JSONArray;
import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class HttpClientTest {

    @Test
    void testSendPostException() {
        HttpClient client = new HttpClient();
        assertThrows(ResponseStatusException.class, () -> {
            client.sendPost("http://this-url-does-not-exist.com", new ArrayList<>(), "{}");
        });
    }

    @Test
    void testRequestExecutionException() {
        HttpClient client = new HttpClient();
        assertThrows(ResponseStatusException.class, () -> {
            client.requestExecution("http://this-url-does-not-exist.com", new ArrayList<>(), new JSONArray());
        });
    }

    @Test
    void testSendPutException() {
        HttpClient client = new HttpClient();
        assertThrows(ResponseStatusException.class, () -> {
            client.sendPut("http://this-url-does-not-exist.com", new ArrayList<>(), new byte[0]);
        });
    }
}
