document.getElementById('prev').addEventListener('click', function () {
    nextSlide(-1)
});

document.getElementById('next').addEventListener('click', function () {
    nextSlide(1)
});

var slideIndex = 1;

function showSlides(index) {
    var slides = document.getElementsByClassName('slides');
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
};
showSlides(slideIndex);

function nextSlide(num) {
    slideIndex += num;
    showSlides(slideIndex);
}