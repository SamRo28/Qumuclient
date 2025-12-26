import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable, of, tap, switchMap } from 'rxjs';
import { QProgram } from './model/QProgram';
import { Mutant } from './model/Mutant';
import { MutantCycle } from './model/MutantCycle';
import { Project } from './model/Project';
import { Operator } from './model/OperatorFamily';
import { ReperService } from './reper.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedProject?: Project;

  // List of all loaded projects
  projects: Project[] = [];
  private _projects = new BehaviorSubject<Project[]>([]);
  public projects$ = this._projects.asObservable();
  loadingProjects = false;

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

  constructor(private reperService: ReperService) { }

  /**
   * Loads projects from the backend for the current user (by email).
   */
  loadProjects(email: string): Observable<Project[]> {
    this.loadingProjects = true;
    return this.reperService.getCircuits(email).pipe(
      tap(data => {
        this.projects = this.processProjectData(data);
        this._projects.next(this.projects);
        this.loadingProjects = false;
      })
    );
  }

  /**
   * Gets a project by ID, loading it if necessary (though simplified for now, assumes loaded).
   * Typically called after loadProjects ensures data is there.
   */
  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

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

    // Add to local projects list if not present
    if (!this.projects.some(p => p.id === circuit.id)) {
      this.projects = [...this.projects, circuit];
      this._projects.next(this.projects);
    }

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

  // --- Global Confirmation Modal Management ---

  modalState = {
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    type: 'info' as 'info' | 'warning' | 'danger',
    onConfirm: () => { },
    onCancel: () => { }
  };

  openConfirmationModal(config: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    type?: 'info' | 'warning' | 'danger';
    onConfirm: () => void;
    onCancel?: () => void;
  }) {
    this.modalState = {
      isOpen: true,
      title: config.title,
      message: config.message,
      confirmText: config.confirmText || 'Confirm',
      cancelText: config.cancelText || 'Cancel',
      type: config.type || 'info',
      onConfirm: config.onConfirm,
      onCancel: config.onCancel || (() => { })
    };
  }

  closeConfirmationModal() {
    this.modalState.isOpen = false;
  }

  confirmModal() {
    if (this.modalState.onConfirm) {
      this.modalState.onConfirm();
    }
    this.closeConfirmationModal();
  }

  cancelModal() {
    if (this.modalState.onCancel) {
      this.modalState.onCancel();
    }
    this.closeConfirmationModal();
  }

  // --- Execution Status Notification ---

  notification = {
    message: '',
    type: 'loading' as 'loading' | 'success',
    visible: false
  };

  private notificationTimeout: any;

  showNotification(message: string, type: 'loading' | 'success', duration: number = 0): void {
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }

    this.notification = {
      message,
      type,
      visible: true
    };

    if (duration > 0) {
      this.notificationTimeout = setTimeout(() => {
        this.closeNotification();
      }, duration);
    }
  }

  closeNotification(): void {
    this.notification.visible = false;
  }

  // Legacy support for simple string binding if needed, or mapped to new system
  get executionStatus(): string | null {
    return this.notification.visible ? this.notification.message : null;
  }

  setExecutionStatus(message: string): void {
    // Default legacy call maps to loading with 5s timeout as per user request for "Running"
    // But better to control explicitly. For backward compatibility with what I just wrote:
    this.showNotification(message, 'loading', 5000);
  }

  clearExecutionStatus(): void {
    this.closeNotification();
  }

  // Helper method to process loaded projects (moved from SideBarComponent)
  processProjectData(data: any[]): Project[] {
    return data.map((circuitData: any) => {
      // Deep mapping to classes
      const project = new Project(undefined, undefined, undefined, undefined, true);
      project.id = circuitData.id;
      project.name = circuitData.name;

      // QProgram
      if (circuitData.qProgram) {
        const qProgram = new QProgram();
        Object.assign(qProgram, circuitData.qProgram);

        // QCircuit
        if (circuitData.qProgram.qCircuit) {
          const qCircuit = new (require('./model/QCircuit').QCircuit)(circuitData.qProgram.qCircuit.id, circuitData.qProgram.qCircuit.quirkCode);
          qProgram.qCircuit = qCircuit;
        }
        project.qProgram = qProgram;
      }

      // MutantCycles
      project.mutantCycles = (circuitData.mutantCycles || []).map((cycleData: any) => {
        const mutantCycle = new (require('./model/MutantCycle').MutantCycle)();
        mutantCycle.id = cycleData.id;
        mutantCycle.date = cycleData.date;
        mutantCycle.execConfig = cycleData.execConfig;

        // Mutants
        mutantCycle.mutants = (cycleData.mutants || []).map((mutantData: any) => {
          const mutant = new (require('./model/Mutant').Mutant)();
          mutant.id = mutantData.id;
          mutant.mutantResults = mutantData.mutantResults;
          mutant.mutantIndex = mutantData.mutantIndex;
          mutant.mutatedColumn = mutantData.mutatedColumn;
          mutant.mutatedRow = mutantData.mutatedRow;
          if (mutantData.operator) {
            mutant.operator.name = mutantData.operator.name;
            mutant.mutationOperator = mutantData.operator.name;
            mutant.operator.id = mutantData.operator.type;
            mutant.operator.enabled = mutantData.operator.enabled;
            mutant.operator.description = mutantData.operator.description;
          }


          // Circuit (QProgram)
          if (mutantData.circuit) {
            const mutantQProgram = new QProgram();
            Object.assign(mutantQProgram, mutantData.circuit);

            if (mutantData.circuit.qCircuit) {
              const mutantQCircuit = new (require('./model/QCircuit').QCircuit)(mutantData.circuit.qCircuit.id, mutantData.circuit.qCircuit.quirkCode);
              mutantQProgram.qCircuit = mutantQCircuit;
            }
            mutant.circuit = mutantQProgram;
          }
          return mutant;
        });

        return mutantCycle;
      });

      if (circuitData.projectNotes) {
        project.projectNotes = (circuitData.projectNotes || []).map((noteData: any) => {
          const note = new (require('./model/ProjectNote').ProjectNote)(
            noteData.title,
            noteData.text,
            noteData.type,
            noteData.id,
            new Date(noteData.timestamp)
          );
          return note;
        });
      }

      // TestSuites
      if (circuitData.testSuites) {
        project.testSuites = (circuitData.testSuites || []).map((testSuiteData: any) => {
          const testSuite = new (require('./model/TestSuite').TestSuite)();
          testSuite.id = testSuiteData.id;
          testSuite.error_range = testSuiteData.error_range;

          // TestCases
          testSuite.testCases = (testSuiteData.testCases || []).map((testCaseData: any) => {
            let testCase: any = null; // Typing loosely to avoid circular dep issues in this snippet
            if (testCaseData.type === 'DETERMINISTIC') {
              testCase = new (require('./model/Deterministic').Deterministic)();
              testCase.entryValues = testCaseData.entryValues;
              testCase.expectedValues = testCaseData.expectedValues;
            } else if (testCaseData.type === 'STOCHASTIC') {
              testCase = new (require('./model/Stochastic').Stochastic)();
              testCase.probabilityDistribution = testCaseData.probabilityDistribution;
            }

            if (testCase) {
              testCase.id = testCaseData.id;
              testCase.entryIndexes = testCaseData.entryIndexes;
              testCase.outputIndexes = testCaseData.outputIndexes;
            }
            return testCase;
          }).filter((tc: any) => tc !== null);

          return testSuite;
        });
      }

      return project;
    });
  }
}




