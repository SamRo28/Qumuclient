import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReperService } from '../reper.service';
import { ManagerService } from '../manager.service';
import { Circuit } from '../model/Circuit';
import { MutantProject } from '../model/MutantProject';
import { Mutant } from '../model/Mutant';
import { QumugenService } from '../qumugen.service';
import { AppComponent } from '../app.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  url?: SafeResourceUrl;
  
  menuAbierto = false;
  mostrarInicio = true;
  circuits: Circuit[] = [];
  expandedCircuits: Set<string> = new Set();
  expandedProjects: Set<string> = new Set();
  loading = false;;
  
  private subscriptions: Subscription = new Subscription();

   constructor(
     private router: Router, 
     private el: ElementRef, 
     private reperService: ReperService,
     private manager: ManagerService,
     private qumugen: QumugenService,
     public sanitizer: DomSanitizer
   ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarInicio = this.router.url === '/home';
      }
    });
  
  }

  

  ngOnInit(): void {
    // Sincronizar el estado inicial del sidebar con el manager
    this.manager.sidebarExpanded = this.menuAbierto;
    
    if(!this.circuits.includes(this.manager.selectedCircuit!)) {
      this.circuits.push(this.manager.selectedCircuit!);
    }
  }

itToList(circuit: Circuit): void {
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
    this.expandedCircuits.add(circuit.id);
  }

  // Método opcional para cargar circuitos desde el servicio si es necesario
  loadCircuitsFromService(): void {
    this.loading = true;
    this.reperService.getCircuits().subscribe({
      next: (data) => {
        this.circuits = data.map((circuitData: any) => {
          const circuit = new Circuit(circuitData.id, circuitData.quirkCode);
          // Si el circuito tiene proyectos de mutantes, los cargamos
          if (circuitData.mutantsProjects) {
            circuit.mutantsProjects = circuitData.mutantsProjects.map((proj: any) => {
              const project = new MutantProject();
              project.id = proj.id;
              if (proj.mutants) {
                project.mutants = proj.mutants.map((mutant: any) => new Mutant(mutant));
              }
              return project;
            });
          }
          return circuit;
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading circuits:', error);
        this.loading = false;
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

  selectCircuit(circuit: Circuit): void {
    this.manager.setSelectedCircuit(circuit);
    this.manager.showCircuit = true;
    this.manager.showHome = false;
    this.manager.showMutantsInfo = false;
  }

  selectMutant(mutant: Mutant): void {
    this.manager.setSelectedMutant(mutant);
    this.manager.showCircuit = false;
    this.manager.showHome = false;
    this.manager.showMutantsInfo = true;
    
    if (this.manager.selectedCircuit) {
      this.qumugen.getQiskitCode(this.manager.selectedCircuit).then(
        code => {
          this.manager.selectedCircuit!.qiskitCode = code.wholeCode.split("\n")
        }
      ).catch(error => {
        console.error('Error getting qiskit code for selected circuit:', error);
      })
    }

    if (mutant.circuit && mutant.circuit.textQuirkCode) {
      this.qumugen.getQiskitCode(mutant.circuit).then(
        code => {
          this.url = this.sanitizer.bypassSecurityTrustResourceUrl(AppComponent.quirkUrl + "#circuit=" + mutant.circuit!.textQuirkCode)
          mutant.circuit!.qiskitCode = code.wholeCode.split("\n")
        }
      ).catch(error => {
        console.error('Error getting qiskit code for mutant circuit:', error);
      })
    } else {
      console.warn('Cannot process mutant: circuit or quirk code not available');
    }
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
    let name = 'Circuit' + (this.circuits.length + 1);
    let newCircuit = new Circuit(name);
    this.manager.setNewSelectedCircuit(newCircuit);
    this.manager.showCircuit = true;
    this.manager.showMutantsInfo = false;
    this.circuits.push(newCircuit);
    this.expandedCircuits.add(newCircuit.id);
  }

  goToHome() {
    this.manager.showHome = true;
    this.manager.showCircuit = false;
    this.manager.showMutantsInfo = false;
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar memory leaks
    this.subscriptions.unsubscribe();
  }
}