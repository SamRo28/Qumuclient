package edu.uclm.reper.http;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.uclm.reper.services.JsonService;
import edu.uclm.reper.services.StringService;

@RestController
@RequestMapping("s")
@CrossOrigin(origins = "*")
public class StringController {
	
	@Autowired
	private StringService service;
		
	@PutMapping("/saveString")
	public String saveString(@RequestParam String db, @RequestParam String collection, @RequestBody String s) {
		return this.service.saveString(db, collection, s);
	}

}
	