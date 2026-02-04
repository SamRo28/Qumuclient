import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Project } from '../model/Project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReperService {
  private right: string = "?db=quantum_mutation&collection="

  constructor(private client: HttpClient) { }

  getCircuits(email: string) {
    return this.client.post<any>(`${environment.api.core}/projects/getAllByUser`, { email }, { withCredentials: true })
  }

  save(circuit: Project) {
    // Crear una copia del circuito para no modificar el original
    const circuitToSend = { ...circuit };

    // Filtrar ciclos de mutantes: solo enviar los nuevos
    if (circuit.mutantCycles) {
      circuitToSend.mutantCycles = circuit.mutantCycles.filter(mc => mc.newlyGenerated);
    }

    return this.client.put<any>(`${environment.api.core}/projects/save`, {
      circuit: circuitToSend, user: {
        id: sessionStorage.getItem('email')
      }
    }, { withCredentials: true })
  }

  delete(projectId: string) {
    return this.client.post<any>(`${environment.api.core}/projects/delete`, { projectId, userId: sessionStorage.getItem('email')! }, { withCredentials: true })
  }

  getUser() {
    return this.client.post<string>(`${environment.api.core}/users/getUser`, {}, {
      withCredentials: true,
      responseType: 'text' as 'json'
    }).pipe(
      tap(user => sessionStorage.setItem('email', user))
    );
  }

  getProjects(token: string, id: string) {
    return this.client.post<any>(`${environment.api.core}/projects/getAllByUser`, { token, email: sessionStorage.getItem('email')!, id }, { withCredentials: true })
  }
}