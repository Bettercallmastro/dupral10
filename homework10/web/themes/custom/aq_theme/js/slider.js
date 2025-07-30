/**
 * Slider Initialization
 * AQ Theme - SwiperJS
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeSlider = {
    attach: function (context, settings) {
      // Initialize sliders
      $(context).once('aq-slider').each(function () {
        const sliderContainer = $(this).find('.swiper');
        
        if (sliderContainer.length > 0) {
          Drupal.behaviors.aqThemeSlider.initSlider(sliderContainer[0]);
        }
      });
    },

    initSlider: function (container) {
      // Check if Swiper is available
      if (typeof Swiper === 'undefined') {
        console.warn('SwiperJS is not loaded. Loading from CDN...');
        this.loadSwiperJS().then(() => {
          this.createSlider(container);
        });
      } else {
        this.createSlider(container);
      }
    },

    loadSwiperJS: function () {
      return new Promise((resolve, reject) => {
        // Load Swiper CSS
        if (!document.querySelector('link[href*="swiper"]')) {
          const swiperCSS = document.createElement('link');
          swiperCSS.rel = 'stylesheet';
          swiperCSS.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
          document.head.appendChild(swiperCSS);
        }

        // Load Swiper JS
        if (typeof Swiper === 'undefined') {
          const swiperJS = document.createElement('script');
          swiperJS.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
          swiperJS.onload = resolve;
          swiperJS.onerror = reject;
          document.head.appendChild(swiperJS);
        } else {
          resolve();
        }
      });
    },

    createSlider: function (container) {
      // Create Swiper instance
      const swiper = new Swiper(container, {
        // Basic settings
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: false,
        
        // Responsive breakpoints
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
        
        // Navigation
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        
        // Autoplay (optional)
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        
        // Effects
        effect: 'slide',
        speed: 600,
        
        // Accessibility
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
        },
        
        // Keyboard navigation
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        
        // Mouse wheel
        mousewheel: {
          forceToAxis: true,
        },
        
        // Touch events
        touchEventsTarget: 'container',
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // Callbacks
        on: {
          init: function () {
            console.log('Swiper initialized');
          },
          slideChange: function () {
            console.log('Slide changed to:', this.activeIndex);
          },
        },
      });

      // Store swiper instance for potential external access
      container.swiper = swiper;
      
      // Add theme change listener
      document.addEventListener('themeChanged', function (e) {
        // Update swiper colors when theme changes
        swiper.update();
      });
    }
  };

})(jQuery, Drupal); 