import { Component, OnInit } from '@angular/core';
import { ManagerService } from './services/manager.service';
import { UserService } from './services/user.service';
import * as localforage from 'localforage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'qumuclient';

  public static error: string = ""

  public static quirkUrl = "https://alarcosj.esi.uclm.es/quirk/"

  constructor(public manager: ManagerService, private userService: UserService) { }

  ngOnInit(): void {
    // Clear localforage to avoid inconsistent data before checking session
    localforage.clear().then(() => {
      this.userService.checkSession().subscribe();
    }).catch((e: any) => {
      console.error("Error clearing localforage", e);
      this.userService.checkSession().subscribe();
    });

    // React to authentication changes (login/logout)
    this.userService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        const email = sessionStorage.getItem('email');
        if (email) {
          this.manager.showSidebar = true;
          this.manager.loadProjects(email).subscribe();
        }
      } else {
        this.manager.showSidebar = false;
        this.manager.clearProjects();
        this.goToHome();
      }
    });
  }

  getError() {
    return AppComponent.error
  }

  goToHome() {
    this.manager.showHome = true;
    this.manager.showCircuit = false;
  }


}
