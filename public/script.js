const navButton = document.getElementById('nav-button');
const burgerNav = document.getElementById('burger-nav');
const xShape = document.querySelector('.spans');

navButton.addEventListener('click', () => {
    burgerNav.classList.toggle('showNav');
    xShape.classList.toggle('x-shape');
})

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

// let scrollDisabled = false;

// function toggleScroll() {
//     if(scrollDisabled) {
//         document.body.style.overflow = 'auto'
//         scrollDisabled = false
//     } else {
//         document.body.style.overflow = 'hidden'
//         scrollDisabled = true
//     }
// }
