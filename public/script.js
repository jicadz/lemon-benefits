
// nav button functionality

const navButton = document.getElementById('nav-button');
const burgerNav = document.getElementById('burger-nav');
const xShape = document.querySelector('.spans');

// toggles classes that transforms the 3 spans to form a burger nav button and X button
navButton.addEventListener('click', () => {
    burgerNav.classList.toggle('showNav');
    xShape.classList.toggle('x-shape');
})

// when the burger nav contents shows (home, about, etc...), disable the scrolling
let scrollingDisabled = false;

navButton.addEventListener('click', () => {

    if (scrollingDisabled) {
        document.body.style.overflow = '';
        scrollingDisabled = false;
    } else {
        document.body.style.overflow = 'hidden';
        scrollingDisabled = true;
    }
        
})

// when the user scrolls down from the top (scrolY = 0), the logo and burger nav will disappear
document.addEventListener('scroll', () => {

    const nav = document.getElementById('nav');

    if(scrollY > 0) {
        nav.style.opacity = 0;
        navButton.style.opacity = 0;
        navButton.style.zIndex = -1;
    } else {
        nav.style.opacity = 1;
        navButton.style.opacity = 1;
        navButton.style.zIndex = 99;
    }
})


