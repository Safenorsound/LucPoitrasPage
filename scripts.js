$(document).ready(function() {
  $('#nav').click(function(event) {
    var headerHeight = $('header').height();

    // event.preventDefault();

    $('html, body').animate(
      {
        scrollTop:
          $($.attr(this, 'href')).offset().top - $('header').height() + 5
      },
      500
    );
  });
});
