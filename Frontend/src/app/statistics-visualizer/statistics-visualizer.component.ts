import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsResponse } from '../model/StatisticsResponse';
import { ManagerService } from '../services/manager.service';

interface ChartItem {
    label: string;
    value: number; // 0 to 1
    displayValue: string; // "50%"
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
            // Mock for verification
            this.statistics = {
                mutation_score: 0.75,
                kill_rate_per_test: { "test_1": 0.8, "test_2": 0.4 },
                kill_rate_per_mutant: { "mutant_1": 1.0, "mutant_2": 0.0 },
                rarely_killed_mutants: ["mutant_2"],
                subsumed_mutants: []
            };
            // this.router.navigate(['/']);
            // return;
        }

        this.processData();
    }

    processData() {
        if (!this.statistics) return;

        // Process Kill Rate per Test
        this.testRates = Object.entries(this.statistics.kill_rate_per_test).map(([key, value]) => ({
            label: `Test ${key}`,
            value: value,
            displayValue: (value * 100).toFixed(1) + '%'
        }));

        // Process Kill Rate per Mutant
        this.mutantRates = Object.entries(this.statistics.kill_rate_per_mutant).map(([key, value]) => ({
            label: `Mutant ${key}`,
            value: value,
            displayValue: (value * 100).toFixed(1) + '%'
        }));
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
