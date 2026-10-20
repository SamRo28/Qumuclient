package edu.uclm.qumugen.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.uclm.qumugen.http.GenerateQuirkMutantsCharacterizationTest;
import edu.uclm.qumugen.operators.NoiseConfig;
import edu.uclm.qumugen.operators.Operator;

@SpringBootTest
public class MutantServiceStreamingTest {

	@Autowired
	private MutantService mutantService;

	@Test
	public void largeCircuitIsStreamedWithoutRetainingMutants() {
		List<String> all = new ArrayList<>(Operator.operators.keySet());
		Collections.sort(all);
		String rows = IntStream.range(0, 20).mapToObj(String::valueOf).collect(Collectors.joining(","));
		String cols = IntStream.range(0, 100).mapToObj(String::valueOf).collect(Collectors.joining(","));

		int[] count = { 0 };
		long start = System.nanoTime();
		this.mutantService.generateQuirkMutants(GenerateQuirkMutantsCharacterizationTest.circuit(20, 100, false), all,
				rows, cols, false, "", List.of(NoiseConfig.DEFAULT), m -> {
					assertEquals(count[0]++, m.getMutantIndex());
					assertNotNull(m.getQuirk());
				});
		long seconds = (System.nanoTime() - start) / 1_000_000_000L;

		assertEquals(28110, count[0]);
		assertTrue(seconds < 30, "Tardo " + seconds + " s");
	}
}
