import { Component, OnInit, Input } from '@angular/core';
import { NoticiaService } from '../services/noticia.service';
import { Noticia } from '../interfaces/noticia';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  noticia: Noticia = {
    idNoticia: 0,
    categoria: '',
    titulo: '',
    contenido: '',
    imagen: '',
    dateAt: ''
  };


  constructor(private noticiaService: NoticiaService,
              private router: Router,
              private rutaActiva: ActivatedRoute,
              private alertController: AlertController
  ) { }

  ngOnInit() {
  }


  getNoticiaId() {
    this.noticiaService.getNoticiaId(this.noticia.idNoticia).subscribe((resp: any) => {
      this.noticia = resp;
    });
  }

  ionViewDidEnter() {
    this.noticia.idNoticia = this.rutaActiva.snapshot.params.idNoticia;
    this.getNoticiaId();
  }


  deleteNotica() {
    this.presentAlertConfirm(this.noticia.idNoticia);
  }

  goBack() {
    this.router.navigate(['/home']);
  }


  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: '<strong>¿Quiere borrar esta noticia?</strong>',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            console.log('Aceptar');
            this.noticiaService.deleteNoticia(this.noticia.idNoticia).subscribe((resp: any) => {});
            this.goBack();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('No se ha realizado ningún cambio');
          }
        }
      ]
    });

    await alert.present();
  }

}
