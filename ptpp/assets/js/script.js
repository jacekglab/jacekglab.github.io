$( document ).ready(function() {
   //sidebar-menu
   $(".menu").css("visibility", "hidden");
   $("#nav-menu").click(function() {
     $(".menu").css("visibility", "visible");
     $("#nav-menu").css("visibility", "hidden");
     $("#nav-menu-off").css("visibility", "visible");
   });
   $("#nav-menu-off").click(function() {
     $(".menu").css("visibility", "hidden");
     $("#nav-menu").css("visibility", "visible");
     $("#nav-menu-off").css("visibility", "hidden");
   });
});




/*$(document).ready(function() {

  var $toggleButton = $('#nav-menu');

  // Hamburger button
  $toggleButton.on('click', function() {
    $("menu").css("visibility", "visible");
  });
});*/