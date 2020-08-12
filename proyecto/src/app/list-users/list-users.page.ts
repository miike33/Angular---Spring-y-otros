import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { UsuarioService } from '../services/usuario.service';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

  filterSearch = '';
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService, private alertController: AlertController, private location: Location) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.usuarios = resp;
      this.usuarios = [...this.usuarios];
    });
  }

  deleteUser(id: number) {
    this.presentAlertConfirm(id);
  }


  goBack() {
    this.location.back();
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cuidado!',
      message: '<strong>¿Quiere borrar este usuario?</strong>',
      buttons: [
        {
          text: 'Borrar',
          handler: () => {
            console.log('Aceptar');
            this.usuarioService.deleteUsuario(id).subscribe((resp: any) => {
              location.reload();
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

}
