function toggleDescription(card) {
  const desc = card.querySelector('.service-description');
  desc.classList.toggle('hidden');
}
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // هر 3 ثانیه اسلاید عوض می‌شود
}

window.onload = showSlides;
