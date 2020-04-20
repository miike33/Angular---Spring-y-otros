'use strict'

let parrafo = document.getElementById("nombre");

document.getElementById("boton").addEventListener("click", e => {
    let resp = prompt("¿Como te llamas?");
    parrafo.innerText = resp;
});