// ------------------------------------------------------------------------
// JAVASCRIPT 2/3 | Carousel Scroll ----------------------------------------
// ------------------------------------------------------------------------

// Step 1: Just the image filenames (clean and simple)
const filenames = [
  'sam.jpeg', 'sage1.jpeg', 'angel2.webp', 'taylore_bed.jpeg', 'quinuse.jpg', 
  'jade.jpeg', 'lean_style.png', 'morg_sit.png', 'julian.jpeg', 
  'lucy.jpeg', 'hugs.jpeg', 'xiana.jpg', 'em_hands.png', 
  'kyblonde.jpeg', 'nour.jpeg', 'quinn.jpeg', 'jazelle.jpg', 'mckenna.png'
];

// Step 2: Automatically add "images/" in front of each filename
const images = filenames.map(name => `/images/${name}`);

if (document.body.classList.contains('index')) {
  const filenames = [
    'sam.jpeg', 'sage1.jpeg', 'angel2.webp', 'taylore_bed.jpeg', 'quinuse.jpg', 
    'jade.jpeg', 'lean_style.png', 'morg_sit.png', 'julian.jpeg', 
    'lucy.jpeg', 'hugs.jpeg', 'xiana.jpg', 'em_hands.png', 
    'kyblonde.jpeg', 'nour.jpeg', 'quinn.jpeg', 'jazelle.jpg', 'mckenna.png'
  ];

  const images = filenames.map(name => `/images/${name}`);
  const carousel = document.getElementById('carousel');

  if (carousel) {
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Carousel Image';
      carousel.appendChild(img);
    });

    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Carousel Image Clone';
      carousel.appendChild(img);
    });

    let position = 0;
    const scrollSpeed = 1.25;

    function continuousScroll() {
      position -= scrollSpeed;
      carousel.style.transform = `translateX(${position}px)`;

      const totalWidth = carousel.scrollWidth / 2;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      requestAnimationFrame(continuousScroll);
    }

    continuousScroll();
  }
}

// ------------------------------------------------------------------------
// JAVASCRIPT 3/3 | Mobile Nav Toggle -------------------------------------
// ------------------------------------------------------------------------

function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  if (nav) {
    nav.classList.toggle('active');
    console.log('Hamburger clicked: toggled nav menu');
  } else {
    console.warn('No .nav-links element found.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  const sectionTitles = document.querySelectorAll('.service-section-title');
  const sections = document.querySelectorAll('.services section ul');

  sectionTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
      event.stopPropagation();
      sections.forEach((ul, i) => {
        ul.style.display = i === index ? (ul.style.display === 'block' ? 'none' : 'block') : 'none';
      });
    });
  });

  document.addEventListener('click', () => {
    sections.forEach(ul => ul.style.display = 'none');
  });
});

document.addEventListener('click', function(event) {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');

  if (!nav || !hamburger) return;

  const clickedInsideNav = nav.contains(event.target);
  const clickedHamburger = hamburger.contains(event.target);
  const navIsOpen = nav.classList.contains('active');

  if (navIsOpen && !clickedInsideNav && !clickedHamburger) {
    nav.classList.remove('active');
    console.log('Click outside: closed nav');
  }
});

// ------------------------------------------------------------------------
// JAVASCRIPT 4/4 | Services Page Dropdown Toggle -------------------------
// ------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const sectionTitles = document.querySelectorAll('.service-section-title');
  const serviceLists = document.querySelectorAll('.service-content');

  sectionTitles.forEach((title, index) => {
    title.addEventListener('click', (event) => {
      event.stopPropagation();
      serviceLists.forEach((list, i) => {
        list.classList.toggle('active', i === index && !list.classList.contains('active'));
      });
    });
  });

  document.addEventListener('click', () => {
    serviceLists.forEach(list => list.classList.remove('active'));
  });
});