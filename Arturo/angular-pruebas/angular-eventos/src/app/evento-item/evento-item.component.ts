import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() evento: Evento;
  @Output() deleted = new EventEmitter<void>();

  eventos: Evento[];
  search = '';

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvento() {
    this.deleted.emit();
  }

}
