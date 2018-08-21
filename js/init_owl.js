$(() => {
  $('.owl-carousel').owlCarousel({
    items: 6,
    dots: false,
    margin: 2,
    responsive: {
      0:{
          items: 2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
    }
  });
});
