import { Component, ViewChild, ViewChildren } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Noticia } from '../interfaces/noticia';
import { NoticiaService } from '../services/noticia.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  filterSearch = '';
  cat = '';
  categoriaFilter = '';
  noticias: Noticia[];

  constructor(
    private noticiaService: NoticiaService,
    private alertController: AlertController,
    private router: Router,
    private location: Location
  ) { }

  ionViewDidEnter() {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
      this.noticias = [...this.noticias];
      this.orderDate();
    });
  }

  goBack(){
    this.location.back();
  }

  orderDate() {
    this.noticias.sort((ev1, ev2) => ev2.dateAt.localeCompare(ev1.dateAt));
    this.noticias = [...this.noticias];
  }

  orderCategory(event: Event, prueba: string) {
    this.categoriaFilter = prueba;
    event.preventDefault();
  }

  doRefresh(evento) {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
      evento.target.complete();
    });
    evento.target.complete();
  }
}
