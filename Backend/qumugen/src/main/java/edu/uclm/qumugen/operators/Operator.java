package edu.uclm.qumugen.operators;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

import edu.uclm.qumugen.model.Circuit;
import edu.uclm.qumugen.model.QColumn;
import edu.uclm.qumugen.utils.Utils;

public abstract class Operator {
	
	protected String name;

	public static Map<String, List<Operator>> operatorsByFamily = new HashMap<>();
	public static Map<String, Operator> operators = new HashMap<>();
	
	public static void loadOperators(Object o) throws Exception {
		JSONObject s = new JSONObject(Utils.readFileAsString(o, "data.json.txt"));
		JSONArray jsaOperators = s.getJSONArray("operators");
		for (int i=0; i<jsaOperators.length(); i++) {
			JSONObject jsoOperator = jsaOperators.getJSONObject(i);
			String familyName = jsoOperator.getString("family");
			List<Operator> family = new ArrayList<>();
			operatorsByFamily.put(familyName, family);
			JSONArray jsa = jsoOperator.getJSONArray("operators");
			for (int j=0; j<jsa.length(); j++) {
				String clazzName = jsa.getString(j);
				String fullClazzName = "edu.uclm.qumugen.operators." + clazzName;
				Operator operator;
				try {
					operator = (Operator) Class.forName(fullClazzName).newInstance();
					operator.setName(jsa.getString(j));
				} catch (Exception e) {
					clazzName = jsoOperator.getString("containerClass");
					fullClazzName = "edu.uclm.qumugen.operators." + clazzName;
					operator = (Operator) Class.forName(fullClazzName).newInstance();
					operator.setName(jsa.getString(j));
				}
				family.add(operator);
				operators.put(operator.getName(), operator);
			}
		}
	}
	
	public static void add(String familyName, Operator operator) {
		Operator.operators.put(operator.getName(), operator);
		List<Operator> family = Operator.operatorsByFamily.get(familyName);
		if (family==null) {
			family = new ArrayList<>();
			operatorsByFamily.put(familyName, family);
		}
	}

	protected void setName(String name) {
		this.name = name; 
	}
	
	public final String getName() {
		return name;
	}
	
	public abstract String getPrintedName();
	public abstract void apply(Circuit circuit, List<Circuit> mutants, List<Integer> rowsToMutate, List<Integer> columnsToMutate);

	protected abstract List<Integer> getApplicableGates(List<Integer> rowsToMutate, QColumn column);
	protected abstract void apply(Circuit circuit, int column, int row, List<Circuit> mutants);

}
