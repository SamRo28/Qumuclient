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


  constructor(public manager : ManagerService) { }

  ngOnInit(): void {
  }

  createCircuit() {
    this.manager.showHome = false
    this.manager.showCircuit = true
    let circuit = new Project(crypto.randomUUID(),"Project1")
    this.manager.setNewselectedProject(circuit)
  }

}
