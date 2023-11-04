


$(document).ready(function () {
// MENU 
  // SCROLL TOP 
  var mybutton = document.getElementById("button-top");

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 , document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  $("#button-top").click(function (){
    
    var heightPage = $("header").height();
    $(window).scrollTop(0 + heightPage);
  });








  function myFunction(x) {
    if (x.matches) { // If media query matches
      var swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 15,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      var swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }



  var x = window.matchMedia("(max-width: 900px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

})