import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReperService } from '../services/reper.service';
import { QumugenService } from '../services/qumugen.service';
import { ExperimentService } from '../services/experiment.service';
import { ManagerService } from '../services/manager.service';
import { CircuitConfig, CreateExperimentRequest } from '../model/Experiment';
import { OperatorFamily } from '../model/OperatorFamily';

@Component({
  selector: 'app-experiment-wizard',
  templateUrl: './experiment-wizard.component.html',
  styleUrls: ['./experiment-wizard.component.css']
})
export class ExperimentWizardComponent implements OnInit {

  public currentStep: number = 1;
  public loading: boolean = false;
  public isSubmitting: boolean = false;
  public errorMessage: string = '';

  // Step 1: Available and selected projects
  public availableProjects: any[] = [];
  public selectedProjectsMap: { [id: string]: boolean } = {};
  public projectSearchText: string = '';

  // Step 2: Circuit configs
  public circuitConfigs: CircuitConfig[] = [];

  // Step 3: Operators (identical to OperatorsComponent)
  public families: OperatorFamily[] = [];
  public selectedFamily: OperatorFamily | null = null;
  public isModalOpen: boolean = false;

  // Step 4: Execution Configuration (matching original dropdowns)
  public experimentName: string = 'Experiment ' + new Date().toLocaleDateString('en-US') + ' ' + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  public machine: string = 'AerSimulator';
  public execAlgorithm: string = 'AllAgainstAll';
  public toleratedError: number = 0.05;
  public zombieError: number = 0.05;
  public shots: number = 1024;

  // Available options matching original
  public availableMachines: string[] = ['AerSimulator'];
  public availableAlgorithms: string[] = ['AllAgainstAll', 'OnlyAlive'];

