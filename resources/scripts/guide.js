(async () => {
  // nodeMarquee({
  //   selector: "#marquee",
  //   speed: 1,
  //   pauseOnHover: true,
  // });

  const swiper_you_watching = new Swiper(".gd-you-watching-episode-container", {
    slidesPerView: "auto",
    spaceBetween: 15,
    grabCursor: true,
    freeMode: true,
    pagination: {
      el: ".gd-you-watching-episode-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gd-you-watching-episode-button-next",
      prevEl: ".gd-you-watching-episode-button-prev",
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
