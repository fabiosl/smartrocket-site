$(document).ready(function() {
  $('#simple-menu').sidr({
    side: 'right'
  });


  $(window).resize(function() {
    resize()
    // $('body').prepend('<div>' + $(window).width() + '</div>');
  });

  resize();
});

function resize(){
  if($(window).width() > 760){
      $(".hideable").show();
      $(".showable").hide();
      $("#were-smartrocket-text").css("width","50%")
      $("#were-smartrocket-text").css("text-align","right")
    }
    else {
      $(".hideable").hide();
      $(".showable").show();

      $("#were-smartrocket-text").css("width","100%")
      
      $("#were-smartrocket-text").css("text-align","center")

    }
}

$(window).touchwipe({
  wipeLeft: function() {
    $.sidr('open');
  },
  wipeRight: function() {
    $.sidr('close');
    
  },
  preventDefaultEvents: false
});

function closeMenu(){
  $.sidr('close');
}

function animateToAnchor(anchor){
  var aTag = $(anchor);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow', closeMenu());
}