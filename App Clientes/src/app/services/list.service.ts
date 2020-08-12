import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';


const SERVIDOR = 'http://localhost:8080/api/clientes';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  obtenerClientes(){
    return (this.http.get<Cliente[]>(SERVIDOR));
  }

  enviarClientes(cliente: Cliente){
    return (this.http.post(SERVIDOR, cliente));
  }
  deleteCliente(id: string){
    return (this.http.delete(SERVIDOR + '/' + id));
  }
  actualizarCliente(cliente: Cliente){
    return (this.http.put(SERVIDOR + '/' + cliente.id, cliente));
  }
}
