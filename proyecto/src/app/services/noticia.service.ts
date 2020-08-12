import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';

const SERVER = 'http://localhost:8080/api/noticias';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias() {
    return (this.http.get(SERVER));
  }

  getNoticiaId(id: number) {
    return (this.http.get(SERVER + '/' + id));
  }

  addNoticia(noticia: Noticia) {
    return (this.http.post(SERVER, noticia));
  }

  updateNoticia(noticia: Noticia, id: number) {
    return (this.http.put(SERVER + '/' + id, noticia));
  }

  deleteNoticia(id: number) {
    return (this.http.delete(SERVER + '/' + id));
  }


}
