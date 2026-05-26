package edu.uclm.qumugen;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import static org.junit.jupiter.api.Assertions.assertNotNull;

class QumuGenAppTest {

    @Test
    void testMain() {
        // Start the application context
        ConfigurableApplicationContext context = SpringApplication.run(QumuGenApp.class, new String[]{});
        assertNotNull(context);
        
        // Close the context to free resources
        context.close();
    }
}
