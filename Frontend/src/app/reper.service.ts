import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QProgram } from './model/QProgram';
import { DictionaryService } from './dictionary.service';
import { Mutant } from './model/Mutant';
import { Project } from './model/Project';

@Injectable({
  providedIn: 'root'
})
export class ReperService {
  private right : string = "?db=quantum_mutation&collection="

  constructor(private dict : DictionaryService, private client : HttpClient) { }

  getCircuits(email: string, token : string) {
    return this.client.post<any>("http://localhost:8080/projects/getAllByUser", { email, token })
  }

  save(circuit : Project) {
    return this.client.put<any>("http://localhost:8080/projects/save", {circuit, user: {
        id: sessionStorage.getItem('email')
      }})
  }

  saveMutants(id: string, mutants: Mutant[]) {
    let info = {
      circuitId : id,
      mutants : mutants
    }
    return this.client.put<any>(this.dict.getReperURL() + "saveJSONs" + this.right + "mutants", info)
  }

  getUser(token:string){
    return this.client.post<any>("http://localhost:8080/users/getUser", { token })
  }
}