(async () => {
  // nodeMarquee({
  //   selector: "#marquee",
  //   speed: 1,
  //   pauseOnHover: true,
  // });

  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    spaceBetween: 15,
    grabCursor: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1220: {
        slidesPerView: 4,
      },
    },
  });
})();
