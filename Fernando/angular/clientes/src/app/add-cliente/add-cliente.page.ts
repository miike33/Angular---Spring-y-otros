import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  cliente = {
    nombre: '',
    apellido: '',
    email: ''
  };

  constructor(private enviar: ListService, private alertController: AlertController, private route: Router) { }

  ngOnInit() {
  }

  enviarCliente() {
    this.enviar.enviarCliente(this.cliente).subscribe((resp: any) => {
      this.presentAlertConfirm();
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>Cliente añadido</strong>!!!',
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
            this.route.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }



}
