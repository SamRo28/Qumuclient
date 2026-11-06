export interface StatisticsDetail {
    percentage: number;
    killed: number;
    total: number;
}

export interface KillRateGroup {
    killed: number;
    percentage: number;
    mutants: string[];
}

export interface KillRatePerMutant {
    total: number;
    groups: KillRateGroup[];
}

export interface SubsumptionSummary {
    killed_mutants: number;
    redundant: number;
    minimal: number;
    redundancy_rate: number;
    classes: number;
}

export interface SubsumptionClass {
    id: number;
    killed_by: number[];
    num_tests: number;
    size: number;
    redundant: number;
    subsumed_by: string;
    subsumed_by_tests: number;
    mutants: string[];
}

export interface SubsumptionOperatorStat {
    operator: string;
    killed: number;
    redundant: number;
    redundancy_rate: number;
}

export interface Subsumption {
    summary: SubsumptionSummary;
    tests: string[];
    classes: SubsumptionClass[];
    by_operator: SubsumptionOperatorStat[];
}

export interface OperatorStatistic {
    operator: string;
    total: number;
    killed: number;
    kill_rate: number;
}

export interface ZombieOperatorStatistic {
    operator: string;
    total: number;
    zombie: number;
    zombie_rate: number;
}

export interface ZombieSummary {
    total: number;
    zombie: number;
    percentage: number;
}

export interface StatisticsResponse {
    mutation_score: StatisticsDetail;
    kill_rate_per_test: { [key: string]: StatisticsDetail };
    kill_rate_per_mutant: KillRatePerMutant;
    rarely_killed_mutants: string[];
    subsumption: Subsumption;
    tests_with_unique_kills: { [key: string]: string[] };
    most_lethal_operators?: OperatorStatistic[];
    innocuous_operators?: OperatorStatistic[];
    zombie_summary?: ZombieSummary;
    unstable_operators?: ZombieOperatorStatistic[];
}
