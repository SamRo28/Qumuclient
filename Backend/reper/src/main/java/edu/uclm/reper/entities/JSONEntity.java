package edu.uclm.reper.entities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.reper.utils.Utils;

public class JSONEntity {

	private String id;
	private JSONObject jso;
	
	public JSONEntity(JSONObject jso) {
		if (jso.has("id"))
			this.id = jso.getString("id");
		else
			this.id = UUID.randomUUID().toString();
		this.jso = jso;
	}

	public JSONEntity(String s) {
		this.jso = new JSONObject();
		this.id = UUID.randomUUID().toString();
		this.jso.put("id", this.id);
		this.jso.put("content", s);
	}

	public void insert(String folder) {
		String fileName = Utils.getFolder(folder) + this.id + ".json.txt";
		try(FileOutputStream fos = new FileOutputStream(fileName)) {
			fos.write(jso.toString().getBytes());
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}
	
	public static JSONObject loadById(String folder, String id) {
		JSONObject result;
		String fileName = Utils.getFolder(folder) + id + ".json.txt";
		try(FileInputStream fis = new FileInputStream(fileName)) {
			byte[] b= new byte[fis.available()];
			fis.read(b);
			result = new JSONObject(new String(b));
			return result;
		} catch (FileNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Object with id " + id + " not found");
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		} 
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public JSONObject getJso() {
		return jso;
	}

	public static JSONObject loadByFileName(String folder, String fileName) {
		JSONObject result;
		fileName = Utils.getFolder(folder) + fileName;
		try(FileInputStream fis = new FileInputStream(fileName)) {
			byte[] b= new byte[fis.available()];
			fis.read(b);
			String s = new String(b);
			result = new JSONObject(s);
			return result;
		} catch (FileNotFoundException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "File name " + fileName + " not found");
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		}
	}

	public static boolean matches(JSONObject jso, Map<String, Object> params) {
		Iterator<String> keys = params.keySet().iterator();
		String key;
		while (keys.hasNext()) {
			key = keys.next();
			if (!jso.has(key))
				return false;
			if (!jso.get(key).equals(params.get(key)))
				return false;
		}
		return true;
	}
}
