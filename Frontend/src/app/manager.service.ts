import { Injectable } from '@angular/core';
import { Subject,  BehaviorSubject, Observable  } from 'rxjs';
import { QProgram } from './model/QProgram';
import { Mutant } from './model/Mutant';
import { MutantCycle } from './model/MutantCycle';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedCircuit? : QProgram
  
  mutants : Mutant[] = []
  
  // Subject para notificar cuando se agrega un nuevo circuito
  private newCircuitSubject = new Subject<QProgram>();
  public newCircuit$ = this.newCircuitSubject.asObservable();
  
  private _selectedMutant = new BehaviorSubject<Mutant | null>(null);
  private _selectedCircuit = new BehaviorSubject<QProgram | null>(null);
  private _selectedMutantCycle = new BehaviorSubject<MutantCycle | null>(null);
  // Observable público para suscribirse
  public selectedMutant$ = this._selectedMutant.asObservable();
  
  public selectedCircuit$ = this._selectedCircuit.asObservable();
  public selectedMutantCycle$ = this._selectedMutantCycle.asObservable();

  showHome : boolean = true
  showCircuit : boolean = false
  showSidebar : boolean = false
  sidebarExpanded : boolean = false 
  inputQubits : string = ""
  outputQubits : string = ""
  qubitCount : number = 0
  qubits : number[] = []
  shots : number = 100

  executionAlgorithm : string = "Simple"
  toleratedError : number = 0.05
  generateWithAllInputs: boolean = false;
  
  showMutantsInfo: boolean = false;
  showMutantCycleInfo: boolean = false;

  setSelectedCircuit(circuit : QProgram) {
    this.selectedCircuit = circuit
    this.qubitCount = this.selectedCircuit.getQubits()
    
    // Solo procesar qubits si hay código Quirk válido
    if (this.qubitCount > 0) {
      this.qubits = Array.from({ length:this.qubitCount }, (_, i) => i);

      this.inputQubits = ""
      this.outputQubits = ""
      for (let i=0; i<this.qubitCount; i++) {
        this.inputQubits = this.inputQubits + i + ","
        this.outputQubits = this.outputQubits + i + ","
      }
      if (this.inputQubits.endsWith(","))
        this.inputQubits = this.inputQubits.substring(0, this.inputQubits.length-1)
      this.selectedCircuit.inputQubits = this.inputQubits

      if (this.outputQubits.endsWith(","))
        this.outputQubits = this.outputQubits.substring(0, this.outputQubits.length-1)
      this.selectedCircuit.outputQubits = this.outputQubits
    } else {
      // Para circuitos sin código Quirk, inicializar valores por defecto
      this.qubits = []
      this.inputQubits = ""
      this.outputQubits = ""
      this.selectedCircuit.inputQubits = ""
      this.selectedCircuit.outputQubits = ""
    }
    
    // Notificar a los suscriptores del cambio de circuito
    this._selectedCircuit.next(circuit);
  }

  setNewSelectedCircuit(circuit : QProgram) {
    this.selectedCircuit = circuit
    // Notificar a los suscriptores del nuevo circuito seleccionado
    this._selectedCircuit.next(circuit);
  }

  setMutants(mutants: any) {
    this.mutants = []
    
    for (let i=0; i<mutants.length; i++) {
      let mutant = new Mutant(mutants[i])
      this.mutants.push(mutant)

    }
    let mutantPrj = new MutantCycle(this.mutants, this.selectedCircuit?.mutantsProjects.length);
    this.selectedCircuit?.mutantsProjects.push(mutantPrj);

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
