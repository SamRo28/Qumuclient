package edu.uclm.qumugen.http;

import java.io.IOException;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class HttpClient {
	
	public String sendPost(String url, List<String> headers, Object payload) {
		try(CloseableHttpClient client = HttpClientBuilder.create().build()) {
			HttpPost post = new HttpPost(url);
			try {
				HttpEntity entity = new StringEntity(payload.toString());
				post.setEntity(entity);
				if (headers!=null)
					for (int i=0; i<headers.size(); i++) {
						String headerName = headers.get(i++);
						String headerValue = headers.get(i);
						post.setHeader(headerName, headerValue);
					}
				
				CloseableHttpResponse response = client.execute(post);
				int code = response.getStatusLine().getStatusCode();
				if (response.getStatusLine().getStatusCode()!=200) {
					HttpStatus status = HttpStatus.resolve(code);
					String errorMessage = response.getStatusLine().getReasonPhrase();
					throw new ResponseStatusException(status, errorMessage);
				}
				entity = response.getEntity();
				String responseText = EntityUtils.toString(entity);
				return responseText;
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		} catch (IOException e1) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e1.getMessage());
		}
	}
	
	public String requestExecution(String url, List<String> headers, JSONArray payload) {
		try(CloseableHttpClient client = HttpClientBuilder.create().build()) {
			HttpPost post = new HttpPost(url);
			try {
				HttpEntity entity = new StringEntity(payload.toString());
				post.setEntity(entity);
				if (headers!=null)
					for (int i=0; i<headers.size(); i++) {
						String headerName = headers.get(i++);
						String headerValue = headers.get(i);
						post.setHeader(headerName, headerValue);
					}
				
				CloseableHttpResponse response = client.execute(post);
				int code = response.getStatusLine().getStatusCode();
				if (response.getStatusLine().getStatusCode()!=200) {
					HttpStatus status = HttpStatus.resolve(code);
					String errorMessage = response.getStatusLine().getReasonPhrase();
					throw new ResponseStatusException(status, errorMessage);
				}
				entity = response.getEntity();
				String responseText = EntityUtils.toString(entity);
				return responseText;
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		} catch (IOException e1) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e1.getMessage());
		}
	}
	
	public String sendPut(String url, List<String> headers, byte[] payload) {
		try(CloseableHttpClient client = HttpClientBuilder.create().build()) {
			HttpPut put = new HttpPut(url);
			try {
				HttpEntity entity = new ByteArrayEntity(payload);
				put.setEntity(entity);
				if (headers!=null)
					for (int i=0; i<headers.size(); i++) {
						String headerName = headers.get(i++);
						String headerValue = headers.get(i);
						put.setHeader(headerName, headerValue);
					}
				
				CloseableHttpResponse response = client.execute(put);
				int code = response.getStatusLine().getStatusCode();
				if (response.getStatusLine().getStatusCode()!=200) {
					HttpStatus status = HttpStatus.resolve(code);
					String errorMessage = response.getStatusLine().getReasonPhrase();
					throw new ResponseStatusException(status, errorMessage);
				}
				entity = response.getEntity();
				String responseText = EntityUtils.toString(entity);
				return responseText;
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		} catch (IOException e1) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e1.getMessage());
		}
	}
}
