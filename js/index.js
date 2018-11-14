function salva() {
    alert("Animal Salvo")
}

function soma(par01 ,par02) {
    var resultado = 0;
    resultado = par01 + par02;
    return resultado;
}

function subtrai(par01, par02) {
    var resultado = 0;
    if ( par01 < par02 ){
        alert("O primeiro parâmetro tem que ser maior que o segundo!");
    }
    else{
        resultado = par01 - par02;
    }
    return resultado;
}

function multiplica(par01, par02){
    var resultado = 0;
    resultado = par01 * par02;
    return resultado;
}

function divide(par01, par02){
    var resultado = 0;
    if ( par02 == 0 ){
        alert("O segundo parâmetro tem que ser diferente de zero!");
    }
    else{
        resultado = par01 / par02;
    }
    return resultado;
}