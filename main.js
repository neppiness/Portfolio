'use strict';

// Make navbar opaque when it is not on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn'); 

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        navbarToggleBtn.classList.add('dark');
    } else {
        navbar.classList.remove('navbar--dark');
        navbarToggleBtn.classList.remove('dark');
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

// Home screen fadeout while the window scrolls down
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

// Filtering the works as the clicked category
const workCategories = document.querySelector('.work__categories');
const works = document.getElementsByClassName('projects');

for (let i = 0; i < works.length; i++) {
    works[i].classList.add('work--visible');
}

workCategories.addEventListener('click', (event) => {
    let eventTargetFilter = event.target.dataset.filter;
    const filteredWorks = document.getElementsByClassName(eventTargetFilter);

    if (filteredWorks === 'none') {
        return;
    }

    for (let i = 0; i < works.length; i++) {
        works[i].classList.add('animation--out');
    }

    setTimeout(() => {
        if (eventTargetFilter === 'all') {
            for (let i = 0; i < works.length; i++) {
                works[i].classList.add('work--visible');
            }
        } else {
            for (let i = 0; i < works.length; i++) {
                works[i].classList.remove('work--visible');
            }
            for (let i = 0; i < filteredWorks.length; i++) {
                filteredWorks[i].classList.add('work--visible');
            }
        }
    }, 250);

    setTimeout(() => {
        for (let i = 0; i < works.length; i++) {
            works[i].classList.remove('animation--out');
        }
    }, 350);
});

// Project filtering button activation setup
workCategories.addEventListener('click', (event) => {
    const activatedButton = workCategories.querySelector('.active');
    activatedButton.classList.remove('active');
    let eventTarget = event.target;
    eventTarget.classList.add('active');
});

// Show navbar__menu using the navbar toggle button
navbarToggleBtn.addEventListener('click', (event) => {
    if (navbarMenu.classList.value == 'navbar__menu') {
        navbarMenu.classList.add('show');
    } else {
        navbarMenu.classList.remove('show');
    }
});

navbarMenu.addEventListener('click', (event) => {
    if (navbarMenu.classList.value == 'navbar__menu show') {
        navbarMenu.classList.remove('show');
    }
});

// Activate the navbar__menu__item when it is clicked
const navbarMenuItems = navbarMenu.getElementsByClassName('navbar__menu__item');

navbarMenu.addEventListener('click', (event) => {
    const activatedNavbarMenuItem = navbarMenu.querySelector('.active');
    console.log(activatedNavbarMenuItem); 
    if (activatedNavbarMenuItem != null) {
        activatedNavbarMenuItem.classList.remove('active');
    }

    let eventTarget = event.target;
    console.log(eventTarget);
    eventTarget.classList.add('active');
});


// Activate the navbar menu item when its related section is on the view.
const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.target.id == 'nav') {return;}

        let targetNavbarMenuItem
        = document.querySelector('ul[data-link="#'+entry.target.id+'"]');
        
        if(entry.isIntersecting) {
            targetNavbarMenuItem.dataset.selected = 'true';
        } else {
            targetNavbarMenuItem.dataset.selected = 'false';
        }
    });

    const NavbarMenuItems = navbarMenu.querySelectorAll('.navbar__menu__item');
    const selectedNavbarMenuItem
    = navbarMenu.querySelector('.navbar__menu__item[data-selected="true"]');

    NavbarMenuItems.forEach(item => {
        if (item != selectedNavbarMenuItem) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
};

const sectionList = document.querySelectorAll('section');
const observer = new IntersectionObserver(callback, options);

sectionList.forEach(aSection => observer.observe(aSection));