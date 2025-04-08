package edu.uclm.dictionary.http;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.dictionary.utils.Utils;

@RestController
@RequestMapping(value = "dict", produces = { "application/json"} )
@CrossOrigin(origins = "*")
public class DictionaryController {
	
	private Map<String, String> urls = new HashMap<>();
	
	@GetMapping("/getURL/{service}")
	public Map<String, String> getURL(@PathVariable String service) {
		String url = null;
		try {
			if (urls.isEmpty())
				reloadUrls();
			
			url = this.urls.get(service);
			if (url==null) {
				this.reloadUrls();
				url = this.urls.get(service);
			}
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
		if (url==null)
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Service " + service + " not found");
		
		Map<String, String> result = new HashMap<>();
		result.put("service", service);
		result.put("url", url);
		return result;
	}

	private void reloadUrls() throws IOException {
		String s = Utils.readFileAsString(this, "data.json.txt");
		JSONArray jsa = new JSONArray(s);
		for (int i=0; i<jsa.length(); i++) {
			JSONObject jso = jsa.getJSONObject(i);
			this.urls.put(jso.getString("service"), jso.getString("url"));
		}
	}
}
	