/*

var fecha_hoy = new Date();

var mañana = fecha.setDate(hoy.getDate() + 1);

Math.floor() para redondear hacia arriba

*/


$(document).ready(function(){
    $("#calcular").click(calcular);
    setTimeout(cambiar, 5000);
    setInterval(segundos, 1000);


	//$("#calcular").click();
    //var d = new Date("2015-01-01T20:00:00-0500"); //-->Fecha ISO.
    //$("#res").html(d);

    //var d = new Date();
    //var dias = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];

    //$("#res").html(d.getday);
    //$("#res").html(dias[d.getDay()]);

    //que dia es mañana
    //var m = new Date();
    //m.setDate (d.getDate() +1);
    //$("#res").html(m.getDate());
    //$("#res").html(m.getDate()+ " será " + dias[m.getDay()]);

    function calcular(){

        var f = new Date($("#fecha").val()+"T00:00:00-0500");
        //f =$("#valor1").val();
        var d =$("#d").val();
        var m = $("#m").val();
        var a = $("#a").val();
        f.setDate(f.getDate() + parseInt(d));
        var mes1= f.setMonth(f.getMonth() + parseInt(m));
        var anio1= f.setFullYear(f.getFullYear() + parseInt(a));
        //var dia = f.getDay() + d;
        //var mes = f.getMonth() + m;
        //var anio = f.getYear()+ a;
        //$("#res").html("La fecha futura es" + f)
        $("#res").html("La fecha futura es " + f.getFullYear() + "-" + (f.getMonth()+1) + "-" + f.getDate())
        //$("#res").html("La fecha futura es  " + f);
    }

    function cambiar(){
        $("#res").html("Listo !!");
    }

    function segundos(){
        var d = new Date();
        $("#res").html(d.getSeconds());
    }
});

