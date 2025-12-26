import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'qumuclient';

  public static error: string = ""

  public static quirkUrl = "https://algassert.com/quirk"

  constructor(public manager: ManagerService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.checkSession().subscribe(isAuthenticated => {
      if (isAuthenticated) {
        const email = sessionStorage.getItem('email');
        if (email) {
          this.manager.showSidebar = true;
          this.manager.loadProjects(email).subscribe();
        }
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
