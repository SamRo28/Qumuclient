package edu.uclm.qiskitexec.services;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.utils.Utils;

public abstract class ExecutionService {
	
	protected static boolean DEBUG;
	protected String path, qiskitTemplate, outputDirectory, workingDirectory;
	protected String[] commands;
	
	@Autowired
	public void loadConfiguration() {
		try {
			String pythonFile = Utils.readFileAsString(this, "pythonConf.json.txt");
			JSONObject jso = new JSONObject(pythonFile);
			ExecutionService.DEBUG = jso.optBoolean("debug");
			String environment = jso.getString("environment");
			JSONArray jsaEnvironments = jso.getJSONArray("environments");
			JSONObject jsoEnvironment = null;
			for (int i=0; i<jsaEnvironments.length(); i++) {
				jsoEnvironment = jsaEnvironments.getJSONObject(i);
				if (jsoEnvironment.getString("name").equals(environment)) {
					this.path = jsoEnvironment.getString("path");
					this.qiskitTemplate = jsoEnvironment.getString("qiskit template");
					this.outputDirectory = jsoEnvironment.getString("output directory");
					this.workingDirectory = jsoEnvironment.getString("working directory");
					
					JSONArray jsaCommands = jsoEnvironment.getJSONArray("commands");
					this.commands = new String[jsaCommands.length()];
					for (int j=0; j<jsaCommands.length(); j++)
						this.commands[j] = jsaCommands.getString(j);
					if (ExecutionService.DEBUG)
						debug("path= " + this.path, "qiskitTemplate= " + this.qiskitTemplate, 
								"outputDirectory= " + this.outputDirectory, "workingDirectory= " + this.workingDirectory);
					return;
				}
			}
			throw new Exception("Python execution environment with name " + environment + " not found");
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Error reading the pythonConf.json.txt file");
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
		}
	}
	
	public String getQiskitTemplate() {
		return qiskitTemplate;
	}
	
	public static void debug(String... msgs) {
		if (!ExecutionService.DEBUG)
			return;
		
		for (int i=0; i<msgs.length; i++)
			System.out.println("DEBUG-> " + msgs[i]);
	}
}
