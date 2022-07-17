$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: $('.decisions__next-slide'),
  prevArrow: $('.decisions__prev-slide'),
  responsive: [
    {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1
      }
  }
  ]
});