  constructor(
    private reperService: ReperService,
    private qumugenService: QumugenService,
    private experimentService: ExperimentService,
    private managerService: ManagerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.experimentService.isLoggedIn()) {
      this.managerService.showNotification('You must be logged in to create experiments', 'error', 4000);
      this.router.navigate(['/']);
      return;
    }
    this.loadProjects();
    this.loadOperators();
  }

  loadProjects(): void {
    const email = sessionStorage.getItem('email');
    if (!email) return;

    this.loading = true;
    this.reperService.getSidebarCircuits(email).subscribe({
      next: (projects: any[]) => {
        this.availableProjects = projects || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading projects for experiment', err);
        this.errorMessage = 'Error loading available projects.';
        this.loading = false;
      }
    });
  }

  loadOperators(): void {
    this.qumugenService.getOperatorsByFamily().subscribe({
      next: (familiesData: any[]) => {
        this.families = [];
        if (familiesData) {
          for (let f of familiesData) {
            let family = new OperatorFamily(f.name, f.operators);
            this.families.push(family);
          }
          // Pre-select all enabled operators by default
          this.families.forEach(fam => {
            if (fam.operators) {
              fam.operators.forEach(op => {
                if (op.enabled) op.selected = true;
              });
            }
          });
        }
      },
      error: (err) => {
        console.error('Error loading operator families', err);
      }
    });
  }

  get filteredProjects(): any[] {
    if (!this.projectSearchText) return this.availableProjects;
    const q = this.projectSearchText.toLowerCase();
    return this.availableProjects.filter(p => p.name && p.name.toLowerCase().includes(q));
  }

  getSelectedProjectsCount(): number {
    return Object.values(this.selectedProjectsMap).filter(Boolean).length;
  }

  isProjectSelected(id: string): boolean {
    return !!this.selectedProjectsMap[id];
  }

  toggleProjectSelection(project: any): void {
    this.selectedProjectsMap[project.id] = !this.selectedProjectsMap[project.id];
  }

  selectAllProjects(): void {
    this.filteredProjects.forEach(p => this.selectedProjectsMap[p.id] = true);
  }

  deselectAllProjects(): void {
    this.availableProjects.forEach(p => this.selectedProjectsMap[p.id] = false);
  }

  // Step 2 preparation - pre-fills existing configured input/output qubits as checkboxes
  prepareStep2(): void {
    const selectedIds = Object.keys(this.selectedProjectsMap).filter(id => this.selectedProjectsMap[id]);
    if (selectedIds.length === 0) {
      this.errorMessage = 'Please select at least one project to continue.';
      return;
    }
    this.errorMessage = '';

    // Build or update circuit configs, keeping existing configurations if already customized
    this.circuitConfigs = selectedIds.map(id => {
      const existing = this.circuitConfigs.find(c => c.projectId === id);
      if (existing) {
        return existing;
      }

      const p = this.availableProjects.find(item => item.id === id);
      const qubits = p?.qubits || 1;
      const qubitsIndices = Array.from({ length: qubits }, (_, i) => i);

      let inputQubits = (p && p.inputQubits !== undefined && p.inputQubits !== null) ? String(p.inputQubits) : '';
      let outputQubits = (p && p.outputQubits !== undefined && p.outputQubits !== null) ? String(p.outputQubits) : '';

      let inputSelection = qubitsIndices.map(() => false);
      if (inputQubits && inputQubits.trim() !== '') {
        const tokens = inputQubits.split(',').map(t => parseInt(t.trim(), 10)).filter(n => !isNaN(n));
        tokens.forEach(idx => {
          if (idx >= 0 && idx < qubits) inputSelection[idx] = true;
        });
      } else {
        inputSelection = qubitsIndices.map(() => true);
        inputQubits = qubitsIndices.join(',');
      }

      let outputSelection = qubitsIndices.map(() => false);
      if (outputQubits && outputQubits.trim() !== '') {
        const tokens = outputQubits.split(',').map(t => parseInt(t.trim(), 10)).filter(n => !isNaN(n));
        tokens.forEach(idx => {
          if (idx >= 0 && idx < qubits) outputSelection[idx] = true;
        });
      } else {
        outputSelection = qubitsIndices.map(() => true);
        outputQubits = qubitsIndices.join(',');
      }

      return {
        projectId: id,
        projectName: p ? p.name : id,
        qubits: qubits,
        qubitsIndices: qubitsIndices,
        inputQubits: inputQubits,
        outputQubits: outputQubits,
        inputQubitsSelection: inputSelection,
        outputQubitsSelection: outputSelection
      };
    });

    this.currentStep = 2;
  }

  toggleAllInputQubits(config: CircuitConfig): void {
    const allSelected = config.qubitsIndices?.every(i => config.inputQubitsSelection && config.inputQubitsSelection[i]);
    config.inputQubitsSelection = (config.qubitsIndices || []).map(() => !allSelected);
    this.updateInputQubits(config);
  }

  toggleAllOutputQubits(config: CircuitConfig): void {
    const allSelected = config.qubitsIndices?.every(i => config.outputQubitsSelection && config.outputQubitsSelection[i]);
    config.outputQubitsSelection = (config.qubitsIndices || []).map(() => !allSelected);
    this.updateOutputQubits(config);
  }

  updateInputQubits(config: CircuitConfig): void {
    const selected = (config.qubitsIndices || [])
      .filter(i => config.inputQubitsSelection && config.inputQubitsSelection[i]);
    config.inputQubits = selected.join(',');
  }

  updateOutputQubits(config: CircuitConfig): void {
    const selected = (config.qubitsIndices || [])
      .filter(i => config.outputQubitsSelection && config.outputQubitsSelection[i]);
    config.outputQubits = selected.join(',');
  }

  // Step 3 preparation
  prepareStep3(): void {
    this.errorMessage = '';
    this.currentStep = 3;
  }

  // Operators helpers (identical to OperatorsComponent)
  getEnabledOperators(family: OperatorFamily): any[] {
    if (!family || !family.operators) return [];
    return family.operators.filter(op => op.enabled);
  }

  selectFamily(family: OperatorFamily): void {
    const allSelected = this.getEnabledOperators(family).every(op => op.selected);
    this.getEnabledOperators(family).forEach(op => op.selected = !allSelected);
  }

  selectAllOperators(): void {
    const allSelected = this.families.every(family =>
      this.getEnabledOperators(family).every(op => op.selected)
    );
    this.families.forEach(family => {
      this.getEnabledOperators(family).forEach(op => op.selected = !allSelected);
    });
  }

  showInfo(family: OperatorFamily): void {
    this.selectedFamily = family;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.selectedFamily = null;
    this.isModalOpen = false;
  }

  hasSelectedOperators(): boolean {
    return this.families.some(family =>
      family.operators && family.operators.some(op => op.selected)
    );
  }

  getSelectedOperatorsCount(): number {
    let count = 0;
    for (const fam of this.families) {
      if (fam.operators) {
        for (const op of fam.operators) {
          if (op.selected) count++;
        }
      }
    }
    return count;
  }

  getSelectedOperatorsList(): string[] {
    const list: string[] = [];
    for (const fam of this.families) {
      if (fam.operators) {
        for (const op of fam.operators) {
          if (op.selected && op.name) list.push(op.name);
        }
      }
    }
    return list;
  }

  // Step 4 preparation
  prepareStep4(): void {
    if (!this.hasSelectedOperators()) {
      this.errorMessage = 'Please select at least one mutation operator to continue.';
      return;
    }
    this.errorMessage = '';
    this.currentStep = 4;
  }

  // Step 5 preparation
  prepareStep5(): void {
    if (!this.experimentName || this.experimentName.trim() === '') {
      this.errorMessage = 'Please enter a name for the experiment.';
      return;
    }
    this.errorMessage = '';
    this.currentStep = 5;
  }

  goToStep(step: number): void {
    if (step < this.currentStep) {
      this.errorMessage = '';
      this.currentStep = step;
    }
  }

  submitExperiment(): void {
    this.isSubmitting = true;
    this.errorMessage = '';

    const payload: CreateExperimentRequest = {
      name: this.experimentName.trim(),
      circuitConfigs: this.circuitConfigs,
      operatorNames: this.getSelectedOperatorsList(),
      machine: this.machine,
      execAlgorithm: this.execAlgorithm,
      toleratedError: this.toleratedError,
      zombieError: this.zombieError,
      shots: this.shots,
      email: sessionStorage.getItem('email') || ''
    };

    this.experimentService.createExperiment(payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.managerService.showNotification('Experiment started successfully in background!', 'success', 5000);
        this.experimentService.refreshProgress();
        this.router.navigate(['/experiments']);
      },
      error: (err) => {
        this.isSubmitting = false;
        console.error('Error creating experiment', err);
        this.errorMessage = 'Error launching experiment: ' + (err.error?.error || err.message || 'Server error');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
