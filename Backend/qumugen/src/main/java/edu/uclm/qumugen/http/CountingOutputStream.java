package edu.uclm.qumugen.http;

import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * Cuenta los bytes escritos (antes de comprimir) para poder registrar el tamano real de la respuesta.
 */
final class CountingOutputStream extends FilterOutputStream {

	private long count;

	CountingOutputStream(OutputStream out) {
		super(out);
	}

	long getCount() {
		return this.count;
	}

	@Override
	public void write(int b) throws IOException {
		this.out.write(b);
		this.count++;
	}

	@Override
	public void write(byte[] b, int off, int len) throws IOException {
		this.out.write(b, off, len);
		this.count += len;
	}

	@Override
	public void close() throws IOException {
		this.out.close();
	}
}
