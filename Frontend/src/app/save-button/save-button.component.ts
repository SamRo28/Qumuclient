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

  @Output() saveClick = new EventEmitter<void>();

  constructor(public manager : ManagerService, private userService : UserService, private reperService : ReperService){

  }
  

  onSave(): void {
    console.log('Login successful:', sessionStorage.getItem('token'));
    if (!sessionStorage.getItem('token')) {
      this.openLoginModal();
    }
    

    this.reperService.save(this.manager.selectedProject!).subscribe({
      next: (response) => {

    },
      error: (error) => {
      console.error('Error al guardar:', error);
    }
    
    
  });

    if(this.manager.showSidebar == false){
      this.userService.associateProject(sessionStorage.getItem('userID')!, this.manager.selectedProject!.id!).subscribe({
        next: (response) => {
          console.log('Project associated successfully:', response);
        },
        error: (error) => {
          console.error('Error associating project:', error);
        }
      });

      
      this.manager.showSidebar = true;
    }

    
  }

  openLoginModal(): void {
    this.isLoginOpen = true;
  }

  closeModal() {
    this.isLoginOpen = false;
    this.username = '';
    this.password = '';
    this.isLoggingIn = false;
    
  }

  onLogin(): void {
    if (this.username.trim() && this.password.trim()) {
      this.isLoggingIn = true;

      this.userService.login(this.username, this.password)
      .subscribe({
        next: (token) => {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('userID', this.username);
          console.log('Login successful:', token);
          this.isLoginOpen = false;
          this.isLoggingIn = false;
          this.saveClick.emit(); // Emit the save click event after successful login
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.isLoggingIn = false;
        }
      });
      
    }
  }
}
