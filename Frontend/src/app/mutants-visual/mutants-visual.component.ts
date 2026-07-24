import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ManagerService } from '../services/manager.service';
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
  originalCircuitQuirk: any = null;
  mutantCircuitQuirk: any = null;
  selectedMutant: Mutant | null = null;
  private subscription = new Subscription();

  constructor(private manager: ManagerService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // Initialize original circuit URL and quirk code
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
    if (this.manager.selectedProject?.qProgram.qCircuit.textQuirkCode) {
      const url = AppComponent.quirkUrl + "#circuit=" + this.manager.selectedProject.qProgram.qCircuit.textQuirkCode;
      this.originalCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    this.originalCircuitQuirk = this.manager.selectedProject?.qProgram.qCircuit.quirkCode || null;
  }

  private updateCircuitUrls(): void {
    // Update original circuit URL
    this.updateOriginalCircuitUrl();

    // Update mutant circuit URL
    if (this.selectedMutant?.circuit?.qCircuit.textQuirkCode) {
      const url = AppComponent.quirkUrl + "#circuit=" + this.selectedMutant.circuit.qCircuit.textQuirkCode;
      this.mutantCircuitUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.mutantCircuitQuirk = this.selectedMutant.circuit.qCircuit.quirkCode || null;
    } else {
      this.mutantCircuitUrl = null;
      this.mutantCircuitQuirk = null;
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscription.unsubscribe();
  }

}
