package edu.uclm.qiskitexec.runners.algorithms;

import java.util.ArrayList;
import java.util.List;

import edu.uclm.qiskitexec.model.Mutant;

public class Initializer {

	public static List<Mutant> buildCircuitsWithAllEntries(String start, String end, List<Integer> inputQubits, List<String> inputs) {
		List<Mutant> newCircuits = new ArrayList<>();
		if (inputs.isEmpty()) {
			int max = (int) Math.pow(2, inputQubits.size());
			for (int i=0; i<max; i++) {
				String newMutantCode = start + getInitColumn(i, inputQubits) + end;
				Mutant newMutant = new Mutant();
				newMutant.setMutantIndex(i);
				newMutant.setWholeCode(newMutantCode);
				newCircuits.add(newMutant);
			}
		} else {
			for (int i=0; i<inputs.size(); i++) {
				String input = inputs.get(i);
				int index = Integer.parseInt(input, 2);
				String newMutantCode = start + getInitColumn(index, inputQubits) + end;
				Mutant newMutant = new Mutant();
				newMutant.setMutantIndex(i);
				newMutant.setWholeCode(newMutantCode);
				newCircuits.add(newMutant);
			}
		}
		return newCircuits;
	}

	private static String getInitColumn(int index, List<Integer> inputQubits) {
		String binary = Integer.toBinaryString(index);
		for (int i=binary.length(); i<inputQubits.size(); i++)
			binary = "0" + binary;
		StringBuilder sb = new StringBuilder("\n#Initialization (all inputs selected). Proceeds from mutant " + index + "\n");
		for (int i=0; i<binary.length(); i++) {
			if (binary.charAt(i)=='1')
				sb.append("circuit.x(" + inputQubits.get(i) + ")\n");
		}
		sb.append("\ncircuit.barrier()\n");
		return sb.toString();
	}

	public static Mutant initialize(Mutant mutant, int index, int inputQubits) {
		String code = mutant.getWholeCode();
		int translation = code.indexOf(Strategy.translationString);
		String start = code.substring(0, translation);
		String end = code.substring(translation + Strategy.translationString.length());
		String binary = Integer.toBinaryString(index);
		
		StringBuilder sb = new StringBuilder("\n#Initialization (all inputs selected). Proceeds from mutant " + index + "\n");
		for (int i=0; i<inputQubits-binary.length(); i++)
			sb.append("circuit.initialize(0, " + i + ")\n");
		for (int i=0; i<binary.length(); i++)
			sb.append("circuit.initialize(" + binary.charAt(i) + ", " + (inputQubits-i-1) + ")\n");
		sb.append("\ncircuit.barrier()\n");
		code = start + sb.toString() + end;
		mutant.setWholeCode(code);
		return mutant;
	}

	public static List<Mutant> getVariants(Mutant mutant, int inputQubits, int outputSize) {
		String code = mutant.getWholeCode();
		int translation = code.indexOf(Strategy.translationString);
		String start = code.substring(0, translation);
		String end = code.substring(translation + Strategy.translationString.length());
		List<Mutant> variants = new ArrayList<>(); 
		for (int i=0; i<outputSize; i++) {
			String binary = Integer.toBinaryString(i);
			StringBuilder sb = new StringBuilder("\n#Initialization (all inputs selected). Proceeds from mutant " + mutant.getMutantIndex() + "\n");
			for (int j=0; j<inputQubits-binary.length(); j++)
				sb.append("circuit.initialize(0, " + j + ")\n");
			for (int j=0; j<binary.length(); j++)
				sb.append("circuit.initialize(" + binary.charAt(j) + ", " + (inputQubits-j-1) + ")\n");
			sb.append("\ncircuit.barrier()\n");
			code = start + sb.toString() + end;
			Mutant variant = new Mutant(mutant);
			variant.setWholeCode(code);
			variants.add(variant);
		}
		return variants;
	}
}
