import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  existe: boolean;

  usuario: Usuario = {
    nombre: '',
    email: '',
    password: '',
    id_user: -1
  };

  constructor(private userService: UsuarioService,
              private rutaActiva: ActivatedRoute,
              private location: Location,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  addUser() {
    if (!this.existe) {
      this.userService.addUsuario(this.usuario).subscribe((resp: any) => {});
    } else {
      this.userService.updateUser(this.usuario, this.usuario.id_user).subscribe((resp: any) => {});
    }
    this.presentAlertConfirm();
  }

  ionViewDidEnter() {
    if (this.rutaActiva.snapshot.params.id_user === '-1') {
      this.existe = false;
    } else {
      this.existe = true;
      this.usuario.id_user = this.rutaActiva.snapshot.params.id_user;
      this.getUserById();
    }
  }

  getUserById() {
    this.userService.getUserById(this.usuario.id_user).subscribe((resp: any) => {
      this.usuario = resp;
    });
  }

  goBack() {
    this.location.back();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario añadido!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.goBack();
          }
        },
      ]
    });

    await alert.present();
  }

}
