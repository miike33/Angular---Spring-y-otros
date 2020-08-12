import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado = '';
  num: number;

  constructor() {}

  mostrar(num: string) {
    this.resultado += num;
  }

  borrar() {
    this.resultado = '';
  }

  calcular() {
    // tslint:disable-next-line: no-eval
    this.resultado = eval(this.resultado);
  }

  power() {
    this.num = Math.pow(+this.resultado, 2);
    this.resultado = `${this.num}`;
  }

  raiz() {
    this.num = Math.sqrt(+this.resultado);
    this.resultado = `${this.num}`;
  }

}
