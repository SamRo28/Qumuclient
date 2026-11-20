import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsResponse, OperatorStatistic, ZombieOperatorStatistic, ZombieSummary, Subsumption, SubsumptionClass } from '../model/StatisticsResponse';
import { classTestNames, killRateGroupLabel, subsumptionIsEmpty } from '../model/statistics-utils';
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

interface MutantRateGroupItem {
    killed: number;
    total: number;
    percentage: number; // 0 to 1
    count: number;
    label: string;
    displayValue: string;
    tooltip: string;
    mutants: string[];
    expanded: boolean;
    shown: number;
}

interface SubsumptionClassRow extends SubsumptionClass {
    testNames: string;
    expanded: boolean;
    shown: number;
}

interface ByOperatorItem {
    operator: string;
    rate: number; // 0 to 1
    displayValue: string;
    tooltip: string;
}

const PAGE_SIZE = 200;
const CLASS_PAGE_SIZE = 100;

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
    mutantRateGroups: MutantRateGroupItem[] = [];
    testsWithUniqueKills: uniqueKillItem[] = [];
    subsumption: Subsumption | null = null;
    classRows: SubsumptionClassRow[] = [];
    classesShown = CLASS_PAGE_SIZE;
    byOperatorItems: ByOperatorItem[] = [];
    readonly pageSize = PAGE_SIZE;
    readonly classPageSize = CLASS_PAGE_SIZE;
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

        // Process Kill Rate per Mutant (grouped by number of killing tests)
        const krm = this.statistics.kill_rate_per_mutant;
        const totalTests = krm?.total ?? 0;
        this.mutantRateGroups = (krm?.groups ?? []).map(g => ({
            killed: g.killed,
            total: totalTests,
            percentage: g.percentage,
            count: g.mutants.length,
            ...killRateGroupLabel(g, totalTests),
            mutants: g.mutants,
            expanded: false,
            shown: PAGE_SIZE
        }));

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

        // Process Subsumption (classes of mutants killed by exactly the same tests)
        const sub = this.statistics.subsumption;
        this.subsumption = sub ?? null;
        this.classesShown = CLASS_PAGE_SIZE;
        this.classRows = subsumptionIsEmpty(sub) ? [] : sub!.classes.map(c => ({
            ...c,
            testNames: classTestNames(sub!, c),
            expanded: false,
            shown: PAGE_SIZE
        }));
        this.byOperatorItems = (sub?.by_operator ?? []).map(o => ({
            operator: o.operator,
            rate: o.redundancy_rate,
            displayValue: `${(o.redundancy_rate * 100).toFixed(0)}% (${o.redundant}/${o.killed})`,
            tooltip: `Redundancy rate: ${(o.redundancy_rate * 100).toFixed(1)}% — ${o.redundant} redundant of ${o.killed} killed`
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

    get subsumptionEmpty(): boolean {
        return subsumptionIsEmpty(this.subsumption);
    }

    toggleGroup(item: MutantRateGroupItem) { item.expanded = !item.expanded; }
    showMore(item: MutantRateGroupItem) { item.shown += PAGE_SIZE; }
    toggleClass(row: SubsumptionClassRow) { row.expanded = !row.expanded; }
    showMoreClass(row: SubsumptionClassRow) { row.shown += PAGE_SIZE; }
    showMoreClasses() { this.classesShown += CLASS_PAGE_SIZE; }

    trackByKilled(_: number, g: MutantRateGroupItem) { return g.killed; }
    trackByClassId(_: number, r: SubsumptionClassRow) { return r.id; }

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
