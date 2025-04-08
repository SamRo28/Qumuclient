package edu.uclm.reper.services;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.reper.entities.JSONEntity;
import edu.uclm.reper.utils.Utils;

@Service
public class JsonService {
	
	@Autowired
	private Manager manager;

	public String saveJSON(String db, String collection, JSONObject jso) {
		String folder = this.manager.getOutputFolderFor(db, collection);
		JSONEntity entity = new JSONEntity(jso);
		entity.insert(folder);
		return entity.getId();
	}
	
	public String saveJSONs(String db, String collection, JSONObject jsoInfo) {
		StringBuilder message = new StringBuilder();
		int success = 0, errors = 0;
		
		String id = jsoInfo.getString("circuitId");
		JSONArray jsaLines = jsoInfo.getJSONArray("mutants"); 
		String folder = this.manager.getOutputFolderFor(db, collection + File.separatorChar + id);
		
		for (int i=0; i<jsaLines.length(); i++) {
			JSONObject jsoMutant = jsaLines.getJSONObject(i);
			String mutantId = "" + jsoMutant.getInt("mutantIndex");
			JSONEntity entity = new JSONEntity(jsoMutant);
			entity.setId(mutantId);
			try {
				entity.insert(folder);
			} catch (ResponseStatusException e) {
				message.append(e.getMessage() + "\n");
				errors++;
			}
		}
		if (message.length()>0) {
			String sMessage = "There were " + success + " objects saved and " + errors + " errors:\n" + message.toString();
			throw new ResponseStatusException(HttpStatus.CONFLICT, sMessage);
		}
		return message.toString();
	}

	public Map<String, Object> findById(String db, String collection, String id) {
		String folder = this.manager.getOutputFolderFor(db, collection);
		JSONObject result = JSONEntity.loadById(folder, id);
		return result.toMap();
	}

	public Map<String, Object> findByFileName(String db, String collection, String fileName) {
		String folder = this.manager.getOutputFolderFor(db, collection);
		JSONObject result = JSONEntity.loadByFileName(folder, fileName);
		return result.toMap();
	}

	public List<Map<String, Object>> findAll(String db, String collection) {
		String folder = this.manager.getOutputFolderFor(db, collection);
		String[] fileNames = Utils.getFileNames(folder, ".json.txt");
		List<Map<String, Object>> result = new ArrayList<>(); 
		for (String fileName : fileNames) {
			JSONObject o = JSONEntity.loadByFileName(folder, fileName);
			result.add(o.toMap());
		}
		return result;
	}

	public List<Map<String, Object>> findBy(String db, String collection, Map<String, Object> params) {
		params.remove("db");
		params.remove("collection");
		String folder = this.manager.getOutputFolderFor(db, collection);
		String[] fileNames = Utils.getFileNames(folder, ".json.txt");
		List<Map<String, Object>> result = new ArrayList<>(); 
		for (String fileName : fileNames) {
			JSONObject o = JSONEntity.loadByFileName(folder, fileName);
			if (JSONEntity.matches(o, params))
				result.add(o.toMap());
		}
		return result;
	}

	public String updateById(String db, String collection, String id, Map<String, Object> params) {
		params.remove("db");
		params.remove("collection");
		this.findById(db, collection, id);
		String folder = this.manager.getOutputFolderFor(db, collection);
		String fileName = Utils.getFolder(folder) + id + ".json.txt";
		new File(fileName).delete();
		JSONObject jso = new JSONObject(params);
		return this.saveJSON(db, collection, jso);
	}

	public void deleteById(String db, String collection, String id) {
		String fileName = this.manager.getOutputFolderFor(db, collection) + id + ".json.txt";
		File f = new File(fileName);
		if (!f.exists())
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Object with id " + id + " not found");
		f.delete();
	}
}
	