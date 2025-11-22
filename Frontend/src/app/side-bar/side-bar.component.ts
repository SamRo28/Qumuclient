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
import { Operator } from '../model/OperatorFamily';

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


    this.subs.add(
      this.userService.login$.subscribe(() => {
        this.loadCircuitsFromService();
      })
    );

    // Suscribirse a cambios en el proyecto seleccionado
    this.subs.add(
      this.manager.selectedProject$.subscribe((project) => {
        if (project && !this.circuits.find(c => c.id === project.id)) {
          this.circuits.push(project);
          // Expandir automáticamente el nuevo proyecto
          this.expandedCircuits.add(project.name!);
        }
      })
    );

    if (this.manager.selectedProject && !this.circuits.includes(this.manager.selectedProject!)) {
      this.circuits.push(this.manager.selectedProject!);
    }
  }

  itToList(circuit: Project): void {
    // Verificar si el circuito ya existe en la lista
    const existingIndex = this.circuits.findIndex(c => c.id === circuit.id);

    if (existingIndex >= 0) {
      // Si existe, reemplazarlo
      this.circuits[existingIndex] = circuit;
    } else {
      // Si no existe, agregarlo
      this.circuits.push(circuit);
    }

    // Expandir automáticamente el circuito recién agregado
    this.expandedCircuits.add(circuit.name!);
  }

  // Método opcional para cargar circuitos desde el servicio si es necesario
  /*loadCircuitsFromService(): void {
    if (!sessionStorage.getItem('email')) {
      this.getuserEmail();
    }

    this.loading = true;
    this.reperService.getCircuits(sessionStorage.getItem('email')!, sessionStorage.getItem('token')!).subscribe({
      next: (data) => {
        this.circuits = data.map((circuitData: any) => {
          
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading circuits:', error);
        this.loading = false;
      }
    });
  }*/

  getuserEmail(): void {
    this.reperService.getUser(sessionStorage.getItem('token')!).subscribe({
      next: (data) => {
        sessionStorage.setItem('email', data);
      }
    });
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

  selectMutant(mutant: Mutant): void {
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

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.manager.sidebarExpanded = this.menuAbierto;
  }

  createNewCircuit() {
    let name = 'Project' + (this.circuits.length + 1);
    let newCircuit = new Project();
    newCircuit.name = name;
    this.manager.setNewselectedProject(newCircuit);
    this.manager.showCircuit = true;
    this.manager.showMutantsInfo = false;
    this.manager.showSaveButton = false;
    this.manager.showMutantCycleInfo = false;
    this.circuits.push(newCircuit);
    this.expandedCircuits.add(newCircuit.name!);
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
          const project = new Project();
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
              /*let ope = new Operator(mutantData.operator);
              mutant.operator = ope;*/
              mutant.mutantResults = mutantData.mutantResults;
              mutant.mutantIndex = mutantData.mutantIndex;
              mutant.mutatedColumn = mutantData.mutatedColumn;
              mutant.mutatedRow = mutantData.mutatedRow;

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