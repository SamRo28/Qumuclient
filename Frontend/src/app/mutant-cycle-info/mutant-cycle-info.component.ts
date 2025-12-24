import { Component, Input, OnInit, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { MutantCycle } from '../model/MutantCycle';
import { Result, MutantResult } from '../model/MutantResult';
import { Mutant } from '../model/Mutant';
import { DomSanitizer } from '@angular/platform-browser';
import { ManagerService } from '../manager.service';
// import { QiskitExecutorService } from '../qiskit-executor.service'; // TODO: Reemplazar por ExecuterService
import { QumugenService } from '../qumugen.service';
import { AppComponent } from '../app.component';
import { MutantsExecutor } from '../MutantsExecutor';
import { QProgram } from '../model/QProgram';
import { QCode } from '../model/QCode';
import { QiskitExecutorService } from '../qiskit-executor.service';
import { TestSuite } from '../model/TestSuite';
import { Deterministic } from '../model/Deterministic';

@Component({
  selector: 'app-mutant-cycle-info',
  templateUrl: './mutant-cycle-info.component.html',
  styleUrls: ['./mutant-cycle-info.component.css']
})
export class MutantCycleInfoComponent extends MutantsExecutor implements OnInit, OnChanges {
  override runOne(circuit: QProgram, program?: string): void {
    throw new Error('Method not implemented.');
  }

  @Input() mutantCycle?: MutantCycle | null;

  // Pagination properties
  currentPage: number = 1;
  pageSize: number = 10;
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

  constructor(public override sanitizer: DomSanitizer, public manager: ManagerService, public qe: QiskitExecutorService, private qumugen: QumugenService) {
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
    if (this.manager.selectedProject?.qProgram) {
      this.qumugen.getQiskitCode(this.manager.selectedProject.qProgram).then(
        code => {
          this.manager.selectedProject!.qProgram.qCode = new QCode()
          this.manager.selectedProject!.qProgram.qCode.code = code.wholeCode.split("\n")
        },
        error => {
          console.log(error)
        }
      )
    }
    this.updatePagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mutantCycle'] && this.mutantCycle?.mutants) {
      this.currentPage = 1; // Reset to first page on new cycle

      // Initialize matrix rows
      this.matrixRows = this.mutantCycle.mutants.map(m => ({
        mutant: m,
        cells: []
      }));
      this.inputHeaders = [];

      this.loadKillingMatrixFromExistingResults();
      this.updatePagination();
    }
  }

  updatePagination(): void {
    if (!this.mutantCycle || !this.mutantCycle.mutants) {
      this.paginatedMutants = [];
      this.totalPages = 0;
      return;
    }
    this.totalPages = Math.ceil(this.mutantCycle.mutants.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

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

  onExecute(): void {
    console.log('Executing mutant cycle:', this.mutantCycle);
    // Aquí puedes agregar la lógica para ejecutar el ciclo de mutantes
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
    if (this.mutantCycle && this.mutantCycle.execConfiguration) {
      this.mutantCycle.execConfiguration.executionDate = new Date();
      if (this.mutantCycle.execConfiguration.execAlgorithm) {
        this.manager.executionAlgorithm = this.mutantCycle.execConfiguration.execAlgorithm;
      }
    }
    AppComponent.error = ""
    this.runningMutants = true
    this.originalResults = []
    this.mutantResults = []
    this.aliveMutants = 0
    this.killedMutants = 0

    if (this.hasExecutionResults()) {
      this.manager.showNotification("This mutant cycle has already been executed.", 'success', 3000);
      return;
    }

    if (this.stopped)
      return

    let inputs: string[] | undefined = undefined;

    if (this.manager.executionAlgorithm === 'TestSuite' && this.mutantCycle?.execConfiguration?.testSuiteId) {
      const testSuite = this.manager.selectedProject?.testSuites.find(ts => ts.id === this.mutantCycle!.execConfiguration!.testSuiteId);

      if (testSuite) {
        inputs = [];
        testSuite.testCases.forEach(testCase => {
          if (testCase.type === 'DETERMINISTIC') {
            const deterministicCase = testCase as Deterministic;
            // Transform inputs to string format "000"
            inputs!.push(deterministicCase.entryIndexes.join(''));
          }
        });
      }
    }

    this.showModal("The mutants are running; you can continue using the application. Do not close the window.");

    this.qe.runOne(this.manager.selectedProject!.qProgram, this.manager.inputQubits, this.manager.outputQubits, this.manager.executionAlgorithm || "AllAgainstAll", this.manager.selectedProject!.qProgram.qubits, false, inputs).subscribe(
      originalResults => {
        this.hideModal()
        if (this.stopped)
          return

        this.originalResults = originalResults
        /*let header1 = document.getElementById("header1")
        let header2 = document.getElementById("header2")
        let children = header1!.childElementCount
        for (let i = 1; i < children; i++) {
          let child = header1?.childNodes.item(1)
          header1?.removeChild(child!)
          child = header2?.childNodes.item(3)
          header2?.removeChild(child!)
        }*/
        if (this.stopped)
          return

        this._runMutants(0, 5, inputs)

      }
    )
  }

  protected override showModal(message: string) {
    this.manager.setExecutionStatus(message);
  }

  protected override hideModal() {
    this.manager.clearExecutionStatus();
  }

  private _runMutants(start: number, chunkSize: number, inputs?: string[]) {
    let end = start + chunkSize
    if (end > this.manager.selectedMutantCycle!.mutants.length)
      end = this.manager.selectedMutantCycle!.mutants.length



    let mutantsToFormat = this.manager.selectedMutantCycle!.mutants.slice(start, end)
    let formattedMutants = this._formatMutantsforCode(mutantsToFormat)
    if (mutantsToFormat.length > 0) {
      this.qumugen.getMultipleQiskitCode(formattedMutants).subscribe(
        results => {
          // TODO: Reemplazar con ExecuterService.executeWithoutStrategy()
          this.qe.executeWithStrategy(results, this.originalResults, this.manager.executionAlgorithm, this.manager.toleratedError, false, inputs).subscribe(
            result => {
              this.processMutantResults(result, start, inputs)
              start = start + chunkSize
              if (this.stopped)
                return

              if (start >= this.manager.selectedMutantCycle!.mutants.length) {
                this.hideModal(); // Ocultar el modal cuando termine la ejecución de todos los mutantes
                this.hideModal(); // Ocultar el modal cuando termine la ejecución de todos los mutantes
                this.manager.showNotification("The mutants execution has finished", 'success', 5000); // Mostrar notificación de éxito
                this.manager.selectedMutantCycle!.newlyGenerated = true; // Ensure it's included in save payload
                this.manager.markProjectAsModified(); // Enable save button
              } else {
                this._runMutants(start, chunkSize, inputs); // Continuar con el siguiente lote de mutantes
              }
            },
            error => {
              this.hideModal()
              throw error
            }
          )
        },
        error => {
          this.hideModal()
          throw error
        }
      )
    }
  }

  private _formatMutantsforCode(mutants: Mutant[]) {
    let formattedMutants: any[] = []
    for (let mutant of mutants) {
      let formattedCircuit = {
        quirkCode: mutant.circuit?.qCircuit.quirkCode,
        qubits: mutant.circuit?.qubits
      }
      let formattedMutant: any = {
        mutantIndex: mutant.mutantIndex,
        circuit: formattedCircuit
      }
      formattedMutants.push(formattedMutant)
    }
    return formattedMutants
  }

  processMutantResults(results: any[][], start: number, inputs?: string[]) {
    // results is a list of lists.
    // results[m] contains the list of execution results for Mutant 'm'.
    // Outer List = Mutants
    // Inner List = Inputs (Execution Cases)

    // Iterate over Mutants (Outer List)
    for (let m = 0; m < results.length; m++) {
      // Calculate global mutant index based on order in the batch + start offset
      const globalIndex = m + start;
      const row = this.matrixRows[globalIndex];

      if (!row) continue;

      const mutantExecutionResults = results[m]; // List of inputs for this mutant

      // Iterate over Inputs (Inner List)
      for (let i = 0; i < mutantExecutionResults.length; i++) {
        // Define Input Header
        let binaryInput = "";
        if (inputs && i < inputs.length) {
          binaryInput = inputs[i];
        } else {
          binaryInput = (i).toString(2);
        }

        // global header collection (check only once per batch or just allow redundancy check)
        if (!this.inputHeaders.includes(binaryInput)) {
          this.inputHeaders.push(binaryInput);
          this.inputHeaders.sort((a, b) => parseInt(a, 2) - parseInt(b, 2));
        }

        const batchResult = mutantExecutionResults[i];
        if (!batchResult) continue;

        // Use properties directly
        const killed = batchResult.killed;
        const error = batchResult.error;

        // Create and associate MutantResult
        const mr = new MutantResult({
          id: i,
          result: killed ? Result.KILLED : Result.ALIVE
        });

        if (!row.mutant.mutantResults) {
          row.mutant.mutantResults = [];
        }
        row.mutant.mutantResults[i] = mr;

        // Update Cell
        let cell = row.cells.find(c => c.input === binaryInput);
        if (cell) {
          cell.killed = killed;
          cell.error = error;
        } else {
          row.cells.push({
            input: binaryInput,
            killed: killed,
            error: error
          });
        }
      }

      // Update Overall Status for this mutant
      if (!row.mutant.result) {
        row.mutant.result = new MutantResult({ result: Result.ALIVE });
      }

      const anyKilled = row.cells.some(c => c.killed);
      if (anyKilled) {
        row.mutant.result.result = Result.KILLED;
      } else {
        row.mutant.result.result = Result.ALIVE;
      }
    }

    // Re-calculate global stats
    this.recalculateStats();
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
    if (!hasResults) return;

    this.inputHeaders = [];

    this.mutantCycle.mutants.forEach((mutant, index) => {
      const row = this.matrixRows[index];
      if (!row || !mutant.mutantResults) return;

      mutant.mutantResults.forEach(result => {
        if (result.id === undefined) return;

        const binaryInput = (result.id).toString(2);

        if (!this.inputHeaders.includes(binaryInput)) {
          this.inputHeaders.push(binaryInput);
          this.inputHeaders.sort((a, b) => parseInt(a, 2) - parseInt(b, 2));
        }

        const killed = result.result === Result.KILLED;
        const error = 0; // Defaulting to 0 as it is not persisted

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
}
