import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.page.html',
  styleUrls: ['./actualizar-cliente.page.scss'],
})
export class ActualizarClientePage implements OnInit {

  cliente = {
    id: '',
    nombre: '',
    apellido: '',
    email: ''
  };

  constructor(private route: Router, private router: ActivatedRoute) {
    this.cliente.nombre = this.router.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
  }

}
