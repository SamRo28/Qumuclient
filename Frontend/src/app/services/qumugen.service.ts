import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QProgram } from '../model/QProgram';
import { ManagerService } from './manager.service';
import { Mutant } from '../model/Mutant';
import { Curl } from '../model/Curl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QumugenService {
  constructor(private client: HttpClient, private manager: ManagerService) { }

  qiskitTemplate = "qiskitTemplateWindows.txt"

  getOperatorsByFamily() {
    return this.client.get<any>(`${environment.api.core}/qumureper/getoperatorsByFamily`)
  }

  getOperators(family: string) {
    return this.client.get(`${environment.api.mutation}/qumugen/getOperators/` + family)
  }

  generateMutants(circuit: QProgram, selectedOperators: any[]) {
    let info = {
      circuit: circuit.qCircuit.quirkCode,
      operatorNames: selectedOperators,
      mutableColumns: circuit.qCircuit.mutableColumns,
      mutableRows: circuit.qCircuit.mutableRows,
      inputQubits: this.manager.inputQubits,
      generateWithAllInputs: this.manager.generateWithAllInputs
    }
    return this.client.put<any>(`${environment.api.mutation}/qumugen/generateQuirkMutants`, info)
  }

  async getQiskitCode(circuit: QProgram) {
    circuit.inputQubits = this.manager.inputQubits
    circuit.outputQubits = this.manager.outputQubits
    try {
      let code: Promise<any> = this.client.put<any>(`${environment.api.mutation}/qumugen/getQiskitCode?useTemplate=true&shots=` + this.manager.shots + "&qiskitTemplate=" + this.qiskitTemplate, circuit).toPromise()
      return code
    } catch (error) {
      throw error
    }
  }

  getMultipleQiskitCode(mutants: Mutant[], outputQubits: string) {
    let info = {
      outputQubits: outputQubits,
      mutants: mutants
    }
    return this.client.put<any[]>(`${environment.api.mutation}/qumugen/getMultipleQiskitCode?shots=` + this.manager.shots + "&qiskitTemplate=" + this.qiskitTemplate, info)
  }

  buildUnexCurls(id: string, mutants: Mutant[]) {
    let info = {
      circuitId: id,
      mutants: mutants
    }
    return this.client.post<Curl[]>(`${environment.api.mutation}/qumugen/buildUnexCurls`, info)
  }

  sendToUnex(curl: Curl) {
    curl.result = -1
    return this.client.post(`${environment.api.mutation}/qumugen/sendToUnex`, curl)
  }
}
