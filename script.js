// ------------------------------------------------------------------------
// JAVASCRIPT 1/2 | CAROUSEL -------------------------------------------
// ------------------------------------------------------------------------
// Image array
const images = [
  'sam.jpeg', 'sage1.jpeg', 'angel2.webp', 'taylore_bed.jpeg', 'quinuse.jpg', 'jade.jpeg', 'lean_style.png', 'morg_sit.png', 
  'julian.jpeg', 'lucy.jpeg','hugs.jpeg', 'xiana.jpg', 'em_hands.png' ,'kyblonde.jpeg', 
   'nour.jpeg', 'quinn.jpeg', 'jazelle.jpg', 'mckenna.png',
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
const scrollSpeed = 1; // Lower values for slower, smoother scrolling

// Function for smooth continuous scroll
function continuousScroll() {
  position -= scrollSpeed;
  carousel.style.transform = `translateX(${position}px)`; // Move the carousel to the left

  // When the scroll reaches the end of the images, reset
  if (Math.abs(position) >= carousel.scrollWidth /2) {
    position = 0; // Reset to the beginning for continuous scrolling
  }

  requestAnimationFrame(continuousScroll); // Use requestAnimationFrame for smooth animation
}

// Start the continuous scroll
continuousScroll();

// ------------------------------------------------------------------------
// JAVASCRIPT 2/2 | MODAL POPUP -------------------------------------------
// ------------------------------------------------------------------------
// script.js

// Get modal elements
// script.js

// Get modal elements
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modalBackdrop"); // Get the backdrop
const closeModalButton = document.getElementById("closeModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    modalBackdrop.style.display = "block"; // Show the backdrop
   
}

// Close modal when the close button is clicked
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    modalBackdrop.style.display = "none"; // Hide the backdrop
    document.body.style.filter = "none"; // Remove blur from body content
});

// Close modal when clicking anywhere outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) { // Check if click is on the backdrop
        modal.style.display = "none";
        modalBackdrop.style.display = "none"; // Hide the backdrop
        document.body.style.filter = "none"; // Remove blur from body content
    }
});

// Open modal when the page loads
window.onload = openModal;
