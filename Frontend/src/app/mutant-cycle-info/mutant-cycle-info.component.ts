import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, HostListener, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MutantCycle } from '../model/MutantCycle';
import { Result, MutantResult } from '../model/MutantResult';
import { Mutant } from '../model/Mutant';
import { DomSanitizer } from '@angular/platform-browser';
import { ManagerService } from '../services/manager.service';
// import { QiskitExecutorService } from '../qiskit-executor.service'; // TODO: Reemplazar por ExecuterService
import { QumugenService } from '../services/qumugen.service';
import { AppComponent } from '../app.component';
import { MutantsExecutor } from '../MutantsExecutor';
import { QProgram } from '../model/QProgram';
import { QCode } from '../model/QCode';
import { QiskitExecutorService } from '../services/qiskit-executor.service';
import { TestSuite } from '../model/TestSuite';
import { Deterministic } from '../model/Deterministic';
import { MutantExecutionService, ExecutionStatus } from '../services/mutant-execution.service';
import { ExecConfiguration } from '../model/ExecConfiguration';
import { QCircuit } from '../model/QCircuit';
import { Operator } from '../model/OperatorFamily';
import { StatisticsService } from '../services/statistics.service';
import { StatisticsResponse } from '../model/StatisticsResponse';

@Component({
  selector: 'app-mutant-cycle-info',
  templateUrl: './mutant-cycle-info.component.html',
  styleUrls: ['./mutant-cycle-info.component.css']
})
export class MutantCycleInfoComponent extends MutantsExecutor implements OnInit, OnChanges, OnDestroy {
  override runOne(circuit: QProgram, program?: string): void {
    throw new Error('Method not implemented.');
  }

  @Input() mutantCycle?: MutantCycle | null;

  // Pagination properties
  currentPage: number = 1;
  pageSize: number | 'All' | 'Custom' = 50;
  customPageSize: number = 100;
  totalPages: number = 0;

  paginatedMutants: Mutant[] = [];

  // Matrix properties
  matrixRows: { mutant: Mutant, cells: { input: string, killed: boolean, error: number }[] }[] = [];
  paginatedMatrixRows: { mutant: Mutant, cells: { input: string, killed: boolean, error: number }[] }[] = [];
  inputHeaders: string[] = [];

  // Dropdown UI state
  showMachineDropdown = false;
  showAlgoDropdown = false;
  showTestSuiteDropdown = false;

  // Subscription management
  private subscriptions = new Subscription();
  private executionStatusSubscription?: Subscription;

  // Execution State
  executionStatus: ExecutionStatus = { isRunning: false, progress: 0, total: 0, message: '' };

  // Tooltip State
  activeTooltip: {
    show: boolean;
    mutant: Mutant | null;
    top: number;
    left: number;
  } = { show: false, mutant: null, top: 0, left: 0 };

  // Statistics State
  isLoadingStats = false;
  statistics: StatisticsResponse | null = null;

  onNameChange(): void {
    if (this.manager.selectedProject) {
      this.manager.markProjectAsModified();
    }
  }
  // showStatsModal = false; // Removed legacy modal

  currentTab: 'matrix' | 'statistics' = 'matrix';

  setTab(tab: 'matrix' | 'statistics') {
    this.currentTab = tab;
    if (tab === 'statistics' && !this.statistics && this.hasExecutionResults()) {
      this.calculateStatistics();
    }
  }

  constructor(
    public override sanitizer: DomSanitizer,
    public manager: ManagerService,
    public qe: QiskitExecutorService,
    private qumugen: QumugenService,
    private route: ActivatedRoute,
    private router: Router,
    private mutantExecutionService: MutantExecutionService,
    private cdr: ChangeDetectorRef,
    private statisticsService: StatisticsService
  ) {
    super(sanitizer);
  }

  toggleMachineDropdown(event: Event) {
    if (this.hasExecutionResults()) return;
    event.stopPropagation();
    this.showMachineDropdown = !this.showMachineDropdown;
    this.showAlgoDropdown = false;
  }

