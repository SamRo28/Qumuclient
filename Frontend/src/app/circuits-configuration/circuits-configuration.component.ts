import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { Subscription } from 'rxjs';
import { CircuitComponent } from '../circuit/circuit.component';
import { QProgram } from '../model/QProgram';
import { Project } from '../model/Project';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-circuits-configuration',
  templateUrl: './circuits-configuration.component.html',
  styleUrls: ['./circuits-configuration.component.css'],
  animations: [
    trigger('fadeSlide', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden <=> visible', [
        animate('350ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class CircuitsConfigurationComponent implements OnInit, OnDestroy {

  isCircuitValid = false;
  selectedTab: 'circuit' | 'mutants' = 'circuit';
  selectedCircuit: Project | null = null; // Inicializar con un circuito vacío
  private subscription = new Subscription();

  @ViewChild(CircuitComponent) circuitComponent!: CircuitComponent;

  constructor(public manager: ManagerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Suscribirse a cambios en la ruta
    this.subscription.add(
      this.route.paramMap.subscribe(params => {
        const projectId = params.get('projectId');
        if (projectId) {
          // Suscribirse a los proyectos cargados para encontrar el seleccionado
          // Importante: Esto maneja tanto la navegación directa como la recarga donde projects$ emite tarde
          this.subscription.add(
            this.manager.projects$.subscribe(projects => {
              const project = projects.find(p => p.id === projectId);
              if (project && this.manager.selectedProject !== project) {
                this.manager.setselectedProject(project);
              }
            })
          );
        }
      })
    );

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
