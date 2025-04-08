package edu.uclm.qumugen.services;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qumugen.operators.Operator;
import edu.uclm.qumugen.operators.SwapGates;

@Service
public class OperatorsService {

	public Operator find(String operatorName) {
		if (!Operator.operators.containsKey(operatorName)) {
			int posBarra = operatorName.indexOf('_');
			if (posBarra!=-1) {
				SwapGates operator = new SwapGates();
				operator.setName(operatorName);
				Operator.add("Swap Gates", operator);
			} else throw new ResponseStatusException(HttpStatus.NOT_FOUND, operatorName + " operator not found");
		}
		return Operator.operators.get(operatorName);
	}
}
