package edu.uclm.qumugen.http;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.ByteArrayInputStream;
import java.nio.charset.StandardCharsets;
import java.util.zip.GZIPInputStream;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletResponse;

public class LazyGzipOutputStreamTest {

	@Test
	public void sinEscriturasNoTocaLaRespuesta() throws Exception {
		MockHttpServletResponse response = new MockHttpServletResponse();
		LazyGzipOutputStream out = new LazyGzipOutputStream(response);
		out.flush();
		out.close();
		assertNull(response.getHeader("Content-Encoding"));
		assertFalse(response.isCommitted());
		assertEquals(0, response.getContentAsByteArray().length);
	}

	@Test
	public void comprimeYDescomprimeIgual() throws Exception {
		MockHttpServletResponse response = new MockHttpServletResponse();
		byte[] original = "{\"quirk\":{\"cols\":[[\"H\",1,1],[\"X\",1,1]]}},".repeat(25000)
				.getBytes(StandardCharsets.UTF_8);
		LazyGzipOutputStream out = new LazyGzipOutputStream(response);
		out.write(original, 0, original.length);
		out.close();
		assertEquals("gzip", response.getHeader("Content-Encoding"));
		assertTrue(response.getHeader("Vary").contains("Accept-Encoding"));
		byte[] compressed = response.getContentAsByteArray();
		assertTrue(compressed.length < original.length / 10);
		assertArrayEquals(original, new GZIPInputStream(new ByteArrayInputStream(compressed)).readAllBytes());
	}

	@Test
	public void acceptsGzip() {
		assertTrue(LazyGzipOutputStream.acceptsGzip("gzip, deflate, br, zstd"));
		assertTrue(LazyGzipOutputStream.acceptsGzip("GZIP"));
		assertTrue(LazyGzipOutputStream.acceptsGzip("gzip;q=0.5"));
		assertFalse(LazyGzipOutputStream.acceptsGzip("br"));
		assertFalse(LazyGzipOutputStream.acceptsGzip("gzip;q=0"));
		assertFalse(LazyGzipOutputStream.acceptsGzip(null));
		assertFalse(LazyGzipOutputStream.acceptsGzip(""));
		assertFalse(LazyGzipOutputStream.acceptsGzip("x-gzip"));
	}
}
