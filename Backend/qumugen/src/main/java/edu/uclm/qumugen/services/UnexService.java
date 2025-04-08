package edu.uclm.qumugen.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import edu.uclm.qumugen.http.HttpClient;

@Service
public class UnexService {
	
	public List<Map<String, Object>> buildUnexCurls(JSONObject jso) {
		List<Map<String, Object>> result = new ArrayList<>();
		
		JSONArray jsaMutants = jso.getJSONArray("mutants");
		
		String curlOriginal = "curl --location 'http://quantumservicesdeployment.spilab.es:8082/url' " + 
			      "--header 'Content-Type: application/json' " + 
			      "--data '{ " + 
			          "\"url\": \"#CIRCUIT#\"," +
			          "\"shots\": 10000" +
			      "}'";
		
		for (int i=0; i<jsaMutants.length(); i++) {
			JSONObject jsoMutant = jsaMutants.getJSONObject(i);
			
			Map<String, Object> curl = new HashMap<>();
			curl.put("location", "http://quantumservicesdeployment.spilab.es:8082/url");
			curl.put("header", "Content-Type: application/json");

			String textQuirkCode = jsoMutant.getJSONObject("circuit").getString("textQuirkCode");
			
			//textQuirkCode = textQuirkCode.replace("\"", "'\\''"); 
			textQuirkCode = "https://algassert.com/quirk#circuit=" + textQuirkCode;

			Map<String, Object> data = new HashMap<>();
			data.put("url", textQuirkCode);
			data.put("shots", 1000);
			
			curl.put("data", data);
			
			curl.put("curlText", curlOriginal.replace("#CIRCUIT#", textQuirkCode));
			result.add(curl);
		}
		return result;
	}

	public void sendtoUnex(JSONObject jso) {
		HttpClient client = new HttpClient();
		List<String> headers = new ArrayList<>();
		headers.add("Content-Type");
		headers.add("application/json");
		
		String url = jso.getString("location");
		Object data = jso.get("data");
		client.sendPost(url, headers, data.toString());
	}
	
}
	