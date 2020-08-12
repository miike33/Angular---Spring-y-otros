import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Noticia } from '../interfaces/noticia';
import { NoticiaService } from '../services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  noticias: Noticia[];

  constructor(private noticiaService: NoticiaService, private alertController: AlertController) {}

  ionViewDidEnter() {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
    });
  }


  doRefresh(evento) {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
      evento.target.complete();
    });
    evento.target.complete();
  }


  borrarCliente(id) {
    this.noticiaService.deleteNoticia(id).subscribe((resp: any) => {
      this.presentAlertConfirm();
    });
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>Cliente Borrado</strong>!!!',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
