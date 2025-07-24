import { Component } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'qumuclient';

  public static error : string = ""

  public static quirkUrl = "https://algassert.com/quirk"

  constructor(public manager : ManagerService) {}

  getError() {
    return AppComponent.error
  }

  goToHome() {
    this.manager.showHome = true;
    this.manager.showCircuit = false;
  }

  onSave() {
    // TODO: Implement save functionality
    console.log('Save button clicked');
    // Here you can implement the actual save logic
    // For example: this.manager.saveCurrentState();
  }

}
