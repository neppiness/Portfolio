'use strict';

// Make navbar opaque when it is not on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
const homeSection = document.querySelector('section#home');

navbarMenu.addEventListener('click', (event) => {
    let eventTargetLink = event.target.dataset.link;
    const targetSection = document.querySelector(eventTargetLink);
    targetSection.scrollIntoView();
});