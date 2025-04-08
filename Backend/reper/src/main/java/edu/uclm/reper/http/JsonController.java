package edu.uclm.reper.http;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.uclm.reper.services.JsonService;

@RestController
@RequestMapping(value = "j", produces = { "application/json"} )
@CrossOrigin(origins = "*")
public class JsonController {
	
	@Autowired
	private JsonService service;
	
	@PutMapping("/saveJSON")
	public Map<String, Object> saveJSON(@RequestParam String db, @RequestParam String collection, @RequestBody Map<String, Object> data) {
		JSONObject jso = new JSONObject(data);
		String id = this.service.saveJSON(db, collection, jso);
		Map<String, Object> result = new HashMap<>();
		result.put("id", id);
		return result;
	}
	
	@PutMapping("/saveJSONs")
	public String insertJSONs(@RequestParam String db, @RequestParam String collection, @RequestBody Map<String, Object> data) {
		JSONObject jso = new JSONObject(data);
		return this.service.saveJSONs(db, collection, jso);
	}
	
	@GetMapping("/findById")
	public Map<String, Object> findById(@RequestParam String db, @RequestParam String collection, @RequestParam String id) {
		return this.service.findById(db, collection, id);
	}
	
	@GetMapping("/findByFileName")
	public Map<String, Object> findByFileName(@RequestParam String db, @RequestParam String collection, @RequestParam String fileName) {
		return this.service.findByFileName(db, collection, fileName);
	}
	
	@GetMapping("/findAll")
	public List<Map<String, Object>> findAll(@RequestParam String db, @RequestParam String collection) {
		return this.service.findAll(db, collection);
	}
	
	@GetMapping("/findBy")
	public List<Map<String, Object>> findBy(@RequestParam String db, @RequestParam String collection, @RequestParam Map<String, Object> params) {
		return this.service.findBy(db, collection, params);
	}
	
	@PostMapping("/updateById")
	public String updateById(@RequestParam String db, @RequestParam String collection, @RequestParam String id, @RequestBody Map<String, Object> params) {
		return this.service.updateById(db, collection, id, params);
	}
	
	@DeleteMapping("/deleteById")
	public void deleteById(@RequestParam String db, @RequestParam String collection, @RequestParam String id) {
		this.service.deleteById(db, collection, id);
	}
}
	