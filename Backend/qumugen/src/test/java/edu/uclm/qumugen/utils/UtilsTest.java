package edu.uclm.qumugen.utils;

import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;

class UtilsTest {

    @Test
    void testReadFileAsString() throws IOException {
        String content = Utils.readFileAsString(this, "data.json.txt");
        assertNotNull(content);
        assertTrue(content.contains("operators"));
    }

    @Test
    void testFoldersAndFiles() {
        String testDb = "testDb_qumugen";
        String testCollection = "testCollection";
        
        boolean folderCreated = Utils.createFolder(testDb);
        // It might be true or false depending on if it already existed, but we can verify it exists
        String folderPath = Utils.getFolder(testDb, testCollection);
        assertNotNull(folderPath);
        assertTrue(new File(folderPath).exists());
        
        File file = Utils.getFile(testDb, testCollection, "testfile.txt");
        assertNotNull(file);
        assertTrue(file.exists());
        
        String pathWithSlash = Utils.getPath(file.getParentFile());
        assertTrue(pathWithSlash.endsWith("/"));
        
        String[] names = Utils.getFileNames(folderPath, ".txt");
        assertNotNull(names);
        assertTrue(names.length >= 1);
        
        // Clean up
        file.delete();
        new File(folderPath).delete();
    }
}
