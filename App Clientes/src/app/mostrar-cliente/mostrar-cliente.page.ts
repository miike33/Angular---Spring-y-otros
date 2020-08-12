import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.page.html',
  styleUrls: ['./mostrar-cliente.page.scss'],
})
export class MostrarClientePage implements OnInit {
  cliente: Cliente = {
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    imagen: '',
    activo: '',
  };

  constructor(private route: Router, private router: ActivatedRoute) {
    this.cliente.nombre = this.router.snapshot.paramMap.get('nombre');
    this.cliente.apellido = this.router.snapshot.paramMap.get('apellido');
    this.cliente.email = this.router.snapshot.paramMap.get('email');
    this.cliente.imagen = this.router.snapshot.paramMap.get('imagen');
    this.cliente.activo = this.router.snapshot.paramMap.get('activo');
  }

  ngOnInit() {
  }

}
