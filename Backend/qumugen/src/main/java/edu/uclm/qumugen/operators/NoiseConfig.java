package edu.uclm.qumugen.operators;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Configuración inmutable para la rotación de ruido cuántico.
 */
public class NoiseConfig {

	public static final int MAX_CONFIGS = 6;
	private final NoiseAxis axis;
	private final double angle;

	public static final double DEFAULT_ANGLE = 0.1;
	public static final NoiseConfig DEFAULT = new NoiseConfig(NoiseAxis.X, DEFAULT_ANGLE);

	public NoiseConfig(NoiseAxis axis, double angle) {
		if (axis == null) {
			throw new IllegalArgumentException("El eje de ruido no puede ser nulo");
		}
		if (!Double.isFinite(angle) || angle <= 0 || angle > 2 * Math.PI + 1e-9) {
			throw new IllegalArgumentException("El ángulo del ruido debe estar en (0, 2π] radianes");
		}
		this.axis = axis;
		this.angle = angle;
	}

	public NoiseAxis getAxis() {
		return this.axis;
	}

	public double getAngle() {
		return this.angle;
	}

	public static NoiseConfig from(Object raw) {
		if (raw == null) {
			return DEFAULT;
		}
		if (!(raw instanceof Map)) {
			throw new IllegalArgumentException("La configuración de ruido debe ser un objeto/mapa");
		}

		Map<?, ?> map = (Map<?, ?>) raw;
		Object rawAxis = map.get("axis");
		NoiseAxis axis = rawAxis == null ? NoiseAxis.X : NoiseAxis.fromToken(String.valueOf(rawAxis));

		Object rawAngle = map.get("angle");
		double angle;
		if (rawAngle == null) {
			angle = DEFAULT_ANGLE;
		} else if (rawAngle instanceof Number) {
			angle = ((Number) rawAngle).doubleValue();
		} else if (rawAngle instanceof String) {
			try {
				angle = Double.parseDouble((String) rawAngle);
			} catch (NumberFormatException e) {
				throw new IllegalArgumentException("Ángulo de ruido inválido: " + rawAngle);
			}
		} else {
			throw new IllegalArgumentException("Ángulo de ruido inválido: " + rawAngle);
		}

		return new NoiseConfig(axis, angle);
	}

	public boolean sameAs(NoiseConfig o) {
		return o != null && this.axis == o.axis && Math.abs(this.angle - o.angle) < 1e-9;
	}

	public static List<NoiseConfig> listFrom(Object rawList, Object rawSingle) {
		if (rawList != null) {
			if (!(rawList instanceof List)) {
				throw new IllegalArgumentException("La lista de rotaciones de ruido debe ser una lista");
			}
			List<?> list = (List<?>) rawList;
			if (list.isEmpty()) {
				return List.of(DEFAULT);
			}
			if (list.size() > MAX_CONFIGS) {
				throw new IllegalArgumentException("Se admiten como máximo 6 rotaciones de ruido");
			}
			List<NoiseConfig> result = new ArrayList<>();
			for (Object item : list) {
				NoiseConfig cfg = from(item);
				for (NoiseConfig existing : result) {
					if (existing.sameAs(cfg)) {
						throw new IllegalArgumentException("Rotación de ruido duplicada: " + cfg.label());
					}
				}
				result.add(cfg);
			}
			return List.copyOf(result);
		}
		return List.of(from(rawSingle));
	}

	public String toQuirkMatrix() {
		double h = this.angle / 2.0;
		double c = Math.cos(h);
		double s = Math.sin(h);
		switch (this.axis) {
			case X:
				return "{{" + cell(c, 0) + "," + cell(0, -s) + "},{" + cell(0, -s) + "," + cell(c, 0) + "}}";
			case Y:
				return "{{" + cell(c, 0) + "," + cell(-s, 0) + "},{" + cell(s, 0) + "," + cell(c, 0) + "}}";
			case Z:
				return "{{" + cell(c, -s) + "," + cell(0, 0) + "},{" + cell(0, 0) + "," + cell(c, s) + "}}";
			default:
				throw new IllegalStateException("Eje desconocido: " + this.axis);
		}
	}

	private static String fmt(double v) {
		BigDecimal bd = new BigDecimal(v).setScale(8, RoundingMode.HALF_UP).stripTrailingZeros();
		if (bd.compareTo(BigDecimal.ZERO) == 0) {
			return "0";
		}
		String str = bd.toPlainString();
		if ("-0".equals(str)) {
			return "0";
		}
		return str;
	}

	private static String cell(double re, double im) {
		String r = fmt(re);
		String i = fmt(im);
		if ("0".equals(i)) {
			return r;
		}
		if ("0".equals(r)) {
			return i + "i";
		}
		return r + (i.startsWith("-") ? "" : "+") + i + "i";
	}

	public String label() {
		return "R" + this.axis.name().toLowerCase() + "(" + fmt(this.angle) + ")";
	}

}
