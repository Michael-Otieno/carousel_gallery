

$('#slider-section .slider').slick({
  slideToShow:1,
  slideToScroll:1,
  infinite: true,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor:'.slider-nav',
  prevArrow:'<span class="prev_arrow"><i class="fa fa-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-right"></i></span>',
  adaptiveHeight:true,

})

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.slider',
  centerMode: false,
  dots: false,
  draggable: true,
  speed: 200,
  focusOnSelect: true,
  prevArrow:'<span class="prev_arrow"><i class="fa fa-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa fa-chevron-right"></i></span>',
  
  variableWidth:true,
});


//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //remove all active class
  $('.slider-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.slider-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');
});

$.fancybox.defaults.buttons = [ 
  'slideShow',
  'share',
  'thumbs',
  'zoom',
  'fullScreen',
  'close',
  
];

$('[data-fancybox="gallery"]').fancybox({
  baseClass: 'myFancyBox',
  thumbs: {
    autoStart: true,
    axis: 'x'
  }
})

