import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  noticia = {
    idNoticia: '',
    categoria: '',
    titulo: '',
    contenido: '',
    imagen: '',
    dateAt: ''
  };

  constructor(private route: Router, private router: ActivatedRoute) {
    this.noticia.titulo = this.router.snapshot.paramMap.get('titulo');
  }

  ngOnInit() {}

}
