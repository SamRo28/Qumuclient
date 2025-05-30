import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circuits-configuration',
  templateUrl: './circuits-configuration.component.html',
  styleUrls: ['./circuits-configuration.component.css']
})
export class CircuitsConfigurationComponent implements OnInit {

    isCircuitValid = false;
    selectedTab: 'circuit' | 'mutants' = 'circuit';
    circuitName = '';
    quirkCode = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: 'circuit' | 'mutants') {
    if (tab === 'mutants' && !this.isCircuitValid) return;
    this.selectedTab = tab;
  }



}
