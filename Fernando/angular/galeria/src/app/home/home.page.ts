import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imagenes = ['madrid1.jpg', 'madrid2.jpg', 'madrid3.jpg'];
  nombre: string;

  constructor() {}


}
