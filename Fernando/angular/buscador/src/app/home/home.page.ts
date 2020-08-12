import { Component } from '@angular/core';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filter = '';
  urls: [];

  constructor(private datos: ListaService) { }

  obtenerDatos() {
    this.datos.obtenerDatos(this.filter).subscribe((res: any) => {
      this.urls = res.items;
    });
  }
}
