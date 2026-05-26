import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { ManagerService } from './manager.service';
import { QiskitExecutorService } from './qiskit-executor.service';
import { QumugenService } from './qumugen.service';
import { MutantCycle } from '../model/MutantCycle';
import { Mutant } from '../model/Mutant';
import { Result, MutantResult } from '../model/MutantResult';
import { AppComponent } from '../app.component';
import { Project } from '../model/Project';
import { TestSuite } from '../model/TestSuite';
import { Deterministic } from '../model/Deterministic';

export interface ExecutionStatus {
    isRunning: boolean;
    progress: number;
    total: number;
    message: string;
}

@Injectable({
    providedIn: 'root'
})
export class MutantExecutionService {
    private activeExecutions = new Map<number, Subscription>(); // cycleId -> Subscription
    private statusSubjects = new Map<number, BehaviorSubject<ExecutionStatus>>();

    // Global event when any execution updates (useful for refreshing views)
    private executionUpdateSubject = new Subject<{ cycleId: number, mutantsProcessed: number }>();
    public executionUpdate$ = this.executionUpdateSubject.asObservable();

    constructor(
        private manager: ManagerService,
        private qe: QiskitExecutorService,
        private qumugen: QumugenService
    ) { }

    public getStatus(cycleId: number): Observable<ExecutionStatus> {
        if (!this.statusSubjects.has(cycleId)) {
            this.statusSubjects.set(cycleId, new BehaviorSubject<ExecutionStatus>({
                isRunning: false,
                progress: 0,
                total: 0,
                message: ''
            }));
        }
        return this.statusSubjects.get(cycleId)!.asObservable();
    }

    public isRunning(cycleId: number): boolean {
        return this.activeExecutions.has(cycleId);
    }

    public stopExecution(cycleId: number) {
        if (this.activeExecutions.has(cycleId)) {
            this.activeExecutions.get(cycleId)?.unsubscribe();
            this.activeExecutions.delete(cycleId);
            this.updateStatus(cycleId, { isRunning: false, message: 'Execution stopped.' });
        }
    }

    public startExecution(mutantCycle: MutantCycle, project: Project) {
        const cycleId = mutantCycle.id as number;

        // Calculate start index based on existing results
        let startIndex = 0;
        if (mutantCycle.mutants) {
            for (let i = 0; i < mutantCycle.mutants.length; i++) {
                const mutant = mutantCycle.mutants[i];
                if (!mutant.mutantResults || mutant.mutantResults.length === 0) {
                    startIndex = i;
                    break;
                }
                // If we reached the end and all have results
                if (i === mutantCycle.mutants.length - 1 && mutant.mutantResults && mutant.mutantResults.length > 0) {
                    this.manager.showNotification("Todas las ejecuciones ya se han completado para este ciclo.", "success", 5000);
                    return;
                }
            }
        }

        if (this.activeExecutions.has(cycleId)) {
            console.warn(`Execution for cycle ${cycleId} is already running.`);
            return;
        }

        // Initialize Status
        const totalMutants = mutantCycle.mutants.length;
        this.updateStatus(cycleId, {
            isRunning: true,
            progress: 0,
            total: totalMutants,
            message: 'Starting execution...'
        });

        // Configuration
        if (mutantCycle.execConfiguration) {
            // mutantCycle.execConfiguration.executionDate = new Date(); // USER REQUEST: Use the date from configuration, dont overwrite
            if (mutantCycle.execConfiguration.execAlgorithm) {
                this.manager.executionAlgorithm = mutantCycle.execConfiguration.execAlgorithm;
            }
        }

        let inputs: string[] | undefined = undefined;

        if (this.manager.executionAlgorithm === 'TestSuite' && mutantCycle.execConfiguration?.testSuiteId) {
            const testSuite = project.testSuites.find(ts => ts.id === mutantCycle.execConfiguration!.testSuiteId);

            if (testSuite) {
                inputs = [];
                testSuite.testCases.forEach(testCase => {
                    if (testCase.type === 'DETERMINISTIC') {
                        const deterministicCase = testCase as Deterministic;
                        inputs!.push(deterministicCase.entryValues.join(''));
                    }
                });
            }
        }

        this.updateStatus(cycleId, { message: 'Running original circuit...' });

        // SNAPSHOT: Capture current Input/Output Qubits.
        // These values will be used throughout the entire execution process.
        let originalInputQubits = this.manager.inputQubits;
        let inputQubits = originalInputQubits;
        let outputQubits = this.manager.outputQubits;

        // If outputQubits is empty, default to all qubits (0..n-1)
        if (!outputQubits) {
            const qubitCount = project.qProgram.qubits;
            if (qubitCount > 0) {
                outputQubits = Array.from({ length: qubitCount }, (_, i) => i).join(',');
            }
        }

        // If inputQubits is empty, default to all qubits and explicitly evaluate only '00...0' when AllAgainstAll
        if (!inputQubits || inputQubits.trim() === '') {
            const qubitCount = project.qProgram.qubits;
            if (qubitCount > 0) {
                inputQubits = Array.from({ length: qubitCount }, (_, i) => i).join(',');
                if (this.manager.executionAlgorithm === 'AllAgainstAll') {
                    inputs = ['0'.repeat(qubitCount)];
                }
            }
        }

        // 1. Run Original Circuit (RunOne)
        const runOneSub = this.qe.runOne(
            project.qProgram,
            inputQubits,
            outputQubits,
            this.manager.executionAlgorithm || "AllAgainstAll",
            project.qProgram.qubits,
            false,
            inputs
        ).subscribe({
            next: (originalResults) => {
                // Prepare to run mutants
                this.updateStatus(cycleId, { message: startIndex > 0 ? `Resuming execution from mutant ${startIndex}...` : 'Running mutants...' });
                this.runMutantsBatch(mutantCycle, project, originalResults, startIndex, 5, inputQubits, outputQubits, inputs);
            },
            error: (err) => {
                console.error("Error running original circuit", err);
                this.stopExecution(cycleId);
                this.updateStatus(cycleId, { isRunning: false, message: 'Error running original circuit.' });
                this.manager.showNotification("Error executing original circuit", 'error', 5000);
            }
        });

        this.activeExecutions.set(cycleId, runOneSub);
    }

