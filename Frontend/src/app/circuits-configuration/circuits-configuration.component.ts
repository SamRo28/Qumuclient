import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Subscription } from 'rxjs';
import { CircuitComponent } from '../circuit/circuit.component';
import { QProgram } from '../model/QProgram';
import { Project } from '../model/Project';

@Component({
  selector: 'app-circuits-configuration',
  templateUrl: './circuits-configuration.component.html',
  styleUrls: ['./circuits-configuration.component.css']
})
export class CircuitsConfigurationComponent implements OnInit, OnDestroy {

    isCircuitValid = false;
    selectedTab: 'circuit' | 'mutants' = 'circuit';
    selectedCircuit: Project | null = null; // Inicializar con un circuito vacío
    private subscription = new Subscription();
    
    @ViewChild(CircuitComponent) circuitComponent!: CircuitComponent;

  constructor(public manager: ManagerService) { }

  ngOnInit(): void {
    this.subscription.add(
        this.manager.selectedProject$.subscribe(project => {
          this.selectedCircuit = project;
          // Cambiar a la pestaña circuit siempre que haya un cambio de circuito
          // (nuevo circuito o circuito seleccionado)
          if (project) {
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
    return this.manager.selectedProject?.name?.trim() !== '' && 
           this.manager.selectedProject?.qProgram.qCircuit.textQuirkCode?.trim() !== '';
  }

  selectTab(tab: 'circuit' | 'mutants') {
    // Usar la validación del ManagerService
    if (tab === 'mutants' && !this.isCircuitValid) return;
    this.manager.showSaveButton = this.isCircuitValid;
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
