// Image array
const images = [
  'sam.jpeg', 'sage1.jpeg', 'angel2.webp', 'quinuse.jpg', 'morgan4.jpg', 
  'julian.jpeg', 'mckenna.png', 'xiana.jpg', 'emma.jpg', 'taylor1.jpeg', 
  'leoglass.jpeg', 'lucy.jpeg', 'quinn.jpeg', 'jazelle.jpg'
];

// Get the carousel container
const carousel = document.getElementById('carousel');

// Duplicate images for infinite scroll
const allImages = images.concat(images);

// Add images to the carousel dynamically
allImages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Carousel Image';
  carousel.appendChild(img);
});
// Set initial position and scroll speed
let position = 0;
const scrollSpeed = 0.75; // Lower values for slower, smoother scrolling

// Function for smooth continuous scroll
function continuousScroll() {
  position -= scrollSpeed;
  carousel.style.transform = `translateX(${position}px)`; // Move the carousel to the left

  // When the scroll reaches the end of the images, reset
  if (Math.abs(position) >= carousel.scrollWidth / 2) {
    position = 0; // Reset to the beginning for continuous scrolling
  }

  requestAnimationFrame(continuousScroll); // Use requestAnimationFrame for smooth animation
}

// Start the continuous scroll
continuousScroll();