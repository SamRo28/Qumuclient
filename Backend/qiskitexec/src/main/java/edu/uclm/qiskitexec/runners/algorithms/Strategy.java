package edu.uclm.qiskitexec.runners.algorithms;

import java.util.List;

import edu.uclm.qiskitexec.model.StrategyMutantsExecutionConfiguration;
import edu.uclm.qiskitexec.runners.ProgramExecutionResult;

public abstract class Strategy {

	public static final String translationString = "#Translation of the Quirk circuit into Qiskit code";

	protected int inputQubits;

	public static Strategy newInstance(String algorithmName) {
		if (algorithmName.equalsIgnoreCase("OnlyAlive"))
			return new OnlyAlive();
		return new AllAgainstAll();
	}

	public void setInputQubits(int inputQubits) {
		this.inputQubits = inputQubits;
	}

	public abstract List<List<ProgramExecutionResult>> execute(
			edu.uclm.qiskitexec.runners.CentralizedProxyRunner runner, StrategyMutantsExecutionConfiguration smec);
}
