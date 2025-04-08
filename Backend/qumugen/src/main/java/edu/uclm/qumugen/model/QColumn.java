package edu.uclm.qumugen.model;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;

public class QColumn {
	private int index;
	private List<Gate> gates;
	private List<Gate> controlGates;
	private Gate controlledGate;
	
	private QColumn() {
		this.gates = new ArrayList<>();
		this.controlGates = new ArrayList<>();		
	}
	
	public QColumn(int max, int index) {
		this();
		this.index = index;
		for (int i=0; i<max; i++) {
			Gate gate = new Gate(1, i);
			this.gates.add(gate);
		}
	}
	
	public QColumn(int index, JSONArray jsa) {
		this();
		this.index = index;
		
		for (int i=0; i<jsa.length(); i++) {
			Object oGate = jsa.get(i);
			Gate gate = new Gate(oGate, i);
			this.gates.add(gate);
			if (gate.isControl())
				this.controlGates.add(gate);
		}
		
		if (!this.controlGates.isEmpty()) {
			for (int i=0; i<gates.size(); i++) {
				Gate gate = gates.get(i);
				if (!gate.isControl() && !gate.toString().equals("1")) {
					this.controlledGate = gates.get(i);
					break;
				}
			}
			this.controlledGate.setControlGates(this.controlGates);
		}
	}
	
	public QColumn(QColumn column) {
		this();
		this.index = column.index;
		for (int i=0; i<column.gates.size(); i++) {
			Gate gate = column.gates.get(i);
			this.gates.add(new Gate(gate));
			if (gate.isControl())
				this.controlGates.add(gate);
		}
		if (!this.controlGates.isEmpty()) {
			for (int i=0; i<column.gates.size(); i++) {
				Gate gate = column.gates.get(i);
				if (!gate.isControl() && !gate.toString().equals("1")) {
					this.controlledGate = this.gates.get(i);
					break;
				}
			}
			this.controlledGate.setControlGates(this.controlGates);
		}
	}
	
	public List<Gate> getControlGates() {
		return controlGates;
	}

	public List<Gate> getGates() {
		return gates;
	}
	
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		for (int i=0; i<this.gates.size(); i++)
			sb.append(this.gates.get(i).toString());
		return sb.toString();
	}

	public void setGate(int row, Gate newGate) {
		this.gates.set(row, newGate);
	}

	public JSONArray toQuirk() {
		JSONArray jsa = new JSONArray();
		for (int i=0; i<this.gates.size(); i++) {
			Gate gate = this.gates.get(i);
			jsa.put(gate.getName());
		}
		return jsa;
	}

	public boolean removeGate(int row) {
		this.gates.set(row, Gate.findGate(1));
		Gate gate;
		for (int i=0; i<this.gates.size(); i++) {
			gate = this.gates.get(i);
			if (gate.isDuplicable())
				return false;
		}
		return true;
	}
	
	public Gate getControlledGate() {
		return controlledGate;
	}

	public boolean isBarrier() {
		for (int i=0; i<this.gates.size(); i++)
			if (!this.gates.get(i).getName().equals("…"))
				return false;
		return true;
	}
	
	public boolean fill(int qbits) {
		boolean res = false;
		
		for(int i = this.gates.size(); i<qbits+1; i++) {
			Gate gate = new Gate(1, i-1);
			this.gates.add(gate);
		}
		
		return res;
	}
}
