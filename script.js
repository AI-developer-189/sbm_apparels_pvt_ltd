/* ========================================
   SBM Apparels - JavaScript Functionality
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile menu
  initMobileMenu();

  // Initialize smooth scrolling
  initSmoothScrolling();

  // Set active nav link on page load
  setActiveNavLink();

  // Initialize form validation
  initFormValidation();
});

/* ========================================
   Mobile Menu Toggle
   ======================================== */
function initMobileMenu() {
  const navToggle = document.querySelector('.navbar-toggler');
  const navMenu = document.querySelector('.navbar-collapse');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.add('collapsed');
        navMenu.classList.remove('show');
      });
    });
  }
}

/* ========================================
   Smooth Scrolling
   ======================================== */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ========================================
   Set Active Navigation Link
   ======================================== */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ========================================
   Form Validation
   ======================================== */
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
}

/* ========================================
   Scroll to Top Button
   ======================================== */
window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    if (window.pageYOffset > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/* ========================================
   WhatsApp Message Link
   ======================================== */
function generateWhatsAppLink(message) {
  const phoneNumber = '919876543210'; // Replace with actual number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/* ========================================
   Utility: Check if element is in viewport
   ======================================== */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* ========================================
   Scroll Animation Trigger System
   ======================================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');

      // Add specific animation classes based on element type
      if (entry.target.classList.contains('feature-card')) {
        entry.target.classList.add('animate-slide-bottom');
      } else if (entry.target.classList.contains('product-card')) {
        entry.target.classList.add('animate-slide-top');
      } else if (entry.target.classList.contains('about-image')) {
        entry.target.classList.add('animate-scale');
      } else if (entry.target.classList.contains('section-title')) {
        entry.target.classList.add('animate-slide-left');
      }

      // Stop observing after animation is triggered
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
  // Observe all elements with animation potential
  const animatableElements = document.querySelectorAll(
    '.feature-card, .product-card, .about-image, .section-title, .value-card, .testimonial-card, .btn-primary, .btn-outline'
  );

  animatableElements.forEach(element => {
    observer.observe(element);
  });

  // Set initial state for animated elements
  animatableElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
  });
});

/* ========================================
   Parallax Scroll Effect
   ======================================== */
window.addEventListener('scroll', function() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  parallaxElements.forEach(element => {
    const scrollPosition = window.scrollY;
    const yPos = scrollPosition * 0.5;
    element.style.transform = `translateY(${yPos}px)`;
  });
});

/* ========================================
   Counter Animation on Scroll
   ======================================== */
function animateCounter(element, target, duration = 1500) {
  let count = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(count);
    }
  }, 16);
}

// Trigger counters when in view
const counters = document.querySelectorAll('[data-counter]');
let counterAnimated = false;

window.addEventListener('scroll', function() {
  if (!counterAnimated) {
    counters.forEach(counter => {
      if (isInViewport(counter) && !counter.classList.contains('counted')) {
        const target = parseInt(counter.getAttribute('data-counter'));
        animateCounter(counter, target);
        counter.classList.add('counted');
      }
    });
  }
});

/* ========================================
   Button Ripple Effect on Click
   ======================================== */
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

/* ========================================
   Lazy Loading Animation on Scroll
   ======================================== */
window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.feature-card, .product-card');
  cards.forEach(card => {
    if (isInViewport(card)) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});
