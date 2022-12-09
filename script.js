// this is for know kai more button
document.querySelector(".button").addEventListener("click", ()=> {
    document.querySelector(".table").classList.toggle("change");
});

// this is for like button
let img = document.querySelector(".likeImg");
let file = localStorage.getItem('value')
// img.setAttribute("src", file)

function changeImage(fileName) {
    let img = document.querySelector(".likeImg");
    localStorage.setItem('value', fileName);
    img.setAttribute("src", fileName);
    alert("Thank you for liking Kai's page! If you wishing to know more about him, please go to the 'ABOUT ME' section.")
}

// this is for galary
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// this is for experience button click
function showExperience1() {
  var x = document.querySelector("#experience1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showExperience2() {
  var x = document.querySelector("#experience2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showExperience3() {
  var x = document.querySelector("#experience3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}