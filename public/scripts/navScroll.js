window.addEventListener('scroll',() => {
	if (window.scrollY > 290) {
		document.querySelector("header#Nav").classList.add("Scrolled")
	} else {
		document.querySelector("header#Nav").classList.remove("Scrolled")
	}
});
