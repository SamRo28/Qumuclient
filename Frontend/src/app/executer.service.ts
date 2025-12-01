import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManagerService } from './manager.service';

@Injectable({
    providedIn: 'root'
})
export class ExecuterService {

    private baseUrl = 'http://localhost:8502';

    constructor(private http: HttpClient, private manager: ManagerService) { }

    // TODO: Implementar métodos para ejecutar código Qiskit
    // 
    // Métodos a implementar:
    // - runOne(): Ejecutar un programa individual
    // - getCores(): Obtener número de cores disponibles
    // - executeWithoutStrategy(): Ejecutar mutantes sin estrategia (algoritmo Simple)
    // - executeWithStrategy(): Ejecutar mutantes con estrategia
    //
    // Endpoints disponibles:
    // Simple Controller:
    //   - PUT /simple/executeOne
    //   - PUT /simple/executeWithoutStrategy
    //   - GET /simple/getQiskitTemplate
    //
    // Strategy Controller:
    //   - PUT /strategy/executeOne
    //   - PUT /strategy/executeWithStrategy
    //   - GET /strategy/getCores
}
