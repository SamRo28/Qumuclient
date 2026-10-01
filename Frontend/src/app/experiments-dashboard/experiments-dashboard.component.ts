import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ExperimentService } from '../services/experiment.service';
import { ManagerService } from '../services/manager.service';
import { ExperimentListItem } from '../model/Experiment';

@Component({
  selector: 'app-experiments-dashboard',
  templateUrl: './experiments-dashboard.component.html',
  styleUrls: ['./experiments-dashboard.component.css']
})
export class ExperimentsDashboardComponent implements OnInit, OnDestroy {

  public experiments: ExperimentListItem[] = [];
  public loading: boolean = false;
  private refreshSub?: Subscription;

  // Delete Modal State
  public isDeleteModalOpen: boolean = false;
  public experimentToDelete: ExperimentListItem | null = null;
  public isDeleting: boolean = false;

  constructor(
    private experimentService: ExperimentService,
    private managerService: ManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.experimentService.isLoggedIn()) {
      this.managerService.showNotification('You must be logged in to view your experiments', 'error', 4000);
      this.router.navigate(['/']);
      return;
    }
    this.loadExperiments();
    this.refreshSub = interval(15000).pipe(filter(() => this.hasRunning)).subscribe(() => this.loadExperiments(true));
  }

  ngOnDestroy(): void {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
      this.refreshSub = undefined;
    }
  }

  get hasRunning(): boolean {
    return this.experiments.some(e => e.status === 'RUNNING');
  }

  loadExperiments(silent: boolean = false): void {
    if (!silent) {
      this.loading = true;
    }
    this.experimentService.getUserExperiments().subscribe({
      next: (list) => {
        this.experiments = list || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading experiments', err);
        this.loading = false;
      }
    });
  }

  createNewExperiment(): void {
    this.router.navigate(['/experiments/create']);
  }

  openExperiment(exp: ExperimentListItem): void {
    this.router.navigate(['/experiments', exp.id]);
  }

  openDeleteModal(exp: ExperimentListItem, event: Event): void {
    event.stopPropagation();
    this.experimentToDelete = exp;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
    this.experimentToDelete = null;
    this.isDeleting = false;
  }

  confirmDelete(): void {
    if (!this.experimentToDelete) return;
    this.isDeleting = true;

    this.experimentService.deleteExperiment(this.experimentToDelete.id).subscribe({
      next: () => {
        this.managerService.showNotification('Experiment deleted successfully', 'success', 4000);
        this.closeDeleteModal();
        this.loadExperiments();
        this.experimentService.refreshProgress();
      },
      error: (err) => {
        this.isDeleting = false;
        console.error('Error deleting experiment', err);
        this.managerService.showNotification('Error deleting experiment: ' + (err.error?.error || err.message), 'error', 4000);
      }
    });
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
}
