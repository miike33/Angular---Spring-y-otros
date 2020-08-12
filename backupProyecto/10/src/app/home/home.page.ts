import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = [];

  constructor(private listService: UsuarioService, private alertController: AlertController) {}

  ionViewDidEnter() {
    this.listService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
    });
  }


  doRefresh(evento) {
    this.listService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
      evento.target.complete();
    });
    evento.target.complete();
  }


  borrarCliente(id) {
    this.listService.deleteUsuario(id).subscribe((resp: any) => {
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
