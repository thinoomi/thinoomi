//기존에 격자들 상태 off로 해놓은거임
$(document).ready(function () {
  $('.box').val("off");
});

//바깥 클릭했을때 용암 연출한거임
function hotani() {

  $('.Q').animate({ opacity: '0.5' })
    .delay(1500)
    .animate({ opacity: '1' });

  $('.red').animate({ opacity: '0.3' })
    .delay(1500)
    .animate({ opacity: '0' });

  $('.goback').animate({ opacity: '1' })
    .delay(1500)
    .animate({ opacity: '0' });
}

//정답 처리 하려고 변수 지정한거임 처음엔 0
var totalvalue = 0;
//토탈밸류가 일정 수일때 정답 처리가 되게 할거임
var playAlert = setInterval(function () {
  if (totalvalue == 23) {
    $('.answer').animate({ opacity: '1' });
  }
  else {
    $('.answer').animate({ opacity: '0' })
  }
}, 500);

//정답 연산부분. 클릭시 진행되는함수인거임.
$(function () {
  $('.box').click(function () {
    isPaused = false;
    if ($(this).val() == "off") {
      $(this).css({ "opacity": "1" });
      $(this).val("on");
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "1" });
      });

      if ($(this).attr('type') == "b") {
        totalvalue += 1;
      }
      else {
        totalvalue -= 1000;
      }

    }


    else {
      $(this).css({ "opacity": "0" });
      $(this).val("off");
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "0" });
      });

      if ($(this).attr('type') == "b") {
        totalvalue -= 1;
      }
      else {
        totalvalue += 1000;
      }

    }
  });
  return 0;
});

//여기는 마우스 올렸을때 실루엣 보이는 효과임 끗 아 쉽다~
$(function () {
  $('.box').mouseover(function () {
    $(this).css({ "opacity": "0.3" });

    if ($(this).val() == "off") {
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "0" });
      });
    }

    else {
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "1" });
      });
    }

  });
});