// jQuery Прокрутка
$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var t = 1000;
    var d = $(this).attr('href');
    $('html,body').stop().animate({
      scrollTop: $(d).offset().top
    }, t);
  });
});

