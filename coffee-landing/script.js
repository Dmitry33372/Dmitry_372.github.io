const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slide.length;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slide.length) % slide.length;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});
