import { fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { JobStatus, pollJob } from './job-polling';

describe('pollJob', () => {
    function statusSequence(states: JobStatus[]) {
        let i = 0;
        return () => of(states[Math.min(i++, states.length - 1)]);
    }

    it('emite el resultado tras QUEUED -> RUNNING -> DONE', fakeAsync(() => {
        const getStatus = statusSequence([
            { id: 'j', status: 'QUEUED' },
            { id: 'j', status: 'RUNNING' },
            { id: 'j', status: 'DONE' }
        ]);
        let result: any;
        let calls = 0;
        pollJob(getStatus, () => { calls++; return of({ ok: 1 }); }, 1000).subscribe(r => result = r);
        tick(0);
        expect(result).toBeUndefined();
        tick(1000);
        expect(result).toBeUndefined();
        tick(1000);
        expect(result).toEqual({ ok: 1 });
        expect(calls).toBe(1);
        tick(5000); // no debe seguir sondeando
    }));

    it('propaga el error cuando el trabajo acaba en FAILED', fakeAsync(() => {
        const getStatus = statusSequence([
            { id: 'j', status: 'RUNNING' },
            { id: 'j', status: 'FAILED', error: 'Calculation timeout' }
        ]);
        let error: any;
        let resultCalled = false;
        pollJob(getStatus, () => { resultCalled = true; return of(null); }, 1000)
            .subscribe({ error: e => error = e });
        tick(1000);
        expect(error).toBeDefined();
        expect(error.message).toBe('Calculation timeout');
        expect(resultCalled).toBeFalse();
    }));
});
