import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'http://localhost:8080/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }


  obtenerClientes() {
    return (this.http.get(SERVER));
  }

  enviarCliente(cliente: any) {
    return (this.http.post(SERVER, cliente));
  }

  borrarCliente(id: any) {
    return (this.http.delete(SERVER + '/' + id));
  }

}
