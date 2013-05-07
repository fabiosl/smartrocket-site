$(document).ready(function() {
  $('#simple-menu').sidr({
    side: 'right'
  });
});

$(window).touchwipe({
  wipeLeft: function() {
    // Close
    $.sidr('close');
  },
  wipeRight: function() {
    // Open
    $.sidr('open');
  },
  preventDefaultEvents: false
});

function closeMenu(){
  $.sidr('close');
}