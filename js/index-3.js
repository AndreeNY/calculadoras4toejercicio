// var valores = []; // arreglo (array) para valores

// valores = [23, 45, 34, 12, 34]; // definiendo valores, usar corchetes []

// valores.push(86); // agregando valores

// recorriendo por el arreglo
// la variable i representa el índice
/*
for(var i=0; i < valores.length; i++) {
	// escribir valor
	document.write(valores[i] + "<br>");
}
*/

// limpiando arreglo
// valores = [];


// uso de jquery
$(document).ready(function(){

	$("#agregar").click(lista);

	$("#limpiar").click();

	$("#sumatoria").click();

	$("#promedio").click();

	$("#mayor").click();

    var valores =[];

    function Agregar(){
        valores =["#valor1"].val();
        var etiqueta = $('<li>0</li>');
        valores.push(valores1);
        etiqueta.appendTo("ul")
        //$("#res").html();
    }


});