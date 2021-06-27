const menu = {
	floatingMenu: document.querySelector(".gd-floating-menu"),
	blackOut: document.querySelector(".gd-blackout"),
	open: () => {
		menu.floatingMenu.style.width = "295px";
		menu.blackOut.style.display = "flex";
	},
	close: () => {
		menu.floatingMenu.style.width = 0;
		menu.blackOut.style.display = "none";
	},
};

const fiqueLigado = {
	fiqueLigadoMenu: document.querySelector(".gd-fique-atualizado-container"),
	open: () => {
		fiqueLigado.fiqueLigadoMenu.style.width = "240px";
	},
	close: () => {
		fiqueLigado.fiqueLigadoMenu.style.width = 0;
	},
};

// Carrosel (Últimas Análises) para página de Research
const swiperCarrousel = new Swiper(".swiper-container", {
	slidesPerView: "auto",
	spaceBetween: 15,
	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});

(async () => {
	// Inicio do Marquee para página de Research
	nodeMarquee({
		selector: ".gd-stock-marquee-container",
		speed: 1,
		pauseOnHover: true,
	});

	swiperCarrousel();
})();
