// Пока просто заглушка для формы, чтобы показать, что JS работает
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! (Это заглушка, но я могу сделать рабочую форму.)');
});
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

// Заглушка для формы
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! (Это заглушка, но я могу сделать рабочую форму.)');
});