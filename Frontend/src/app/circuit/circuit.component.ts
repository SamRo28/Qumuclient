import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReperService } from '../reper.service';
import { Circuit } from '../model/Circuit';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { ManagerService } from '../manager.service';
import { QumugenService } from '../qumugen.service';
import { QasmService } from '../qasm.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit, OnDestroy {

  url  : string = '';

  private _circuitName: string = '';
  private _quirkCode: string = '';

  @Output() validityChange = new EventEmitter<boolean>();
  
  originalCircuitName? : string
  hideQuirk : boolean = true
  selectedCircuit: Circuit | null = new Circuit();
  private subscription = new Subscription();

  circuits : Circuit[] = []
  selectedTab: string = 'circuit';

  constructor(public sanitizer: DomSanitizer, private reper : ReperService, private manager : ManagerService, private qumugen : QumugenService, private qasm : QasmService) { 
    this.url = '';
  }
  ngOnInit(): void {
    this.subscription.add(
        this.manager.selectedCircuit$.subscribe(circuit => {
          this.selectedCircuit = circuit;
          this.loadCircuitFromManager();
          this.selectTab('circuit');
        })
      );
  }
  ngOnChanges(): void {
    this.loadCircuitFromManager();  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Método para cargar el circuito desde el ManagerService
  public loadCircuitFromManager(): void {
    this.selectedCircuit = this.manager.selectedCircuit || new Circuit();
    if (!this.selectedCircuit) {
      this.selectedCircuit = new Circuit();
    }
    
    // Cargar el nombre del circuito
    if (this.selectedCircuit.id) {
      this.originalCircuitName = this.selectedCircuit.id;
      this._circuitName = this.selectedCircuit.id;
    } else {
      this._circuitName = '';
    }
    
    // Cargar el código Quirk
    if (this.selectedCircuit.textQuirkCode) {
      this._quirkCode = this.selectedCircuit.textQuirkCode;
    } else {
      this._quirkCode = '';
    }
    
    this.checkValidity();
  }

checkValidity() {
  const valid = this.circuitName.trim() !== '' && this.quirkCode.trim() !== '';
  this.validityChange.emit(valid);
}
  get isCircuitValid(): boolean {
    return this.circuitName.trim() !== '' && this.quirkCode.trim() !== '';
  }

  get circuitName(): string {
    return this._circuitName;
  }
  set circuitName(value: string) {
    this._circuitName = value;
    if (this.selectedCircuit) {
      this.selectedCircuit.id = value;
      this.manager.setSelectedCircuit(this.selectedCircuit);
    }
    this.checkValidity();
  }

  get quirkCode(): string {
    return this._quirkCode;
  }
  set quirkCode(value: string) {
    this._quirkCode = value;
    if (this.selectedCircuit) {
      this.selectedCircuit.textQuirkCode = value;
      this.selectedCircuit.qubits = -1;
      
      // Solo parsear el JSON si el valor no está vacío
      if (value && value.trim() !== '') {
        try {
          this.selectedCircuit.quirkCode = JSON.parse(value);
        } catch (error) {
          console.error('Error parsing quirk code:', error);
          this.selectedCircuit.quirkCode = null;
        }
      } else {
        this.selectedCircuit.quirkCode = null;
      }
      
      this.manager.setSelectedCircuit(this.selectedCircuit);
    }
    this.checkValidity();
  }

  save() {
    if (!this.selectedCircuit) {
      AppComponent.error = "No circuit selected";
      return;
    }
    if (this.selectedCircuit.id.trim().length==0) {
      AppComponent.error = "Please, give a name to the circuit"
      return
    }
    if (!this.selectedCircuit.textQuirkCode || this.selectedCircuit.textQuirkCode.trim().length==0) {
      AppComponent.error = "Please, write the Quirk code of the circuit"
      return
    }
    this.selectedCircuit.quirkCode=JSON.parse(this.selectedCircuit.textQuirkCode)
    this.reper.save(this.selectedCircuit).subscribe(
      result => {
        AppComponent.error = ""
      },
      error => {
        AppComponent.error = error.error ? error.error.message : error
      }
    )
  }

  visualizeCircuit() {
    if (this.selectedCircuit && this.selectedCircuit.textQuirkCode && this.selectedCircuit.textQuirkCode.trim() !== '') {
      this.url = AppComponent.quirkUrl + "#circuit=" + this.selectedCircuit.textQuirkCode;
      window.open(this.url, '_blank');
    } else {
      console.warn('Cannot visualize circuit: no quirk code available');
    }
  }

  selectCircuit() {
    this.selectedCircuit = this.circuits.filter(c => c.id==this.originalCircuitName).at(0)!
    this.manager.setSelectedCircuit(this.selectedCircuit)
    this.qumugen.getQiskitCode(this.selectedCircuit).then(
      result=> {
        if (this.selectedCircuit) {
          this.selectedCircuit.qiskitCode = result.wholeCode.split("\n")
        }
      }
    )
  }


  onSubmit() {
    if(this.selectedCircuit?.id){
      this.circuitName = this.selectedCircuit.id;
    }
    else {
      this.circuitName = "Circuit1";
    }
    
    if(this.selectedCircuit?.quirkCode) {
      this.quirkCode = this.selectedCircuit.quirkCode;
    }
  }

  selectTab(tab: 'circuit' | 'mutants') {
    if (tab === 'mutants' && !this.isCircuitValid) return;
    this.selectedTab = tab;
  }


}
