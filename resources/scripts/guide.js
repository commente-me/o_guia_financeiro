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

(async () => {
	// nodeMarquee({
	//   selector: "#marquee",
	//   speed: 1,
	//   pauseOnHover: true,
	// });
})();
