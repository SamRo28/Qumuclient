package edu.uclm.reper.http;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.uclm.reper.services.Manager;
import edu.uclm.reper.utils.Utils;

@RestController
@RequestMapping(value = "p", produces = { "application/json"} )
@CrossOrigin(origins = "*")
public class PublicController {
	
	@Autowired
	private Manager manager;
	
	@GetMapping("/getFileNames")
	public String[] getFileNames(@RequestParam String path) {
		String reperDbFolder = this.manager.getOutputFolder(); 
		
		String[] paths = path.split("/");
		
		String folder = this.manager.getOutputFolderFor(paths);
		String[] fileNames = Utils.getFileNames(folder, ".json.txt");
		return fileNames;	
	}
	
	@GetMapping("/getFiles")
	public List<Map<String, Object>> get(@RequestParam String path) {
		String[] paths = path.split("/");
		String folder = this.manager.getOutputFolderFor(paths);
		String[] fileNames = Utils.getFileNames(folder, ".json.txt");
		
		List<Map<String, Object>> result = new ArrayList<>();
		for (int i=0; i<fileNames.length; i++) {
			try {
				String s = new String(Files.readAllBytes(Paths.get(folder + fileNames[i])));
				result.add(new JSONObject(s).toMap());
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return result;	
	}
	
	
}
	