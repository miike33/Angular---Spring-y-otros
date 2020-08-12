
class Triangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    getArea(){
        return ((this.base * this.altura) /2);
    }

    getPerimetro(){
        return (2* this.altura + this.base);
    }
}


class Circulo{
    constructor(radio){
        this.radio = radio;
    }

    getArea(){
        return (Math.PI * Math.pow(this.radio, 2));
    }

    getPerimetro(){
        return (2* Math.PI * this.radio);
    }
}



class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }

    getArea(){
        return (Math.pow(this.lado,2));
    }

    getPerimetro(){
        return (4 * this.lado);
    }
}


let tri = new Triangulo(2,3);
let cir = new Circulo(4);
let cua = new Cuadrado(2);
let coleccion = [tri, cir, cua];

coleccion.forEach(e =>{
    if(e instanceof Cuadrado){
        console.log("Cuadrado: " + "Area: " + e.getArea() + " Perimetro: " + e.getPerimetro());
    }
});

//console.log(coleccion);