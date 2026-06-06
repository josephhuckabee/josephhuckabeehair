// Carousel scroll with reduced motion, responsive images, and visibility handling.
const carousel = document.getElementById('carousel');
const carouselContainer = document.querySelector('.carousel-container');

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
  let isPaused = false;
  const scrollSpeed = window.matchMedia('(max-width: 599px)').matches ? 0.45 : 0.7;

  const createImage = (slide, index, isClone = false) => {
    const img = document.createElement('img');
    const imageName = slide.file.replace(/\.[^.]+$/, '');

    img.src = `images/optimized/${imageName}-960.jpg`;
    img.srcset = [
      `images/optimized/${imageName}-480.jpg 480w`,
      `images/optimized/${imageName}-960.jpg 960w`,
      `images/optimized/${imageName}-1440.jpg 1440w`
    ].join(', ');
    img.sizes = '(max-width: 599px) 76vw, (max-width: 1199px) 42vw, 32vw';
    img.alt = isClone ? '' : slide.alt;
    img.width = slide.width;
    img.height = slide.height;
    img.loading = index < 2 && !isClone ? 'eager' : 'lazy';
    img.decoding = 'async';
    if (index < 2 && !isClone) {
      img.fetchPriority = 'high';
    }
    if (isClone) {
      img.setAttribute('aria-hidden', 'true');
    }
    return img;
  };

  const shuffled = slides;

  if (carouselContainer && !prefersReducedMotion) {
    const pauseButton = document.createElement('button');
    pauseButton.className = 'carousel-pause';
    pauseButton.type = 'button';
    pauseButton.setAttribute('aria-label', 'Pause carousel');
    pauseButton.setAttribute('aria-pressed', 'false');
    pauseButton.innerHTML = '<span class="visually-hidden">Pause carousel</span><span class="pause-icon" aria-hidden="true"></span>';

    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseButton.classList.toggle('is-paused', isPaused);
      pauseButton.setAttribute('aria-label', isPaused ? 'Resume carousel' : 'Pause carousel');
      pauseButton.setAttribute('aria-pressed', isPaused ? 'true' : 'false');
      pauseButton.querySelector('.visually-hidden').textContent = isPaused ? 'Resume carousel' : 'Pause carousel';

      if (isPaused) {
        stop();
      } else {
        start();
      }
    });

    carouselContainer.appendChild(pauseButton);
  }

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
    if (!prefersReducedMotion && !isPaused && rafId === null) {
      rafId = requestAnimationFrame(tick);
    }
  };

  const stop = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const handleResize = () => {
    updateLoopWidth();
    position = Math.min(0, position);
  };

  window.addEventListener('resize', handleResize);
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