  toggleAlgoDropdown(event: Event) {
    if (this.hasExecutionResults()) return;
    event.stopPropagation();
    this.showAlgoDropdown = !this.showAlgoDropdown;
    this.showMachineDropdown = false;
    this.showTestSuiteDropdown = false;
  }

  toggleTestSuiteDropdown(event: Event) {
    if (this.hasExecutionResults()) return;
    event.stopPropagation();
    this.showTestSuiteDropdown = !this.showTestSuiteDropdown;
    this.showMachineDropdown = false;
    this.showAlgoDropdown = false;
  }

  selectMachine(machine: string) {
    if (this.mutantCycle?.execConfiguration) {
      this.mutantCycle.execConfiguration.machine = machine;
    }
    this.showMachineDropdown = false;
  }

  selectAlgorithm(algo: string) {
    if (this.mutantCycle?.execConfiguration) {
      this.mutantCycle.execConfiguration.execAlgorithm = algo;
      this.manager.executionAlgorithm = algo;
    }
    this.showAlgoDropdown = false;
  }

  selectTestSuite(testSuite: TestSuite) {
    if (this.mutantCycle?.execConfiguration) {
      this.mutantCycle.execConfiguration.testSuiteId = testSuite.id;
    }
    this.showTestSuiteDropdown = false;
  }

  getSelectedTestSuiteName(): string {
    if (this.mutantCycle?.execConfiguration?.testSuiteId && this.manager.selectedProject?.testSuites) {
      const suite = this.manager.selectedProject.testSuites.find(ts => ts.id === this.mutantCycle!.execConfiguration!.testSuiteId);
      return suite ? suite.id : 'Select TestSuite'; // Using ID as name since TestSuite doesn't have a name property visible in model
    }
    return 'Select TestSuite';
  }

