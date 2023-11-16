$(document).ready(function () {
  // COOKIES
  $("#closebutton").on("click", function (event) {
    var cookies = $(".cookies");
    cookies.animate({ opacity: 0.05 }, function () {
      cookies.fadeOut();
    });
  });

  $("#closebutton2").on("click", function (event) {
    var cookies = $(".cookies");
    cookies.animate({ opacity: 0.05 }, function () {
      cookies.fadeOut();
    });
  });

  // MAS VENDIDOS CAMBIO DE COLOR
  // BOTON 1
  $("#silver1").on("click", function () {
    $("#vendidos1").attr("src", "media/img/Pulsera 2.png");
  });

  $("#gold1").on("click", function () {
    $("#vendidos1").attr("src", "media/img/Pulsera 1.png");
  });

  // BOTON 2
  $("#silver2").on("click", function () {
    $("#vendidos2").attr("src", "media/img/Pulsera 3.png");
  });

  $("#gold2").on("click", function () {
    $("#vendidos2").attr("src", "media/img/Pulsera 2.png");
  });

  // BOTON 3
  $("#silver3").on("click", function () {
    $("#vendidos3").attr("src", "media/img/Pulsera 4.png");
  });

  $("#gold3").on("click", function () {
    $("#vendidos3").attr("src", "media/img/Pulsera 3.png");
  });

  // BOTON 4
  $("#silver4").on("click", function () {
    $("#vendidos4").attr("src", "media/img/Pulsera 1.png");
  });

  $("#gold4").on("click", function () {
    $("#vendidos4").attr("src", "media/img/Pulsera 4.png");
  });

  // BOTON SCROLL TOP
  var mybutton = document.getElementById("button-top");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      (document.body.scrollTop > 20, document.documentElement.scrollTop > 20)
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  $("#button-top").click(function () {
    // var heightPage = $("header").height();
    // $(window).scrollTop(0 + heightPage);

    $(window).scrollTop(0);
  });

  // TOGGLE MENU
  function openMenu() {
    document.getElementById("visibility").style.visibility = "visible";
    document.getElementById("menu").style.height = "auto";
  }

  function closeMenu() {
    document.getElementById("menu").style.height = "4em";
    document.getElementById("visibility").style.visibility = "hidden";
  }

  $(".fa-bars").on("click", function () {
    if ($("#visibility").css("visibility") === "hidden") {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // HOVER DEL MENU
  $(".iconos-desplegables").mouseover(function () {
    $(this).css("color", "var(--color-gris-hover)");
  });
  $(".iconos-desplegables").mouseout(function () {
    $(this).css("color", "black");
  });
});
