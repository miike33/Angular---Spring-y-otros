function setResult(value) {
    document.getElementById('result').innerHTML = value;
}

function getResult() {
    return (document.getElementById('result').innerHTML);
}

function add(key) {
    var result = getResult();
    if (result != '0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

function power(){
    var result = eval(Math.pow(2, getResult()));
    setResult(result);
}


function raiz(){
    var result = eval(Math.sqrt(getResult()));
    setResult(result);
}

function calc() {
    var result = eval(getResult());
    setResult(result);
}


function del() {
    setResult(0);
}