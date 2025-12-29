import { Component, Output, EventEmitter } from '@angular/core';
import { ManagerService } from '../manager.service';
import { UserService } from '../user.service';
import { ReperService } from '../reper.service';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent {

  isLoginOpen: boolean = false;
  username: string = '';
  password: string = '';
  isLoggingIn: boolean = false;

  // Flag para recordar la intención de guardar cuando se abre el modal de login
  pendingSave: boolean = false;

  @Output() saveClick = new EventEmitter<void>();

  constructor(public manager: ManagerService, private userService: UserService, private reperService: ReperService) {

  }


  onSave(): void {

    if (!sessionStorage.getItem('email')) {
      // marcar intención de guardar y abrir modal
      this.pendingSave = true;
      this.openLoginModal();
      return;
    }
    else {
      this.performSave();
    }
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
        this.manager.showNotification('Project saved successfully!', 'success');
        console.log('Project saved successfully');
      },
      error: (error) => {
        console.error('Error al guardar:', error);
        // Mostrar notificación de error
        this.manager.showNotification('Error saving project. Please try again.', 'error');
      }
    });
  }

  openLoginModal(): void {
    this.isLoginOpen = true;
  }

  closeModal() {
    this.isLoginOpen = false;
    this.username = '';
    this.password = '';
    this.isLoggingIn = false;
    this.pendingSave = false; // limpiar si cierra sin loguear
  }

  onLogin(): void {
    if (this.username.trim() && this.password.trim()) {
      this.isLoggingIn = true;

      this.userService.login(this.username, this.password)
        .subscribe({
          next: (token) => {

            this.isLoggingIn = false;
            // Guardar token si el servicio lo devuelve
            if (token) {
              sessionStorage.setItem('token', token as unknown as string);
            }
            this.isLoginOpen = false;

            // Si había intención de guardar, ejecutar el guardado aquí
            if (this.pendingSave) {
              // emitir con pequeño retardo para garantizar que el cierre del modal se procese
              setTimeout(() => {
                this.performSave();
                this.pendingSave = false;
              }, 0);
            } else {
              // seguir emitiendo el evento por compatibilidad
              setTimeout(() => this.saveClick.emit(), 0);
            }
          },
          error: (error) => {
            console.error('Login failed:', error);
            this.isLoggingIn = false;
          }
        });

    }
  }


}
