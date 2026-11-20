# qiskitexec — circuit and mutant executor

Spring Boot 4.0.2 / Java 21 service that executes circuits and mutants and applies an execution strategy to decide which programs run. Part of [Qumuclient](../../README.md).

## Run

```bash
mvn spring-boot:run     # asks for a port; Enter (or 5 s without input) uses 8502
mvn test
```

## Configuration

`src/main/resources/application.properties` (names only; do not commit real endpoints or secrets):

| Property | Purpose |
|---|---|
| `proxy.url`, `proxy.enabled` | Optional proxy to reach the runner from outside the institutional network |
| `remote.runner.url` | `remote_runner` base URL |
| `execution.mode`, `execution.poll.max-interval-ms` | Sync/async mode and polling |
| `execution.batch.size` | Programs per batch |
| `execution.timeout.seconds`, `execution.timeout.max-total-seconds` | No-progress timeout and total timeout |
| `jobs.max-concurrent`, `jobs.orphan-timeout-seconds`, `jobs.result-ttl-seconds` | Job lifecycle |

## API

| Method | Path | Description |
|---|---|---|
| POST | `/strategy/jobs/executeOne` | Start a job for one circuit |
| POST | `/strategy/jobs/executeWithStrategy` | Start a job for mutants with a strategy |
| GET | `/strategy/jobs/{id}` | Job status |
| GET | `/strategy/jobs/{id}/result` | Job result |
| PUT | `/strategy/executeOne`, `/strategy/executeWithStrategy` | Synchronous variants |
| GET | `/strategy/getCores` | Available cores |
| GET | `/simple/getQiskitTemplate` | Qiskit template |

## How it works

`CentralizedProxyRunner` sends batches to `remote_runner` (`/run_qiskit_editor`), then polls the batch status until the batch finishes or no progress is made within the timeout. Strategies live in `runners/algorithms` (`AllAgainstAll`, `OnlyAlive`, plus the `Fitnesser` and `Initializer` helpers); see the classes for how each one schedules mutant executions.

```mermaid
flowchart LR
    C["Client"] -->|POST job| JC["StrategyJobController"]
    JC --> JS["JobService<br/>(async, TTL)"]
    JS --> ST["Strategy<br/>AllAgainstAll / OnlyAlive"]
    ST --> RUN["CentralizedProxyRunner"]
    RUN -->|"/run_qiskit_editor"| RR["remote_runner"]
    RUN -->|"/status polling"| RR
```
