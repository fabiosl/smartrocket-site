$(document).ready(function() {
  $('#simple-menu').sidr({
    side: 'right'
  });
});

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