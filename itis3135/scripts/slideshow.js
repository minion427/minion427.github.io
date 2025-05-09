let slideIndex = 1;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
  
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
  
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
  
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
  
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    // Add active class to the current dot
    dots[slideIndex - 1].classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);  // Show the first slide when the page loads
});

function plusSlides(n) {
  showSlides(slideIndex += n);  // Increment slide index for next/prev buttons
}

function currentSlide(n) {
  showSlides(slideIndex = n);  // Directly go to clicked slide
}
