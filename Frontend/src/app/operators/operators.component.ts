import { Component, OnInit } from '@angular/core';
import { QumugenService } from '../qumugen.service';

import { OperatorFamily } from '../model/OperatorFamily';
import { AppComponent } from '../app.component';
import { ManagerService } from '../manager.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {
  families : OperatorFamily[] = []
  error : string = ""
  qubitCount: number = -1;


  get outputQubitsArray(): string[] {
    if (!this.manager.outputQubits || this.manager.outputQubits.trim() === '') {
      return [];
    }
    return this.manager.outputQubits.split(',').filter(item => item.trim() !== '');
  }

  constructor(private service : QumugenService, public manager : ManagerService, private loading : LoadingService) { 
    
    this.qubitCount = this.manager.selectedCircuit ? this.manager.selectedCircuit.getQubits() : -1;
    
    this.service.getOperatorsByFamily().subscribe(
      families => {
        for (let familyData of families) {
          let family = new OperatorFamily(familyData.name, familyData.operators)
          this.families.push(family)
        }
      },
      error => {
        this.error = error
      }
    )
  }

  selectAll() {
    this.families.forEach(f => 
      f.select())
  }

  generateMutants() {
    AppComponent.error = ""
    let selectedCircuit = this.manager.selectedCircuit
    if (!selectedCircuit) {
      AppComponent.error = "Please, select the circuit you want to mutate"
      return
    }
    selectedCircuit.setMutableColumns();
    selectedCircuit.setMutableRows();

    let selectedOperators = []
    for (let i=0; i<this.families.length; i++) {
      for (let j=0; j<this.families[i].operators.length; j++) {
        if (this.families[i].operators[j].selected)
          selectedOperators.push(this.families[i].operators[j].name)
      }
    }
    if (selectedOperators.length>0) {
      this.loading.show()
      this.service.generateMutants(selectedCircuit, selectedOperators).subscribe(
        mutants => { 
          this.manager.setMutants(mutants)
          this.loading.hide()
          this.manager.showSidebar = true
          
         },
        error => {
          AppComponent.error = error.error ? error.error.message : error.error
          if (!AppComponent.error)
            AppComponent.error = "Se ha producido un error, probablemente un 500. Intenta generar menos mutantes seleccionando menos operadores, menos columnas o filas. Si has marcado lo de \"Generate with all inputs\", puedes desmarcarlo o disminuir el número de Input qubits"
          this.loading.hide()
        }
      )
    } else
      AppComponent.error = "Please, select one operator at least"
  }

  reloadOriginalCode() {
    this.service.getQiskitCode(this.manager.selectedCircuit!).then(
      result=> {
        this.manager.selectedCircuit!.qiskitCode = result.wholeCode.split("\n")
      }
    )
  }

  selectedFamily: OperatorFamily | null = null;
  isModalOpen: boolean = false;

  showInfo(family: OperatorFamily) {
    this.selectedFamily = family;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedFamily = null;
    this.isModalOpen = false;
  }

  getEnabledOperators(family: OperatorFamily) {
    return family.operators.filter(op => op.enabled);
  }

}
