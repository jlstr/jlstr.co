$(() => {
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    autoHeight: true,
    autoWidth: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 3
      },
      600: {
        items: 4
      },
      960: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });

  owl.on('mousewheel', '.owl-stage', function (e) {
    // if (e.deltaY > 0) {
    //   owl.trigger('next.owl');
    // } else {
    //   owl.trigger('prev.owl');
    // }

    e.preventDefault();
  });

  $('.next').on('click', () => {    
    owl.trigger('next.owl');
  });

  $('.prev').on('click', () => {
    owl.trigger('prev.owl');
  });

  $('body').css('overflow-x', 'hidden');
});