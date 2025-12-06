import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { of, Subscription, switchMap, tap } from 'rxjs';
import { ReperService } from '../reper.service';
import { ManagerService } from '../manager.service';
import { QProgram } from '../model/QProgram';
import { MutantCycle } from '../model/MutantCycle';
import { Mutant } from '../model/Mutant';
import { QumugenService } from '../qumugen.service';
import { AppComponent } from '../app.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../model/Project';
import { QCircuit } from '../model/QCircuit';
import { UserService } from '../user.service';
import { ProjectNote } from '../model/ProjectNote';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  url?: SafeResourceUrl;

  menuAbierto = false;
  mostrarInicio = true;
  circuits: Project[] = [];
  expandedCircuits: Set<string> = new Set();
  expandedProjects: Set<string> = new Set();
  loading = false;
  private subs = new Subscription();
  isCreatingProject = false; // Protección contra doble-click (público para el template)

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private el: ElementRef,
    private reperService: ReperService,
    private manager: ManagerService,
    private qumugen: QumugenService,
    public sanitizer: DomSanitizer,
    private userService: UserService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarInicio = this.router.url === '/home';
      }
    });
  }

  ngOnInit(): void {
    this.manager.sidebarExpanded = this.menuAbierto;

    if (sessionStorage.getItem('token')) {
      this.loadCircuitsFromService();
    }

    // Suscribirse a eventos de login
    this.subs.add(
      this.userService.login$.subscribe(() => {
        this.loadCircuitsFromService();
      })
    );

    // Suscribirse a cambios en el proyecto seleccionado
    this.subs.add(
      this.manager.selectedProject$.subscribe((project) => {
        if (project) {
          // Buscar si ya existe por ID o por referencia
          const existingIndex = this.circuits.findIndex(c =>
            (c.id && project.id && c.id === project.id) || c === project
          );

          if (existingIndex === -1) {
            // No existe, agregarlo
            this.circuits.push(project);
            // Expandir automáticamente el nuevo proyecto
            if (project.name) {
              this.expandedCircuits.add(project.name);
            }
          } else {
            // Ya existe, actualizarlo en su posición
            this.circuits[existingIndex] = project;
          }
        }
      })
    );

    // Suscribirse a eliminación de proyectos
    this.subs.add(
      this.manager.projectDeleted$.subscribe((projectId) => {
        this.circuits = this.circuits.filter(c => c.id !== projectId);
        if (this.circuits.length > 0) {
          this.selectCircuit(this.circuits[0]);
        } else {
          this.createNewCircuit();
        }
      })
    );

    // Agregar el proyecto actual si existe y no está en la lista
    if (this.manager.selectedProject) {
      const exists = this.circuits.some(c =>
        (c.id && this.manager.selectedProject!.id && c.id === this.manager.selectedProject!.id) ||
        c === this.manager.selectedProject
      );

      if (!exists) {
        this.circuits.push(this.manager.selectedProject);
      }
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.manager.sidebarExpanded = this.menuAbierto;
  }

  createNewCircuit() {
    // Protección contra doble-click
    if (this.isCreatingProject) {
      return;
    }

    this.isCreatingProject = true;

    // Generar nombre único
    let name = 'Project' + (this.circuits.length + 1);
    let newCircuit = new Project();
    newCircuit.name = name;

    // Configurar el manager
    this.manager.setNewselectedProject(newCircuit);
    this.manager.showCircuit = true;
    this.manager.showMutantsInfo = false;
    this.manager.showSaveButton = false;
    this.manager.showMutantCycleInfo = false;

    // Resetear protección después de un breve delay
    setTimeout(() => {
      this.isCreatingProject = false;
    }, 500);
  }

  toggleCircuit(circuitId: string): void {
    if (this.expandedCircuits.has(circuitId)) {
      this.expandedCircuits.delete(circuitId);
    } else {
      this.expandedCircuits.add(circuitId);
    }
  }

  toggleProject(projectKey: string): void {
    if (this.expandedProjects.has(projectKey)) {
      this.expandedProjects.delete(projectKey);
    } else {
      this.expandedProjects.add(projectKey);
    }
  }

  isCircuitExpanded(circuitId: string): boolean {
    return this.expandedCircuits.has(circuitId);
  }

  isProjectExpanded(projectKey: string): boolean {
    return this.expandedProjects.has(projectKey);
  }

  selectCircuit(circuit: Project): void {
    this.manager.setselectedProject(circuit);
    this.manager.showCircuit = true;
    this.manager.showHome = false;
    this.manager.showMutantsInfo = false;
    this.manager.showMutantCycleInfo = false;
  }

  selectMutant(mutant: Mutant, project: Project): void {
    this.manager.setselectedProject(project);
    this.manager.setSelectedMutant(mutant);
    this.manager.showCircuit = false;
    this.manager.showHome = false;
    this.manager.showMutantsInfo = true;
    this.manager.showMutantCycleInfo = false;

    //Modificar para que no se haga aqui
    if (this.manager.selectedProject) {
      this.qumugen.getQiskitCode(this.manager.selectedProject.qProgram).then(
        code => {
          this.manager.selectedProject!.qProgram.qCode!.code = code.wholeCode.split("\n")
        }
      ).catch(error => {
        console.error('Error getting qiskit code for selected circuit:', error);
      })
    }

    if (mutant.circuit && mutant.circuit.qCircuit.textQuirkCode) {
      this.qumugen.getQiskitCode(mutant.circuit).then(
        code => {
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(AppComponent.quirkUrl + "#circuit=" + mutant.circuit!.qCircuit.textQuirkCode)
          mutant.circuit!.qCode!.code = code.wholeCode.split("\n")
        }
      ).catch(error => {
        console.error('Error getting qiskit code for mutant circuit:', error);
      })
    } else {
      console.warn('Cannot process mutant: circuit or quirk code not available');
    }
  }

  selectMutantCycle(mutantCycle: MutantCycle): void {
    this.manager.setSelectedMutantCycle(mutantCycle);
    this.manager.showCircuit = false;
    this.manager.showHome = false;
    this.manager.showMutantsInfo = false;
    this.manager.showMutantCycleInfo = true;
  }

  getProjectKey(circuitId: string, projectId: number): string {
    return `${circuitId}_${projectId}`;
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2 // Aparece cuando el 20% del elemento es visible
    });

    const hiddenElements = this.el.nativeElement.querySelectorAll('.fade-in');
    hiddenElements.forEach((el: any) => observer.observe(el));
  }

  onActivate() {
    this.mostrarInicio = false;
  }

  goToHome() {
    this.manager.showHome = true;
    this.manager.showCircuit = false;
    this.manager.showMutantsInfo = false;
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar memory leaks
    this.subscriptions.unsubscribe();
    this.subs.unsubscribe();
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  refreshCircuits(): void {
    // Verificar si hay cambios sin guardar en el proyecto actual
    if (this.manager.selectedProject && !this.manager.selectedProject.saved) {
      this.manager.openConfirmationModal({
        title: 'Unsaved Changes',
        message: 'You have unsaved changes in the current project. If you refresh, these changes will be lost. Do you want to continue?',
        confirmText: 'Refresh',
        cancelText: 'Cancel',
        type: 'warning',
        onConfirm: () => {
          this.loadCircuitsFromService();
        }
      });
      return;
    }

    this.loadCircuitsFromService();
  }

  loadCircuitsFromService(): void {
    const email = sessionStorage.getItem('email');
    const token = sessionStorage.getItem('token')!;

    this.loading = true;

    let email$ = email
      ? of(email)
      : this.reperService.getUser(token).pipe(
        tap(userEmail => sessionStorage.setItem('email', userEmail))
      );

    email$.pipe(
      switchMap(userEmail => this.reperService.getCircuits(userEmail, token))
    ).subscribe({
      next: (data) => {
        this.circuits = data.map((circuitData: any) => {
          // Mapeo profundo a clases
          const project = new Project(undefined, undefined, undefined, undefined, true);
          project.id = circuitData.id;
          project.name = circuitData.name;

          // QProgram
          if (circuitData.qProgram) {
            const qProgram = new QProgram();
            Object.assign(qProgram, circuitData.qProgram);

            // QCircuit
            if (circuitData.qProgram.qCircuit) {
              const qCircuit = new QCircuit(circuitData.qProgram.qCircuit.id, circuitData.qProgram.qCircuit.quirkCode);
              qProgram.qCircuit = qCircuit;
            }
            project.qProgram = qProgram;
          }

          // MutantCycles
          project.mutantCycles = (circuitData.mutantCycles || []).map((cycleData: any) => {
            const mutantCycle = new (require('../model/MutantCycle').MutantCycle)();
            mutantCycle.id = cycleData.id;
            mutantCycle.date = cycleData.date;
            mutantCycle.execConfig = cycleData.execConfig;

            // Mutants
            mutantCycle.mutants = (cycleData.mutants || []).map((mutantData: any) => {
              const mutant = new (require('../model/Mutant').Mutant)();
              mutant.id = mutantData.id;
              mutant.mutantResults = mutantData.mutantResults;
              mutant.mutantIndex = mutantData.mutantIndex;
              mutant.mutatedColumn = mutantData.mutatedColumn;
              mutant.mutatedRow = mutantData.mutatedRow;
              mutant.operator.name = mutantData.operator.name;
              mutant.mutationOperator = mutantData.operator.name;
              mutant.operator.id = mutantData.operator.type;
              mutant.operator.enabled = mutantData.operator.enabled;
              mutant.operator.description = mutantData.operator.description;


              // Circuit (QProgram)
              if (mutantData.circuit) {
                const mutantQProgram = new QProgram();
                Object.assign(mutantQProgram, mutantData.circuit);

                if (mutantData.circuit.qCircuit) {
                  const mutantQCircuit = new QCircuit(mutantData.circuit.qCircuit.id, mutantData.circuit.qCircuit.quirkCode);
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
              const note = new ProjectNote(
                noteData.title,
                noteData.text,
                noteData.type,
                noteData.id,
                new Date(noteData.timestamp)
              );
              return note;
            });
          }
          return project;
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading circuits:', error);
        this.loading = false;
      }
    });
  }
}