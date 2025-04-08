package edu.uclm.qumugen;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@ServletComponentScan
public class QumuGenApp extends SpringBootServletInitializer {
	
	public static void main( String[] args ) throws IOException {
		String defaultPort = "8500";

    	System.out.print("QumuGen's listening port (enter for default: " + defaultPort + "): ");
    	BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
    	
    	// Usar un ExecutorService para manejar el tiempo límite de 5 segundos
        ExecutorService executor = Executors.newSingleThreadExecutor();
        Callable<String> task = () -> reader.readLine().trim();

        Future<String> future = executor.submit(task);
        String sPort = null;
        try {
            // Esperar hasta 5 segundos para que el usuario ingrese un valor
            sPort = future.get(5, TimeUnit.SECONDS);
        } catch (TimeoutException e) {
            // Si se exceden los 5 segundos, usar el puerto por defecto
            System.out.println("\nNo input received. Using default port: " + defaultPort);
            sPort = defaultPort;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executor.shutdown();
        }

        // Si el usuario no introduce un puerto, usar el puerto por defecto
        if (sPort == null || sPort.isEmpty()) {
            sPort = defaultPort;
        }

        SpringApplication app = new SpringApplication(QumuGenApp.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", sPort));
        app.run(args);
	}
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(QumuGenApp.class);
    }
}
