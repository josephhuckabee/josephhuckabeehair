// Carousel scroll with reduced motion, responsive images, and visibility handling.
const carousel = document.getElementById('carousel');
const carouselContainer = document.querySelector('.carousel-container');

if (carousel) {
  const slides = [
    { file: 'sam.jpeg', width: 1206, height: 1504, alt: 'Editorial hair color on Sam' },
    { file: 'sage1.jpeg', width: 1170, height: 1458, alt: 'Editorial hair color on Sage' },
    { file: 'angel2.webp', width: 1570, height: 2048, alt: 'Editorial hair color on Angel' },
    { file: 'taylore_bed.jpeg', width: 1206, height: 1501, alt: 'Editorial hair color on Taylore' },
    { file: 'quinuse.jpg', width: 1189, height: 1480, alt: 'Editorial hair color on Quin' },
    { file: 'jade.jpeg', width: 1206, height: 1372, alt: 'Editorial hair color on Jade' },
    { file: 'lean_style.png', width: 1256, height: 1756, alt: 'Editorial hair color on Lean' },
    { file: 'morg_sit.png', width: 1226, height: 1828, alt: 'Editorial hair color on Morgan' },
    { file: 'julian.jpeg', width: 1170, height: 1467, alt: 'Editorial hair color on Julian' },
    { file: 'lucy.jpeg', width: 1170, height: 1445, alt: 'Editorial hair color on Lucy' },
    { file: 'hugs.jpeg', width: 1206, height: 1482, alt: 'Editorial hair color on Hugs' },
    { file: 'xiana.jpg', width: 800, height: 1101, alt: 'Editorial hair color on Xiana' },
    { file: 'em_hands.png', width: 1280, height: 1702, alt: 'Editorial hair color on Em' },
    { file: 'kyblonde.jpeg', width: 1206, height: 1213, alt: 'Editorial hair color on Ky' },
    { file: 'nour.jpeg', width: 1206, height: 1493, alt: 'Editorial hair color on Nour' },
    { file: 'quinn.jpeg', width: 1206, height: 1262, alt: 'Editorial hair color on Quinn' },
    { file: 'jazelle.JPG', width: 960, height: 1281, alt: 'Editorial hair color on Jazelle' },
    { file: 'mckenna.png', width: 1562, height: 1994, alt: 'Editorial hair color on Mckenna' }
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
    img.sizes = '(max-width: 599px) 100vw, (max-width: 1199px) 42vw, 32vw';
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
const siteName = document.querySelector('.site-header h1');

if (siteName) {
  siteName.style.animationDelay = `${Math.random() * -50}s`;
}

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

const gallery = document.getElementById('photo-gallery-grid');

if (gallery) {
  const galleryImages = Array.from(gallery.querySelectorAll('img'));
  const lightbox = document.createElement('div');
  const lightboxFigure = document.createElement('figure');
  const lightboxImage = document.createElement('img');
  const lightboxCaption = document.createElement('figcaption');
  const closeButton = document.createElement('button');
  let activeTrigger = null;

  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-labelledby', 'lightbox-caption');

  lightboxFigure.className = 'lightbox-figure';
  lightboxImage.className = 'lightbox-image';
  lightboxImage.decoding = 'async';
  lightboxCaption.className = 'lightbox-caption';
  lightboxCaption.id = 'lightbox-caption';
  closeButton.className = 'lightbox-close';
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', 'Close image view');
  closeButton.textContent = '×';

  lightboxFigure.append(lightboxImage, lightboxCaption);
  lightbox.append(lightboxFigure, closeButton);
  document.body.appendChild(lightbox);

  const getLargeImage = (img) => {
    const src = img.currentSrc || img.src;
    return src.replace('-480.jpg', '-1440.jpg').replace('-960.jpg', '-1440.jpg');
  };

  const getPortfolioName = (img) => img.alt.replace(/^Editorial hair color on\s+/i, '').trim();

  const openLightbox = (img) => {
    activeTrigger = img;
    const portfolioName = getPortfolioName(img);
    lightboxImage.src = getLargeImage(img);
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = portfolioName;
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightboxImage.removeAttribute('src');
    if (activeTrigger) {
      activeTrigger.focus();
    }
    activeTrigger = null;
  };

  galleryImages.forEach((img) => {
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', `Open large view: ${getPortfolioName(img)}`);
    img.setAttribute('title', 'Open large view');

    img.addEventListener('click', () => openLightbox(img));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', () => {
    if (lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

const instagramFeed = document.querySelector('[data-instagram-feed]');

if (instagramFeed) {
  const fallbackItems = instagramFeed.innerHTML;

  const truncate = (text, maxLength = 120) => {
    if (!text) {
      return 'Joseph Huckabee editorial hair color on Instagram';
    }
    return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
  };

  const renderInstagramItems = (items) => {
    if (!Array.isArray(items) || items.length === 0) {
      instagramFeed.innerHTML = fallbackItems;
      return;
    }

    const sortedItems = [...items]
      .filter((item) => item.permalink && (item.media_url || item.thumbnail_url))
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 6);

    if (sortedItems.length === 0) {
      instagramFeed.innerHTML = fallbackItems;
      return;
    }

    instagramFeed.innerHTML = sortedItems.map((item) => {
      const imageUrl = item.thumbnail_url || item.media_url;
      const alt = truncate(item.caption);
      return `
        <a href="${item.permalink}" target="_blank" rel="noopener noreferrer" aria-label="View this Instagram post">
          <img src="${imageUrl}" alt="${alt.replace(/"/g, '&quot;')}" width="480" height="480" loading="lazy" decoding="async">
        </a>
      `;
    }).join('');
  };

  fetch('/.netlify/functions/instagram-feed', { headers: { Accept: 'application/json' } })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Instagram feed unavailable');
      }
      return response.json();
    })
    .then((data) => renderInstagramItems(data.items))
    .catch(() => {
      instagramFeed.innerHTML = fallbackItems;
    });
}
