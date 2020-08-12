import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Evento } from '../interfaces/evento';
import { EventosService } from '../services/eventos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  @Output() add = new EventEmitter<Evento>();

  newEvento: Evento;
  saved = false;
  fechaHoy = new Date();

  constructor(private eventosService: EventosService, private router: Router) { }

  ngOnInit(): void {
    // this.title.setTitle('Añadir Evento | Angular Events');
    this.resetForm();
  }


  addEvento() {
    this.eventosService.addEvento(this.newEvento).subscribe(
      // Redirige a eventos despues de añadir el evento (asi el formulario se resetea solo)
      evento => {
        this.saved = true;
        this.router.navigate(['/eventos']);
      }
    );
  }

  private resetForm() {
    this.newEvento = {
      name: '',
      description: '',
      image: '',
      price: null,
      date: ''
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }

}
