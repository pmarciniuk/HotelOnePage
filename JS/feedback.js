const header = document.querySelector('.intro-container');
const feedBacks = document.querySelectorAll('.feedback-guest-single');
let currentSlide = 0;
let isSticky = false;

function onScroll() {
    
    if (isSticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    };
    
}



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



window.addEventListener('scroll', () => {
    isSticky = window.scrollY > 102 ? true : false;
});
window.addEventListener('scroll', onScroll);
document.addEventListener('DOMContentLoaded', changeFeedback);




