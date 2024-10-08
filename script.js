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

let currentIndex = 0;
const scrollSpeed = 2000;
const imageWidth = 300; // Define the width of each image

// Auto-scroll function
function autoScroll() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
    carousel.style.transition = 'none'; // Remove transition to avoid flashing
    carousel.style.transform = 'translateX(0)'; // Reset to the first image
  } else {
    carousel.style.transition = 'transform 0.5s linear';
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Move by image width
  }
}

// Start scrolling and continue every 'scrollSpeed' milliseconds
setInterval(autoScroll, scrollSpeed);
