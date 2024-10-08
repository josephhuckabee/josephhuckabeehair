// Image array
const images = [
    'sam.jpeg',
    'sage1.jpeg',
    'angel2.webp',
    'quinuse.jpg',
    'morgan4.jpg',
    'julian.jpeg',
    'mckenna.png',
    'xiana.jpg',
    'emma.jpg',
    'taylor1.jpeg',
    'leoglass.jpeg',
    'lucy.jpeg',
    'quinn.jpeg',
    'jazelle.jpg'
  ];
  
  // Get the carousel container
  const carousel = document.getElementById('carousel');
  
  // Function to duplicate the images array for smooth scrolling
  function duplicateImages(imagesArray) {
    return [...imagesArray, ...imagesArray]; // Duplicate the array for infinite scroll
  }
  
  // Add images to the carousel dynamically
  const allImages = duplicateImages(images); // Duplicate images for infinite scroll
  allImages.forEach((imgSrc) => {
    const img = document.createElement('img');
    img.src = imgSrc; // Assign image source
    img.alt = 'Carousel Image'; // Alt text for accessibility
    carousel.appendChild(img);
  });
  
  let currentIndex = 0;
  const totalImages = images.length;
  const scrollSpeed = 2000; // Set the scroll speed in milliseconds
  
  // Function to auto-scroll the carousel
  function autoScroll() {
    currentIndex++;
  
    // Reset index when the scroll reaches halfway (for infinite effect)
    if (currentIndex === totalImages) {
      carousel.style.transition = 'none'; // Remove transition for seamless reset
      carousel.style.transform = 'translateX(0)'; // Reset to the first image
      currentIndex = 0;
  
      // Reapply the transition after resetting
      setTimeout(() => {
        carousel.style.transition = 'transform 0.5s linear';
      }, 20);
    } else {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Move to the next image
    }
  }
  
  // Start scrolling immediately
  autoScroll(); // Call this immediately to start the scroll
  
  // Continue auto-scrolling every 'scrollSpeed' milliseconds
  setInterval(autoScroll, scrollSpeed);
  