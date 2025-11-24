import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public login$ = new Subject<void>();

  constructor(private client: HttpClient) { }



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

