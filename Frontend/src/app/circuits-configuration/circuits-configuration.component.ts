import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Subscription } from 'rxjs';
import { CircuitComponent } from '../circuit/circuit.component';
import { Circuit } from '../model/Circuit';

@Component({
  selector: 'app-circuits-configuration',
  templateUrl: './circuits-configuration.component.html',
  styleUrls: ['./circuits-configuration.component.css']
})
export class CircuitsConfigurationComponent implements OnInit, OnDestroy {

    isCircuitValid = false;
    selectedTab: 'circuit' | 'mutants' = 'circuit';
    selectedCircuit: Circuit | null = null; // Inicializar con un circuito vacío
    private subscription = new Subscription();
    
    @ViewChild(CircuitComponent) circuitComponent!: CircuitComponent;

  constructor(public manager: ManagerService) { }

  ngOnInit(): void {
    this.subscription.add(
        this.manager.selectedCircuit$.subscribe(circuit => {
          this.selectedCircuit = circuit;
          // Cambiar a la pestaña circuit siempre que haya un cambio de circuito
          // (nuevo circuito o circuito seleccionado)
          if (circuit) {
            this.selectTab('circuit');
            // Asegurar que el componente circuit carga la información del circuito
            setTimeout(() => {
              if (this.circuitComponent) {
                this.circuitComponent.loadCircuitFromManager();
              }
            }, 0);
          }
        })
      );
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
