import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsResponse, OperatorStatistic, ZombieOperatorStatistic, ZombieSummary } from '../model/StatisticsResponse';
import { ManagerService } from '../services/manager.service';

interface ChartItem {
    label: string;
    value: number; // 0 to 1
    displayValue: string; // "50%"
    tooltip: string; // "Killed: 50, Total: 100"
}

interface OperatorRankItem {
    operator: string;
    killRate: number;      // 0 to 1
    killed: number;
    total: number;
    displayValue: string;  // "80% (4)"
    tooltip: string;
}

interface UnstableOperatorItem {
    operator: string;
    zombieRate: number;    // 0 to 1
    zombie: number;
    total: number;
    displayValue: string;  // "40% (2)"
    tooltip: string;
}

interface uniqueKillItem {
    test: string;
    mutants: string[];
    count: number;
}

interface SubsumedGroup {
    representative: string;
    redundants: {
        mutant: string;
        reason: string;
    }[];
}

@Component({
    selector: 'app-statistics-visualizer',
    templateUrl: './statistics-visualizer.component.html',
    styleUrls: ['./statistics-visualizer.component.css']
})
export class StatisticsVisualizerComponent implements OnInit, OnDestroy {

    @Input() inputStatistics: StatisticsResponse | null = null;
    @Input() isEmbedded: boolean = false;

    statistics: StatisticsResponse | null = null;

    testRates: ChartItem[] = [];
    mutantRates: ChartItem[] = [];
    testsWithUniqueKills: uniqueKillItem[] = [];
    subsumedGroups: SubsumedGroup[] = [];
    mostLethalOperators: OperatorRankItem[] = [];
    innocuousOperators: OperatorRankItem[] = [];
    unstableOperators: UnstableOperatorItem[] = [];
    zombieSummary: ZombieSummary | null = null;

    survivingMutants: { count: number, total: number, percentage: number } | null = null;

    // AI Analysis
    analysisResult: string | null = null;
    conversationId: string | null = null;
    isAnalyzing: boolean = false;

    // Sidebar State
    isSidebarOpen: boolean = false;
    hasAnalyzed: boolean = false;

    constructor(
        private statisticsService: StatisticsService,
        private router: Router,
        private manager: ManagerService
    ) { }

    ngOnInit(): void {
        this.manager.showSaveButton = false;

        if (this.inputStatistics) {
            this.statistics = this.inputStatistics;
        } else {
            this.statistics = this.statisticsService.getStatistics();
        }

        if (!this.statistics && !this.isEmbedded) {
            this.router.navigate(['/']);
            return;
        }

        this.processData();
    }

    processData() {
        if (!this.statistics) return;

        // Process Kill Rate per Test
        this.testRates = Object.entries(this.statistics.kill_rate_per_test)
            .map(([key, value]) => ({
                label: `Test ${key}`,
                value: value.percentage,
                displayValue: `${(value.percentage * 100).toFixed(1)}% (${value.killed})`,
                tooltip: `Killed: ${value.killed}, Total: ${value.total}`
            }))
            .sort((a, b) => b.value - a.value);

        // Process Kill Rate per Mutant
        this.mutantRates = Object.entries(this.statistics.kill_rate_per_mutant)
            .map(([key, value]) => ({
                label: `Mutant ${key}`,
                value: value.percentage,
                displayValue: `${(value.percentage * 100).toFixed(1)}% (${value.killed})`,
                tooltip: `Killed: ${value.killed}, Total: ${value.total}`
            }))
            .sort((a, b) => b.value - a.value);

        // Process Surviving Mutants
        // Surviving = Total - Killed
        const killed = this.statistics.mutation_score.killed;
        const total = this.statistics.mutation_score.total;
        const surviving = total - killed;
        this.survivingMutants = {
            count: surviving,
            total: total,
            percentage: total > 0 ? surviving / total : 0
        };

        // Process Tests with Unique Kills
        this.testsWithUniqueKills = Object.entries(this.statistics.tests_with_unique_kills).map(([key, value]) => ({
            test: key,
            mutants: value,
            count: value.length
        })).filter(item => item.count > 0);

        // Process Subsumed Groups (grouped by representative parent)
        const groupsMap = new Map<string, { mutant: string; reason: string }[]>();
        if (this.statistics.subsumed_mutants) {
            for (const item of this.statistics.subsumed_mutants) {
                const rep = item.subsumed_by;
                if (!groupsMap.has(rep)) {
                    groupsMap.set(rep, []);
                }
                groupsMap.get(rep)!.push({
                    mutant: item.redundant_mutant,
                    reason: item.reason
                });
            }
        }
        this.subsumedGroups = Array.from(groupsMap.entries()).map(([rep, redundants]) => ({
            representative: rep,
            redundants: redundants
        }));

        // Process Operator Rankings (most lethal / innocuous). Zombies count as
        // alive here, so we only show the kill rate — no alive/dead/zombie split.
        this.mostLethalOperators = (this.statistics.most_lethal_operators || []).map(op => this.toOperatorRankItem(op));
        this.innocuousOperators = (this.statistics.innocuous_operators || []).map(op => this.toOperatorRankItem(op));

        // Process Zombie-specific statistics (probabilistic / unstable mutations)
        this.zombieSummary = this.statistics.zombie_summary || null;
        this.unstableOperators = (this.statistics.unstable_operators || []).map(op => this.toUnstableOperatorItem(op));
    }

    private toOperatorRankItem(op: OperatorStatistic): OperatorRankItem {
        return {
            operator: op.operator,
            killRate: op.kill_rate,
            killed: op.killed,
            total: op.total,
            displayValue: `${(op.kill_rate * 100).toFixed(0)}% (${op.killed})`,
            tooltip: `Kill rate: ${(op.kill_rate * 100).toFixed(1)}% — Killed ${op.killed}/${op.total}`
        };
    }

    private toUnstableOperatorItem(op: ZombieOperatorStatistic): UnstableOperatorItem {
        return {
            operator: op.operator,
            zombieRate: op.zombie_rate,
            zombie: op.zombie,
            total: op.total,
            displayValue: `${(op.zombie_rate * 100).toFixed(0)}% (${op.zombie})`,
            tooltip: `Zombie rate: ${(op.zombie_rate * 100).toFixed(1)}% — Zombie ${op.zombie}/${op.total}`
        };
    }

    toggleSidebar() {
        if (!this.hasAnalyzed) {
            // First time: Analyze
            this.analyze();
        } else if (!this.isSidebarOpen) {
            // Sidebar is closed: Open it
            this.isSidebarOpen = true;
        }
        // If open, do nothing (or maybe focus?), since user said close button is redundant on this button.
    }

    analyze() {
        if (!this.statistics || this.isAnalyzing) return;

        this.isAnalyzing = true;
        this.analysisResult = null;

        this.statisticsService.analyzeStatistics(this.statistics).subscribe({
            next: (response) => {
                this.conversationId = response.conversation_id;
                this.analysisResult = response.analysis;

                this.hasAnalyzed = true;
                this.isSidebarOpen = true;
                this.isAnalyzing = false;
            },
            error: (err) => {
                console.error('Error analyzing statistics', err);
                this.isAnalyzing = false;
            }
        });
    }

    closeSidebar() {
        this.isSidebarOpen = false;
    }

    ngOnDestroy(): void {
        this.manager.showSaveButton = true;
    }
}
