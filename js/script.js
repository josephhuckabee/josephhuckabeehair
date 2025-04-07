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


// ------------------------------------------------------------------------
// JAVASCRIPT 3/3 | port table -------------------------------------------
// ------------------------------------------------------------------------

// Array of image filenames (just the names, not the folder path)
const imageFileNames = [
  'angel2.webp', 'art.jpeg', 'banhs.jpeg', 'benji.jpg', 'bg.png',
  'bloodred.jpeg', 'blue_arua.jpg', 'bluegreen.JPG', 'bluyel.jpeg',
  'booknow.png', 'cat1.jpeg', 'dream.png', 'dreammer.jpeg', 'dusty.jpeg',
  'em_hands.png', 'email.icon.png', 'emma.jpg', 'greenshot.JPG',
  'hannah.jpeg', 'headshot.png', 'heather_1.jpg', 'heather2.jpeg',
  'heattcehstan.jpeg', 'howard1.jpeg', 'hugs.jpeg', 'icon.tiktok.png'
];

// Get the gallery container
const gallery = document.getElementById('photo-gallery');

// Loop through filenames and create <img> elements
imageFileNames.forEach(filename => {
  const img = document.createElement('img');
  img.src = `/images/${filename}`;
  img.alt = filename.split('.')[0]; // alt text = filename without extension
  img.loading = 'lazy'; 
  gallery.appendChild(img);
});