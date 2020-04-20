
function suma(...nums){
    return nums.reduce((total, num) => total + num, 0);
}

let resultado = suma(23, 24, 53, 6);
console.log(resultado);