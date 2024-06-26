(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on("click", function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });
})(jQuery);

document.getElementById(
  "navbar-container"
).innerHTML = `<div class='container'><div class='row'><div class='col-12'><nav class='navbar navbar-expand-md navbar-light'><a class='navbar-brand' href='./index.html' target='_blank'><img src='./logo.png' alt='' /></a><button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarSupportedContent' style='justify-content: end'><ul class='navbar-nav ml-auto py-4 py-md-0' style='gap: 1.5rem !important'><li class='nav-item pl-4 pl-md-0 ml-0 ml-md-4 active'><a class='nav-link' href='./index.html' target='self'>Home</a></li><li class='nav-item pl-4 pl-md-0 ml-0 ml-md-4'><a class='nav-link' href='#'>Portfolio</a></li><li class='nav-item pl-4 pl-md-0 ml-0 ml-md-4'><a class='nav-link' href='#'>Service</a></li><li class='nav-item pl-4 pl-md-0 ml-0 ml-md-4'><a class='nav-link dropdown-toggle' data-toggle='dropdown' href='#' role='button' aria-haspopup='true' aria-expanded='false'>Project</a><div class='dropdown-menu'><a class='dropdown-item' href='./project1.html'>Project 1</a><a class='dropdown-item' href='./project2.html'>Project 2</a><a class='dropdown-item' href='#'>Project 3</a><a class='dropdown-item' href='#'>Project 4</a></div></li><li class='nav-item pl-4 pl-md-0 ml-0 ml-md-4'><a class='nav-link' href='./contact.html'>Contact</a></li></ul></div></nav></div></div></div>`;
