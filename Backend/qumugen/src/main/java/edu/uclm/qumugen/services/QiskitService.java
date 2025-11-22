package edu.uclm.qumugen.services;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.Gate;
import edu.uclm.qumugen.model.InitColumn;
import edu.uclm.qumugen.model.InitialValue;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.utils.Utils;

@Service
public class QiskitService {

	public Map<String, Object> getCode(Map<String, Object> quirk, List<Integer> outputQubits, int totalQubits) {
		
		/*
		 * Transforma el código de quirk a código python de qiskit
		 * */
		
		Circuit circuit = new Circuit(new JSONObject(quirk));
		InitColumn init = circuit.getInit();
		Map<String, Object> result = new HashMap<>();
		
		StringBuilder declaration = this.getDeclaration(circuit, outputQubits, totalQubits);
		result.put("declaration",declaration);

		if (init!=null) {
			StringBuilder sb = new StringBuilder();
			sb.append("#Initialization\n");
			for (int i=0; i<init.size(); i++) {
				if (init.getValue(i)==InitialValue.ONE)
					sb.append("circuit.x(" + i + ")\n");
			}
			sb.append("\n");
			sb.append("circuit.barrier()\n");
			result.put("initialization", sb.toString());
		}
		
		StringBuilder sb = new StringBuilder();
		sb.append("#Translation of the Quirk circuit into Qiskit code\n");
		for (int i=0; i<circuit.getColumns().size(); i++) {
			QColumn column = circuit.getColumns().get(i);
			if (column.isBarrier())
				continue;
			if (column.getControlGates().isEmpty()) {
				for (int j=0; j<column.getGates().size(); j++) {
					Gate circuitGate = column.getGates().get(j);
					Gate gate = Gate.findGate(circuitGate.getName());
					String gateDescription;
					if (gate!=null && gate.isDuplicable()) {
						if (gate.getDescription().length()>2) {
							gateDescription = gate.getDescription().getString(2);
							gateDescription = gateDescription.replace("#QUBIT#", "" + j);
						} else {
							gateDescription = "# We can't currently translate the " + gate.getName() + " gate into Qiskit code";
							result.put("executable", false);
						}
						sb.append(gateDescription + "\n");
					}
				}
				sb.append("circuit.barrier()\n");
			} else {
				sb.append(this.getCodeForControlledColumn(column, result));
			}
			sb.append("\n");
		}
		result.put("calculus", sb.toString());
		
		StringBuilder measures = this.getMeasures(circuit, outputQubits); 
		result.put("measures", measures.toString());
		return result;
	}

	private StringBuilder getMeasures(Circuit circuit, List<Integer> outputQubits) {
		
		/*
		 * Agrega al código qiskit las puertas necesarias para realizar las mediciones
		 * */
		
		
		StringBuilder sb = new StringBuilder();
		if (outputQubits!=null) {
			for (int i=0; i<outputQubits.size(); i++) 
				sb.append("circuit.measure(" + outputQubits.get(i) + ", " + (outputQubits.size()-i-1) + ")\n");
		} else {
			for (int i=0; i<circuit.getQubits(); i++) 
				sb.append("circuit.measure(" + circuit.getQubits() + ", " + (i-1) + ")\n");
		}
		return sb;
	}

	private StringBuilder getDeclaration(Circuit circuit, List<Integer> outputQubits, int totalQubits) {
		
		/*
		 * Crea las declaraciones en qiskit, crea el circuito
		 * */
		
		StringBuilder sb = new StringBuilder();
		sb.append("qreg = QuantumRegister(" + totalQubits + ")\n");
		if (outputQubits!=null)
			sb.append("creg = ClassicalRegister(" + outputQubits.size() + ")\n");
		else
			sb.append("creg = ClassicalRegister(" + circuit.getQubits() + ")\n");
		sb.append("\ncircuit = QuantumCircuit(qreg, creg)\n\n");
		return sb;
	}

	private StringBuilder getCodeForControlledColumn(QColumn column, Map<String, Object> result) {
		
		/*
		 * Crea el código para las puertas controladas
		 * */
		
		StringBuilder sb = new StringBuilder();
		if (column.getControlledGate().getName().equals("X")) {
			String controlPart = "[";
			for (int i=0; i<column.getControlGates().size(); i++)
				controlPart = controlPart + column.getControlGates().get(i).getQubit() + ", ";
			controlPart = controlPart.substring(0, controlPart.length()-2).trim() + "], ";
			sb.append("circuit.mcx(" + controlPart + column.getControlledGate().getQubit() + ")\n");
		} else {
			sb.append("# We can't currently translate the " + column.toString() + " column into Qiskit code\n");
			result.put("executable", false);
		}
		return sb;
	}

	public String getWholeCode(Map<String, Object> result, int shots, String qiskitTemplate, int qubits, List<Integer> outputQubits) throws IOException {
		
		/*
		 * Transforma el código a partir de la plantillas
		 * */
		
		
		String wholeCode = Utils.readFileAsString(this, qiskitTemplate);
		wholeCode = wholeCode.replace("#CIRCUITS_DECLARATION#", result.get("declaration").toString());
		if (result.containsKey("initialization"))
			wholeCode = wholeCode.replace("#INITIALIZE#", result.get("initialization").toString());
		else
			wholeCode = wholeCode.replace("#INITIALIZE#", "");

		wholeCode = wholeCode.replace("#QUBITS#", "" + qubits);


		wholeCode = wholeCode.replace("#OUTPUT_QUBITS#", outputQubits.toString());
		wholeCode = wholeCode.replace("#CALCULUS#", result.get("calculus").toString());
		wholeCode = wholeCode.replace("#MEASURES#", result.get("measures").toString());
		
		if (shots>0)
			wholeCode = wholeCode.replace("#SHOTS#", "" + shots);
		return wholeCode;
	}

}
