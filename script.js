
$(document).ready(function(){
  $('.box').val("off");

});


var playAlert = setInterval(function(){
  if ( $('.item001').val() == "on" && $('.item002').val() == "on"){
    $('.answer').css({"opacity": "1"});
  }
  else {$('.answer').css({"opacity": "0"});}
}, 500);

$(function(){
  $('.box').click(function(){
    isPaused = false;
    if ($(this).val() == "off"){
    $(this).css({"opacity": "1"});
    $(this).val("on");
    $('.box').mouseleave(function(){
      $(this).css({"opacity": "1"});
    });
    }
    else{
      $(this).css({"opacity": "0"});
      $(this).val("off");
      $('.box').mouseleave(function(){
        $(this).css({"opacity": "0"});
      });
    }
  });
  return 0;
});


$(function(){
  $('.box').mouseover(function(){
    $(this).css({"opacity": "0.3"});

    if ($(this).val() == "off"){
      $('.box').mouseleave(function(){
        $(this).css({"opacity": "0"});
      });
  }

  else{
    $('.box').mouseleave(function(){
      $(this).css({"opacity": "1"});
  });
}

  });
});