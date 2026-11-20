package edu.uclm.qumugen.operators;

/**
 * Posiciones de inserción de columnas para nuevos operadores de mutación.
 */
public enum InsertionPosition {
	START("Start"),
	END("End"),
	RANDOM("Random");

	private final String token;

	InsertionPosition(String token) {
		this.token = token;
	}

	public String getToken() {
		return this.token;
	}

	public static InsertionPosition fromToken(String token) {
		if ("Start".equals(token)) {
			return START;
		} else if ("End".equals(token)) {
			return END;
		} else if ("Random".equals(token)) {
			return RANDOM;
		}
		throw new IllegalArgumentException("Token de posición desconocido: " + token);
	}
}
