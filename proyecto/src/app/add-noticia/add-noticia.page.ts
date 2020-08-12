import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interfaces/noticia';
import { NoticiaService } from '../services/noticia.service';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.page.html',
  styleUrls: ['./add-noticia.page.scss'],
})
export class AddNoticiaPage implements OnInit {

  newFecha = new Date();
  autor: number;
  existe: boolean;

  autores: Usuario;
  newUser: Usuario;

  newNoticia: Noticia = {
    categoria: '',
    titulo: '',
    contenido: '',
    imagen: '',
    dateAt: '',
    idNoticia: -1,
    usuarios: this.newUser
  };

  constructor(private noticiaService: NoticiaService,
              private usuarioService: UsuarioService,
              private router: Router,
              private alertController: AlertController,
              private rutaActiva: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.rutaActiva.snapshot.params.idNoticia === '-1') {
      this.existe = false;
    } else {
      this.existe = true;
      this.newNoticia.idNoticia = this.rutaActiva.snapshot.params.idNoticia;
      this.getNoticiaById();
    }
    this.getAutores();
  }

  getAutores() {
    this.usuarioService.getUsuarios().subscribe((resp: any) => {
      this.autores = resp;
    });
  }

  getNoticiaById() {
    this.noticiaService.getNoticiaId(this.newNoticia.idNoticia).subscribe((resp: any) => {
      this.newNoticia = resp;
    });
  }

  addNoticia() {
    this.usuarioService.getUserById(this.autor).subscribe((getUser: any) => {
      this.newUser = getUser;
      this.newNoticia.usuarios = this.newUser;
      this.newNoticia.dateAt =
        (this.newFecha.getFullYear() + this.newFecha.getMonth() + 1 + this.newFecha.getDay()).toString();
      if (!this.existe) {
        this.noticiaService.addNoticia(this.newNoticia).subscribe((addNoticia: any) => { });
      } else {
        this.noticiaService.updateNoticia(this.newNoticia, this.newNoticia.idNoticia).subscribe((addNoticia: any) => { });
      }
    });

    this.presentAlertConfirm();
  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Noticia añadida!',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.goBack();
          }
        }
      ]
    });

    await alert.present();
  }


  goBack() {
    this.router.navigate(['/home']);
  }


  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newNoticia.imagen = reader.result as string;
    });
  }

}
