import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

  constructor(public override sanitizer: DomSanitizer, public manager: ManagerService, public qe: QiskitExecutorService, private qumugen: QumugenService) {
    super(sanitizer);
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
    if (changes['mutantCycle']) {
      this.currentPage = 1; // Reset to first page on new cycle
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
    AppComponent.error = ""
    this.runningMutants = true
    this.originalResults = []
    this.mutantResults = []
    this.aliveMutants = 0
    this.killedMutants = 0

    if (this.stopped)
      return

    //this.showModal("Executing original")

    this.qe.runOne(this.manager.selectedProject!.qProgram, this.manager.inputQubits, this.manager.outputQubits, this.manager.executionAlgorithm, this.manager.selectedProject!.qProgram.qubits, false).subscribe(
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

        // TODO: Reemplazar con ExecuterService.getCores()
        this.qe.getCores().subscribe(
          result => {
            let chunkSize = 2 * result
            this._runMutants(0, chunkSize)
          },
          error => {
            this.hideModal()
            throw error
          }
        )
      }
    )
  }

  private _runMutants(start: number, chunkSize: number) {
    let end = start + chunkSize
    if (end > this.manager.mutants.length)
      end = this.manager.mutants.length

    this.showModal(`Running mutants from ${start} to ${end}`); // Mostrar el modal con el rango de mutantes

    let mutantsToFormat = this.manager.mutants.slice(start, end)
    let formattedMutants = this._formatMutantsforCode(mutantsToFormat)
    if (mutantsToFormat.length > 0) {
      this.qumugen.getMultipleQiskitCode(formattedMutants).subscribe(
        results => {
          // TODO: Reemplazar con ExecuterService.executeWithoutStrategy()
          this.qe.executeWithoutStrategy(results, this.originalResults, this.manager.executionAlgorithm, this.manager.toleratedError).subscribe(
            result => {
              this.processMutantResults(result)
              start = start + chunkSize
              if (this.stopped)
                return

              if (start >= this.manager.mutants.length) {
                this.hideModal(); // Ocultar el modal cuando termine la ejecución de todos los mutantes
              } else {
                this._runMutants(start, chunkSize); // Continuar con el siguiente lote de mutantes
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

  processMutantResults(results: any[]) {
    for (let result of results) {
      let mutant = this.manager.mutants.find(m => m.mutantIndex == result.mutantIndex)
      if (mutant) {
        let mutantResult = new MutantResult({})
        if (result.killed) {
          mutantResult.result = Result.KILLED
          this.killedMutants++
        } else {
          mutantResult.result = Result.ALIVE
          this.aliveMutants++
        }
        mutant.result = mutantResult
      }
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

}
