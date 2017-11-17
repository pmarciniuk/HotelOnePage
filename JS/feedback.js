const feedBacks = document.querySelectorAll('.feedback-guest-single');
let currentSlide = 0;


function changeFeedback() {
    
    feedBacks[currentSlide].classList.add('active');
    
    if (currentSlide === 0) {
        feedBacks[feedBacks.length - 1].classList.remove('active');
    } else {
        feedBacks[currentSlide-1].classList.remove('active');
    }
    if (currentSlide === feedBacks.length - 1) {
            currentSlide = 0;
    } else {
            currentSlide++;
    }
    setTimeout(changeFeedback, 3500);
}




document.addEventListener('DOMContentLoaded', changeFeedback);




