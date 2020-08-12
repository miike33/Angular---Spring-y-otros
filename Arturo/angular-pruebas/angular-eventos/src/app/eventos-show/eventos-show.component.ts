import { Component, OnInit, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service'

@Component({
  selector: 'eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})
export class EventosShowComponent implements OnInit {

  search = '';
  eventos: Evento[] = [];

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.eventos = this.eventosService.getEventos();
  }

  addEvento(evento: Evento) {
    this.eventos.push(evento);
  }

  deleteEvento(evento: Evento) {
    this.eventos = this.eventos.filter(e => e !== evento);
    // Con filter, creamos un nuevo evento descartando el evento que queriamos eliminar
    // Basicamente, generamos un nuevo array de eventos sin el que hemos eliminado
  }

  orderDate() {
    this.eventos.sort((ev1, ev2) => ev1.date.localeCompare(ev2.date));
    this.eventos = [...this.eventos];
  }

  orderPrice() {
    this.eventos.sort((ev1, ev2) => ev1.price - ev2.price);
    this.eventos = [...this.eventos];
  }

}
