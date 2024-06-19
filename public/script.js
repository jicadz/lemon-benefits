
// nav button functionality

const navButton = document.getElementById('nav-button');
const burgerNav = document.getElementById('burger-nav');
const xShape = document.querySelector('.spans');
const desktopNav = document.getElementById('desktop-nav');

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

// desktopNav.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault();
// })

const removeClick = (event) => {
    event.preventDefault();
}

const arrayA = [...desktopNav.querySelectorAll('a')];

// when the user scrolls down from the top (scrolY = 0), the logo and nav will disappear
document.addEventListener('scroll', () => {

    const nav = document.getElementById('nav');

    if(scrollY > 50) {
        nav.style.opacity = 0;
        navButton.style.opacity = 0;
        navButton.style.zIndex = -1;
        arrayA.forEach(a => {
            a.addEventListener('click', removeClick);
            a.style.cursor = 'default';
        });
    } else {
        nav.style.opacity = 1;
        navButton.style.opacity = 1;
        navButton.style.zIndex = 99;
        arrayA.forEach(a => {
            a.removeEventListener('click', removeClick);
            a.style.cursor = 'pointer';
        });
    }

})


