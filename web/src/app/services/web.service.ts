import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../interfaces/noticia';

const SERVIDOR = 'http://localhost:8080/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getNoticias(){
    return (this.http.get(SERVIDOR));
  }

  addNoticias(noticia: Noticia){
    return (this.http.post(SERVIDOR, noticia));
  }
  deleteNoticias(id: string){
    return (this.http.delete(SERVIDOR + '/' + id));
  }
  updateNoticias(noticia: Noticia){
    return (this.http.put(SERVIDOR + '/' + noticia.idNoticia, noticia));
  }
}
