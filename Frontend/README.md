# Qumuclient Frontend

Angular 14.2 single-page application for designing circuits, launching mutation experiments and exploring their results. Part of [Qumuclient](../README.md).

## Run

```bash
npm install
npm start       # ng serve → http://localhost:4200
npm run build   # production build
npm test        # Karma unit tests
```

## Configuration

`src/environments/environment.ts` (and `environment.prod.ts`) define the service URLs:

| Key | Service |
|---|---|
| `api.core` | `reper` core API |
| `api.mutation` | `qumugen` |
| `api.execution` | `qiskitexec` |
| `api.statistics` | `reper` statistics endpoints |
| `loginUrl` | QSauron login page |

## Main areas (`src/app/`)

`experiment-wizard`, `experiments-dashboard`, `experiment-detail`, `experiment-progress-tracker`, `experiment-resume-modal`, `circuit`, `circuit-import`, `circuit-viewer`, `circuits-configuration`, `mutants-general`, `mutants-info`, `mutants-visual`, `mutants-code`, `mutant-cycle-info` (killing matrix), `statistics-visualizer`, `project-notes`, `import-projects`, `chat-side-bar`.

Design tokens and components follow the [glassmorphism style guide](GLASSMORPHISM_STYLE_GUIDE.md).
