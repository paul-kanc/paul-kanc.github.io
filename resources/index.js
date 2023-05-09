// Add Nav Bar
fetch('components/navBar.html').then(response => response.text()).then(data => {
	document.getElementById('nav').innerHTML = data;
});

// Hamburger Navigation
const nav = document.getElementById("nav");
const menuItems = document.querySelectorAll(".menu-link");
const button = document.getElementById("button");
const ham = document.getElementById("ham");
const hamBtn = document.getElementById("ham-btn");

menuItems.forEach(menuItem => {
	menuItem.addEventListener("click", toggleHamburger);
});

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
	button.classList.toggle("transform");
	nav.classList.toggle("show-nav");
	hamBtn.classList.toggle("open");
}

// Image Carousel
let slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let slideId = ["img-div1", "img-div2", "img-div3", "img-div4", "img-div5", "img-div6", "img-div7", "img-div8", "img-div9", "img-div10"]

for (let i = 0; i < 10; i++) {
	showSlides(1, i);
}

function plusSlides(n, no) {
	showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
	let i;
	let x = document.getElementsByClassName(slideId[no]);

	if (n > x.length) {
		slideIndex[no] = 1
	}

	if (n < 1) {
		slideIndex[no] = x.length
	}

	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[slideIndex[no] - 1].style.display = "block";
}