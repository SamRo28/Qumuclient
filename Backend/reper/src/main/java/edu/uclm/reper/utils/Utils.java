package edu.uclm.reper.utils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class Utils {
	
	public static String readFileAsString(Object o, String fileName) throws IOException {
		ClassLoader classLoader = o.getClass().getClassLoader();
		 try (InputStream fis = classLoader.getResourceAsStream(fileName)) {
			byte[] b = new byte[fis.available()];
			fis.read(b);
			String s = new String(b);
			return s;
		 }
	}
	
	public static String getFolder(String folder) {
		File f = new File(folder);
		if (!f.exists())
			f.mkdirs();
		return folder;
	}
	
	public static File getFile(String folder, String fileName) {
		File f = new File(folder + fileName);
		if (f.exists())
			return f;
		try {
			f.createNewFile();
		} catch (IOException e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, folder + fileName + " could not be created");
		}
		return f;
	}

	public static String getPath(File file) {
		String fileName = file.getAbsolutePath();
		if (fileName.endsWith("/"))
			return fileName;
		return fileName + '/';
	}

	public static String[] getFileNames(String folder, String extension) {
		return new File(folder).list((dir, name) -> name.endsWith(extension));
	}
}
