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
}

export interface ExperimentDetail extends ExperimentListItem {
    machine?: string;
    execAlgorithm?: string;
    errorMessage?: string;
    cycles: CycleStats[];
}

