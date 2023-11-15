// NO SE QUE ES ESTO, BORRAR

// const submitButton = document.getElementById("submitButton");

// submitButton.addEventListener("click", function() {
//   const checkbox = document.getElementById("termsCheckbox");
//   const emailInput = document.getElementById("emailInput").value;

//   if (!checkbox.checked) {
//     alert("Parece que nos falto algo..");
//   } else if (emailInput === "") {
//     alert("Parece que nos falto algo..");
//   } else {
//     alert("Felicidades, pronto escucharás de nosotros");
//   }
// });










$(document).ready(function () {

$("#closebutton").on("click", function(event) {
  var cookies = $(".cookies");
  cookies.animate({ opacity: 0.05}, function() {
      cookies.fadeOut();
  });
});

$("#closebutton2").on("click", function(event) {
  var cookies = $(".cookies");
  cookies.animate({ opacity: 0.05}, function() {
      cookies.fadeOut();
  });
});



const countries = document.querySelector(".countries"),
  sports = document.querySelector(".sports"),
  countriesSlider = document.querySelector(".main__slider--countries"),
  sportsSlider = document.querySelector(".main__slider--sports"),
  main = document.querySelector(".main");

countries.addEventListener("click", function() {
  countriesSlider.style.visibility = "visible";
  sportsSlider.style.visibility = "hidden";
  main.classList.remove("main--sports");
  this.classList.add("active");
  sports.classList.remove("active");
});

sports.addEventListener("click", function() {
  countriesSlider.style.visibility = "hidden";
  sportsSlider.style.visibility = "visible";
  main.classList.add("main--sports");
  this.classList.add("active");
  countries.classList.remove("active");
});

$(".main__slider").slick({
  centerMode: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  initialSlide: 2,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        fade: true
      }
    }
  ]
});




// // MENU 
//   // SCROLL TOP 
//   var mybutton = document.getElementById("button-top");

//   window.onscroll = function() {scrollFunction()};
  
//   function scrollFunction() {
//     if (document.body.scrollTop > 20 , document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }

//   $("#button-top").click(function (){
    
//     var heightPage = $("header").height();
//     $(window).scrollTop(0 + heightPage);
//   });





  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     var swiper = new Swiper('.swiper', {
  //       // Optional parameters
  //       loop: true,
  //       slidesPerView: 3,
  //       spaceBetween: 15,
      
  //       // Navigation arrows
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },
  //     });
  //   } else {
  //     var swiper = new Swiper('.swiper', {
  //       // Optional parameters
  //       loop: true,
  //       slidesPerView: 5,
  //       spaceBetween: 30,
      
  //       // Navigation arrows
  //       navigation: {
  //         nextEl: '.swiper-button-next',
  //         prevEl: '.swiper-button-prev',
  //       },
  //     });
  //   }
  // }



  // var x = window.matchMedia("(max-width: 900px)")
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction) // Attach listener function on state changes

})


