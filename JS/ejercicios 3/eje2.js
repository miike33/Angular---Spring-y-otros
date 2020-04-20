'use strict'

function operar(tipo) {
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    let total;
    switch (tipo) {
        case 'suma':
            total = (+num1 + +num2);
            break;
        case 'resta':
            total = (+num1 - +num2);
            break;
        case 'producto':
            total = (+num1 * +num2);
            break;
        case 'division':
            total = (+num1 / +num2);
            break;
    }

    document.getElementById("resultado").value = total;
}
