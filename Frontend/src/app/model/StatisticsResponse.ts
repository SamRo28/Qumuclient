export interface StatisticsDetail {
    percentage: number;
    killed: number;
    total: number;
}

export interface SubsumedMutantDetail {
    redundant_mutant: string;
    subsumed_by: string;
    reason: string;
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
    kill_rate_per_mutant: { [key: string]: StatisticsDetail };
    rarely_killed_mutants: string[];
    subsumed_mutants: SubsumedMutantDetail[];
    tests_with_unique_kills: { [key: string]: string[] };
    most_lethal_operators?: OperatorStatistic[];
    innocuous_operators?: OperatorStatistic[];
    zombie_summary?: ZombieSummary;
    unstable_operators?: ZombieOperatorStatistic[];
}
