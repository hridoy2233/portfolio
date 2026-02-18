let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let header = document.querySelector('header');

window.onscroll = () => {
  // sticky header
  header.classList.toggle('sticky', window.scrollY > 100);

  // active nav links
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
//  scollReveal
const sr = ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', {
  origin: 'bottom',
});
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

// tyed js
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'UI/UX desiger', ' Python Devlopers'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
