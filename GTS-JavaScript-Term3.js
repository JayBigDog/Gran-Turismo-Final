// Submits form (that would be available with database) for email submissions //

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

//Travrsy Media https://www.youtube.com/watch?v=4YQ4svkETS0//
//This codes pulls out my html slideshow tags, and then set variables to them// 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//This code makes my html buttons (arrow and circle) change slide depending on the desired selection.// 

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
}