    private runMutantsBatch(
        cycle: MutantCycle,
        project: Project,
        originalResults: any,
        start: number,
        chunkSize: number,
        inputQubits: string,
        outputQubits: string,
        inputs?: string[]
    ) {
        const cycleId = cycle.id as number;

        // Check if stopped
        if (!this.activeExecutions.has(cycleId)) return;

        // Ensure originalResults is an array (Backend expects ArrayList)
        const safeOriginalResults = Array.isArray(originalResults) ? originalResults : [originalResults];

        let end = start + chunkSize;
        if (end > cycle.mutants.length) end = cycle.mutants.length;

        const mutantsToFormat = cycle.mutants.slice(start, end);
        const formattedMutants = this.formatMutantsForCode(mutantsToFormat);

        if (mutantsToFormat.length > 0) {
            const batchSub = this.qumugen.getMultipleQiskitCode(formattedMutants, outputQubits).subscribe({
                next: (results) => {
                    // Check if stopped
                    if (!this.activeExecutions.has(cycleId)) return;

                    this.qe.executeWithStrategy(
                        results,
                        safeOriginalResults,
                        this.manager.executionAlgorithm,
                        this.manager.toleratedError, // Again, relying on manager state.
                        false,
                        inputQubits,
                        outputQubits,
                        inputs
                    ).subscribe({
                        next: (result) => {
                            // Check if stopped
                            if (!this.activeExecutions.has(cycleId)) return;

                            this.processMutantResults(cycle, project, result, start, inputs);

                            // Update Progress
                            const newProgress = start + mutantsToFormat.length;
                            this.updateStatus(cycleId, {
                                progress: newProgress,
                                message: `Processed ${newProgress} / ${cycle.mutants.length} mutants...`
                            });
                            this.executionUpdateSubject.next({ cycleId, mutantsProcessed: newProgress });

                            // Next Batch or Finish
                            if (newProgress >= cycle.mutants.length) {
                                this.finishExecution(cycleId);
                            } else {
                                this.runMutantsBatch(cycle, project, originalResults, end, chunkSize, inputQubits, outputQubits, inputs);
                            }
                        },
                        error: (err) => {
                            console.error("Error executing strategy", err);
                            this.stopExecution(cycleId);
                        }
                    });
                },
                error: (err) => {
                    console.error("Error generating qiskit code", err);
                    this.stopExecution(cycleId);
                }
            });
            // Update subscription to current batch (chained)
            // Note: We are overwriting the subscription, which is okay because the previous one completed.
            // But we lose the ability to cancel 'getMultipleQiskitCode' if we only store the outer one.
            // For simplicity in this plan: just keeping track that we are running is enough to check the flag 'activeExecutions.has'.
            this.activeExecutions.set(cycleId, batchSub);
        } else {
            // Should not happen if loop logic is correct
            this.finishExecution(cycleId);
        }
    }

