var hamburger = document.querySelector('#iconToggle');
var mobileMenu = document.querySelector('#mobile-menu');
var invitationSection = document.querySelector('.invitation');
var iconToggle = document.querySelector('#iconToggle');
var intViewportWidth = window.innerWidth;


hamburger.addEventListener('click', onHamburgerClick);
document.addEventListener('resize', onResize);


function onResize() {
    if (intViewportWidth > 880) {
        console.log('dziala');
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