import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { SERVICES } from '../app.constants';
import { EventosResponse, EventoResponse, EventoDeleteResponse } from '../interfaces/responses';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) {
  }

  getEventos(): Observable<Evento[]> {
    return this.http.get<EventosResponse>(`/eventos`).pipe(
      map(response => response.eventos));
  }

  getEvento(id: number): Observable<Evento> {
    return this.http.get<EventoResponse>(`/eventos/${id}`).pipe(
      map(response => response.evento));
  }

  addEvento(evento: Evento): Observable<Evento> {
    return this.http.post<EventoResponse>(`/eventos`, evento).pipe(
      map(resp => resp.evento)
    );
  }

  deleteEvento(id: number): Observable<void> {
    return this.http.delete<void>(`/eventos/${id}`);
  }

}
