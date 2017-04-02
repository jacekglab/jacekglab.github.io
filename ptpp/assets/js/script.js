$( document ).ready(function() {
   //sidebar-menu
   $(".menu").css("visibility", "hidden");
   $("#nav-menu").click(function() {
     $(".menu").css("visibility", "visible");
     $("#nav-menu").css("visibility", "hidden");
     $("#nav-menu-off").css("visibility", "visible");
     $("body").css("overflow", "hidden")
   });
   $("#nav-menu-off").click(function() {
     $(".menu").css("visibility", "hidden");
     $("#nav-menu").css("visibility", "visible");
     $("#nav-menu-off").css("visibility", "hidden");
     $("body").css("overflow", "scroll")
   });
});
