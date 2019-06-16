var slide_i = 1;
automatic_slideshow();

function automatic_slideshow(){
    showSlideN(slide_i);
    slide_i++;
    setTimeout(automatic_slideshow, 3000);
}

function changeToSlide(n) {
    showSlideN(slide_i = n);
}

function showSlideN(n) {
    var slides = document.getElementsByClassName("image_slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slide_i = 1
    }
    if (n < 1) {
        slide_i = slides.length
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_i-1].style.display = "block";
    dots[slide_i-1].className += " active";
}
