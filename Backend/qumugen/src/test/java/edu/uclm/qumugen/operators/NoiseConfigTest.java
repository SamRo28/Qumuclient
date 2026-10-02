package edu.uclm.qumugen.operators;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.Map;

import org.junit.jupiter.api.Test;

public class NoiseConfigTest {

	@Test
	public void defaultMatrixMatchesConstant() {
		assertEquals(NoiseInsertion.NOISE_MATRIX, NoiseConfig.DEFAULT.toQuirkMatrix());
	}

	@Test
	public void yRotationMatrix() {
		assertEquals("{{0,-1},{1,0}}", new NoiseConfig(NoiseAxis.Y, Math.PI).toQuirkMatrix());
	}

	@Test
	public void xRotationMatrix() {
		assertEquals("{{0,-1i},{-1i,0}}", new NoiseConfig(NoiseAxis.X, Math.PI).toQuirkMatrix());
	}

	@Test
	public void zRotationMatrix() {
		assertEquals("{{0.70710678-0.70710678i,0},{0,0.70710678+0.70710678i}}",
				new NoiseConfig(NoiseAxis.Z, Math.PI / 2).toQuirkMatrix());
	}

	@Test
	public void fromNullReturnsDefault() {
		NoiseConfig cfg = NoiseConfig.from(null);
		assertNotNull(cfg);
		assertEquals(NoiseConfig.DEFAULT.getAxis(), cfg.getAxis());
		assertEquals(NoiseConfig.DEFAULT.getAngle(), cfg.getAngle());
		assertEquals(NoiseConfig.DEFAULT.toQuirkMatrix(), cfg.toQuirkMatrix());
	}

	@Test
	public void fromMapParsesCorrectly() {
		NoiseConfig cfg1 = NoiseConfig.from(Map.of("axis", "y", "angle", 1));
		assertEquals(NoiseAxis.Y, cfg1.getAxis());
		assertEquals(1.0, cfg1.getAngle());

		NoiseConfig cfg2 = NoiseConfig.from(Map.of("axis", "Z", "angle", "0.5"));
		assertEquals(NoiseAxis.Z, cfg2.getAxis());
		assertEquals(0.5, cfg2.getAngle());
	}

	@Test
	public void invalidArgumentsThrowException() {
		assertThrows(IllegalArgumentException.class, () -> new NoiseConfig(NoiseAxis.X, 0));
		assertThrows(IllegalArgumentException.class, () -> new NoiseConfig(NoiseAxis.X, -0.1));
		assertThrows(IllegalArgumentException.class, () -> new NoiseConfig(NoiseAxis.X, Double.NaN));
		assertThrows(IllegalArgumentException.class, () -> new NoiseConfig(NoiseAxis.X, 7.0));
		assertThrows(IllegalArgumentException.class, () -> NoiseAxis.fromToken("W"));
		assertThrows(IllegalArgumentException.class, () -> NoiseConfig.from("texto"));
		assertThrows(IllegalArgumentException.class, () -> NoiseConfig.from(Map.of("angle", "abc")));
	}

	@Test
	public void noScientificNotationInMatrices() {
		double[] angles = { 1e-6, 0.1, Math.PI, 2 * Math.PI };
		for (NoiseAxis axis : NoiseAxis.values()) {
			for (double angle : angles) {
				String matrix = new NoiseConfig(axis, angle).toQuirkMatrix();
				assertFalse(matrix.contains("E"), "La matriz contiene notación científica 'E': " + matrix);
				assertFalse(matrix.contains("e"), "La matriz contiene notación científica 'e': " + matrix);
			}
		}
	}

}
