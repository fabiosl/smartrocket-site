$(document).ready(function() {
  var myHeight;
  $('#simple-menu').sidr({
    side: 'right'
  });

  var scrollPosition = parseInt($(window).scrollTop());

  var element = $("#small-first-triangle");
  element.data('params', {
    top0:250,
    x0:100,
    top1:450,
    x1:300
  });

  var element = $("#small-second-triangle");
  element.data('params', {
    top0:100,
    x0:-1100,
    top1:-250,
    x1:-800
  });

  $(window).resize(function() {
    resize()
    // $('body').prepend('<div>' + $(window).width() + '</div>');
  });

  function init() {
      myHeight = $(window).height();
  }

  var sdegree = 30;

  $(window).scroll(function() {
    sdegree ++ ;
    sdegree = sdegree + 5 ;
    if(sdegree >= 360) {
      sdegree = 360 - sdegree;
    }
    var srotate = "rotate(" + sdegree + "deg)";

    $(".small-triangle").css({"transform":srotate, "-moz-transform" : srotate, "-webkit-transform" : srotate});
    

    function move(p0, p1, s) {
      s_max = myHeight / 2 + 450;
      return Math.min((-p0 + p1) / s_max * s + p0, p1);
    }

    function move1(p0, p1, s) {
      s_max = myHeight / 2 + 450;
      return Math.max((-p0 + p1) / s_max * s + p0, p1);
    }
    
    var scrollTop = parseInt($(window).scrollTop());

    var myX = move($("#small-first-triangle").data('params').x0, parseInt($("#small-first-triangle").data('params').x1), scrollTop);
    var myY = move($("#small-first-triangle").data('params').top0, parseInt($("#small-first-triangle").data('params').top1), scrollTop);

    $("#small-first-triangle").stop().css({
      "right": myX + 'px',
      "top": myY + 'px'
    });

    var myX = move($("#small-second-triangle").data('params').x0, parseInt($("#small-second-triangle").data('params').x1), scrollTop);
    var myY = move1($("#small-second-triangle").data('params').top0, parseInt($("#small-second-triangle").data('params').top1), scrollTop);

    $("#small-second-triangle").stop().css({
      "right": myX + 'px',
      "top": myY + 'px'
    });

  });

  init();
  resize();
});

function resize(){
  if($(window).width() > 1060){
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