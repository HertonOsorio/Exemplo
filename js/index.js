function salva() {
    alert("Animal Salvo")
}

function soma() {
    var resultado = 0;
    var par01 = document.getElementById("_Par01").value;
    var par02 = document.getElementById("_Par02").value;
    resultado = parseInt(par01) + parseInt(par02);
    document.getElementById("_Par03").innerHTML = resultado;
}

function subtrai() {
    var resultado = 0;
    var par01 = document.getElementById("_Par01").value;
    var par02 = document.getElementById("_Par02").value;
/*    if ( par01 < par02 ){
        alert("O primeiro parâmetro tem que ser maior que o segundo!");
    }
    else{*/
        resultado = parseInt(par01) - parseInt(par02);
    /*}*/
    document.getElementById("_Par03").innerHTML = resultado;
}

function multiplica() {
    var resultado = 0;
    var par01 = document.getElementById("_Par01").value;
    var par02 = document.getElementById("_Par02").value;
    resultado = parseInt(par01) * parseInt(par02);
    document.getElementById("_Par03").innerHTML = resultado;
}

function divide(par01, par02){
    var resultado = 0;
    var par01 = document.getElementById("_Par01").value;
    var par02 = document.getElementById("_Par02").value;
    try {
        if ( par02 == 0 ) throw "zero"
            else {
            resultado = parseInt(par01) / parseInt(par02);
            document.getElementById("_Par03").innerHTML = resultado;
        };
    }
    catch(err){
        alert("Divisão por zero");
    }
/*    if ( par02 == 0 ){
        alert("O segundo parâmetro tem que ser diferente de zero!");
    }
    else{
        resultado = parseInt(par01) / parseInt(par02);
    }
    resultado = parseInt(par01) / parseInt(par02);
    document.getElementById("_Par03").innerHTML = resultado;*/
}