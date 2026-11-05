import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExperimentService } from '../services/experiment.service';
import { ManagerService } from '../services/manager.service';
import { ResumeCycleQubits, ResumePendingCycle, ResumePreview } from '../model/Experiment';

const QUBITS_PATTERN = /^\s*\d+(\s*,\s*\d+)*\s*$/;

@Component({
  selector: 'app-experiment-resume-modal',
  templateUrl: './experiment-resume-modal.component.html',
  styleUrls: ['./experiment-resume-modal.component.css']
})
export class ExperimentResumeModalComponent implements OnInit {
  @Input() experimentId = '';
  @Input() experimentName = '';
  @Output() closed = new EventEmitter<void>();
  @Output() resumed = new EventEmitter<void>();

  preview: ResumePreview | null = null;
  loading = true;
  submitting = false;
  error: string | null = null;

  /** Qubits tecleados por el usuario para los ciclos que no los tienen guardados */
  qubits: { [key: string]: { input: string; output: string } } = {};

  constructor(private experimentService: ExperimentService, private managerService: ManagerService) { }

  ngOnInit(): void {
    this.experimentService.getResumePreview(this.experimentId).subscribe({
      next: (p) => {
        this.preview = p;
        for (const c of p.pendingCycles) {
          if (c.needsQubits) {
            this.qubits[this.key(c)] = { input: c.inputQubits ?? '', output: c.outputQubits ?? '' };
          }
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.error?.error || err.message || 'Error loading resume preview';
        this.loading = false;
      }
    });
  }

  key(c: { projectId: string; cycleId: number }): string {
    return c.projectId + '|' + c.cycleId;
  }

  get cyclesNeedingQubits(): ResumePendingCycle[] {
    return this.preview ? this.preview.pendingCycles.filter(c => c.needsQubits) : [];
  }

  isValid(value: string | undefined): boolean {
    return !!value && QUBITS_PATTERN.test(value);
  }

  get canConfirm(): boolean {
    if (!this.preview || !this.preview.resumable || this.submitting) return false;
    return this.cyclesNeedingQubits.every(c => {
      const q = this.qubits[this.key(c)];
      return q && this.isValid(q.input) && this.isValid(q.output);
    });
  }

  confirm(): void {
    if (!this.canConfirm) return;
    const cycles: ResumeCycleQubits[] = this.cyclesNeedingQubits.map(c => ({
      projectId: c.projectId,
      cycleId: c.cycleId,
      inputQubits: this.qubits[this.key(c)].input.replace(/\s+/g, ''),
      outputQubits: this.qubits[this.key(c)].output.replace(/\s+/g, '')
    }));
    this.submitting = true;
    this.error = null;
    this.experimentService.resumeExperiment(this.experimentId, cycles).subscribe({
      next: () => {
        this.submitting = false;
        this.managerService.showNotification('Experiment resumed', 'success', 4000);
        this.resumed.emit();
      },
      error: (err) => {
        this.submitting = false;
        this.error = err.error?.error || err.message || 'Error resuming experiment';
      }
    });
  }

  close(): void {
    this.closed.emit();
  }
}
