window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

//   let slideInterval;

//   function startSlideInterval() {
//       slideInterval = setInterval(function () {
//           plusSlides(1);
//       }, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)
//   }
  
//   function stopSlideInterval() {
//       clearInterval(slideInterval);
//   }
  
//   function plusSlides(n) {
//       showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//       showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//       let i;
//       let slides = document.getElementsByClassName("mySlides");
//       let dots = document.getElementsByClassName("dot");
//       if (n > slides.length) { slideIndex = 1 }
//       if (n < 1) { slideIndex = slides.length }
//       for (i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";
//       }
//       for (i = 0; i < dots.length; i++) {
//           dots[i].className = dots[i].className.replace(" active", "");
//       }
//       slides[slideIndex - 1].style.display = "block";
//       dots[slideIndex - 1].className += " active";
//   }
  
//   // Start autoplay when the page loads
//   window.onload = startSlideInterval;
  
//   // Pause autoplay when the user interacts with the slideshow
//   document.querySelectorAll('.prev, .next, .dot').forEach(function (element) {
//       element.addEventListener('click', stopSlideInterval);
//   });

let slideIndex = 1;
showSlides(slideIndex);

// Auto play slideshow
let slideInterval;

function startSlideInterval() {
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Start autoplay when the page loads
window.onload = startSlideInterval;

// Pause autoplay when the user interacts with the slideshow
document.querySelectorAll('.prev, .next, .dot').forEach(function (element) {
    element.addEventListener('click', stopSlideInterval);
});

  