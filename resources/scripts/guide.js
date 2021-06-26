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
		fiqueLigado.fiqueLigadoMenu.style.width = "190px";
	},
	close: () => {
		fiqueLigado.fiqueLigadoMenu.style.width = 0;
	},
};

(async () => {
	// nodeMarquee({
	//   selector: "#marquee",
	//   speed: 1,
	//   pauseOnHover: true,
	// });
})();
