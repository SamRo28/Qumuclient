import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerService } from '../manager.service';
import { CircuitComponent } from '../circuit/circuit.component';

@Component({
  selector: 'app-circuits-configuration',
  templateUrl: './circuits-configuration.component.html',
  styleUrls: ['./circuits-configuration.component.css']
})
export class CircuitsConfigurationComponent implements OnInit {

    isCircuitValid = false;
    selectedTab: 'circuit' | 'mutants' = 'circuit';
    
    @ViewChild(CircuitComponent) circuitComponent!: CircuitComponent;

  constructor(public manager: ManagerService) { }

  ngOnInit(): void {
  }

  // Getter para validar el circuito usando ManagerService
  get isCircuitValidFromManager(): boolean {
    return this.manager.selectedCircuit?.id?.trim() !== '' && 
           this.manager.selectedCircuit?.textQuirkCode?.trim() !== '';
  }

  selectTab(tab: 'circuit' | 'mutants') {
    // Usar la validación del ManagerService
    if (tab === 'mutants' && !this.isCircuitValid) return;
    this.selectedTab = tab;
    
    // Si volvemos a la pestaña circuit, recargar los valores
    if (tab === 'circuit') {
      setTimeout(() => {
        if (this.circuitComponent) {
          this.circuitComponent.loadCircuitFromManager();
        }
      });
    }
  }



}
