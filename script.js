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
  const totalWidth = carousel.scrollWidth / 4; // The full width of the carousel (after duplication)
  
  if (Math.abs(position) >= totalWidth) {
    // Reset position for seamless effect (when it has scrolled all images out)
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
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalButton = document.getElementById("closeModal");
const contactForm = document.getElementById("contactForm");

// Check if the user has visited before
if (!localStorage.getItem("visitedBefore")) {
    window.onload = openModal; // Open modal on first visit
}

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    modalBackdrop.style.display = "block"; // Show the backdrop
}

// Function to close the modal
function closeModal() {
    // Animate modal closing
    modal.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    modal.style.transform = "translateX(-50%) translateY(100vh)"; // Slide down
    modal.style.opacity = "0"; // Fade out

    // Hide modal and reset styles after animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide modal
        modal.style.opacity = "1"; // Reset opacity
        modal.style.transform = "translateX(-50%) translateY(0)"; // Reset position
        modalBackdrop.style.display = "none"; // Hide backdrop
    }, 500); // Match timeout to transition duration

    // Mark as visited to prevent reopening
    localStorage.setItem("visitedBefore", "true");
}

// Event listener for closing the modal when clicking the backdrop
window.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) { // Click outside the modal content
        closeModal();
    }
});

// Event listener for closing the modal via the close button
closeModalButton.addEventListener("click", closeModal);

// Event listener for the form submission
contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Show success message or perform additional actions here
    alert("Thank you for signing up!");

    // Close the modal after successful form submission
    closeModal();
});