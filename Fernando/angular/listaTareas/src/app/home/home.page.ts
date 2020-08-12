import { Component } from '@angular/core';
import { ListatareasService } from '../services/listatareas.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
listaTareas: [];
tarea = '';
  constructor(private tareas: ListatareasService) {}

  doRefresh(evento){
    this.tareas.obtenerTareas().subscribe((resp: any) => {
    this.listaTareas = resp;
    });
    evento.target.complete();
  }

  guardarTareas(){
    this.tareas.guardarTareas(this.tarea).subscribe((resp: any) => {
      this.listaTareas = resp;
      this.tarea = '';
      });
  }

  borrarTareas(){
    if (this.listaTareas){
      this.listaTareas.length = 0;
      }
    this.tareas.borrarTareas().subscribe();
  }
}
