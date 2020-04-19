$(function(){
$('.slider').slick({
nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="prev"></button>',
prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev"></button>',
fade: true,
responsive: [
    {
      breakpoint: 441,
      settings: {
        arrows: false
      }
    }
    ]
  });
});





