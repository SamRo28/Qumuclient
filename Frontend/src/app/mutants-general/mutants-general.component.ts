import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mutant } from '../model/Mutant';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-mutants-general',
  templateUrl: './mutants-general.component.html',
  styleUrls: ['./mutants-general.component.css']
})
export class MutantsGeneralComponent implements OnInit, OnDestroy {
  selectedMutant: Mutant | null = null;
  private subscription = new Subscription();

  constructor(private manager: ManagerService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.manager.selectedMutant$.subscribe(mutant => {
        this.selectedMutant = mutant;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}