    private finishExecution(cycleId: number) {
        this.updateStatus(cycleId, { isRunning: false, message: 'Execution finished.', progress: 100 }); // actually we might want to keep progress maxed
        this.activeExecutions.delete(cycleId);

        // Notify Manager/Project
        // We need to find the cycle and mark it as newly generated
        // Since we passed the object reference, we can update it directly, assuming it's still same ref.
        // But for marking project as modified, we need the project.
        // In startExecution we passed 'project'. 
        // Ideally we should re-fetch to be safe or store relationship.
        // For now, let's assume the user of this service handles the "Project Modified" state if they are still on the page,
        // or we can inject logic here.

        // Emitting a final update
        this.manager.showNotification("The mutants execution has finished", 'success', 5000);
        this.executionUpdateSubject.next({ cycleId, mutantsProcessed: -1 }); // -1 indicates done
    }


    private formatMutantsForCode(mutants: Mutant[]) {
        let formattedMutants: any[] = []
        for (let mutant of mutants) {
            let formattedCircuit = {
                quirkCode: mutant.circuit?.qCircuit.quirkCode,
                qubits: mutant.circuit?.qubits
            }
            let formattedMutant: any = {
                mutantIndex: mutant.mutantIndex,
                circuit: formattedCircuit
            }
            formattedMutants.push(formattedMutant)
        }
        return formattedMutants
    }

    private processMutantResults(cycle: MutantCycle, project: Project, results: any[][], start: number, inputs?: string[]) {
        // results is a list of lists.
        // results[m] contains the list of execution results for Mutant 'm'.

        for (let m = 0; m < results.length; m++) {
            const globalIndex = m + start;
            // Find mutant by index or just position if they are ordered?
            // The component used slice, so it matches the order in 'cycle.mutants'
            const mutant = cycle.mutants[globalIndex];
            if (!mutant) continue;

            const mutantExecutionResults = results[m];

            // Update Mutant Results
            if (!mutant.mutantResults) mutant.mutantResults = [];

            for (let i = 0; i < mutantExecutionResults.length; i++) {
                const batchResult = mutantExecutionResults[i];
                if (!batchResult) continue;

                const killed = batchResult.killed;
                const error = batchResult.error;

                const id = inputs ? parseInt(inputs[i], 2) : i;

                const mr = new MutantResult({
                    id: id,
                    result: killed ? Result.KILLED : Result.ALIVE,
                    error: error
                });

                // Replace or Add
                // check if exists? usually we are overwriting
                mutant.mutantResults[i] = mr;
            }

            // Determine Overall Result
            const anyKilled = mutant.mutantResults.some(r => r.result === Result.KILLED);
            mutant.result = new MutantResult({ result: anyKilled ? Result.KILLED : Result.ALIVE });
        }

        // Mark cycle/project as modified?
        cycle.newlyGenerated = true;
        // Need to tell manager to save?
        // Since we don't have direct access to 'markProjectAsModified' without being in manager context...
        // We can call it:
        this.manager.markProjectAsModified(project);
    }

    private updateStatus(cycleId: number, statusScale: Partial<ExecutionStatus>) {
        if (!this.statusSubjects.has(cycleId)) {
            this.statusSubjects.set(cycleId, new BehaviorSubject<ExecutionStatus>({
                isRunning: false,
                progress: 0,
                total: 0,
                message: ''
            }));
        }
        const current = this.statusSubjects.get(cycleId)!.value;
        this.statusSubjects.get(cycleId)!.next({ ...current, ...statusScale });
    }
}
