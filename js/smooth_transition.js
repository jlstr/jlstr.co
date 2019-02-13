$(() => {
  $('.scroll-to').click((e) => {
    e.preventDefault();
    var target = $(e.target);

    $('html, body').animate({
      scrollTop: $(target.attr('href')).offset().top
    }, 500, 'linear');
  });
});