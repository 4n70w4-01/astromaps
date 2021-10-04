"use strict";

$('a[href^="#"]').click(function () {
  var e = $(this).attr("href"),
      e = $(e).offset().top - 60;
  return jQuery("html:not(:animated), body:not(:animated)").animate({
    scrollTop: e
  }, 800), !1;
});

$('.faq__item').on('click', function () {
  $(this).toggleClass('active');
  $(this).children('.faq__answer').slideToggle(300);
});
$(".program__inner").each(function () {
  var more = $(this).find(".show-more");
  var hide0 = $(this).find(".hide-content-0");
  var hide1 = $(this).find(".hide-content-1");
  var hide2 = $(this).find(".hide-content-2");
  var count = 0;
  hide0.hide();
  hide1.hide();
  hide2.hide();
  more.click(function () {
    if (count == 0) {
      hide0.slideToggle();
      count++;
    } else if (count == 1) {
      hide1.slideToggle();
      count++;
    } else if (count == 2) {
      hide2.slideToggle();
      count++;
      more.text(more.text() == "Скрыть" ? "Показать еще" : "Скрыть");
    } else {
      hide0.slideToggle();
      hide1.slideToggle();
      hide2.slideToggle();
      count = 0;
      more.text(more.text() == "Показать еще" ? "Скрыть" : "Показать еще");
    }
  });
});

$(document).ready(function () {
  var r,
      a = 900;

  function e() {
    a -= 1;
    var e = Math.floor(a / 60),
        t = a - 60 * e;
    0 == e && 0 == t && clearInterval(r), t = 10 <= t ? t : "0" + t, $(".minutes").html(10 <= e ? e : "0" + e), $(".seconds").html(t);
  }

  var time = 900;
  var intr;

  function start_timer() {
    intr = setInterval(tick, 1000);
  }

  function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;

    if (mins == 0 && secs == 0) {
      clearInterval(intr);
    }

    secs = secs >= 10 ? secs : "0" + secs;
    $(".minutes").html(mins >= 10 ? mins : "0" + mins);
    $(".seconds").html(secs);
  }

  start_timer();

});
