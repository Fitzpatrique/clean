/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
};

var images = new Array(
	"img/pexels-pixabay-48889.jpg",
	"img/laura-davidson-QBAH4IldaZY-unsplash.jpg",
	"img/leon-seibert-Whgt84a2fSQ-unsplash.jpg",
	"img/Chrysanthemum.jpg",
	"img/Desert.jpg",
	"img/Jellyfish.jpg",
	);

var num = 0;

function currentSlide(n){
	var slider = document.getElementById("slider");
	slider.src = images[n];
}

function loops(){
	var slider = document.getElementById("slider");
	setInterval(next, 1000000);
	slider.src = images[num];
}

function next(){
	var slider = document.getElementById("slider");
	num = num + 1;
	if(num >= images.length){
		num = 0;
	};
	slider.src = images[num];
	setInterval(next, 1000000);
}

function prev(){
	var slider = document.getElementById("slider");
	num = num - 1;
	if(num < 0){
		num = images.length - 1;
	};
	slider.src = images[num];
}