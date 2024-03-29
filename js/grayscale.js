(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
 
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      // $("#mainNav").addClass("navbar-shrink");
      // $(".dropdown-content").addClass("navbar-shrink");
      $("#app").addClass("dn");
    } else {
      // $("#mainNav").removeClass("navbar-shrink");
      // $(".dropdown-content").removeClass("navbar-shrink");
      $("#app").removeClass("dn");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  window.sr = ScrollReveal();
  sr.reveal('.project-one-row', 
  {  
      duration: 1000,
  }); 
  sr.reveal('.project-two-row', 
  {  
      duration: 1000,
  }); 
  sr.reveal('.cells-main', {
      duration: 1500,
      
  })
  $('#front').click(function(){
    $('#front').toggleClass("toback");
    $('#back').toggleClass("tofront");
});
$('#back').click(function(){
  $('#front').toggleClass("toback");
  $('#back').toggleClass("tofront");
});
})(jQuery); // End of use strict
