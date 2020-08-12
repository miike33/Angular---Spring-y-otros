import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';

const SERVER = 'http://localhost:8080/api/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  getUsuarios() {
    return (this.http.get(SERVER));
  }

  getUserById(id: number) {
    return (this.http.get(SERVER + '/' + id));
  }

  addUsuario(usuario: Usuario) {
    return (this.http.post(SERVER, usuario));
  }

  updateUser(usuario: Usuario, id: number) {
    return (this.http.put(SERVER + '/' + id, usuario));
  }

  deleteUsuario(id: number) {
    return (this.http.delete(SERVER + '/' + id));
  }

}
