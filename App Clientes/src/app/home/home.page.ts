import { Component } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clientes = [];
  mostrarActivos = true;

  constructor(private listado: ListService, private alertController: AlertController) { }


    ionViewDidEnter() {
    this.listado.obtenerClientes().subscribe((resp: any) => {
      this.clientes = resp;
    });
  }


  doRefresh(evento) {
    this.listado.obtenerClientes().subscribe((resp: any) => {
      console.log(resp);
      this.clientes = resp;
      evento.target.complete();
    });

  }

  deleteCliente(id) {
    this.presentAlertConfirm(id);

  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Quiere borrar el cliente?</strong>!!!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.listado.deleteCliente(id).subscribe(() => {
              this.listado.obtenerClientes().subscribe((resp: any) => {
                this.clientes = resp;
              });
            });
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


  mostrarActivados() {
    this.mostrarActivos = !this.mostrarActivos;

  }
}
