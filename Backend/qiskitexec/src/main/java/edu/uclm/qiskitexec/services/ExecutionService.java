package edu.uclm.qiskitexec.services;

import org.springframework.beans.factory.annotation.Value;

public abstract class ExecutionService {

	protected static boolean DEBUG = true;

	@Value("${proxy.url}")
	protected String proxyUrl;

	@Value("${remote.runner.url}")
	protected String remoteRunnerUrl;

	public String getQiskitTemplate() {
		// Retornamos un template vacío o dummy, ya que ahora en remoto no hace falta
		// compilar localmente con template
		return "";
	}

	public static void debug(String... msgs) {
		if (!ExecutionService.DEBUG)
			return;

		for (int i = 0; i < msgs.length; i++)
			System.out.println("DEBUG-> " + msgs[i]);
	}
}
