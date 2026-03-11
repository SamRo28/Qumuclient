import { Component, OnInit, OnDestroy } from '@angular/core';
import { QumugenService } from '../services/qumugen.service';

import { OperatorFamily } from '../model/OperatorFamily';
import { AppComponent } from '../app.component';
import { ManagerService } from '../services/manager.service';
import { LoadingService } from '../services/loading.service';
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
  inputQubitsSelection: { [key: number]: boolean } = {};
  outputQubitsSelection: { [key: number]: boolean } = {};
  qubitsIndices: number[] = [];
  private projectSubscription?: Subscription;

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
    if (!this.manager.selectedProject) {
      this.qubitCount = -1;
      this.qubitsIndices = [];
      return;
    }

    // Recargar qubitCount
    this.qubitCount = this.manager.selectedProject.getQubits();
    this.manager.selectedProject.qProgram.qubits = this.qubitCount;

    // Generar índices de qubits [0, 1, ..., n-1]
    this.qubitsIndices = Array.from({ length: this.qubitCount }, (_, i) => i);

    // Calcular mutableColumns y mutableRows si están vacíos
    const qCircuit = this.manager.selectedProject.qProgram.qCircuit;
    if (!qCircuit.mutableColumns || qCircuit.mutableColumns === '' || qCircuit.mutableColumns === '-1,') {
      qCircuit.mutableColumns = qCircuit.calculateMutableColumns();
    }
    if (!qCircuit.mutableRows || qCircuit.mutableRows === '') {
      qCircuit.mutableRows = qCircuit.calculateMutableRows();
    }

    // Inicializar inputQubitsSelection
    this.inputQubitsSelection = {};
    const inputQubitsStr = this.manager.selectedProject.qProgram.inputQubits || "";
    if (inputQubitsStr.trim() === "") {
      // Si está vacío, dejarlos desmarcados en lugar de marcarlos todos
      this.qubitsIndices.forEach(i => this.inputQubitsSelection[i] = false);
    } else {
      const selectedInputs = inputQubitsStr.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
      this.qubitsIndices.forEach(i => this.inputQubitsSelection[i] = selectedInputs.includes(i));
    }

    // Inicializar outputQubitsSelection
    this.outputQubitsSelection = {};
    const outputQubitsStr = this.manager.selectedProject.qProgram.outputQubits || "";
    if (outputQubitsStr.trim() === "") {
      // Si está vacío, dejarlos desmarcados en lugar de marcarlos todos
      this.qubitsIndices.forEach(i => this.outputQubitsSelection[i] = false);
    } else {
      const selectedOutputs = outputQubitsStr.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
      this.qubitsIndices.forEach(i => this.outputQubitsSelection[i] = selectedOutputs.includes(i));
    }
  }

  updateInputQubits() {
    const selected = this.qubitsIndices.filter(i => this.inputQubitsSelection[i]);
    const str = selected.join(',');

    if (this.manager.selectedProject) {
      this.manager.selectedProject.qProgram.inputQubits = str;
      this.manager.inputQubits = str; // Sync manager property if needed
      this.manager.markProjectAsModified();
    }
  }

  updateOutputQubits() {
    const selected = this.qubitsIndices.filter(i => this.outputQubitsSelection[i]);
    const str = selected.join(',');

    if (this.manager.selectedProject) {
      this.manager.selectedProject.qProgram.outputQubits = str;
      this.manager.outputQubits = str; // Sync manager property if needed
      this.manager.markProjectAsModified();
    }
  }

  toggleAllInputQubits() {
    const allSelected = this.qubitsIndices.every(i => this.inputQubitsSelection[i]);
    this.qubitsIndices.forEach(i => this.inputQubitsSelection[i] = !allSelected);
    this.updateInputQubits();
  }

  toggleAllOutputQubits() {
    const allSelected = this.qubitsIndices.every(i => this.outputQubitsSelection[i]);
    this.qubitsIndices.forEach(i => this.outputQubitsSelection[i] = !allSelected);
    this.updateOutputQubits();
  }

  selectAll() {
    // Check if every enabled operator across all families is selected
    const allSelected = this.families.every(family =>
      this.getEnabledOperators(family).every(op => op.selected)
    );

    // Toggle all based on the uniform check
    this.families.forEach(family => {
      this.getEnabledOperators(family).forEach(op => op.selected = !allSelected);
    });
  }

  selectFamily(family: OperatorFamily) {
    // Check if every enabled operator in THIS family is selected
    const allSelected = this.getEnabledOperators(family).every(op => op.selected);

    // Toggle all based on the uniform check
    this.getEnabledOperators(family).forEach(op => op.selected = !allSelected);
  }

  generateMutants() {
    AppComponent.error = ""
    let selectedCircuit = this.manager.selectedProject;
    if (!selectedCircuit) {
      this.manager.showNotification("Please, select the circuit you want to mutate", "error", 5000);
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
      this.manager.showNotification("Generating mutants...", "loading", 0);
      this.service.generateMutants(selectedCircuit.qProgram, selectedOperators).subscribe(
        mutants => {
          this.manager.showSidebar = true
          this.manager.setMutants(mutants)
          this.loading.hide()
          this.manager.showNotification("Mutants generated successfully!", "success", 5000);
        },
        error => {
          let errorMsg = error.error ? error.error.message : error.error
          if (!errorMsg)
            errorMsg = "Se ha producido un error, probablemente un 500. Intenta generar menos mutantes seleccionando menos operadores, menos columnas o filas. Si has marcado lo de \"Generate with all inputs\", puedes desmarcarlo o disminuir el número de Input qubits"
          this.loading.hide()
          this.manager.showNotification(errorMsg, "error", 10000);
        }
      )
    } else {
      this.manager.showNotification("Please, select one operator at least", "error", 5000);
    }
  }

  reloadOriginalCode() {
    this.service.getQiskitCode(this.manager.selectedProject!.qProgram).then(
      result => {
        const QCodeClass = require('../model/QCode').QCode;
        this.manager.selectedProject!.qProgram.qCodes = [new QCodeClass(undefined, result.wholeCode, "QuMu")]
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
