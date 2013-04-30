jQuery(document).ready(function(){
  jQuery('body')
  .each(function(){
    jQuery('.parallax', this)
    .parallax(
        { mouseport: jQuery(this) },
        { xparallax: '400px',    yparallax: '300 px' }
    )
  });

  


});