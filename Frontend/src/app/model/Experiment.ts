import { NoiseConfig } from './NoiseConfig';

export interface CircuitConfig {
    projectId: string;
    projectName?: string;
    qubits?: number;
    inputQubits: string;
    outputQubits: string;
    qubitsIndices?: number[];
    inputQubitsSelection?: boolean[];
    outputQubitsSelection?: boolean[];
}

export interface CreateExperimentRequest {
    name: string;
    circuitConfigs: CircuitConfig[];
    operatorNames: string[];
    machine: string;
    execAlgorithm: string;
    toleratedError: number;
    zombieError: number;
    shots: number;
    email: string;
    noiseConfigs?: NoiseConfig[];
}

export type ExperimentStatus = 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

export interface ExperimentProgress {
    id: string;
    name: string;
    status: ExperimentStatus;
    totalCircuits: number;
    completedCircuits: number;
    percentage: number;
    durationSeconds?: number;
    startedAt?: string | Date;
}

export interface ExperimentListItem {
    id: string;
    name: string;
    status: ExperimentStatus;
    createdAt: string | Date;
    finishedAt?: string | Date;
    durationSeconds?: number;
    totalCircuits: number;
    completedCircuits: number;
    hadFailures?: boolean;
    resumable?: boolean;
}

export interface CycleStats {
    id: number;
    name: string;
    projectId: string;
    projectName: string;
    totalMutants: number;
    killedCount: number;
    zombieCount: number;
    aliveCount: number;
    notExecutedCount: number;
    mutationScore?: number | null;
    generationCompleted?: boolean | null;
    inputQubits?: string | null;
    outputQubits?: string | null;
}

export interface ExperimentDetail extends ExperimentListItem {
    machine?: string;
    execAlgorithm?: string;
    errorMessage?: string;
    errorHistory?: string | null;
    resumeCount?: number;
    mergedFrom?: string | null;
    cycles: CycleStats[];
}

export interface ResumePendingCycle {
    projectId: string;
    cycleId: number;
    name: string;
    pendingMutants: number;
    inputQubits?: string | null;
    outputQubits?: string | null;
    needsQubits: boolean;
}

export interface ResumeSkippedCycle {
    projectId: string;
    cycleId: number;
    name: string;
    reason: string;
}

export interface ResumePreview {
    resumable: boolean;
    reason?: string | null;
    pendingCycles: ResumePendingCycle[];
    skippedCycles: ResumeSkippedCycle[];
    remainingCircuits: number;
    hasDefinition: boolean;
}

export interface ResumeCycleQubits {
    projectId: string;
    cycleId: number;
    inputQubits: string;
    outputQubits: string;
}

export interface MergePreview {
    survivorId: string;
    survivorName: string;
    deletedId: string;
    deletedName: string;
    cyclesToMove: number;
    duplicateCyclesToDelete: { projectId: string; cycleId: number; name: string }[];
    resultingStatus: ExperimentStatus;
}

