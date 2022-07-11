var $Speed = 1000;

var imageSwiper = new Swiper('.image-slider', {
  mousewheel: true,
  speed: $Speed,
  loop: true, // Not recommended to enable!!!
  longSwipesRatio: 0.01,
  followFinger: false,
  grabCursor: true, 
  watchSlidesProgress: true,
  parallax: true,
  lazy: {
		loadPrevNext: true,
	},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
