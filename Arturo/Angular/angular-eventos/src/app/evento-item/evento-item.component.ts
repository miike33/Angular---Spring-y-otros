import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';


@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: Evento;
  // Avisamos al padre de que borramos evento
  @Output() deleted = new EventEmitter<void>();


  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
  }


  deleteEvento() {
    this.eventosService.deleteEvento(this.evento.id).subscribe(
      () => {
        // Como deleteEvento devuelve void, la respuesta del servidor sera vacia ()
        return this.deleted.emit();
      },
      error => console.error(error)
    );
  }


}
