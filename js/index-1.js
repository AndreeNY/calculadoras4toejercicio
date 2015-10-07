// uso de jquery
$(document).ready(function(){

    $("#suma").click(suma);
    $("#resta").click(resta);
    $("#multiplicacion").click(multiplicacion);
    $("#division").click(division);
    $("#potencia").click(potencia);

});

function suma() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var suma = parseFloat(x) + parseFloat(y); //parseInt
    $("#res").html(suma);
}

function resta() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var suma = parseFloat(x) - parseFloat(y);
    $("#res").html(suma);
}
function multiplicacion(){
    var x=$("#valor1").val();
    var y=$("#valor2").val();
    var multiplicacion=parseFloat(x) * parseFloat(y);
    $("#res").html(multiplicacion);
}

function division(){
    var x=$("#valor1").val();
    var y=$("#valor2").val();
    var division=parseFloat(x) / parseFloat(y);
    $("#res").html(division);
}

function potencia(){
    var x=$("#valor1").val();
    var y=$("#valor2").val();
    var potencia=Math.pow(x,y);
    $("#res").html(potencia);
}