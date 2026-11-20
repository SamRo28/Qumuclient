package edu.uclm.qumugen.operators;

/**
 * Eje de rotación para operadores de ruido cuántico.
 */
public enum NoiseAxis {
	X, Y, Z;

	public static NoiseAxis fromToken(String token) {
		if (token != null) {
			String trimmed = token.trim();
			if (trimmed.equalsIgnoreCase("X")) {
				return X;
			} else if (trimmed.equalsIgnoreCase("Y")) {
				return Y;
			} else if (trimmed.equalsIgnoreCase("Z")) {
				return Z;
			}
		}
		throw new IllegalArgumentException("Eje de ruido desconocido: " + token);
	}
}
