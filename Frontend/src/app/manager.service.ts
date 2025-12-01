import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { QProgram } from './model/QProgram';
import { Mutant } from './model/Mutant';
import { MutantCycle } from './model/MutantCycle';
import { Project } from './model/Project';
import { Operator } from './model/OperatorFamily';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedProject?: Project;

  mutants: Mutant[] = []

  // Subject para notificar cuando se agrega un nuevo circuito
  private newCircuitSubject = new Subject<QProgram>();
  public newCircuit$ = this.newCircuitSubject.asObservable();

  // Subject para notificar cuando se elimina un proyecto
  private projectDeletedSubject = new Subject<string>();
  public projectDeleted$ = this.projectDeletedSubject.asObservable();

  private _selectedMutant = new BehaviorSubject<Mutant | null>(null);
  private _selectedProject = new BehaviorSubject<Project | null>(null);
  private _selectedMutantCycle = new BehaviorSubject<MutantCycle | null>(null);

  // BehaviorSubject para el estado de guardado del proyecto actual
  private _projectSavedState = new BehaviorSubject<boolean>(true);
  public projectSavedState$ = this._projectSavedState.asObservable();

  // Observable público para suscribirse
  public selectedMutant$ = this._selectedMutant.asObservable();

  public selectedProject$ = this._selectedProject.asObservable();
  public selectedMutantCycle$ = this._selectedMutantCycle.asObservable();

  showHome: boolean = true
  showCircuit: boolean = false
  showSidebar: boolean = false
  sidebarExpanded: boolean = false
  inputQubits: string = ""
  outputQubits: string = ""
  qubitCount: number = 0
  qubits: number[] = []
  shots: number = 100

  executionAlgorithm: string = "Simple"
  toleratedError: number = 0.05
  generateWithAllInputs: boolean = false;

  showMutantsInfo: boolean = false;
  showMutantCycleInfo: boolean = false;
  showSaveButton: boolean = false;

  /**
   * Marca el proyecto actual como modificado (no guardado)
   * y emite el cambio de estado
   */
  markProjectAsModified(): void {
    if (this.selectedProject) {
      this.selectedProject.markAsModified();
      this._projectSavedState.next(false);
      this.showSaveButton = true;
    }
  }

  /**
   * Marca el proyecto actual como guardado
   * y emite el cambio de estado
   */
  markProjectAsSaved(): void {
    if (this.selectedProject) {
      this.selectedProject.markAsSaved();
      this._projectSavedState.next(true);
      this.showSaveButton = false;
    }
  }

  markMutantCyclesAsSaved(): void {
    if (this.selectedProject && this.selectedProject.mutantCycles) {
      this.selectedProject.mutantCycles.forEach(mc => mc.newlyGenerated = false);
    }
  }

  notifyProjectDeleted(projectId: string): void {
    this.projectDeletedSubject.next(projectId);
  }

  /**
   * Obtiene el estado de guardado del proyecto actual
   */
  get isProjectSaved(): boolean {
    return this.selectedProject?.saved ?? true;
  }

  setselectedProject(circuit: Project) {
    this.selectedProject = circuit
    this.qubitCount = this.selectedProject.getQubits()

    // Solo procesar qubits si hay código Quirk válido
    if (this.qubitCount > 0) {
      this.qubits = Array.from({ length: this.qubitCount }, (_, i) => i);

      this.inputQubits = ""
      this.outputQubits = ""
      for (let i = 0; i < this.qubitCount; i++) {
        this.inputQubits = this.inputQubits + i + ","
        this.outputQubits = this.outputQubits + i + ","
      }
      if (this.inputQubits.endsWith(","))
        this.inputQubits = this.inputQubits.substring(0, this.inputQubits.length - 1)
      this.selectedProject.qProgram.inputQubits = this.inputQubits

      if (this.outputQubits.endsWith(","))
        this.outputQubits = this.outputQubits.substring(0, this.outputQubits.length - 1)
      this.selectedProject.qProgram.outputQubits = this.outputQubits
    } else {
      // Para circuitos sin código Quirk, inicializar valores por defecto
      this.qubits = []
      this.inputQubits = ""
      this.outputQubits = ""
      this.selectedProject.qProgram.inputQubits = ""
      this.selectedProject.qProgram.outputQubits = ""
    }

    // Emitir el estado de guardado del proyecto seleccionado
    this._projectSavedState.next(circuit.saved);
    this.showSaveButton = !circuit.saved;

    // Notificar a los suscriptores del cambio de circuito
    this._selectedProject.next(circuit);
  }

  setNewselectedProject(circuit: Project) {
    this.selectedProject = circuit

    // Inicializar valores por defecto para nuevo proyecto
    this.qubitCount = 0
    this.qubits = []
    this.inputQubits = ""
    this.outputQubits = ""

    if (this.selectedProject.qProgram) {
      this.selectedProject.qProgram.inputQubits = ""
      this.selectedProject.qProgram.outputQubits = ""
    }

    if (sessionStorage.getItem('token')) {
      this.showSidebar = true
    }

    // Los proyectos nuevos no están guardados
    this._projectSavedState.next(false);
    this.showSaveButton = true;

    // Notificar a los suscriptores del nuevo circuito seleccionado
    this._selectedProject.next(circuit);
  }

  setMutants(mutants: any) {
    this.mutants = []
    console.log("Mutants received: ", mutants);
    for (let i = 0; i < mutants.length; i++) {
      let mutantIndex = mutants[i].mutantIndex;
      let mutatedColumn = mutants[i].mutatedColumn;
      let mutatedRow = mutants[i].mutatedRow;
      let mutationOperator = mutants[i].mutationOperator;
      let circuit = new QProgram(crypto.randomUUID(), mutants[i].quirk);
      circuit.qubits = mutants[i].qubits;
      circuit.inputQubits = this.inputQubits;
      circuit.outputQubits = this.outputQubits;
      circuit.qCircuit.mutableColumns = this.selectedProject?.qProgram.qCircuit.mutableColumns || "";
      circuit.qCircuit.mutableRows = this.selectedProject?.qProgram.qCircuit.mutableRows || "";
      let mutant = new Mutant(mutantIndex, mutatedColumn, mutatedRow, mutationOperator, circuit);
      this.mutants.push(mutant)

    }
    let mutantPrj = new MutantCycle(this.mutants, this.selectedProject?.mutantCycles.length);
    mutantPrj.newlyGenerated = true;
    this.selectedProject?.mutantCycles.push(mutantPrj);

    // Marcar como modificado al agregar mutantes
    this.markProjectAsModified();
  }

  getNumberOfInputQubits() {
    return this.inputQubits.split(",").length
  }

  // Getter para compatibilidad
  get selectedMutant(): Mutant | null {
    return this._selectedMutant.value;
  }

  // Método para actualizar el mutante seleccionado
  setSelectedMutant(mutant: Mutant | null): void {
    this._selectedMutant.next(mutant);
  }

  // Getter para MutantCycle seleccionado
  get selectedMutantCycle(): MutantCycle | null {
    return this._selectedMutantCycle.value;
  }

  // Método para actualizar el MutantCycle seleccionado
  setSelectedMutantCycle(mutantCycle: MutantCycle | null): void {
    this._selectedMutantCycle.next(mutantCycle);
  }
}
