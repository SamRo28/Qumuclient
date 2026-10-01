package edu.uclm.qiskitexec.services;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.Callable;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import jakarta.annotation.PreDestroy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class JobService {

    private static final Logger log = LoggerFactory.getLogger(JobService.class);

    public static class Job {
        public final String id;
        public final String kind;
        public volatile String state;
        public volatile Object result;
        public volatile String error;
        public volatile int httpStatus;
        public volatile long createdAt;
        public volatile long finishedAt;
        public volatile long lastPolledAt;
        public Future<?> future;

        public Job(String id, String kind) {
            this.id = id;
            this.kind = kind;
            this.state = "queued";
            long now = System.currentTimeMillis();
            this.createdAt = now;
            this.lastPolledAt = now;
        }
    }

    private final int orphanTimeoutSeconds;
    private final int resultTtlSeconds;
    private final ExecutorService executor;
    private final ScheduledExecutorService sweeper;
    private final Map<String, Job> jobs = new ConcurrentHashMap<>();

    public JobService(
            @Value("${jobs.max-concurrent:4}") int maxConcurrent,
            @Value("${jobs.orphan-timeout-seconds:120}") int orphanTimeoutSeconds,
            @Value("${jobs.result-ttl-seconds:3600}") int resultTtlSeconds) {
        this.orphanTimeoutSeconds = orphanTimeoutSeconds;
        this.resultTtlSeconds = resultTtlSeconds;

        AtomicInteger threadNum = new AtomicInteger(1);
        this.executor = Executors.newFixedThreadPool(maxConcurrent, r -> {
            Thread t = new Thread(r, "qiskitexec-job-" + threadNum.getAndIncrement());
            return t;
        });

        this.sweeper = Executors.newSingleThreadScheduledExecutor(r -> {
            Thread t = new Thread(r, "qiskitexec-job-sweeper");
            t.setDaemon(true);
            return t;
        });
        this.sweeper.scheduleWithFixedDelay(this::sweep, 15, 15, TimeUnit.SECONDS);
    }

    @PreDestroy
    public void shutdown() {
        if (this.executor != null) {
            this.executor.shutdownNow();
        }
        if (this.sweeper != null) {
            this.sweeper.shutdownNow();
        }
    }

    public String submit(String kind, Callable<Object> task) {
        String id = UUID.randomUUID().toString();
        Job job = new Job(id, kind);
        jobs.put(id, job);
        job.future = executor.submit(() -> run(job, task));
        return id;
    }

    private void run(Job job, Callable<Object> task) {
        if ("cancelled".equals(job.state)) {
            return;
        }
        job.state = "running";
        try {
            Object res = task.call();
            if (!"cancelled".equals(job.state)) {
                job.result = res;
                job.state = "finished";
            }
        } catch (ResponseStatusException e) {
            if (!"cancelled".equals(job.state)) {
                job.state = "failed";
                job.httpStatus = e.getStatusCode().value();
                job.error = e.getReason();
            }
        } catch (Exception e) {
            if (!"cancelled".equals(job.state)) {
                job.state = "failed";
                job.httpStatus = 400;
                job.error = e.getMessage();
            }
        } finally {
            job.finishedAt = System.currentTimeMillis();
            long totalMs = job.finishedAt - job.createdAt;
            log.info("[PERF] job id={} kind={} state={} totalMs={}", job.id, job.kind, job.state, totalMs);
        }
    }

    public Job status(String id) {
        Job job = jobs.get(id);
        if (job == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Job " + id + " not found");
        }
        job.lastPolledAt = System.currentTimeMillis();
        return job;
    }

    public Object takeResult(String id) {
        Job job = jobs.get(id);
        if (job == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Job " + id + " not found");
        }
        if (!"finished".equals(job.state)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Job " + id + " is " + job.state);
        }
        jobs.remove(id);
        return job.result;
    }

    public boolean cancel(String id) {
        Job job = jobs.get(id);
        if (job == null) {
            return false;
        }
        if ("queued".equals(job.state) || "running".equals(job.state)) {
            job.state = "cancelled";
            job.finishedAt = System.currentTimeMillis();
            if (job.future != null) {
                job.future.cancel(true);
            }
        }
        jobs.remove(id);
        return true;
    }

    public void sweep() {
        long now = System.currentTimeMillis();
        for (Job job : new ArrayList<>(jobs.values())) {
            if (("queued".equals(job.state) || "running".equals(job.state))
                    && (now - job.lastPolledAt > orphanTimeoutSeconds * 1000L)) {
                log.warn("Job {} huérfano (sin sondeo en {} s); se cancela", job.id, orphanTimeoutSeconds);
                cancel(job.id);
            } else if (("finished".equals(job.state) || "failed".equals(job.state))
                    && (now - job.finishedAt > resultTtlSeconds * 1000L)) {
                jobs.remove(job.id);
            }
        }
    }

    public Map<String, Object> toStatusMap(Job j) {
        Map<String, Object> map = new LinkedHashMap<>();
        map.put("jobId", j.id);
        map.put("kind", j.kind);
        map.put("state", j.state);
        map.put("error", j.error);
        map.put("httpStatus", j.httpStatus);
        long end = j.finishedAt > 0 ? j.finishedAt : System.currentTimeMillis();
        map.put("elapsedMs", Math.max(0, end - j.createdAt));
        return map;
    }
}
