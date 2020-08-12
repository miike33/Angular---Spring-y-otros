import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';
import { AlertController } from '@ionic/angular';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.page.html',
  styleUrls: ['./actualizar-cliente.page.scss'],
})
export class ActualizarClientePage implements OnInit {
  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    imagen: '',
    activo: '',
  };

  activo: boolean;

  // tslint:disable-next-line: max-line-length
  constructor(private route: Router, private router: ActivatedRoute, private actualizar: ListService, private alertController: AlertController) {
    this.cliente.id = this.router.snapshot.paramMap.get('id');
    this.cliente.nombre = this.router.snapshot.paramMap.get('nombre');
    this.cliente.apellido = this.router.snapshot.paramMap.get('apellido');
    this.cliente.email = this.router.snapshot.paramMap.get('email');
    this.cliente.imagen = this.router.snapshot.paramMap.get('imagen');
    this.cliente.activo = this.router.snapshot.paramMap.get('activo');
    this.activo = this.cliente.activo === 'true' ? true : false;
    console.log(this.cliente);
    console.log(this.activo);
  }

  ngOnInit() {
  }

  actualizarCliente() {
    this.cliente.activo = this.activo === true ? 'true' : 'false';
    console.log(this.cliente);
    this.actualizar.actualizarCliente(this.cliente).subscribe((resp: any) => {
      this.presentAlertConfirm();
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Cliente actualizado correctamente!!!',
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
}
