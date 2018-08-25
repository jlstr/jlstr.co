$(() => {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      960: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  });

  $('.next').on('click', () => {
    owl.trigger('next.owl');
  });

  $('.prev').on('click', () => {
    owl.trigger('prev.owl');
  });
});