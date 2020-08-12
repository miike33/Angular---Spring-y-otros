import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from '../services/web.service';
import { Noticia } from '../interfaces/noticia';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {

  @Output() detalles = new EventEmitter<void>();

  noticias: [];

  constructor(private noticiaService: ListService) { }
  ngOnInit(): void {
  }

  ionViewDidEnter() {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
    });
  }


  doRefresh(evento) {
    this.noticiaService.getNoticias().subscribe((resp: any) => {
      this.noticias = resp;
      evento.target.complete();
    });
    evento.target.complete();
  }

  detallesEvento(evento) {
    evento.preventDefault();
    this.detalles.emit();
  }

}
