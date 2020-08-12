import { Component } from '@angular/core';
import { ListService } from '../services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  usuarios: [];

  constructor(private noticiaService: ListService) { }

  ionViewDidEnter() {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.usuarios = resp;
    });
  }


  doRefresh(evento) {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.usuarios = resp;
      evento.target.complete();
    });
    evento.target.complete();
  }

}
