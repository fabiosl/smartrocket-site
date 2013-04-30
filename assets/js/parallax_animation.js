jQuery(document).ready(function(){
  jQuery('#first-triangle')
  .each(function(){
    jQuery('img', this)
    .parallax(
        { mouseport: jQuery(this) },
        { xparallax: '600px',    yparallax: '800px' }
    )
  });    
});