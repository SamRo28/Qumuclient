import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReperService } from '../services/reper.service';
import { ManagerService } from '../services/manager.service';
import { MutantCycle } from '../model/MutantCycle';
import { Mutant } from '../model/Mutant';
import { QumugenService } from '../services/qumugen.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../model/Project';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  url?: SafeResourceUrl;

  menuAbierto = false;
  mostrarInicio = true;
  // circuits: Project[] = []; // Removed: using getter from ManagerService
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

    // Verify session via cookie on initialization
    this.userService.checkSession().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.loadCircuitsFromService();
      }
    });

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
          // Si el proyecto no está en la lista (ej. creado nuevo), agregarlo
          const exists = this.circuits.some(c => c.id === project.id);
          if (!exists) {
            // Re-load circuits to ensure sync or push to manager
            // For now, assuming manager handles the list state
          }
          if (project.name) {
            this.expandedCircuits.add(project.name);
          }
        }
      })
    );

    // Suscribirse a eliminación de proyectos
    this.subs.add(
      this.manager.projectDeleted$.subscribe((projectId) => {
        // Refresh list
        this.loadCircuitsFromService();
      })
    );
  }

  get circuits(): Project[] {
    return this.manager.projects;
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    this.manager.sidebarExpanded = this.menuAbierto;
  }

  createNewCircuit() {
    if (this.isCreatingProject) {
      return;
    }
    this.isCreatingProject = true;

    setTimeout(() => {
      let circuit = new Project(crypto.randomUUID(), "Project" + (this.circuits.length + 1));
      this.manager.setNewselectedProject(circuit);
      this.isCreatingProject = false;
      this.router.navigate(['/project', circuit.id]);
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

  isCircuitSelected(circuit: Project): boolean {
    // Exact match for project route
    return this.router.isActive(`/project/${circuit.id}`, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  isMutantCycleSelected(cycle: MutantCycle, project: Project): boolean {
    // Exact match for cycle route
    return this.router.isActive(`/project/${project.id}/cycle/${cycle.id}`, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  isMutantSelected(mutant: Mutant, cycle: MutantCycle, project: Project): boolean {
    // Exact match for mutant route
    return this.router.isActive(`/project/${project.id}/cycle/${cycle.id}/mutant/${mutant.mutantIndex}`, { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' });
  }

  selectCircuit(circuit: Project): void {
    this.router.navigate(['/project', circuit.id]);
  }

  selectMutant(mutant: Mutant, mutantCycle: MutantCycle, project: Project): void {
    this.router.navigate(['/project', project.id, 'cycle', mutantCycle.id, 'mutant', mutant.mutantIndex]);
  }

  selectMutantCycle(mutantCycle: MutantCycle, project: Project): void {
    this.router.navigate(['/project', project.id, 'cycle', mutantCycle.id]);
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
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones para evitar memory leaks
    this.subscriptions.unsubscribe();
    this.subs.unsubscribe();
  }

  isLoggedIn(): boolean {
    return this.userService.isAuthenticated$.value;
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
    if (!email) return;

    this.loading = true;
    this.manager.loadProjects(email).subscribe({
      next: () => {
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading circuits:', error);
        this.loading = false;
      }
    });
  }
}