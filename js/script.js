// Carousel scroll with reduced motion and visibility handling.
const carousel = document.getElementById('carousel');

if (carousel) {
  const slides = [
    { file: 'sam.jpeg', width: 1206, height: 1504, alt: 'Hair color and cut on Sam' },
    { file: 'sage1.jpeg', width: 1170, height: 1458, alt: 'Hair color and cut on Sage' },
    { file: 'angel2.webp', width: 1570, height: 2048, alt: 'Hair color and cut on Angel' },
    { file: 'taylore_bed.jpeg', width: 1206, height: 1501, alt: 'Hair color and cut on Taylore' },
    { file: 'quinuse.jpg', width: 1189, height: 1480, alt: 'Hair color and cut on Quin' },
    { file: 'jade.jpeg', width: 1206, height: 1372, alt: 'Hair color and cut on Jade' },
    { file: 'lean_style.png', width: 1256, height: 1756, alt: 'Hair color and cut on Lean' },
    { file: 'morg_sit.png', width: 1226, height: 1828, alt: 'Hair color and cut on Morgan' },
    { file: 'julian.jpeg', width: 1170, height: 1467, alt: 'Hair color and cut on Julian' },
    { file: 'lucy.jpeg', width: 1170, height: 1445, alt: 'Hair color and cut on Lucy' },
    { file: 'hugs.jpeg', width: 1206, height: 1482, alt: 'Hair color and cut on Hugs' },
    { file: 'xiana.jpg', width: 800, height: 1101, alt: 'Hair color and cut on Xiana' },
    { file: 'em_hands.png', width: 1280, height: 1702, alt: 'Hair color and cut on Em' },
    { file: 'kyblonde.jpeg', width: 1206, height: 1213, alt: 'Hair color and cut on Ky' },
    { file: 'nour.jpeg', width: 1206, height: 1493, alt: 'Hair color and cut on Nour' },
    { file: 'quinn.jpeg', width: 1206, height: 1262, alt: 'Hair color and cut on Quinn' },
    { file: 'jazelle.JPG', width: 960, height: 1281, alt: 'Hair color and cut on Jazelle' },
    { file: 'mckenna.png', width: 1562, height: 1994, alt: 'Hair color and cut on Mckenna' }
  ];

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let position = 0;
  let loopWidth = 0;
  let rafId = null;
  const scrollSpeed = 0.8;

  const createImage = (slide, index, isClone = false) => {
    const img = document.createElement('img');
    img.src = `images/${slide.file}`;
    img.alt = isClone ? `${slide.alt} (duplicate)` : slide.alt;
    img.width = slide.width;
    img.height = slide.height;
    img.loading = index === 0 && !isClone ? 'eager' : 'lazy';
    img.decoding = 'async';
    if (index === 0 && !isClone) {
      img.fetchPriority = 'high';
    }
    return img;
  };

  const shuffled = [...slides].sort(() => Math.random() - 0.5);

  shuffled.forEach((slide, index) => {
    carousel.appendChild(createImage(slide, index));
  });

  shuffled.forEach((slide, index) => {
    carousel.appendChild(createImage(slide, index, true));
  });

  const updateLoopWidth = () => {
    loopWidth = carousel.scrollWidth / 2;
  };

  const tick = () => {
    if (!loopWidth) {
      updateLoopWidth();
    }

    position -= scrollSpeed;
    if (Math.abs(position) >= loopWidth && loopWidth > 0) {
      position = 0;
    }
    carousel.style.transform = `translateX(${position}px)`;
    rafId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (!prefersReducedMotion && rafId === null) {
      rafId = requestAnimationFrame(tick);
    }
  };

  const stop = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  window.addEventListener('resize', updateLoopWidth);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  updateLoopWidth();
  start();
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  const mobileQuery = window.matchMedia('(max-width: 599px)');

  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (!mobileQuery.matches) {
      closeMenu();
    }
  });
}
