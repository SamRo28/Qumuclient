import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ManagerService } from '../manager.service';
import { AppComponent } from '../app.component';
import { Mutant } from '../model/Mutant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mutants-visual',
  templateUrl: './mutants-visual.component.html',
  styleUrls: ['./mutants-visual.component.css']
})
export class MutantsVisualComponent implements OnInit, OnDestroy {

  // URLs or paths for circuit visualizations
  originalCircuitUrl: SafeResourceUrl | null = null;
  mutantCircuitUrl: SafeResourceUrl | null = null;
  selectedMutant: Mutant | null = null;
  private subscription = new Subscription();

  constructor(private manager: ManagerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Initialize original circuit URL
    this.updateOriginalCircuitUrl();

    // Subscribe to selected mutant changes
    this.subscription.add(
      this.manager.selectedMutant$.subscribe(mutant => {
        this.selectedMutant = mutant;
        this.updateCircuitUrls();
      })
    );
  }

  private updateOriginalCircuitUrl(): void {
    if (this.manager.selectedCircuit?.textQuirkCode) {
      const url = AppComponent.quirkUrl + "#circuit=" + this.manager.selectedCircuit.textQuirkCode;
      this.originalCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  private updateCircuitUrls(): void {
    // Update original circuit URL
    this.updateOriginalCircuitUrl();
    
    // Update mutant circuit URL
    if (this.selectedMutant?.circuit?.textQuirkCode) {
      const url = AppComponent.quirkUrl + "#circuit=" + this.selectedMutant.circuit.textQuirkCode;
      this.mutantCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      this.mutantCircuitUrl = null;
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscription.unsubscribe();
  }

}
