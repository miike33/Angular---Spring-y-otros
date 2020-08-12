import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER = 'http://localhost:8080/api/noticias';


@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias() {
    return (this.http.get(SERVER));
  }

  addNoticia(cliente: any) {
    return (this.http.post(SERVER, cliente));
  }

  deleteNoticia(id: any) {
    return (this.http.delete(SERVER + '/' + id));
  }


}
