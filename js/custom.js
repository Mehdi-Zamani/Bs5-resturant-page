$(document).ready(function () {
  //slider header
  $(".rslides").responsiveSlides({
    speed: 700,
  });

  //===customer slider=============
  $("#owl-demo").owlCarousel({
    autoPlay: true,
  });
  //=== fixed header ===============
  var win = $(window),
    nav = $(".navbar-expand-md"),
    pos = nav.offset().top,
    sticky = () => {
      win.scrollTop() > pos
        ? nav.addClass("sticky")
        : nav.removeClass("sticky");
    };
  win.scroll(sticky);
});
