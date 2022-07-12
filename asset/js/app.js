AOS.init();
const imageSwiper = new Swiper('.image-slider', {
  mousewheel: true,
  speed: 1000,
  loop: true, // Not recommended to enable!!!
  longSwipesRatio: 0.01,
  followFinger: false,
  grabCursor: true, 
  watchSlidesProgress: true,
  parallax: true,
  lazy: {
        loadPrevNext: true,
  },
  autoplay: {
      delay: 6000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});