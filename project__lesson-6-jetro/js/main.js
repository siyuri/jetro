


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/previous.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.png" alt=""></button>'
  
  });

  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: false,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  });

