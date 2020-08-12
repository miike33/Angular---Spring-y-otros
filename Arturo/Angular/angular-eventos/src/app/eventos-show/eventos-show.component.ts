import { Component, OnInit } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  eventos: Evento[] = [];
  search = '';

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.eventosService.getEventos()
      .subscribe(
        eventos => this.eventos = eventos
      );
  }


  addEvento(newEvento) {
    this.eventos.push(newEvento);
    // Clonamos array para que el filtro lo detecte y actualice datos
    this.eventos = [...this.eventos];
  }
  /*
    deleteEvento(evento: Evento) {
    this.eventos.splice(this.eventos.indexOf(evento), 1);
    //borramos el elemento del array a partir de su posicion (al poner 1, borra la posicion que le has pasado)
    this.eventos = [...this.eventos];
  }
  */

  filterEventos() {
    this.eventos.filter(e =>
      e.name.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
  }

  deleteEvento(evento: Evento) {
    this.eventos = this.eventos.filter(e => e !== evento);
    // Con filter, creamos un nuevo evento descartando el evento que queriamos eliminar
    // Basicamente, generamos un nuevo array de eventos sin el que hemos eliminado
  }

  orderPrice(event: Event) {
    event.preventDefault();
    this.eventos.sort((ev1, ev2) => ev1.price - ev2.price);
    this.eventos = [...this.eventos];
  }

  orderDate(event: Event) { // Recibe evento click de HTML
    event.preventDefault(); // Cancelamos comportamiento por defecto
    // Ordenamos array
    this.eventos.sort((ev1, ev2) => ev1.date.localeCompare(ev2.date));
    this.eventos = [...this.eventos];
  }

}
