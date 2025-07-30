/**
 * Global JavaScript
 * AQ Theme
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeGlobal = {
    attach: function (context, settings) {
      // Initialize global functionality
      this.initGlobalFeatures(context);
      
      // Initialize accessibility features
      this.initAccessibility(context);
      
      // Initialize performance optimizations
      this.initPerformance(context);
    },

    initGlobalFeatures: function (context) {
      // Add Google Fonts
      this.loadGoogleFonts();
      
      // Initialize smooth scrolling
      this.initSmoothScrolling();
      
      // Initialize focus management
      this.initFocusManagement();
      
      // Initialize keyboard navigation
      this.initKeyboardNavigation();
    },

    loadGoogleFonts: function () {
      // Load Inter font from Google Fonts
      if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        document.head.appendChild(link);
      }
    },

    initSmoothScrolling: function () {
      // Enable smooth scrolling for the entire page
      if ('scrollBehavior' in document.documentElement.style) {
        // Native smooth scrolling is supported
        return;
      }
      
      // Fallback for older browsers
      $('html').css('scroll-behavior', 'smooth');
    },

    initFocusManagement: function () {
      // Manage focus for modals and overlays
      $(document).on('keydown', function (e) {
        if (e.key === 'Tab') {
          // Handle tab navigation in modals
          const $modal = $('.modal:visible, .overlay:visible');
          if ($modal.length) {
            const $focusable = $modal.find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const $firstFocusable = $focusable.first();
            const $lastFocusable = $focusable.last();
            
            if (e.shiftKey) {
              if (document.activeElement === $firstFocusable[0]) {
                $lastFocusable.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === $lastFocusable[0]) {
                $firstFocusable.focus();
                e.preventDefault();
              }
            }
          }
        }
      });
    },

    initKeyboardNavigation: function () {
      // Keyboard shortcuts
      $(document).on('keydown', function (e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          $('.header__search-input').focus();
        }
        
        // Escape to close modals/menus
        if (e.key === 'Escape') {
          $('.modal, .overlay, .header__nav--mobile').removeClass('visible active');
        }
      });
    },

    initAccessibility: function (context) {
      // Add skip links
      this.addSkipLinks();
      
      // Enhance form accessibility
      this.enhanceFormAccessibility(context);
      
      // Add ARIA labels where needed
      this.addAriaLabels(context);
    },

    addSkipLinks: function () {
      // Add skip to main content link
      if (!$('.skip-link').length) {
        const skipLink = $('<a href="#main-content" class="skip-link">Skip to main content</a>');
        const skipLinkCSS = `
          .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--color-primary);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s ease;
          }
          
          .skip-link:focus {
            top: 6px;
          }
        `;
        
        // Inject CSS
        if (!document.querySelector('#aq-skip-links')) {
          const style = document.createElement('style');
          style.id = 'aq-skip-links';
          style.textContent = skipLinkCSS;
          document.head.appendChild(style);
        }
        
        $('body').prepend(skipLink);
      }
    },

    enhanceFormAccessibility: function (context) {
      // Add labels to form inputs without labels
      $(context).find('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="image"]):not([type="file"]):not([type="checkbox"]):not([type="radio"])').each(function () {
        const $input = $(this);
        const $label = $input.siblings('label');
        
        if (!$label.length && !$input.attr('aria-label') && !$input.attr('placeholder')) {
          $input.attr('aria-label', 'Input field');
        }
      });
    },

    addAriaLabels: function (context) {
      // Add ARIA labels to buttons without text
      $(context).find('button:not([aria-label]):not([title])').each(function () {
        const $button = $(this);
        const $icon = $button.find('svg, i, img');
        
        if ($icon.length && !$button.text().trim()) {
          $button.attr('aria-label', 'Button');
        }
      });
    },

    initPerformance: function (context) {
      // Lazy load non-critical resources
      this.lazyLoadResources();
      
      // Optimize images
      this.optimizeImages(context);
    },

    lazyLoadResources: function () {
      // Lazy load non-critical CSS
      const criticalCSS = document.querySelectorAll('link[rel="stylesheet"][data-critical]');
      criticalCSS.forEach(link => {
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
      });
    },

    optimizeImages: function (context) {
      // Add loading="lazy" to images below the fold
      $(context).find('img:not([loading])').each(function () {
        const $img = $(this);
        const rect = this.getBoundingClientRect();
        
        if (rect.top > window.innerHeight) {
          $img.attr('loading', 'lazy');
        }
      });
    }
  };

  // Initialize when DOM is ready
  $(document).ready(function () {
    // Add main content ID for skip links
    if (!$('#main-content').length) {
      $('.main').attr('id', 'main-content');
    }
    
    // Log theme initialization
    console.log('AQ Theme initialized successfully');
  });

})(jQuery, Drupal); 