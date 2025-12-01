import { Component, OnInit, OnDestroy } from '@angular/core';
import { QumugenService } from '../qumugen.service';

import { OperatorFamily } from '../model/OperatorFamily';
import { AppComponent } from '../app.component';
import { ManagerService } from '../manager.service';
import { LoadingService } from '../loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {
  families: OperatorFamily[] = []
  error: string = ""
  qubitCount: number = -1;
  outputQubitsSelection: { [key: number]: boolean } = {};
  private projectSubscription?: Subscription;

  get outputQubitsArray(): string[] {
    if (!this.manager.outputQubits || this.manager.outputQubits.trim() === '') {
      return [];
    }
    return this.manager.outputQubits.split(',').filter(item => item.trim() !== '');
  }

  getOutputQubitsIndices(): number[] {
    return this.outputQubitsArray.map((_, index) => index);
  }

  getSelectedOutputQubitsCount(): number {
    return Object.values(this.outputQubitsSelection).filter(selected => selected).length;
  }

  constructor(private service: QumugenService, public manager: ManagerService, private loading: LoadingService) { }

  ngOnInit() {
    // Cargar datos iniciales
    this.loadData();

    // Suscribirse a cambios en el proyecto seleccionado
    this.projectSubscription = this.manager.selectedProject$.subscribe(project => {
      if (project) {
        this.loadData();
      }
    });

    // Cargar familias de operadores
    this.service.getOperatorsByFamily().subscribe(
      families => {
        this.families = []; // Limpiar familias existentes
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

  ngOnDestroy() {
    // Limpiar suscripción
    if (this.projectSubscription) {
      this.projectSubscription.unsubscribe();
    }
  }

  loadData() {
    // Recargar qubitCount
    this.qubitCount = this.manager.selectedProject ? this.manager.selectedProject.getQubits() : -1;
    if (this.manager.selectedProject) {
      this.manager.selectedProject.qProgram.qubits = this.qubitCount;

      // Calcular mutableColumns y mutableRows si están vacíos o son valores por defecto
      const qCircuit = this.manager.selectedProject.qProgram.qCircuit;

      // Si mutableColumns está vacío o es el valor por defecto "-1,", calcularlo
      if (!qCircuit.mutableColumns || qCircuit.mutableColumns === '' || qCircuit.mutableColumns === '-1,') {
        qCircuit.mutableColumns = qCircuit.calculateMutableColumns();
      }

      // Si mutableRows está vacío, calcularlo
      if (!qCircuit.mutableRows || qCircuit.mutableRows === '') {
        qCircuit.mutableRows = qCircuit.calculateMutableRows();
      }
    }

    // Reinicializar outputQubitsSelection
    this.outputQubitsSelection = {};
    this.outputQubitsArray.forEach((_, index) => {
      this.outputQubitsSelection[index] = true; // Por defecto todos seleccionados
    });
  }

  selectAll() {
    this.families.forEach(f =>
      f.select())
  }

  selectFamily(family: OperatorFamily) {
    family.select();
  }

  generateMutants() {
    AppComponent.error = ""
    let selectedCircuit = this.manager.selectedProject;
    if (!selectedCircuit) {
      AppComponent.error = "Please, select the circuit you want to mutate"
      return
    }
    selectedCircuit.qProgram.setMutableColumns();
    selectedCircuit.qProgram.setMutableRows();

    let selectedOperators = []
    for (let i = 0; i < this.families.length; i++) {
      for (let j = 0; j < this.families[i].operators.length; j++) {
        if (this.families[i].operators[j].selected)
          selectedOperators.push(this.families[i].operators[j].name)
      }
    }
    if (selectedOperators.length > 0) {
      this.loading.show()
      this.service.generateMutants(selectedCircuit.qProgram, selectedOperators).subscribe(
        mutants => {
          this.manager.showSidebar = true
          this.manager.setMutants(mutants)
          this.loading.hide()


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
    this.service.getQiskitCode(this.manager.selectedProject!.qProgram).then(
      result => {
        this.manager.selectedProject!.qProgram.qCode.code = result.wholeCode.split("\n")
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

  hasSelectedOperators(): boolean {
    return this.families.some(family =>
      family.operators.some(op => op.selected)
    );
  }

}
