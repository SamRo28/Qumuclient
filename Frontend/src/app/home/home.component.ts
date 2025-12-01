import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { QProgram } from '../model/QProgram';
import { Project } from '../model/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public manager: ManagerService) { }

  ngOnInit(): void {
  }

  createCircuit() {
    let circuit = new Project(crypto.randomUUID(), "Project1")
    this.manager.setNewselectedProject(circuit)

    if (sessionStorage.getItem('token')) {
      this.manager.showSidebar = true
    }

    // Cambiar visibilidad al final para asegurar que los datos estén listos
    this.manager.showHome = false
    this.manager.showCircuit = true
  }

}
