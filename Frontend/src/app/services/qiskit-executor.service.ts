import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { QProgram } from '../model/QProgram';

@Injectable({
    providedIn: 'root'
})
export class QiskitExecutorService {

    //qeUrl = "http://localhost:8502/"

    //MOVIL:
    qeUrl = "http://172.25.16.216:8502/"

    //CASA:
    //qeUrl = "http://192.168.1.133:8502/"

    //PISO:
    //qeUrl = "http://192.168.0.4:8502/"

    //eduroam:
    //qeUrl = "http://172.19.176.170/"


    constructor(private client: HttpClient, private manager: ManagerService) { }

    runOne(qprogram: QProgram, inputQubits: string, outputQubits: string, algorithm: string, qubits: number, reduceTable: boolean, inputs?: string[]) {

        let program = {
            qubits: qprogram.qubits,
            qiskitCode: qprogram.qCode.code,
            inputQubits: inputQubits,
            outputQubits: outputQubits
        }

        let info = {
            program: program,
            inputQubits: inputQubits,
            outputQubits: outputQubits,
            qubits: qubits,
            algorithm: algorithm,
            reduceTable: reduceTable,
            inputs: inputs
        }
        //TODO:
        // info.program.qiskitCode = info.program.qCode.code
        let url = this.qeUrl + (algorithm == "Simple" ? "simple/executeOne" : "strategy/executeOne")
        return this.client.put(url, info)
    }

    getCores(): any {
        //return this.client.get<number>(this.qeUrl + "strategy/getCores")
        return 1
    }

    executeWithoutStrategy(mutants: any[], originalResults: any[], algorithm: string, toleratedError: number) {
        let capped = []
        for (let i = 0; i < mutants.length; i++) {
            capped.push({
                wholeCode: mutants[i].wholeCode,
                mutantIndex: mutants[i].mutantIndex
            })
        }
        let info = {
            outputQubits: this.manager.outputQubits,
            algorithm: algorithm,
            toleratedError: toleratedError,
            originalResults: originalResults,
            qubits: this.manager.selectedProject!.qProgram.qubits,
            mutants: capped
        }
        let url = this.qeUrl + "simple/executeWithoutStrategy"
        return this.client.put<any>(url, info)
    }

    executeWithStrategy(mutants: any[], originalResults: any[], algorithm: string, toleratedError: number, reduceTable: boolean, inputQubits: string, outputQubits: string, Einputs?: string[]) {
        let capped = []
        for (let i = 0; i < mutants.length; i++) {
            capped.push({
                wholeCode: mutants[i].wholeCode,
                mutantIndex: mutants[i].mutantIndex,
                inputQubits: mutants[i].inputQubits,

            })
        }
        let info = {
            inputQubits: inputQubits,
            outputQubits: outputQubits,
            algorithm: algorithm,
            toleratedError: toleratedError,
            originalResults: originalResults,
            qubits: this.manager.selectedProject?.qProgram?.qubits,
            mutants: capped,
            reduceTable: reduceTable,
            inputs: Einputs
        }
        let url = this.qeUrl + "strategy/executeWithStrategy"
        return this.client.put<any>(url, info)
    }
}