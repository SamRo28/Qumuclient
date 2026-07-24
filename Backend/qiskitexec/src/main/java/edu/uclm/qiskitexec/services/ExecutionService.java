package edu.uclm.qiskitexec.services;

import org.springframework.beans.factory.annotation.Value;

import edu.uclm.qiskitexec.runners.CentralizedProxyRunner;

public abstract class ExecutionService {

	protected static boolean DEBUG = true;

	@Value("${proxy.url}")
	protected String proxyUrl;

	@Value("${remote.runner.url}")
	protected String remoteRunnerUrl;

	@Value("${proxy.enabled:true}")
	protected boolean proxyEnabled;

	@Value("${execution.batch.size:16}")
	protected int batchSize;

	@Value("${execution.timeout.seconds:600}")
	protected int timeoutSeconds;

	/** Crea el runner con la configuración de proxy, troceado y timeout. */
	protected CentralizedProxyRunner newRunner() {
		return new CentralizedProxyRunner(this.proxyEnabled ? this.proxyUrl : null, this.remoteRunnerUrl,
				this.batchSize, this.timeoutSeconds);
	}

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
