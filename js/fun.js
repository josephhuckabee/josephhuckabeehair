const images = [
    'images/benji.jpg',
    'images/cat1.jpeg',
    'images/ky3.jpeg'
];

let currentIndex = 0;

document.addEventListener('wheel', function(event) {
    const parallax = document.querySelector('.parallax');
    const speed = 0.5;
    parallax.style.transform = `translateY(${window.scrollY * speed}px)`;
});

// Function to cycle through images
function cycleImages() {
    const parallax = document.querySelector('.parallax');
    parallax.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Show the first image immediately
cycleImages();

// Change the background every 3 seconds
setInterval(cycleImages, 3000);
