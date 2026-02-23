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
  strings: ['Frontend Developer', 'UI/UX Desiger', ' Python Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


//emailjs

 (function() {
    emailjs.init("Vr2p935zp8DZDIzVe");
  })();

  const toast = document.getElementById("toast");

  function showToast(message, isError = false) {
    toast.innerText = message;
    toast.className = isError ? "show error" : "show";
    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000); // 3 seconds
  }

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const subject = this.subject.value;
    const message = this.message.value;

    emailjs.send("service_r1fy7cc", "template_cjt2277", {
      name, email, phone, subject, message
    })
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      showToast("Message sent successfully ✅");
      document.getElementById("contact-form").reset();
    })
    .catch(function(error) {
      console.error("FAILED...", error);
      showToast("Message not sent ❌", true);
    });
  });
