package edu.uclm.qiskitexec.model;

public class Mutant {

	private String wholeCode;
	private int mutantIndex;
	
	public Mutant() { }	
	
	public Mutant(Mutant mutant) {
		this.wholeCode = mutant.wholeCode;
		this.mutantIndex = mutant.mutantIndex;
	}

	public String getWholeCode() {
		return wholeCode;
	}
	
	public void setWholeCode(String code) {
		this.wholeCode = code;
	}
	
	public int getMutantIndex() {
		return mutantIndex;
	}
	
	public void setMutantIndex(int mutantIndex) {
		this.mutantIndex = mutantIndex;
	}	
	
}
