/**
 * Content Functionality
 * AQ Theme
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeContent = {
    attach: function (context, settings) {
      // Initialize content animations
      this.initAnimations(context);
      
      // Initialize lazy loading
      this.initLazyLoading(context);
      
      // Initialize button interactions
      this.initButtonInteractions(context);
      
      // Initialize card interactions
      this.initCardInteractions(context);
    },

    initAnimations: function (context) {
      // Intersection Observer for scroll animations
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        $(context).find('.hero, .section, .card, .slider').each(function () {
          observer.observe(this);
        });
      }
    },

    initLazyLoading: function (context) {
      // Lazy load images
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        $(context).find('img[data-src]').each(function () {
          imageObserver.observe(this);
        });
      }
    },

    initButtonInteractions: function (context) {
      // Button group functionality
      $(context).find('.btn-group').each(function () {
        const $buttons = $(this).find('.btn');
        
        $buttons.on('click', function (e) {
          e.preventDefault();
          
          // Remove active class from all buttons
          $buttons.removeClass('btn--active');
          
          // Add active class to clicked button
          $(this).addClass('btn--active');
          
          // Trigger custom event
          $(this).trigger('buttonActivated', [$(this).text()]);
        });
      });
      
      // Smooth scroll for anchor links
      $(context).find('a[href^="#"]').on('click', function (e) {
        const href = $(this).attr('href');
        
        if (href !== '#') {
          e.preventDefault();
          const $target = $(href);
          
          if ($target.length) {
            $('html, body').animate({
              scrollTop: $target.offset().top - 100
            }, 600);
          }
        }
      });
    },

    initCardInteractions: function (context) {
      // Card hover effects
      $(context).find('.card').each(function () {
        const $card = $(this);
        
        // Add hover effect
        $card.on('mouseenter', function () {
          $(this).addClass('card--hovered');
        }).on('mouseleave', function () {
          $(this).removeClass('card--hovered');
        });
        
        // Card click handler
        $card.on('click', function (e) {
          // Don't trigger if clicking on buttons
          if (!$(e.target).closest('.btn').length) {
            console.log('Card clicked:', $(this).find('.card__title').text());
            // Add your card click logic here
          }
        });
      });
    }
  };

  // Add CSS for animations
  const animationCSS = `
    .hero, .section, .card, .slider {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .hero.animate-in, .section.animate-in, .card.animate-in, .slider.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .card--hovered {
      transform: translateY(-8px) !important;
    }
    
    .lazy {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .lazy.loaded {
      opacity: 1;
    }
  `;

  // Inject CSS
  if (!document.querySelector('#aq-animations')) {
    const style = document.createElement('style');
    style.id = 'aq-animations';
    style.textContent = animationCSS;
    document.head.appendChild(style);
  }

})(jQuery, Drupal); 