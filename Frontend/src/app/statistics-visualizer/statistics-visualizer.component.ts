import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsResponse } from '../model/StatisticsResponse';
import { ManagerService } from '../services/manager.service';

interface ChartItem {
    label: string;
    value: number; // 0 to 1
    displayValue: string; // "50%"
    tooltip: string; // "Killed: 50, Total: 100"
}

interface uniqueKillItem {
    test: string;
    mutants: string[];
    count: number;
}

@Component({
    selector: 'app-statistics-visualizer',
    templateUrl: './statistics-visualizer.component.html',
    styleUrls: ['./statistics-visualizer.component.css']
})
export class StatisticsVisualizerComponent implements OnInit, OnDestroy {

    statistics: StatisticsResponse | null = null;

    testRates: ChartItem[] = [];
    mutantRates: ChartItem[] = [];
    testsWithUniqueKills: uniqueKillItem[] = [];

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
        this.statistics = this.statisticsService.getStatistics();

        if (!this.statistics) {
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
        })).filter(item => item.count > 0); // Only show tests that actually have unique kills? Or all? User just said "hay mas" (there are more). usually we show list. 
        // Based on JSON "0": [], "1": [] ... most are empty. I'll filter for visual clarity or show generic if empty logic in HTML.
        // Actually, let's keep all or top? JSON shows MANY tests. If I show all, it will be huge. 
        // "tests_with_unique_kills" usually interesting if > 0.
        // Let's keep filter > 0 for now as it's a "list" card.
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
