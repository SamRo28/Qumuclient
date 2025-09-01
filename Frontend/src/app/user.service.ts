import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';
import { DictionaryService } from './dictionary.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    constructor(private dict : DictionaryService, private client : HttpClient, private manager : ManagerService) { }


    login(email: string, pwd: string): Observable<any> {
        return this.client.post<string>(`http://localhost:8080/users/login`, { email, pwd }, { responseType: 'text' as 'json' });
    }

    associateProject(userID:string, projectID:string): Observable<any> {
        return this.client.post(`http://localhost:8080/users/${userID}/projects`, { projectID });
    }

}
           
    