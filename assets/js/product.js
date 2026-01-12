var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 2.2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  mousewheelControl: true,
  observeParents: true,
  breakpoints: {
    1024: {
      slidesPerView: 2.7,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },
    560: {
      slidesPerView: 3.2
    }
  }
});

$(".swiper-slide img").click(function() {
  var $src = $(this).attr("src");
  $(".popup").fadeIn().css("position", "fixed");
  $(".popup-box img").attr("src", $src);
  $("body").css("overflow-y", "hidden");
});

$(".close-btn, .overlay").click(function() {
  $(".popup").fadeOut();
  $("body").css("overflow-y", "scroll");
});
