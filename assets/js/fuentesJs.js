$(document).ready(function(){

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $(".iconos").click(function(){
        //alert("prueba");
        $('#tarjeta1').toggle();
        $('#tarjeta2').toggle();
        $('#tarjeta3').toggle();
        //$("p").toogle();
    })

    $("#tog").click(function () {	 
        $('#tarjeta').toggle();
        });

    $("button").click(function(){
        alert("Datos Enaviados...");
    });

});
