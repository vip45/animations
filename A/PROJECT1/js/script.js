$(document).ready(function () {
  //THIS IS SCRIPT FOR ACTIVE NAV LINK
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
  
});
