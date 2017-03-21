$(document).ready(function() {
// smooth scrolling of viewport to target
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 900);
  });

  $('#down').click(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 900);
  });
  
  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

});

