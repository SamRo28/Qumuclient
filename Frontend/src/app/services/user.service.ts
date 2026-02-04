import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, tap, BehaviorSubject, of, catchError, map } from 'rxjs';
import { ReperService } from './reper.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public login$ = new Subject<void>();

  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private client: HttpClient, private reperService: ReperService) { }

  login(email: string, pwd: string): Observable<any> {
    return this.client.post<string>(`${environment.api.core}/users/login`, { email, pwd }, { responseType: 'text' as 'json', withCredentials: true })
      .pipe(
        tap(token => {
          // sessionStorage.setItem('token', token); // Cookie is now HttpOnly
          sessionStorage.setItem('email', email);
          this.isAuthenticated$.next(true);
          this.login$.next();
        })
      );
  }

  checkSession(): Observable<boolean> {
    return this.reperService.getUser().pipe(
      tap(email => {
        sessionStorage.setItem('email', email);
        this.isAuthenticated$.next(true);
      }),
      map(() => true),
      catchError(() => {
        this.isAuthenticated$.next(false);
        sessionStorage.removeItem('email');
        return of(false);
      })
    );
  }


}

