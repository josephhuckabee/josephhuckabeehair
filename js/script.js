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

// Step 3: Get the carousel container
const carousel = document.getElementById('carousel');

// Step 4: Add images to the carousel dynamically
images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Carousel Image';
  carousel.appendChild(img);
});

// Step 5: Clone images for a seamless loop
images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Carousel Image Clone';
  carousel.appendChild(img);
});

// Step 6: Set initial position and scroll speed
let position = 0;
const scrollSpeed = 1.25; // Adjust this for desired scrolling speed

// Step 7: Function for smooth continuous scroll
function continuousScroll() {
  position -= scrollSpeed;
  carousel.style.transform = `translateX(${position}px)`; // Move the carousel left

  const totalWidth = carousel.scrollWidth / 2;

  if (Math.abs(position) >= totalWidth) {
    position = 0;
  }

  requestAnimationFrame(continuousScroll);
}

// Start the carousel scroll
continuousScroll();

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
