import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-mutants-info',
  templateUrl: './mutants-info.component.html',
  styleUrls: ['./mutants-info.component.css']
})
export class MutantsInfoComponent implements OnInit {

    isCircuitValid = false;
    selectedTab: 'info' | 'code'| 'visualization' = 'info';

  constructor(public manager: ManagerService) { }

  ngOnInit(): void {
  }


  selectTab(tab: 'info' | 'code'| 'visualization') {
    this.selectedTab = tab;
    
  }



}
