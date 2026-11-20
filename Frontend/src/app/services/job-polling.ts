import { Observable, throwError, timer } from 'rxjs';
import { last, switchMap, takeWhile } from 'rxjs/operators';

export type JobState = 'QUEUED' | 'RUNNING' | 'DONE' | 'FAILED';

export interface JobStatus {
    id: string;
    kind?: string;
    status: JobState;
    error?: string | null;
}

/**
 * Sondea el estado de un trabajo de reper cada `intervalMs` hasta que termina.
 * Emite el estado final (DONE) o falla con el mensaje de error si acaba en FAILED.
 */
export function pollJobDone(getStatus: () => Observable<JobStatus>, intervalMs: number = 3000): Observable<JobStatus> {
    return timer(0, intervalMs).pipe(
        switchMap(() => getStatus()),
        takeWhile(s => s.status === 'QUEUED' || s.status === 'RUNNING', true),
        last(),
        switchMap(s => s.status === 'FAILED'
            ? throwError(() => new Error(s.error || 'Job failed'))
            : [s])
    );
}

/** Igual que `pollJobDone`, pero al terminar con éxito pide y emite el resultado del trabajo. */
export function pollJob<T>(
    getStatus: () => Observable<JobStatus>,
    getResult: () => Observable<T>,
    intervalMs: number = 3000
): Observable<T> {
    return pollJobDone(getStatus, intervalMs).pipe(switchMap(() => getResult()));
}
