package edu.uclm.qiskitexec.runners;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.model.Mutant;
import edu.uclm.qiskitexec.model.ProgramExecutionConf;

public class SimpleRunner implements Runnable {

	private String pythonPath;
	private String[] commands;
	private ISimpleRunnerListener listener;
	private ProgramExecutionConf pec;
	private Mutant mutant;
	private int outputsSize;
	private String outputDirectory;
	private String workingDirectory;

	public SimpleRunner(ProgramExecutionConf pec, String outputDirectory, String workingDirectory) {
		this.pec = pec;
		this.outputsSize = pec.getOutputsSize();
		this.outputDirectory = outputDirectory;
		this.workingDirectory = workingDirectory;
	}

	public SimpleRunner(Mutant mutant, int outputsSize, String outputDirectory, String workingDirectory) {
		this.mutant = mutant;
		this.outputsSize = outputsSize;
		this.outputDirectory = outputDirectory;
		this.workingDirectory = workingDirectory;
	}

	@Override
	public void run() {
		String code;
		int mutantIndex;
		if (this.pec != null) {
			code = this.pec.getCode();
			mutantIndex = 0;
		} else {
			code = this.mutant.getWholeCode();
			mutantIndex = this.mutant.getMutantIndex();
		}
		File[] ff = this.createFiles(code, mutantIndex);
		File fProgram = ff[0], fOutput = ff[1], fErrors = ff[2];
		ProgramExecutionResult result = this.goOn(this.outputsSize, fProgram, fOutput, fErrors, mutantIndex);
		this.listener.addResult(result);
	}

	private ProgramExecutionResult goOn(int outputs, File fProgram, File fOutput, File fErrors, int mutantIndex) {
		ProcessBuilder pb = new ProcessBuilder();
		Map<String, String> env = pb.environment();
		env.put("PATH", this.pythonPath);

		pb.redirectOutput(fOutput);
		pb.redirectError(fErrors);

		pb.directory(new File(this.workingDirectory));

		int returnCode = 0;
		String lastCommand = fProgram.getAbsolutePath();
		this.commands[this.commands.length - 1] = this.commands[this.commands.length - 1] + " " + lastCommand;
		pb.command(commands);
		try {
			Process process = pb.start();
			returnCode = process.waitFor();
			return this.analyze(fProgram, fOutput, fErrors, outputs, mutantIndex);
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
		} catch (InterruptedException e) {
			Thread.currentThread().interrupt();
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
		}
	}

	private ProgramExecutionResult analyze(File fProgram, File fOutput, File fErrors, int outputs, int mutantIndex)
			throws FileNotFoundException, IOException {
		List<Map<String, Object>> executionResults = new ArrayList<>();

		for (int i = 0; i < outputs; i++) {
			Map<String, Object> line = new HashMap<>();
			line.put("order", i);
			line.put("binary", Integer.toBinaryString(i));
			line.put("frequency", 0);
			executionResults.add(line);
		}

		try (BufferedReader reader = new BufferedReader(new FileReader(fOutput))) {
			JSONObject jso = null;
			try {
				jso = new JSONObject(reader.readLine());
				Iterator<String> keys = jso.keys();
				while (keys.hasNext()) {
					String key = keys.next();
					int order = Integer.parseInt(key, 2);
					int frequency = jso.getInt(key);
					Map<String, Object> line = executionResults.get(order);
					line.put("frequency", frequency);
				}
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
						"Error with file " + fOutput.getAbsolutePath());
			}
		}
		fProgram.delete();
		fOutput.delete();
		fErrors.delete();
		ProgramExecutionResult result = new ProgramExecutionResult();
		result.setMutantIndex(mutantIndex);
		result.setExecutionResults(executionResults);
		return result;
	}

	private File[] createFiles(String code, int mutantIndex) {
		File fProgram, fOutput, fErrors;
		if (this.outputDirectory.trim().equalsIgnoreCase("temp")) {
			try {
				fProgram = File.createTempFile("mutant" + mutantIndex + "_", ".py");
				try (FileOutputStream fos = new FileOutputStream(fProgram)) {
					fos.write(code.getBytes());
				}
				fOutput = File.createTempFile("output" + mutantIndex + "_", ".txt");
				fErrors = File.createTempFile("errors" + mutantIndex + "_", ".txt");
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		} else {
			try {
				fProgram = new File(this.outputDirectory + "m" + mutantIndex + ".py");
				try (FileOutputStream fos = new FileOutputStream(fProgram)) {
					fos.write(code.getBytes());
				}
				fOutput = new File(this.outputDirectory + "o" + mutantIndex + ".txt");
				fErrors = new File(this.outputDirectory + "e" + mutantIndex + ".txt");
			} catch (Exception e) {
				throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
			}
		}
		return new File[] { fProgram, fOutput, fErrors };
	}

	public void setPythonPath(String pythonPath) {
		this.pythonPath = pythonPath;
	}

	public void setCommands(String[] commands) {
		this.commands = new String[commands.length];
		for (int i = 0; i < commands.length; i++)
			this.commands[i] = commands[i];
	}

	public void setReceiver(ISimpleRunnerListener listener) {
		this.listener = listener;
	}
}
