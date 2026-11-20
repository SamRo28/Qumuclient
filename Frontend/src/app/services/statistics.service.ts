import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobStatus, pollJob } from './job-polling';
import { StatisticsResponse } from '../model/StatisticsResponse';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    // URL placeholder, user will update it later
    //private baseUrl = 'http://172.25.16.216:8503';

    //eduroam:
    //private baseUrl = "http://172.19.176.170:8503"

    //movil 2:
    private baseUrl = environment.api.statistics


    private currentStatistics: StatisticsResponse | null = null;

    constructor(private http: HttpClient) { }

    setStatistics(stats: StatisticsResponse) {
        this.currentStatistics = stats;
    }

    getStatistics(): StatisticsResponse | null {
        return this.currentStatistics;
    }

    /**
     * Calcula estadísticas de mutation testing a partir de un archivo CSV.
     * @param file Archivo CSV con la killing matrix
     * @param threshold Umbral para identificar mutantes raramente matados (por defecto 0.05)
     */
    calculateStatistics(file: File, threshold: number = 0.05): Observable<StatisticsResponse> {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('threshold', threshold.toString());

        return this.http.post<StatisticsResponse>(`${this.baseUrl}/calculateStatistics`, formData);
    }

    private email(): string {
        return sessionStorage.getItem('email') || '';
    }

    /**
     * Lanza en reper el cálculo de estadísticas de un ciclo (reper monta el CSV desde la BD).
     * Devuelve el id del trabajo asíncrono.
     */
    startCycleStatistics(projectId: string, cycleId: number, threshold: number = 0.05, inputBits?: number): Observable<{ jobId: string }> {
        return this.http.post<{ jobId: string }>(`${environment.api.core}/mutantanalytics/cycleStatistics/start`,
            { email: this.email(), projectId, cycleId, threshold, inputBits }, { withCredentials: true });
    }

    getJobStatus(jobId: string): Observable<JobStatus> {
        return this.http.post<JobStatus>(`${environment.api.core}/jobs/status`,
            { email: this.email(), jobId }, { withCredentials: true });
    }

    getJobResult<T = StatisticsResponse>(jobId: string): Observable<T> {
        return this.http.post<T>(`${environment.api.core}/jobs/result`,
            { email: this.email(), jobId }, { withCredentials: true });
    }

    /** Sondea el trabajo hasta que termina y emite las estadísticas. */
    pollStatistics(jobId: string, intervalMs: number = 3000): Observable<StatisticsResponse> {
        return pollJob<StatisticsResponse>(() => this.getJobStatus(jobId), () => this.getJobResult(jobId), intervalMs);
    }

    /**
     * Envía las estadísticas para análisis por IA.
     * @param stats Objeto de estadísticas
     */
    analyzeStatistics(stats: StatisticsResponse): Observable<{ conversation_id: string, analysis: string }> {
        // Enviar como JSON body. Si el backend espera 'stats_json' como query param, esto fallará, 
        // pero es lo estándar para POST.
        // Si el backend es FastAPI y define (stats_json: Dict = Body(...)), esto funciona.
        return this.http.post<{ conversation_id: string, analysis: string }>(`${this.baseUrl}/uploadResults`, stats);
    }

    /**
     * Envía una pregunta de seguimiento al chat de la IA.
     * @param conversationId ID de la conversación
     * @param question Pregunta del usuario
     */
    chatQuestion(conversationId: string, question: string): Observable<{ response: string }> {
        const payload = {
            conversation_id: conversationId,
            question: question
        };
        return this.http.post<{ response: string }>(`${this.baseUrl}/chatQuestion`, payload);
    }
}
