
$(document).ready(function () {


  // cambiarimagen de perfiles
    $("#perfilmacarena").hover(function (){
        $("#imginicial").attr("src", "media/img/businessmen 3.jpg");
    }, function(){
        $("#imginicial").attr("src", "media/img/imginicial.jpg");
    });


    $("#perfilsandra").hover(function(){
        $("#imginicial").attr("src", "media/img/businessmen 2.jpg");
    }, function(){
        $("#imginicial").attr("src", "media/img/imginicial.jpg");
    });

    $("#perfilpablo").hover(function(){
        $("#imginicial").attr("src", "media/img/businessmen 1.jpg");
    }, function(){
        $("#imginicial").attr("src", "media/img/imginicial.jpg");
    });

})
