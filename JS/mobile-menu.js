const hamburger = document.querySelector('#iconToggle');
const mobileMenu = document.querySelector('#mobile-menu');
const invitationSection = document.querySelector('.invitation');
const iconToggle = document.querySelector('#iconToggle');
const intViewportWidth = window.innerWidth;


hamburger.addEventListener('click', onHamburgerClick);
document.addEventListener('resize', onResize);


function onResize() {
    if (intViewportWidth > 880) {
        mobileMenu.classList.add('hidden');
        invitationSection.style.marginTop = '0';
        iconToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    } 
}


function onHamburgerClick() {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        invitationSection.style.marginTop = '215px';
        iconToggle.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        
    } else if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        invitationSection.style.marginTop = '0';
        iconToggle.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    }
}