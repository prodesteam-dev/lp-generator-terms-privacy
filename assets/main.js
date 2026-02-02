// Intersection Observer for lazy loading images
(function() {
  const images = document.querySelectorAll('img.lazy');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Already set, but triggers loading
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '0px 0px 200px 0px',
      threshold: 0.1
    });
    images.forEach(img => {
      observer.observe(img);
    });
  } else {
    // Fallback: just load all images
    images.forEach(img => {
      img.src = img.src;
      img.classList.add('loaded');
    });
  }
})();

// Smooth scroll for anchor links
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = anchor.getAttribute('href');
        if (href.length > 1 && document.querySelector(href)) {
          e.preventDefault();
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
})();

// Optional: Fade-in animation on section enter
(function() {
  const sections = document.querySelectorAll('section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
        }
      });
    }, {
      threshold: 0.2
    });
    sections.forEach(section => {
      observer.observe(section);
    });
  }
})();
