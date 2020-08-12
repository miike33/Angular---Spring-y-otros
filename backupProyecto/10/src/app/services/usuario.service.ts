import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'http://localhost:8080/api/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getUsuarios() {
    return (this.http.get(SERVER));
  }

  addUsuario(cliente: any) {
    return (this.http.post(SERVER, cliente));
  }

  deleteUsuario(id: any) {
    return (this.http.delete(SERVER + '/' + id));
  }

}
