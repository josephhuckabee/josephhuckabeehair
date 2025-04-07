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

  const totalWidth = carousel.scrollWidth / 4; // Adjust as needed

  if (Math.abs(position) >= totalWidth) {
    position = 0; // Reset for seamless loop
  }

  requestAnimationFrame(continuousScroll);
}

// Start the carousel scroll
continuousScroll();


// ------------------------------------------------------------------------
// JAVASCRIPT 3/3 | port table -------------------------------------------
// ------------------------------------------------------------------------

// Array of image filenames (just the names, not the folder path)
const imageFileNames = [
'art.jpeg',
'benji.jpg'
];

// Get the gallery container
const gallery = document.getElementById('photo-gallery');

// Loop through filenames and create <img> elements
imageFileNames.forEach(filename => {
  const img = document.createElement('img');
  img.src = `/images/`;
  img.alt = filename.split('.')[0]; // alt text = filename without extension
  img.loading = 'lazy'; 
  gallery.appendChild(img);
});

