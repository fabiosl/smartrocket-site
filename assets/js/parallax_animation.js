jQuery(document).ready(function(){
  jQuery('body')
  .each(function(){
    jQuery('.parallax', this)
    .parallax(
        { mouseport: jQuery(this) },
        { xparallax: '300px',    yparallax: '300px' }
    )
  });


  jQuery('body')
  .each(function(){
    jQuery('.parallax-light', this)
    .parallax(
        { mouseport: jQuery(this) },
        { xparallax: '200px', yparallax: '100px' }
    )
  });
});