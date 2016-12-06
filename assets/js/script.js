$( document ).ready(function() {
  $("#q").hover(function(){
    $("#textq").removeClass('hidden');
    }, function(){
      $("#textq").addClass('hidden');
  });
  $("#w").hover(function(){
    $("#textw").removeClass('hidden');
    }, function(){
      $("#textw").addClass('hidden');
  });
  $("#e").hover(function(){
    $("#texte").removeClass('hidden');
    }, function(){
      $("#texte").addClass('hidden');
  });
  $("#r").hover(function(){
    $("#textr").removeClass('hidden');
    }, function(){
      $("#textr").addClass('hidden');
  });
  $("#t").hover(function(){
    $("#textt").removeClass('hidden');
    }, function(){
      $("#textt").addClass('hidden');
  });
  $("#y").hover(function(){
    $("#texty").removeClass('hidden');
    }, function(){
      $("#texty").addClass('hidden');
  });
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(window).scroll(function() {
    $("#description h2").css({
    'opacity' : 1-(($(this).scrollTop())/250)
    });     
  });
  $(window).scroll(function() {
    $("#description a").css({
    'opacity' : 1-(($(this).scrollTop())/400)
    });     
  });
  $(window).scroll(function() {
    $("#logo").css({
    'opacity' : 1-(($(this).scrollTop())/600)
    });     
  });
});

  