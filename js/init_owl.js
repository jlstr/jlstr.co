$(() => {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    autoHeight: true,
    autoWidth: true,
    // autoplay: true,
    // autoplayHoverPause: true,
    // autoplayTimeout: 4000,
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