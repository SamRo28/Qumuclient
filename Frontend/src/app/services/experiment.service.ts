import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, interval, of, switchMap, catchError, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateExperimentRequest, ExperimentProgress, ExperimentListItem, ExperimentDetail, ResumePreview, ResumeCycleQubits, MergePreview } from '../model/Experiment';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  private activeExperimentsSubject = new BehaviorSubject<ExperimentProgress[]>([]);
  public activeExperiments$ = this.activeExperimentsSubject.asObservable();

  private pollingActive = false;

  constructor(private http: HttpClient) {
    this.initProgressPolling();
  }

  private getUserEmail(): string {
    return sessionStorage.getItem('email') || '';
  }

  public isLoggedIn(): boolean {
    return !!this.getUserEmail();
  }

  public createExperiment(request: CreateExperimentRequest): Observable<any> {
    const payload = {
      ...request,
      email: this.getUserEmail()
    };
    return this.http.post<any>(`${environment.api.core}/experiments/create`, payload, { withCredentials: true });
  }

  public getActiveProgress(): Observable<ExperimentProgress[]> {
    const email = this.getUserEmail();
    if (!email) return of([]);
    return this.http.post<ExperimentProgress[]>(`${environment.api.core}/experiments/active-progress`, { email }, { withCredentials: true })
      .pipe(
        catchError(err => {
          console.error('Error fetching experiment progress', err);
          return of([]);
        })
      );
  }

  public getUserExperiments(): Observable<ExperimentListItem[]> {
    const email = this.getUserEmail();
    if (!email) return of([]);
    return this.http.post<ExperimentListItem[]>(`${environment.api.core}/experiments/user`, { email }, { withCredentials: true })
      .pipe(
        catchError(err => {
          console.error('Error fetching user experiments', err);
          return of([]);
        })
      );
  }

  public getExperimentDetails(experimentId: string): Observable<ExperimentDetail> {
    const email = this.getUserEmail();
    return this.http.post<ExperimentDetail>(`${environment.api.core}/experiments/details`, { email, experimentId }, { withCredentials: true });
  }

  public deleteExperiment(experimentId: string): Observable<any> {
    const email = this.getUserEmail();
    return this.http.post<any>(`${environment.api.core}/experiments/delete`, { email, experimentId }, { withCredentials: true });
  }

  public refreshProgress() {
    this.getActiveProgress().subscribe(list => {
      this.activeExperimentsSubject.next(list);
    });
  }

  private initProgressPolling() {
    interval(15000).pipe(
      filter(() => this.isLoggedIn()),
      switchMap(() => this.getActiveProgress())
    ).subscribe(list => {
      this.activeExperimentsSubject.next(list);
    });
  }

  public getResumePreview(experimentId: string): Observable<ResumePreview> {
    return this.http.post<ResumePreview>(`${environment.api.core}/experiments/resume-preview`,
      { email: this.getUserEmail(), experimentId }, { withCredentials: true });
  }

  public resumeExperiment(experimentId: string, cycles?: ResumeCycleQubits[]): Observable<any> {
    return this.http.post<any>(`${environment.api.core}/experiments/resume`,
      { email: this.getUserEmail(), experimentId, cycles: cycles ?? [] }, { withCredentials: true });
  }

  public getMergePreview(experimentIds: [string, string]): Observable<MergePreview> {
    return this.http.post<MergePreview>(`${environment.api.core}/experiments/merge-preview`,
      { email: this.getUserEmail(), experimentIds }, { withCredentials: true });
  }

  public mergeExperiments(experimentIds: [string, string]): Observable<any> {
    return this.http.post<any>(`${environment.api.core}/experiments/merge`,
      { email: this.getUserEmail(), experimentIds }, { withCredentials: true });
  }
}
