import { Component, Output, EventEmitter } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { UserService } from '../services/user.service';
import { ReperService } from '../services/reper.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {

  @Output() saveClick = new EventEmitter<void>();

  constructor(public manager: ManagerService, private userService: UserService, private reperService: ReperService) {

  }


  onSave(): void {

    this.userService.checkSession().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        // Redirigir a login externo
        window.open(environment.loginUrl, '_blank');
        return;
      }
      else {
        this.performSave();
      }
    });
  }

  // Nuevo método centralizado para realizar el guardado
  private performSave(): void {

    const project = this.manager.selectedProject;

    if (!project) {
      console.warn('No project selected to save.');
      return;
    }

    this.manager.showNotification('Saving project metadata...', 'loading', 0);

    this.reperService.save(project).subscribe({
      next: (response: any) => {

        // Sincronizar los IDs de los nuevos ciclos generados en backend
        if (response.mutantCycles && project.mutantCycles) {
          for (let i = 0; i < project.mutantCycles.length; i++) {
            if (response.mutantCycles[i] && response.mutantCycles[i].id) {
              project.mutantCycles[i].id = response.mutantCycles[i].id;
            }
          }
        }

        // Buscar todos los ciclos marcados como new o modificados
        const cyclesToSave = project.mutantCycles?.filter(mc => mc.newlyGenerated) || [];

        if (cyclesToSave.length === 0) {
          this.finalizeSave();
        } else {
          this.manager.showNotification(`Preparing to save mutants...`, 'loading', 0);
          this.saveCyclesBatches(project.id!, cyclesToSave, 0, () => {
            this.finalizeSave();
          });
        }
      },
      error: (error) => {
        console.error('Error al guardar metadata:', error);
        // Mostrar notificación de error
        this.manager.showNotification('Error saving project. Please try again.', 'error', 5000);
      }
    });
  }

  private saveCyclesBatches(projectId: string, cycles: any[], cycleIndex: number, onComplete: () => void) {
    if (cycleIndex >= cycles.length) {
      onComplete();
      return;
    }

    const cycle = cycles[cycleIndex];
    if (!cycle.mutants || cycle.mutants.length === 0) {
      this.saveCyclesBatches(projectId, cycles, cycleIndex + 1, onComplete);
      return;
    }

    const mutants = cycle.mutants;
    const chunkSize = 200;

    this.sendMutantChunks(projectId, cycle.id, mutants, 0, chunkSize, () => {
      this.saveCyclesBatches(projectId, cycles, cycleIndex + 1, onComplete);
    });
  }

  private sendMutantChunks(projectId: string, cycleId: number, mutants: any[], startIndex: number, chunkSize: number, onComplete: () => void) {
    if (startIndex >= mutants.length) {
      onComplete();
      return;
    }

    const chunk = mutants.slice(startIndex, startIndex + chunkSize);
    const progress = Math.min(startIndex + chunkSize, mutants.length);

    this.manager.showNotification(`Saving mutants: ${progress} / ${mutants.length} ...`, 'loading', 0);

    this.reperService.saveMutantsBatch(projectId, cycleId, chunk).subscribe({
      next: () => {
        this.sendMutantChunks(projectId, cycleId, mutants, startIndex + chunkSize, chunkSize, onComplete);
      },
      error: (error) => {
        console.error('Error saving mutant chunk:', error);
        this.manager.showNotification(`Error saving mutants at ${progress}. Please try again.`, 'error', 5000);
      }
    });
  }

  private finalizeSave() {
    this.manager.markProjectAsSaved();
    this.manager.markMutantCyclesAsSaved();
    this.saveClick.emit();
    this.manager.showNotification('Project saved successfully!', 'success', 5000);
    console.log('Project saved successfully');
  }


}
