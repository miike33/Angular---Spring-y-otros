import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'https://lookformedical.com/mobile/';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  obtenerDatos(busqueda: string) {
    return (this.http.get(SERVER + 'getweb.php?lang=2&q=' + busqueda));
  }
}
