var currentSlide = 0;


function changeFeedback() {
    
    feedbackSingle[currentSlide].classList.remove('hidden');
    
    if (currentSlide == 0) {
        feedbackSingle[feedbackSingle.length - 1].classList.add('hidden');
    } else {
        feedbackSingle[currentSlide-1].classList.add('hidden');
    }
    if (currentSlide == feedbackSingle.length - 1) {
            currentSlide = 0;
    } else {
            currentSlide++;
    }
    setTimeout(changeFeedback, 2500);
}


document.addEventListener('DOMContentLoaded', changeFeedback);

