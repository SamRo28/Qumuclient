import { Component, Input, OnInit } from '@angular/core';
import { MutantCycle } from '../model/MutantCycle';
import { Result } from '../model/MutantResult';
import { Mutant } from '../model/Mutant';

@Component({
  selector: 'app-mutant-cycle-info',
  templateUrl: './mutant-cycle-info.component.html',
  styleUrls: ['./mutant-cycle-info.component.css']
})
export class MutantCycleInfoComponent implements OnInit {

  @Input() mutantCycle?: MutantCycle | null;

  constructor() { }

  ngOnInit(): void {
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
}
