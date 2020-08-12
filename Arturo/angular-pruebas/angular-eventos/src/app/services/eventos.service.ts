import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getEventos(): Evento[] {
    return [
      {
        title: 'evento de prueba',
        image: 'assets/angular1.jpg',
        date: '2019-03-15',
        description: 'Nos lo pasamos genial',
        price: 23.95
      },
      {
        title: 'evento de prueba 2',
        image: 'assets/angular2.jpg',
        date: '2019-03-21',
        description: 'Este es peor',
        price: 15.5
      }
    ];
  }
}
