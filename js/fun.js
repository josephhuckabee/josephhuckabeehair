const parallax = document.querySelector('.parallax');

if (parallax) {
  const images = [
    'images/benji.jpg',
    'images/cat1.jpeg',
    'images/ky3.jpeg'
  ];

  let currentIndex = 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('wheel', () => {
    if (prefersReducedMotion) return;
    const speed = 0.5;
    parallax.style.transform = `translateY(${window.scrollY * speed}px)`;
  });

  const cycleImages = () => {
    parallax.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
  };

  cycleImages();
  setInterval(cycleImages, 3000);
}
