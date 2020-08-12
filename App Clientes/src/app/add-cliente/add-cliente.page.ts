import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    imagen: '',
    activo: 'true',
  };

  constructor(private enviar: ListService, private alertController: AlertController, private route: Router) {
  }

  ngOnInit() {
  }

  enviarCliente() {
    if (this.cliente.nombre !== '' && this.cliente.apellido !== '' && this.cliente.email !== '' && this.cliente.imagen !== '') {
      this.enviar.enviarClientes(this.cliente).subscribe((resp: any) => {
        this.presentAlertConfirm();
      });
    }
    else {
      this.presentAdd();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
            this.route.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAdd() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>Los campos no pueden estar vacíos</strong>!!!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Aceptar');
          }
        }
      ]
    });

    await alert.present();
  }
}
