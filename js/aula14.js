function trataImg(){
    var imgarray = new Array("minions01","minions02","minions03","minions04","minions05");

    for (var imgCtrlAr in imgarray){
        var numero = parseInt(imgCtrlAr)+parseInt(1);
        var srcImg = "_img"+numero;
        document.getElementById(srcImg).src = "../images/"+imgarray[imgCtrlAr]+".jpg";
        document.getElementById(srcImg).style.width = "100px";
        document.getElementById(srcImg).style.height = "100px";
    }
}

function altImg(){
    var el = document.getElementById("_img");
    var meuid = ""; /* = document.getElementById("");*/

    el.addEventListener('click', function(e) {
        meuid = e.target.id;

        document.getElementById(meuid).src = "../images/moana01.jpg";
        document.getElementById(meuid).style.width = "100px";
        document.getElementById(meuid).style.height = "100px";
    });
}

function mostrar(){
    var evento = (event.which?event.which:mousedown.event);
    var txtcampo = "O Cássio é um amado mestre!! !)";
    var ok = "N";

    if ( evento.value = 1 ) {
        ok = "S";

    }
    if ( ok == "S"){
        document.getElementById("_campo").innerHTML = txtcampo;
    }
}

function myTime(){
    var myVar = setInterval(function() { myTimer() }, 1000);
}

function myTimer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction(){
    clearInterval();
}