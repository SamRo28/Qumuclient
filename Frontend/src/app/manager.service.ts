import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Circuit } from './model/Circuit';
import { Mutant } from './model/Mutant';
import { MutantProject } from './model/MutantProject';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedCircuit? : Circuit
  
  mutants : Mutant[] = []
  
  selectedMutant? : Mutant

  // Subject para notificar cuando se agrega un nuevo circuito
  private newCircuitSubject = new Subject<Circuit>();
  public newCircuit$ = this.newCircuitSubject.asObservable();
  
  showMutantInformation : boolean = false
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
  generateWithAllInputs: boolean = true

  setSelectedCircuit(circuit : Circuit) {
    this.selectedCircuit = circuit
    this.qubitCount = this.selectedCircuit.getQubits()
    
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
  }

  setNewSelectedCircuit(circuit : Circuit) {
    this.selectedCircuit = circuit
  }

  setMutants(mutants: any) {
    this.mutants = []
    
    for (let i=0; i<mutants.length; i++) {
      let mutant = new Mutant(mutants[i])
      this.mutants.push(mutant)

    }
    let mutantPrj = new MutantProject(this.mutants)
    this.selectedCircuit?.mutantsProjects.push(mutantPrj);

  }

  getNumberOfInputQubits() {
    return this.inputQubits.split(",").length
  }
}
