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

    this.reperService.save(project).subscribe({
      next: (response) => {
        // Marcar el proyecto como guardado
        this.manager.markProjectAsSaved();
        this.manager.markMutantCyclesAsSaved();

        this.saveClick.emit();

        // Mostrar notificación de éxito
        this.manager.showNotification('Project saved successfully!', 'success', 5000);
        console.log('Project saved successfully');
      },
      error: (error) => {
        console.error('Error al guardar:', error);
        // Mostrar notificación de error
        this.manager.showNotification('Error saving project. Please try again.', 'error', 5000);
      }
    });
  }


}
