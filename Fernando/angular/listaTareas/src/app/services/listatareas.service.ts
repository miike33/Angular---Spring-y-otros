import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'https://soyelputo.best/tareas/';

@Injectable({
  providedIn: 'root'
})
export class ListatareasService {

  constructor(private http: HttpClient) { }

  obtenerTareas(){
    return(this.http.get(SERVER + 'get.php'));
  }

  guardarTareas(tarea: string){
    return(this.http.get(SERVER + 'put.php?tarea=' + tarea));
  }

  borrarTareas(){
    return this.http.get(SERVER + 'delete.php');
  }
}
