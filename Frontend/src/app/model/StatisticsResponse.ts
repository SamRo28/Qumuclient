export interface StatisticsResponse {
    mutation_score: number;
    kill_rate_per_test: { [key: string]: number };
    kill_rate_per_mutant: { [key: string]: number };
    rarely_killed_mutants: string[];
    subsumed_mutants: string[];
}
