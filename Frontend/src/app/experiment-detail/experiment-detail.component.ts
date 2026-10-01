import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { ExperimentService } from '../services/experiment.service';
import { ManagerService } from '../services/manager.service';
import { ExperimentDetail, CycleStats } from '../model/Experiment';

@Component({
  selector: 'app-experiment-detail',
  templateUrl: './experiment-detail.component.html',
  styleUrls: ['./experiment-detail.component.css']
})
export class ExperimentDetailComponent implements OnInit, OnDestroy {
  public experiment: ExperimentDetail | null = null;
  public loading: boolean = false;
  public error: string | null = null;
  private refreshSub?: Subscription;
  private experimentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private experimentService: ExperimentService,
    private managerService: ManagerService
  ) {}

  ngOnInit(): void {
    if (!this.experimentService.isLoggedIn()) {
      this.managerService.showNotification('You must be logged in to view your experiments', 'error', 4000);
      this.router.navigate(['/']);
      return;
    }
    this.experimentId = this.route.snapshot.paramMap.get('experimentId') || '';
    this.load();
  }

  ngOnDestroy(): void {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
      this.refreshSub = undefined;
    }
  }

  load(): void {
    this.loading = true;
    this.error = null;
    this.experimentService.getExperimentDetails(this.experimentId).subscribe({
      next: (exp) => {
        this.experiment = exp;
        this.loading = false;
        if (this.experiment && this.experiment.status === 'RUNNING') {
          if (!this.refreshSub) {
            this.refreshSub = interval(15000).subscribe(() => this.load());
          }
        } else {
          if (this.refreshSub) {
            this.refreshSub.unsubscribe();
            this.refreshSub = undefined;
          }
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.error || err.message || 'Error loading experiment details';
        this.managerService.showNotification(this.error || '', 'error', 4000);
      }
    });
  }

  back(): void {
    this.router.navigate(['/experiments']);
  }

  viewMatrix(c: CycleStats): void {
    this.router.navigate([`/project/${c.projectId}/cycle/${c.id}`]);
  }

  formatDuration(seconds?: number): string {
    if (!seconds && seconds !== 0) return '-';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    }
    if (mins > 0) {
      return `${mins}m ${secs}s`;
    }
    return `${secs}s`;
  }

  formatDate(d: string | Date | undefined): string {
    if (!d) return '-';
    return new Date(d).toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  get totals(): { killed: number; zombie: number; alive: number; notExecuted: number; totalMutants: number; mutationScore: number | null } {
    let killed = 0;
    let zombie = 0;
    let alive = 0;
    let notExecuted = 0;
    let totalMutants = 0;
    if (this.experiment && this.experiment.cycles) {
      for (const c of this.experiment.cycles) {
        killed += c.killedCount || 0;
        zombie += c.zombieCount || 0;
        alive += c.aliveCount || 0;
        notExecuted += c.notExecutedCount || 0;
        totalMutants += c.totalMutants || 0;
      }
    }
    const executed = killed + zombie + alive;
    const mutationScore = executed > 0
      ? Math.round((killed * 100.0 / executed) * 100.0) / 100.0
      : null;
    return { killed, zombie, alive, notExecuted, totalMutants, mutationScore };
  }
}
