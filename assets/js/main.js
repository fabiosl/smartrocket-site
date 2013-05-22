$(document).ready(function() {
  
  $('#simple-menu').sidr({
    side: 'right'
  });

  $('body').click(function() {
   closeMenu()
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
    top0:0,
    x0:-300,
    top1:50,
    x1:-100
  });

  $(window).resize(function() {
    resize();
  });

  var myHeight;
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

$('#send-message').click(function(){    
  if(validateInput()){
   
    sendMail();

  }else {
    alert('Please fill all fields to send us message.');
  }
});

init();
resize();
});

function resize(){
  if($(window).width() > 960){
    $(".hideable").show();
    $(".showable").hide();
    $("#were-smartrocket-text").css("width","50%")
    $("#were-smartrocket-text").css("text-align","right")
    $("#smartrocket-description").css("float","")

  }
  else {
    $(".hideable").hide();
    $(".showable").show();
    $("#were-smartrocket-text").css("width","100%")
    $("#were-smartrocket-text").css("text-align","center")
    $("#smartrocket-description").css("float","right")
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
  $('html,body').animate({scrollTop: aTag.offset().top},1500, closeMenu());
}

var validateInput = function(){
  var isValid = true;
  $('input, textarea').each(function(){
    if($(this).hasClass('required'))
    {
      if($(this).val()!=''){
        if($(this).hasClass('email'))
        {
          var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          if(!emailReg.test($(this).val())){
            isValid = false;
            alert('Your email is not in valid format');
          }
        }
      }else
      {
        isValid = false;
      }
    }
  });
  return isValid;
};

var resetInput = function(){
  $('input, textarea').each(function() {
    $(this).val('').text('');
  });
};

var sendMail = function(){
  var params = {
    'action'    : 'SendMessage',
    'name'      : $('[name=contact_name]').val(),
    'email'     : $('[name=contact_email]').val(),
    'subject'   : 'New Website Message',
    'message'   : $('#message').val()
  };
  
  $.ajax({
    type: "POST",
    url: "php/mainHandler.php",
    data: params,
    success: function(response){
      if(response){
        var responseObj = jQuery.parseJSON(response);
        if(responseObj.ResponseData)
          alert('Your message was sent. Thank you!');
      }
      resetInput();
      $(".overlay").hide()
    },
    error: function (xhr, ajaxOptions, thrownError){
            //xhr.status : 404, 303, 501...
      var error = null;
      switch(xhr.status){
        case "301":
        error = "Redirection Error!";
        break;
        case "307":
        error = "Error, temporary server redirection!";
        break;
        case "400":
        error = "Bad request!";
        break;
        case "404":
        error = "Page not found!";
        break;
        case "500":
        error = "Server is currently unavailable!";
        break;
        default:
        error ="Unexpected error, please try again later.";
      }
      if(error){
        alert(error);
      }
      $(".overlay").hide()
    },
    beforeSend: function(xhr, settings){
      $(".overlay").show()
    }
  });
  
};