  // Close dropdowns when clicking outside
  @HostListener('document:click')
  closeDropdowns() {
    this.showMachineDropdown = false;
    this.showAlgoDropdown = false;
    this.showTestSuiteDropdown = false;
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        const projectId = params.get('projectId');
        const cycleId = params.get('cycleId'); // String from URL

        if (projectId && cycleId) {
          this.subscriptions.add(
            this.manager.projects$.subscribe(projects => {
              const project = projects.find(p => p.id === projectId);
              if (project) {
                if (this.manager.selectedProject !== project) {
                  this.manager.setselectedProject(project);
                }

                // Find cycle by ID (assuming ID is number or string match)
                // cycleId from URL is string, cycle.id might be number. Check loose equality or conversion.
                const cycle = project.mutantCycles.find(c => c.id == Number(cycleId));
                if (cycle) {
                  this.manager.setSelectedMutantCycle(cycle);
                  this.mutantCycle = cycle;

                  // Initialization logic that was in ngOnChanges
                  this.initializeCycleView();
                  this.checkAndSubscribeToExecution();
                }
              }
            })
          );
        }
      })
    );

    // Subscribe to global execution updates to refresh view if results arrive for this cycle
    this.subscriptions.add(
      this.mutantExecutionService.executionUpdate$.subscribe(update => {
        if (this.mutantCycle && this.mutantCycle.id === update.cycleId) {
          // Refresh view
          this.loadKillingMatrixFromExistingResults();
          // Ensure change detection runs
          this.cdr.detectChanges();
        }
      })
    );

    if (this.manager.selectedProject?.qProgram) {
      this.qumugen.getQiskitCode(this.manager.selectedProject.qProgram).then(
        code => {
          // ... existing init logic
          // ... existing init logic
          this.manager.selectedProject!.qProgram.qCodes = [new QCode(undefined, code.wholeCode, "QuMu")]
        },
        error => {
          console.log(error)
        }
      )
    }
    this.updatePagination();
  }

  initializeCycleView() {
    this.currentPage = 1; // Reset to first page on new cycle

    if (this.mutantCycle) {
      if (!this.mutantCycle.execConfiguration) {
        this.mutantCycle.execConfiguration = new ExecConfiguration({});
        this.mutantCycle.execConfiguration.executionDate = new Date();
        this.mutantCycle.execConfiguration.machine = 'AerSimulator';
        this.mutantCycle.execConfiguration.execAlgorithm = 'AllAgainstAll';
      }

      if (!this.mutantCycle.execConfiguration.execAlgorithm) {
        this.mutantCycle.execConfiguration.execAlgorithm = 'AllAgainstAll';
      }
      if (!this.mutantCycle.execConfiguration.machine) {
        this.mutantCycle.execConfiguration.machine = 'AerSimulator';
      }
      if (!this.mutantCycle.execConfiguration.executionDate) {
        this.mutantCycle.execConfiguration.executionDate = new Date();
      }

      this.manager.executionAlgorithm = this.mutantCycle.execConfiguration.execAlgorithm;
    }

    // Initialize matrix rows
    this.matrixRows = this.mutantCycle!.mutants.map(m => ({
      mutant: m,
      cells: []
    }));
    this.inputHeaders = [];

    this.loadKillingMatrixFromExistingResults();
    this.updatePagination();

    // Reset statistics state for new cycle
    this.statistics = null;
    this.currentTab = 'matrix';
  }

  checkAndSubscribeToExecution() {
    if (!this.mutantCycle || !this.mutantCycle.id) return;
    const cycleId = this.mutantCycle.id as number;

    if (this.executionStatusSubscription) {
      this.executionStatusSubscription.unsubscribe();
    }

    let previousIsRunning = false;

    this.executionStatusSubscription = this.mutantExecutionService.getStatus(cycleId).subscribe(status => {
      const isStarting = !previousIsRunning && status.isRunning;
      const isFinishing = previousIsRunning && !status.isRunning && status.message === 'Execution finished.';
      const isError = !status.isRunning && status.message.toLowerCase().includes('error');

      this.executionStatus = status;
      this.runningMutants = status.isRunning;

      if (isStarting) {
        this.manager.showNotification(status.message, 'loading', 3000);
      } else if (isFinishing) {
        this.manager.showNotification('The mutants execution has finished', 'success', 5000);
      } else if (isError) {
        this.manager.showNotification(status.message, 'error', 5000);
      }

      previousIsRunning = status.isRunning;
      this.cdr.detectChanges();
    });
  }

  getProgressPercentage(): number {
    if (!this.executionStatus.total || this.executionStatus.total === 0) return 0;
    return (this.executionStatus.progress / this.executionStatus.total) * 100;
  }

  ngOnDestroy() {
    if (this.executionStatusSubscription) {
      this.executionStatusSubscription.unsubscribe();
    }
    this.subscriptions.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mutantCycle'] && this.mutantCycle?.mutants) {
      this.initializeCycleView();

      // Re-subscribe to status for new cycle
      // Note: checkAndSubscribeToExecution handles this but we need to unsubscribe previous status sub if strict?
      // Since 'subscriptions' collects all, they are cleared on Destroy. 
      // Ideally we should track the specific status subscription and unsubscribe it when cycle changes.
      // For now, it's okay as OnDestroy cleans up, but if user switches cycles rapidly without destroying component 
      // (e.g. parent input change), we might stack subscriptions. 
      // Since this component seems to be routed (based on ngOnInit route param logic), OnDestroy is likely called on nav.
      // If used as child component, we might want to be more careful. 
      this.checkAndSubscribeToExecution();
    }
  }

  onPageSizeChange(): void {
    this.currentPage = 1;
    this.updatePagination();
  }

  onCustomPageSizeChange(event: any): void {
    const size = parseInt(event.target.value, 10);
    if (!isNaN(size) && size > 0) {
      this.customPageSize = size;
      this.currentPage = 1;
      this.updatePagination();
    } else {
      event.target.value = this.customPageSize;
    }
  }

  updatePagination(): void {
    if (!this.mutantCycle || !this.mutantCycle.mutants) {
      this.paginatedMutants = [];
      this.totalPages = 0;
      return;
    }
    
    let effectivePageSize = 100;
    if (this.pageSize === 'All') {
      effectivePageSize = this.mutantCycle.mutants.length || 1;
    } else if (this.pageSize === 'Custom') {
      effectivePageSize = this.customPageSize || 100;
    } else {
      effectivePageSize = this.pageSize as number;
    }

    if (effectivePageSize <= 0) effectivePageSize = 1;

    this.totalPages = Math.ceil(this.mutantCycle.mutants.length / effectivePageSize);
    
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    } else if (this.currentPage < 1) {
      this.currentPage = 1;
    }

    const startIndex = (this.currentPage - 1) * effectivePageSize;
    const endIndex = startIndex + effectivePageSize;

    this.paginatedMutants = this.mutantCycle.mutants.slice(startIndex, endIndex);
    this.paginatedMatrixRows = this.matrixRows.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  onPageInput(event: any): void {
    const page = parseInt(event.target.value, 10);
    if (!isNaN(page)) {
      if (page >= 1 && page <= this.totalPages) {
        this.goToPage(page);
      } else {
        // Revert to current page if out of bounds
        event.target.value = this.currentPage;
      }
    } else {
      event.target.value = this.currentPage;
    }
  }

  onExecute(): void {
    console.log('Executing mutant cycle:', this.mutantCycle);
    if (this.mutantCycle && this.manager.selectedProject) {
      this.mutantExecutionService.startExecution(this.mutantCycle, this.manager.selectedProject);
    }
  }

  duplicateCycle(): void {
    if (!this.mutantCycle || !this.manager.selectedProject) return;

    this.manager.openConfirmationModal({
      title: 'Duplicate Mutant Cycle',
      message: '¿Estás seguro de que deseas duplicar este ciclo? Se creará uno nuevo idéntico pero con todos los resultados en pendiente.',
      confirmText: 'Duplicate',
      type: 'info',
      onConfirm: () => {
        // Deep clone mutants array
        const clonedMutants: Mutant[] = this.mutantCycle!.mutants.map(m => {
          const newMutant = new Mutant();
          newMutant.id = undefined; // Let backend generate new ID
          newMutant.mutantIndex = m.mutantIndex;
          newMutant.mutatedColumn = m.mutatedColumn;
          newMutant.mutatedRow = m.mutatedRow;
          newMutant.mutationOperator = m.mutationOperator;

          if (m.operator) {
            newMutant.operator = new Operator({
              name: m.operator.name,
              type: m.operator.id, // Assuming id is mapped to type in OperatorFamily
              enabled: m.operator.enabled,
              description: m.operator.description
            });
          }

          if (m.circuit) {
            const newProgram = new QProgram();
            // Let the frontend generate a new unique ID to avoid JPA merge conflicts
            newProgram.id = crypto.randomUUID();
            newProgram.qubits = m.circuit.qubits;
            newProgram.inputQubits = m.circuit.inputQubits;
            newProgram.outputQubits = m.circuit.outputQubits;
            if (m.circuit.qCircuit) {
              newProgram.qCircuit = new QCircuit(undefined, m.circuit.qCircuit.quirkCode);
            }
            newMutant.circuit = newProgram;
          }

          // Reset results to pending
          newMutant.mutantResults = [];
          newMutant.result = undefined;
          return newMutant;
        });

        // Clone execution configuration
        let clonedConfig: ExecConfiguration | undefined;
        if (this.mutantCycle!.execConfiguration) {
          clonedConfig = new ExecConfiguration(this.mutantCycle!.execConfiguration);
          clonedConfig.id = crypto.randomUUID();
          clonedConfig.executionDate = new Date();
        }

        // Create new cycle
        const newCycleId = this.manager.selectedProject!.getNextMutantCycleId();
        const newCycle = new MutantCycle(clonedMutants, newCycleId, clonedConfig);
        newCycle.newlyGenerated = true;

        // Push to project cycles and redirect
        this.manager.selectedProject!.mutantCycles.push(newCycle);
        this.manager.markProjectAsModified(this.manager.selectedProject!);

        // Route to the new cycle explicitly (so URL changes) or switch view
        // The best way in Angular is to navigate to the new ID if using routes
        this.router.navigate(['/projects', this.manager.selectedProject!.id, 'cycle', newCycleId]);
        this.manager.showNotification('El ciclo se ha duplicado correctamente.', 'success', 3000);
      }
    });
  }


  formatDate(date?: Date): string {
    if (!date) return '';
    return date.toLocaleDateString();
  }

  updateExecutionDate(event: any): void {
    const dateValue = event.target.value;
    if (this.mutantCycle?.execConfiguration && dateValue) {
      this.mutantCycle.execConfiguration.executionDate = new Date(dateValue);
    }
  }

  updateMachine(event: any): void {
    const machineValue = event.target.value;
    if (this.mutantCycle?.execConfiguration) {
      this.mutantCycle.execConfiguration.machine = machineValue;
    }
  }

  updateExecAlgorithm(event: any): void {
    const algorithmValue = event.target.value;
    if (this.mutantCycle?.execConfiguration) {
      this.mutantCycle.execConfiguration.execAlgorithm = algorithmValue;
    }
  }

  updateToleratedError(event: any): void {
    const value = parseFloat(event.target.value);
    if (isNaN(value) || value < 0 || value > 1) {
      AppComponent.error = "Tolerated Error must be between 0 and 1";
      event.target.value = this.manager.toleratedError; // Revert to previous value
    } else {
      this.manager.toleratedError = value;
      AppComponent.error = ""; // Clear error if valid
    }
  }

  getFormattedDate(): string {
    if (!this.mutantCycle?.execConfiguration?.executionDate) return '';
    const date = this.mutantCycle.execConfiguration.executionDate;
    return date.toISOString().split('T')[0];
  }

  // Métodos para la tabla de killing matrix
  trackByMutantIndex(index: number, mutant: Mutant): any {
    return mutant.mutantIndex || index;
  }

  trackByMatrixRow(index: number, row: { mutant: Mutant }): any {
    return row.mutant?.mutantIndex || index;
  }

  getResultBadgeClass(result?: Result): string {
    if (!result) return 'pending';

    switch (result) {
      case Result.KILLED:
        return 'killed';
      case Result.ALIVE:
        return 'alive';
      case Result.ZOMBIE:
        return 'zombie';
      default:
        return 'pending';
    }
  }

  getResultDisplayText(result?: Result): string {
    if (!result) return 'Pending';

    switch (result) {
      case Result.KILLED:
        return 'Killed';
      case Result.ALIVE:
        return 'Alive';
      case Result.ZOMBIE:
        return 'Zombie';
      default:
        return 'Pending';
    }
  }

  override runMutants() {
    this.onExecute();
  }

  protected override showModal(message: string) {
    this.manager.setExecutionStatus(message);
  }

  protected override hideModal() {
    this.manager.clearExecutionStatus();
  }

  recalculateStats() {
    this.killedMutants = 0;
    this.aliveMutants = 0;
    this.matrixRows.forEach(row => {
      if (row.mutant.result?.result === Result.KILLED) {
        this.killedMutants++;
      } else if (row.mutant.result?.result === Result.ALIVE) {
        this.aliveMutants++;
      }
    });
  }

  loadKillingMatrixFromExistingResults() {
    if (!this.mutantCycle || !this.mutantCycle.mutants) return;

    // Only proceed if at least some mutants have results
    const hasResults = this.mutantCycle.mutants.some(m => m.mutantResults && m.mutantResults.length > 0);
    // If no results, we still might want to clear existing data if called during refresh, but typically this is additive.
    // However, if we are using this to refresh 'matrixRows' from model, we should traverse all even if valid.

    // Reset inputs? 
    // We try not to clear everything if we are just appending, but simpler to rebuild or merge.
    // The previous implementation was rebuilding 'inputHeaders' every time.

    this.inputHeaders = [];

    let maxLength = 1;
    if (this.manager.inputQubits && this.manager.inputQubits.trim() !== '') {
      maxLength = this.manager.inputQubits.split(',').length;
    } else if (this.manager.selectedProject?.qProgram.qubits) {
      maxLength = this.manager.selectedProject.qProgram.qubits;
    }

    this.mutantCycle.mutants.forEach((mutant, index) => {
      const row = this.matrixRows[index];
      if (!row || !mutant.mutantResults) return;

      mutant.mutantResults.forEach(result => {
        if (result.id === undefined) return;

        const binaryInput = (result.id).toString(2).padStart(maxLength, '0');

        if (!this.inputHeaders.includes(binaryInput)) {
          this.inputHeaders.push(binaryInput);
          this.inputHeaders.sort((a, b) => parseInt(a, 2) - parseInt(b, 2));
        }

        const killed = result.result === Result.KILLED;
        const error = result.error || 0;

        let cell = row.cells.find(c => c.input === binaryInput);
        if (cell) {
          cell.killed = killed;
          cell.error = error;
        } else {
          row.cells.push({
            input: binaryInput,
            killed: killed, // boolean
            error: error
          });
        }
      });

      // Ensure overall result is set if not already
      if (!mutant.result && mutant.mutantResults.length > 0) {
        const anyKilled = mutant.mutantResults.some(r => r.result === Result.KILLED);
        mutant.result = new MutantResult({ result: anyKilled ? Result.KILLED : Result.ALIVE });
      }
    });

    this.recalculateStats();
  }

  hasExecutionResults(): boolean {
    return (this.killedMutants > 0 || this.aliveMutants > 0) &&
      (this.mutantCycle?.mutants?.some(m => m.result !== undefined && m.result !== null) ?? false);
  }

  areAllMutantsExecuted(): boolean {
    if (!this.mutantCycle?.mutants || this.mutantCycle.mutants.length === 0) return false;
    return this.mutantCycle.mutants.every(m => m.mutantResults && m.mutantResults.length > 0);
  }

  private generateCSVContent(): string | null {
    if (!this.matrixRows || this.matrixRows.length === 0) return null;

    // 1. Cabeceras del CSV
    const header = ['Mutant ID', 'Operator', ...this.inputHeaders];
    let csvContent = header.join(',') + '\n';

    // 2. Filas de la matriz
    this.matrixRows.forEach(row => {
      const mutantId = row.mutant.mutantIndex !== undefined ? row.mutant.mutantIndex : 'N/A';
      const operator = row.mutant.mutationOperator || 'N/A';

      const rowData = this.inputHeaders.map(inputCtx => {
        const cell = row.cells.find(c => c.input === inputCtx);
        if (cell) {
          return cell.killed ? 'Killed' : 'Alive';
        } else {
          return 'Alive';
        }
      });

      const line = [mutantId, operator, ...rowData].join(',');
      csvContent += line + '\n';
    });

    return csvContent;
  }

  exportMatrixToCSV(): void {
    const csvContent = this.generateCSVContent();
    if (!csvContent) return;

    // 3. Crear el Blob y descargar
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `killing_matrix_${this.mutantCycle?.id || 'export'}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  calculateStatistics(): void {
    const csvContent = this.generateCSVContent();
    if (!csvContent) return;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const file = new File([blob], `killing_matrix.csv`, { type: 'text/csv' });

    this.isLoadingStats = true;
    this.statisticsService.calculateStatistics(file).subscribe({
      next: (stats: any) => {
        // this.statisticsService.setStatistics(stats); // Optional if we just want to show it here
        this.statistics = stats;
        this.isLoadingStats = false;
        this.currentTab = 'statistics'; // Switch tab
        // this.router.navigate(['/statistics']); // Removed
      },
      error: (err: any) => {
        console.error('Error calculating statistics', err);
        this.isLoadingStats = false;
        this.manager.showNotification('Error calculating statistics', 'error', 5000);
      }
    });
  }

  // NOTE: showStatsModal logic is removed/superseded by tabs but we can keep closeStatsModal empty or remove it.
  // I will just remove the usage of showStatsModal in HTML and here.

  goToMutant(mutant: Mutant): void {
    if (!this.manager.selectedProject || !this.mutantCycle) return;
    if (mutant.mutantIndex === undefined) {
      this.manager.showNotification('Mutant Index not found.', 'error', 3000);
      return;
    }
    this.router.navigate(['/project', this.manager.selectedProject.id, 'cycle', this.mutantCycle.id, 'mutant', mutant.mutantIndex]);
  }

  showOperatorTooltip(event: MouseEvent, mutant: Mutant): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    // Position to the right of the cell, vertically centered
    this.activeTooltip = {
      show: true,
      mutant: mutant,
      top: rect.top + (rect.height / 2),
      left: rect.right + 10 // 10px spacing
    };
  }

  hideOperatorTooltip(): void {
    this.activeTooltip.show = false;
  }

}
