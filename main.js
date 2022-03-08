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
const homeContactBtn = document.querySelector('button.home__contact');

navbarMenu.addEventListener('click', (event) => {
    if (event.target.dataset.link != null) {
        let eventTargetLink = event.target.dataset.link;
        const targetSection = document.querySelector(eventTargetLink);
        targetSection.scrollIntoView({behavior: 'smooth'});
    }
});

homeContactBtn.addEventListener('click', (event) => {
    if (event.target.dataset.link != null) {
        let eventTargetLink = event.target.dataset.link;
        const targetSection = document.querySelector(eventTargetLink);
        targetSection.scrollIntoView({behavior: 'smooth'});
    }
});

// Home screen fadeout as the window scrolls down
const homeSection = document.querySelector('section#home');
const homeTitle = document.querySelector('h1.home__title');
const homeDescription = document.querySelector('h2.home__description');
const homeContact = document.querySelector('button.home__contact');
const homeSectionImg = document.querySelector('.home__avatar');

const homeSectionHeight = homeSection.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    let homeOpacity = 1 - Math.min(1, window.scrollY / homeSectionHeight);
    homeTitle.style.opacity = homeOpacity;
    homeDescription.style.opacity = homeOpacity;
    homeContact.style.opacity = homeOpacity;
    homeSectionImg.style.opacity = homeOpacity;
});

// Upper arrow to go top
const upperArrow = document.querySelector('.fa-angles-up');

upperArrow.addEventListener('click', (event) => {
    if (event.target.dataset.link != null) {
        let eventTargetLink = event.target.dataset.link;
        const targetSection = document.querySelector(eventTargetLink);
        targetSection.scrollIntoView({behavior: 'smooth'});
    }
});

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        upperArrow.classList.add('upperArrow--visible');
    } else {
        upperArrow.classList.remove('upperArrow--visible');
    }
});