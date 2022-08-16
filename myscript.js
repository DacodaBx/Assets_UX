// WHAT HAS TO GET DONE

// Slide through pictures. Starting at 1. And show pictures starting at slide 1.

let slideIndex = 1;

// Show the Pictures
showPictures(slideIndex);

// HOW TO GET IT DONE
// Next/previous controls

function plusAssets(n) {
  showPictures(slideIndex += n);
}


// Show the Picture

function showPictures(n) {
  let i;
  let slides = document.getElementsByClassName("myAssets");
  let dots = document.getElementsByClassName("dotAsset");
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