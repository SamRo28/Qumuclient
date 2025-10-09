import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';
import { HttpClient } from '@angular/common/http';
import { DictionaryService } from './dictionary.service';
import { Observable, Subject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public login$ = new Subject<void>();  
  
  constructor(private dict : DictionaryService, private client : HttpClient, private manager : ManagerService) { }



    login(email: string, pwd: string): Observable<any> {
        return this.client.post<string>(`http://localhost:8080/users/login`, { email, pwd }, { responseType: 'text' as 'json' })
        .pipe(
        tap(token => {
          sessionStorage.setItem('token', token);
          sessionStorage.setItem('email', email);
          this.login$.next();
        })
      );
    }

   
}
           
    