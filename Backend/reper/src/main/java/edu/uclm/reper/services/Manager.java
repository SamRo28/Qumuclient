package edu.uclm.reper.services;

import java.io.File;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.uclm.reper.utils.Utils;

@Service
public class Manager {

	private JSONObject jsoConfiguration;
	private String outputFolder;
	
	@Autowired
	public void init() {
		JSONObject jso = null;
		
		try {
			jso = new JSONObject(Utils.readFileAsString(this, "conf.json.txt"));
		} catch (Exception e) {
			this.error("Error al leer el fichero conf.json.txt: " + e.getMessage());
		}
		
		String configuration = jso.optString("configuration").trim();
		if (configuration.isEmpty()) 
			this.error("No se encuentra la clave \"configuration\"");
		
		JSONArray jsaConfigurations = jso.optJSONArray("configurations");
		if (jsaConfigurations==null) 
			this.error("No se encuentra la clave \"configurations\"");
		
		for (int i=0; i<jsaConfigurations.length(); i++) {
			JSONObject jsoConf = jsaConfigurations.getJSONObject(i);
			if (jsoConf.getString("name").equalsIgnoreCase(configuration)) {
				this.jsoConfiguration = jsoConf;
				break;
			}
		}
		
		if (this.jsoConfiguration==null) 
			this.error("No se encuentra la configuration con nombre " + configuration);
		
		this.outputFolder = this.jsoConfiguration.getString("outputFolder");
		if (!this.outputFolder.endsWith(File.separator))
			this.outputFolder = this.outputFolder + File.separatorChar;
		new File(this.outputFolder).mkdirs();
	}
	
	public String getOutputFolder() {
		return outputFolder;
	}
	
	public String getOutputFolderFor(String... paths) {
		String result = this.outputFolder + paths[0] + File.separatorChar;
		for (int i=1; i<paths.length; i++)
			result = result + paths[i] + File.separatorChar;
		if (!new File(result).exists())
			new File(result).mkdirs();
		return result;
	}
	
	private void error(String msg) {
		System.err.print(msg);
		System.exit(-1);
	}
}
