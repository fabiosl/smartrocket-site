jQuery(document).ready(function(){
  jQuery('body')
  .each(function(){
    jQuery('#spaceship-bottom', this)
    .parallax(
        { mouseport: jQuery(this) },
        { xparallax: '100px',    yparallax: '300px' }
    )
  });
});