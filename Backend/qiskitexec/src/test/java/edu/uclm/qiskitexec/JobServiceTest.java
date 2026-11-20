package edu.uclm.qiskitexec;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.concurrent.atomic.AtomicBoolean;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import edu.uclm.qiskitexec.services.JobService;
import edu.uclm.qiskitexec.services.JobService.Job;

public class JobServiceTest {

    private JobService jobService;

    @BeforeEach
    public void setUp() {
        jobService = new JobService(2, 1, 1);
    }

    @AfterEach
    public void tearDown() {
        if (jobService != null) {
            jobService.shutdown();
        }
    }

    @Test
    public void finishedJobReturnsResultOnce() throws Exception {
        String id = jobService.submit("test", () -> "ok");

        long start = System.currentTimeMillis();
        Job job = null;
        while (System.currentTimeMillis() - start < 5000) {
            job = jobService.status(id);
            if ("finished".equals(job.state)) {
                break;
            }
            Thread.sleep(50);
        }

        assertEquals("finished", job.state);
        Object result = jobService.takeResult(id);
        assertEquals("ok", result);

        ResponseStatusException ex = assertThrows(ResponseStatusException.class, () -> jobService.takeResult(id));
        assertEquals(HttpStatus.NOT_FOUND, ex.getStatusCode());
    }

    @Test
    public void failedJobKeepsHttpStatus() throws Exception {
        String id = jobService.submit("test", () -> {
            throw new ResponseStatusException(HttpStatus.GATEWAY_TIMEOUT, "x");
        });

        long start = System.currentTimeMillis();
        Job job = null;
        while (System.currentTimeMillis() - start < 5000) {
            job = jobService.status(id);
            if ("failed".equals(job.state)) {
                break;
            }
            Thread.sleep(50);
        }

        assertEquals("failed", job.state);
        assertEquals(504, job.httpStatus);
        assertEquals("x", job.error);
    }

    @Test
    public void cancelInterruptsTask() throws Exception {
        AtomicBoolean interrupted = new AtomicBoolean(false);
        String id = jobService.submit("test", () -> {
            try {
                Thread.sleep(10_000);
            } catch (InterruptedException e) {
                interrupted.set(true);
                Thread.currentThread().interrupt();
            }
            return null;
        });

        long start = System.currentTimeMillis();
        while (System.currentTimeMillis() - start < 5000) {
            Job job = jobService.status(id);
            if ("running".equals(job.state)) {
                break;
            }
            Thread.sleep(50);
        }

        boolean cancelled = jobService.cancel(id);
        assertTrue(cancelled);

        long waitStart = System.currentTimeMillis();
        while (!interrupted.get() && System.currentTimeMillis() - waitStart < 2000) {
            Thread.sleep(50);
        }
        assertTrue(interrupted.get());

        ResponseStatusException ex = assertThrows(ResponseStatusException.class, () -> jobService.status(id));
        assertEquals(HttpStatus.NOT_FOUND, ex.getStatusCode());
    }

    @Test
    public void orphanJobIsCancelled() throws Exception {
        AtomicBoolean interrupted = new AtomicBoolean(false);
        jobService.submit("test", () -> {
            try {
                Thread.sleep(10_000);
            } catch (InterruptedException e) {
                interrupted.set(true);
                Thread.currentThread().interrupt();
            }
            return null;
        });

        // Espera 1.5s sin consultar status (orphanTimeoutSeconds = 1s)
        Thread.sleep(1500);

        jobService.sweep();

        long waitStart = System.currentTimeMillis();
        while (!interrupted.get() && System.currentTimeMillis() - waitStart < 2000) {
            Thread.sleep(50);
        }
        assertTrue(interrupted.get());
    }
}
