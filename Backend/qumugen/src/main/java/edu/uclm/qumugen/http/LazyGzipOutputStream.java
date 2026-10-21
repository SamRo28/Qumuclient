package edu.uclm.qumugen.http;

import java.io.IOException;
import java.io.OutputStream;
import java.util.zip.GZIPOutputStream;

import jakarta.servlet.http.HttpServletResponse;

/**
 * Comprime con gzip la respuesta, pero de forma perezosa: la cabecera y el flujo gzip se crean en la primera escritura
 * real, para no marcar como gzip las respuestas de error que Spring escribe en plano.
 */
final class LazyGzipOutputStream extends OutputStream {

	private final HttpServletResponse response;
	private GZIPOutputStream gzip;

	LazyGzipOutputStream(HttpServletResponse response) {
		this.response = response;
	}

	private GZIPOutputStream target() throws IOException {
		if (this.gzip == null) {
			this.response.setHeader("Content-Encoding", "gzip");
			this.response.addHeader("Vary", "Accept-Encoding");
			this.gzip = new GZIPOutputStream(this.response.getOutputStream(), 8192);
		}
		return this.gzip;
	}

	@Override
	public void write(int b) throws IOException {
		this.target().write(b);
	}

	@Override
	public void write(byte[] b, int off, int len) throws IOException {
		if (len == 0)
			return;
		this.target().write(b, off, len);
	}

	@Override
	public void flush() throws IOException {
		if (this.gzip != null)
			this.gzip.flush();
	}

	@Override
	public void close() throws IOException {
		if (this.gzip != null)
			this.gzip.close();
	}

	static boolean acceptsGzip(String acceptEncoding) {
		if (acceptEncoding == null || acceptEncoding.isBlank())
			return false;
		for (String item : acceptEncoding.split(",")) {
			String token = item.trim().toLowerCase();
			if (!token.equals("gzip") && !token.startsWith("gzip;"))
				continue;
			String compact = token.replace(" ", "");
			if (compact.matches(".*;q=0(\\.0{0,3})?$"))
				continue;
			return true;
		}
		return false;
	}
}
