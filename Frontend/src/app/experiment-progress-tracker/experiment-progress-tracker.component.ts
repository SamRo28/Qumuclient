import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExperimentService } from '../services/experiment.service';
import { ExperimentProgress } from '../model/Experiment';

@Component({
  selector: 'app-experiment-progress-tracker',
  templateUrl: './experiment-progress-tracker.component.html',
  styleUrls: ['./experiment-progress-tracker.component.css']
})
export class ExperimentProgressTrackerComponent implements OnInit, OnDestroy {

  public activeExperiments: ExperimentProgress[] = [];
  public isDismissed: boolean = false;
  private sub: Subscription | null = null;

  constructor(
    public experimentService: ExperimentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.experimentService.activeExperiments$.subscribe(list => {
      this.activeExperiments = list || [];
      if (this.activeExperiments.length > 0) {
        this.isDismissed = false;
      }
    });
    this.experimentService.refreshProgress();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  get primaryExperiment(): ExperimentProgress | null {
    return this.activeExperiments.length > 0 ? this.activeExperiments[0] : null;
  }

  getDurationText(exp: ExperimentProgress): string {
    if (!exp.startedAt) return '';
    const started = new Date(exp.startedAt).getTime();
    const now = Date.now();
    const secs = Math.max(0, Math.floor((now - started) / 1000));
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}m ${remainingSecs}s`;
  }

  viewExperiments(): void {
    this.router.navigate(['/experiments']);
  }

  dismiss(): void {
    this.isDismissed = true;
  }
}
