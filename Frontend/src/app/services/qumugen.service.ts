import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QProgram } from '../model/QProgram';
import { ManagerService } from './manager.service';
import { Mutant } from '../model/Mutant';
import { Curl } from '../model/Curl';
import { NoiseConfig } from '../model/NoiseConfig';
import { environment } from 'src/environments/environment';
import { QuirkInterner } from '../utils/quirk-interner';

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

  // Se usa fetch en streaming (NDJSON) porque HttpClient lee toda la respuesta en un unico string y, con decenas de
  // miles de mutantes, supera el limite del navegador (llega null).
  async generateMutants(circuit: QProgram, selectedOperators: any[], noiseConfigs?: NoiseConfig[],
    onProgress?: (received: number) => void): Promise<any[]> {
    let info: any = {
      circuit: circuit.qCircuit.quirkCode,
      operatorNames: selectedOperators,
      mutableColumns: circuit.qCircuit.mutableColumns,
      mutableRows: circuit.qCircuit.mutableRows,
      inputQubits: this.manager.inputQubits,
      generateWithAllInputs: this.manager.generateWithAllInputs
    };
    if (noiseConfigs && noiseConfigs.length > 0) {
      info.noiseConfigs = noiseConfigs;
    }
    const response = await fetch(`${environment.api.mutation}/qumugen/generateQuirkMutants?format=ndjson`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    });
    if (!response.ok) {
      const text = await response.text();
      let parsed: any = null;
      try { parsed = JSON.parse(text); } catch (e) { }
      throw { status: response.status, error: parsed ?? text };
    }

    const mutants: any[] = [];
    const interner = new QuirkInterner();
    // Solo se guarda lo que usa setMutants; el quirk comparte columnas/puertas identicas entre mutantes
    const slim = (o: any) => ({
      mutantIndex: o.mutantIndex,
      mutatedColumn: o.mutatedColumn,
      mutatedRow: o.mutatedRow,
      mutationOperator: o.mutationOperator,
      oracleName: o.oracleName,
      mutationDetail: o.mutationDetail,
      qubits: o.qubits,
      quirk: interner.intern(o.quirk)
    });
    const processLine = (line: string) => {
      if (!line.trim())
        return;
      let parsed: any;
      try {
        parsed = JSON.parse(line);
      } catch (e) {
        throw { status: 0, error: { message: 'Respuesta de qumugen incompleta o corrupta (' + mutants.length + ' mutantes leídos)' } };
      }
      if (Array.isArray(parsed)) {
        for (const o of parsed)
          mutants.push(slim(o));
      } else
        mutants.push(slim(parsed));
    };
    // Procesa las lineas completas y devuelve el resto; un unico substring final evita copias cuadraticas
    const processBuffer = (buffer: string): string => {
      let start = 0;
      let pos: number;
      while ((pos = buffer.indexOf('\n', start)) !== -1) {
        processLine(buffer.substring(start, pos));
        start = pos + 1;
      }
      return start === 0 ? buffer : buffer.substring(start);
    };

    try {
      if (!response.body) {
        const text = await response.text();
        processLine(processBuffer(text));
        return mutants;
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done)
          break;
        buffer = processBuffer(buffer + decoder.decode(value, { stream: true }));
        if (onProgress)
          onProgress(mutants.length);
      }
      buffer += decoder.decode();
      processLine(processBuffer(buffer));
      return mutants;
    } finally {
      interner.clear();
    }
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
