'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (incluida)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por "==>"
 */

console.log('--------------- APARTADO 1 -----------------');

let array = [10, 20, 30, 40];
console.log(array.toString());

array.push(50, 60);
array.unshift(-10, 0);
console.log(array.toString());

array.splice(3, 3);
console.log(array.toString());

array.splice(-1, 0, 51, 52);
console.log(array.toString());

/**
 * Apartado 2
 * Crea una función que reciba 2 parámetros. El primero será el nombre de una persona,
 * y el segundo serán los trabajos que ha realizado esa persona (usa rest para agruparlos en un array).
 * Posible llamada -> printTrabajos("Pepe", "Albañil", "Programador", "Buscador de tesoros")
 * La función simplemente mostrará por consola el nombre y los trabajos recorriéndolos con un for..of
 */

console.log('--------------- APARTADO 2 -----------------');

function printTrabajos(name, ...trabajos){
    console.log(`La persona: ${name} ha trabajado de: `);
    for(let t of trabajos){
        console.log(t);
    }
}

printTrabajos("Pepe", "Albañil", "Programador", "Buscador de tesoros");

/**
 * Apartado 3
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log('--------------- APARTADO 3 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos']
];
/*
let msgError = mensajes.filter(([producto, msg]) => msg.startsWith('ERROR'));
let map = new Map();
msgError.forEach(([producto, msg]) => {
    if(!map.has(producto)){
        map.set(producto, [msg]);
    } else{
        map.get(producto).push(msg);
    }
});

for(let [pro, mens] of map){
    console.log(`Producto: ${pro}. Mensajes: ${mens}`);
}
*/

// Solucion de Arturo

let msgMap = new Map();

mensajes
    .filter(([producto, msg]) => msg.startsWith('ERROR'))
    .forEach(([producto, msg]) => {
        if(!msgMap.has(producto)){
            msgMap.set(producto, [msg]);
        } else {
            msgMap.get(producto).push(msg);
        }
    });

    msgMap.forEach((mensajes, producto) => {
        console.log(` ${producto} -> ${mensajes}`);
    })


/**
 * Apartado 4
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 4 -----------------');






/**
 * Apartado 5
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');
