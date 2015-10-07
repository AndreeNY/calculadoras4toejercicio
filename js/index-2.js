// uso de jquery
$(document).ready(function(){

    $("#ConvertirCF").click(convertircf);
	$("#ConvertirFC").click(convertirfc);

    function convertircf(){
        var Centígrados=$("#valor1").val();
        var convertircf=1.8 * Centígrados+32;
        $("#res").html(convertircf);
    }

    function convertirfc(){
        var Fahrenhit=$("#valor1").val();
        var convertirfc=Fahrenhit-32/1.8
        $("#res").html(convertirfc);
    }
});