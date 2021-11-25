let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function startSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = [...document.querySelectorAll('.slides')];
    const dots = [...document.querySelectorAll('.demo')];
    const captionText = document.querySelector('#caption');
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    slides.forEach(slide => { slide.style.display = 'none' });
    dots.forEach(dot => { dot.className = dot.className.replace(' active', '') });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
