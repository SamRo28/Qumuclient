import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { QProgram } from './model/QProgram';

import { Mutant } from './model/Mutant';
import { Project } from './model/Project';

@Injectable({
  providedIn: 'root'
})
export class ReperService {
  private right: string = "?db=quantum_mutation&collection="

  constructor(private client: HttpClient) { }

  getCircuits(email: string) {
    return this.client.post<any>("http://localhost:8080/projects/getAllByUser", { email }, { withCredentials: true })
  }

  save(circuit: Project) {
    // Crear una copia del circuito para no modificar el original
    const circuitToSend = { ...circuit };

    // Filtrar ciclos de mutantes: solo enviar los nuevos
    if (circuit.mutantCycles) {
      circuitToSend.mutantCycles = circuit.mutantCycles.filter(mc => mc.newlyGenerated);
    }

    return this.client.put<any>("http://localhost:8080/projects/save", {
      circuit: circuitToSend, user: {
        id: sessionStorage.getItem('email')
      }
    }, { withCredentials: true })
  }

  delete(projectId: string) {
    return this.client.post<any>("http://localhost:8080/projects/delete", { projectId }, { withCredentials: true })
  }

  getUser() {
    return this.client.post<string>("http://localhost:8080/users/getUser", {}, {
      withCredentials: true,
      responseType: 'text' as 'json'
    }).pipe(
      tap(user => sessionStorage.setItem('email', user))
    );
  }

  getProjects(token: string, id: string) {
    return this.client.post<any>("http://localhost:8080/projects/getAllByUser", { token, email: sessionStorage.getItem('email')!, id }, { withCredentials: true })
  }
}