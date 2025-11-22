import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ReperService } from '../reper.service';
import { QProgram } from '../model/QProgram';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { ManagerService } from '../manager.service';
import { QumugenService } from '../qumugen.service';
import { QasmService } from '../qasm.service';
import { Output, EventEmitter } from '@angular/core';
import { Project } from '../model/Project';

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
  selectedProject: Project | null = new Project();
  private subscription = new Subscription();

  circuits : Project[] = []
  selectedTab: string = 'circuit';

  constructor(public sanitizer: DomSanitizer, private reper : ReperService, private manager : ManagerService, private qumugen : QumugenService, private qasm : QasmService) { 
    this.url = '';
  }
  ngOnInit(): void {
    this.subscription.add(
        this.manager.selectedProject$.subscribe(circuit => {
          this.selectedProject = circuit;
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
    this.selectedProject = this.manager.selectedProject || new Project();
    if (!this.selectedProject) {
      this.selectedProject = new Project();
    }
    
    // Cargar el nombre del circuito
    if (this.selectedProject.id) {
      this.originalCircuitName = this.selectedProject.name;
      this._circuitName = this.selectedProject.name || '';
    } else {
      this._circuitName = '';
    }
    
    // Cargar el código Quirk
    if (this.selectedProject.qProgram.qCircuit.textQuirkCode) {
      this._quirkCode = this.selectedProject.qProgram.qCircuit.textQuirkCode;
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
    if (this.selectedProject) {
      this.selectedProject.name = value;
      this.manager.setselectedProject(this.selectedProject);
    }
    this.checkValidity();
  }

  get quirkCode(): string {
    return this._quirkCode;
  }
  set quirkCode(value: string) {
    this._quirkCode = value;
    if (this.selectedProject) {
      this.selectedProject.qProgram.qCircuit.textQuirkCode = value;
  
      
      // Solo parsear el JSON si el valor no está vacío
      if (value && value.trim() !== '') {
        try {
          this.selectedProject.qProgram.qCircuit.quirkCode = JSON.parse(value);
        } catch (error) {
          console.error('Error parsing quirk code:', error);
          this.selectedProject.qProgram.qCircuit.quirkCode = null;
        }
      } else {
        this.selectedProject.qProgram.qCircuit.quirkCode = null;
      }
      
      this.manager.setselectedProject(this.selectedProject);
    }
    this.checkValidity();
  }

  save() {
    if (!this.selectedProject) {
      AppComponent.error = "No circuit selected";
      return;
    }
    if (this.selectedProject.name!.trim().length==0) {
      AppComponent.error = "Please, give a name to the circuit"
      return
    }
    if (!this.selectedProject.qProgram.qCircuit.textQuirkCode || this.selectedProject.qProgram.qCircuit.textQuirkCode.trim().length==0) {
      AppComponent.error = "Please, write the Quirk code of the circuit"
      return
    }
    this.selectedProject.qProgram.qCircuit.quirkCode=JSON.parse(this.selectedProject.qProgram.qCircuit.textQuirkCode)
    this.reper.save(this.selectedProject).subscribe(
      result => {
        AppComponent.error = ""
      },
      error => {
        AppComponent.error = error.error ? error.error.message : error
      }
    )
  }

  visualizeCircuit() {
    if (this.selectedProject && this.selectedProject.qProgram.qCircuit.textQuirkCode && this.selectedProject.qProgram.qCircuit.textQuirkCode.trim() !== '') {
      this.url = AppComponent.quirkUrl + "#circuit=" + this.selectedProject.qProgram.qCircuit.textQuirkCode;
      window.open(this.url, '_blank');
    } else {
      console.warn('Cannot visualize circuit: no quirk code available');
    }
  }

  selectCircuit() {
    this.selectedProject = this.circuits.filter(c => c.id==this.originalCircuitName).at(0)!
    this.manager.setselectedProject(this.selectedProject)
    this.qumugen.getQiskitCode(this.selectedProject.qProgram).then(
      result=> {
        if (this.selectedProject) {
          this.selectedProject.qProgram.qCode!.code = result.wholeCode.split("\n")
        }
      }
    )
  }


  onSubmit() {
    if(this.selectedProject?.id){
      this.circuitName = this.selectedProject.name || '';
    }
    else {
      this.circuitName = "Circuit1";
    }

    if(this.selectedProject?.qProgram.qCircuit.quirkCode) {
      this.quirkCode = this.selectedProject.qProgram.qCircuit.quirkCode;
    }
  }

  selectTab(tab: 'circuit' | 'mutants') {
    if (tab === 'mutants' && !this.isCircuitValid) return;
    this.selectedTab = tab;
  }


}
