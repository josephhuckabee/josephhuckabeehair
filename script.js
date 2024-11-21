// Image array
const images = [
  'sam.jpeg', 'sage1.jpeg', 'angel2.webp', 'taylore_bed.jpeg', 'quinuse.jpg', 
  'jade.jpeg', 'lean_style.png', 'morg_sit.png', 'julian.jpeg', 
  'lucy.jpeg', 'hugs.jpeg', 'xiana.jpg', 'em_hands.png', 
  'kyblonde.jpeg', 'nour.jpeg', 'quinn.jpeg', 'jazelle.jpg', 'mckenna.png',
];

// Get the carousel container
const carousel = document.getElementById('carousel');

// Add images to the carousel dynamically
images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Carousel Image';
  carousel.appendChild(img);
});

// Clone images for a seamless loop
images.forEach((src) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Carousel Image Clone';
  carousel.appendChild(img);
});

// Set initial position and scroll speed
let position = 0;
const scrollSpeed = 1.25; // Adjust this for desired scrolling speed

// Function for smooth continuous scroll
function continuousScroll() {
  position -= scrollSpeed;
  carousel.style.transform = `translateX(${position}px)`; // Move the carousel left

  // Check if the first set of images has fully scrolled out
  const firstSetWidth = carousel.scrollWidth / 2; 
  if (Math.abs(position) >= firstSetWidth) {
    // Reset position for seamless effect
    position = 0;
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

// Check if the user has visited before
if (!localStorage.getItem("visitedBefore")) {
    // Open the modal on the first page load
    window.onload = openModal;
}

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    modalBackdrop.style.display = "block"; // Show the backdrop
 
}

// Close modal when the close button is clicked
closeModalButton.addEventListener("click", () => {
    moveModalToBottom(); // Move the modal to the bottom
    localStorage.setItem("visitedBefore", "true"); // Mark as visited
});

// Close modal when clicking anywhere outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) { // Check if click is on the backdrop
        moveModalToBottom();
        localStorage.setItem("visitedBefore", "true"); // Mark as visited
    }
});

// Function to move the modal to the bottom
function moveModalToBottom() {
    modal.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    modal.style.transform = "translateX(-50%) translateY(100vh)"; // Move modal to bottom
    modal.style.opacity = "0"; // Fade the modal out

    // Once the transition is complete, hide the modal
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal
        modal.style.opacity = "1"; // Reset opacity for future use
        modal.style.transform = "translateX(-50%) translateY(0)"; // Reset position
        document.body.style.filter = "none"; // Remove blur from the body content
        modalBackdrop.style.display = "none"; // Hide the backdrop
    }, 500); // Match the timeout with the transition duration
}