import { MutantCycle } from './MutantCycle';

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
}

export interface ExperimentProgress {
    id: string;
    name: string;
    status: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
    totalCircuits: number;
    completedCircuits: number;
    percentage: number;
    durationSeconds?: number;
    startedAt?: string | Date;
}

export interface ExperimentSummary {
    id: string;
    name: string;
    status: 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
    createdAt: string | Date;
    finishedAt?: string | Date;
    durationSeconds?: number;
    totalCircuits: number;
    completedCircuits: number;
    machine?: string;
    execAlgorithm?: string;
    errorMessage?: string;
    mutantCycles?: any[];
}
