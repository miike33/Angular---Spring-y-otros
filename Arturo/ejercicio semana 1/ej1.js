'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function ejercicio1(cadena1, cadena2){
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        console.error("Una de los paremetros no es un string");
        return;
    }

    if (cadena1.length > cadena2.length) {
        console.log(`'${cadena1}' es mayor que '${cadena2}'`);
    } else if (cadena2.length > cadena2.length) {
        console.log(`'${cadena2}' es mayor que '${cadena1}'`);
    } else{
        console.log("Las cadenas son iguales");
    }
}

ejercicio1("caracol", "pescao");

/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');

function ejercicio2(veces, num){
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado += num + " ";
        num *= 2;
    }
    console.log(resultado);
}

ejercicio2(10,2);
ejercicio2(4, 5);

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');

function ejercicio3(cadena, letra){
    cadena += "";
    letra += "";
    let contador = 0;

    for(let l of cadena){
        if (l === letra) {
            contador++;
        }
    }

    console.log(`La letra ${letra} aparece ${contador} veces en ${cadena}`);
}

ejercicio3("Mi casa es grande", 'a');

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function ejercicio4(nombre = "Producto generico", precio = 100, impuesto = 21){
    nombre += "";
    precio = +precio;
    impuesto = +impuesto;

    if (isNaN(precio) || isNaN(impuesto)) {
        console.error("El precio o el impuesto no son numero");
        return;
    }

    console.log(`Nombre: ${nombre}. Precio total: ${precio*(1 + (impuesto/100))}`);

}

ejercicio4("Mesa", 60, 30);
ejercicio4("Silla", 30);
ejercicio4();
ejercicio4("Cosa", "hola");

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

let ejercicio5 = (cadena, trozo) => {
    let esta = cadena.toLocaleLowerCase().includes(trozo.toLocaleLowerCase());

    if (esta) {
        console.log(`La cadena ${cadena} contiene el trozo ${trozo}`);
    } else{
        console.log(`El texto no contiene ese trozo`);
    }
}

ejercicio5("Santiago de Compostela", "COMP");