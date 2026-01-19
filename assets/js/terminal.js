/**
 * Daddabase Terminal Effects
 * Typing animations, cursor effects, and CRT flicker
 */

(function() {
  'use strict';

  // Remove loading class after initial flicker
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.remove('loading');
    }, 300);
  });

  // Typing animation for command lines
  function typeText(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }

    type();
  }

  // Initialize typing animations
  function initTypingAnimations() {
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(function(element, index) {
      const text = element.textContent;
      const speed = parseInt(element.getAttribute('data-typing-speed')) || 50;
      const delay = parseInt(element.getAttribute('data-typing-delay')) || (index * 1000);

      setTimeout(function() {
        typeText(element, text, speed);
      }, delay);
    });
  }

  // Initialize on page load
  window.addEventListener('DOMContentLoaded', function() {
    // Run typing animations if elements exist
    if (document.querySelector('[data-typing]')) {
      initTypingAnimations();
    }

    // Add keyboard shortcut for konami code easter egg (optional)
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', function(e) {
      konamiCode.push(e.key);
      konamiCode = konamiCode.slice(-10);

      if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg: change colors temporarily
        document.documentElement.style.setProperty('--color-primary', '#00FF00');
        document.documentElement.style.setProperty('--color-secondary', '#FF00FF');

        setTimeout(function() {
          document.documentElement.style.removeProperty('--color-primary');
          document.documentElement.style.removeProperty('--color-secondary');
        }, 3000);
      }
    });
  });

  // Smooth scroll for anchor links
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('[data-typing]').forEach(function(element) {
      element.removeAttribute('data-typing');
    });
  }
})();
