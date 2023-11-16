$(document).ready(function () {
  // cambiarimagen de perfiles
  $("#perfilmacarena").hover(
    function () {
      $("#imginicial").attr("src", "media/img/businessmen 3.jpg");
    },
    function () {
      $("#imginicial").attr("src", "media/img/imginicial.jpg");
    }
  );

  $("#perfilsandra").hover(
    function () {
      $("#imginicial").attr("src", "media/img/businessmen 2.jpg");
    },
    function () {
      $("#imginicial").attr("src", "media/img/imginicial.jpg");
    }
  );

  $("#perfilpablo").hover(
    function () {
      $("#imginicial").attr("src", "media/img/businessmen 1.jpg");
    },
    function () {
      $("#imginicial").attr("src", "media/img/imginicial.jpg");
    }
  );

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
