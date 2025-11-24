import { Component, Input, OnInit } from '@angular/core';
import { MutantCycle } from '../model/MutantCycle';
import { Result } from '../model/MutantResult';
import { Mutant } from '../model/Mutant';
import { DomSanitizer } from '@angular/platform-browser';
import { ManagerService } from '../manager.service';
// import { QiskitExecutorService } from '../qiskit-executor.service'; // TODO: Reemplazar por ExecuterService
import { QumugenService } from '../qumugen.service';
import { AppComponent } from '../app.component';
import { MutantsExecutor } from '../MutantsExecutor';
import { QProgram } from '../model/QProgram';

@Component({
  selector: 'app-mutant-cycle-info',
  templateUrl: './mutant-cycle-info.component.html',
  styleUrls: ['./mutant-cycle-info.component.css']
})
export class MutantCycleInfoComponent extends MutantsExecutor {
  override runOne(circuit: QProgram, program?: string): void {
    throw new Error('Method not implemented.');
  }

  @Input() mutantCycle?: MutantCycle | null;

  constructor(public override sanitizer: DomSanitizer, public manager: ManagerService, /* public qe: QiskitExecutorService, */ private qumugen: QumugenService) {
    super(sanitizer);
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
    if (!result) return 'Pendiente';

    switch (result) {
      case Result.KILLED:
        return 'Eliminado';
      case Result.ALIVE:
        return 'Vivo';
      case Result.ZOMBIE:
        return 'Zombie';
      default:
        return 'Pendiente';
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

    this.showModal("Executing original")

    // TODO: Reemplazar con ExecuterService.runOne()
    /* this.qe.runOne(this.manager.selectedProject!.qProgram, this.manager.inputQubits, this.manager.outputQubits, this.manager.executionAlgorithm, this.manager.selectedProject!.qProgram.qubits, false).subscribe(
      originalResults => {
        this.hideModal()
        if (this.stopped)
          return

        this.originalResults = originalResults
        let header1 = document.getElementById("header1")
        let header2 = document.getElementById("header2")
        let children = header1!.childElementCount
        for (let i = 1; i < children; i++) {
          let child = header1?.childNodes.item(1)
          header1?.removeChild(child!)
          child = header2?.childNodes.item(3)
          header2?.removeChild(child!)
        }
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
    ) */
  }

  private _runMutants(start: number, chunkSize: number) {
    let end = start + chunkSize
    if (end > this.manager.mutants.length)
      end = this.manager.mutants.length

    this.showModal(`Running mutants from ${start} to ${end}`); // Mostrar el modal con el rango de mutantes

    let mutants = this.manager.mutants.slice(start, end)
    if (mutants.length > 0) {
      this.qumugen.getMultipleQiskitCode(mutants).subscribe(
        results => {
          // TODO: Reemplazar con ExecuterService.executeWithoutStrategy()
          /* this.qe.executeWithoutStrategy(results, this.originalResults, this.manager.executionAlgorithm, this.manager.toleratedError).subscribe(
            result => {

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
          ) */
        },
        error => {
          this.hideModal()
          throw error
        }
      )
    }
  }

}
