/**
 * Header Functionality
 * AQ Theme
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeHeader = {
    attach: function (context, settings) {
      // Mobile menu toggle
      $(context).once('aq-header').each(function () {
        const $header = $(this);
        const $menuToggle = $header.find('.header__menu-toggle');
        const $nav = $header.find('.header__nav');
        
        // Mobile menu toggle
        $menuToggle.on('click', function (e) {
          e.preventDefault();
          $nav.toggleClass('header__nav--mobile');
          $menuToggle.toggleClass('is-active');
        });
        
        // Close mobile menu when clicking outside
        $(document).on('click', function (e) {
          if (!$(e.target).closest('.header').length) {
            $nav.removeClass('header__nav--mobile');
            $menuToggle.removeClass('is-active');
          }
        });
        
        // Close mobile menu on escape key
        $(document).on('keydown', function (e) {
          if (e.key === 'Escape') {
            $nav.removeClass('header__nav--mobile');
            $menuToggle.removeClass('is-active');
          }
        });
        
        // Search functionality
        const $searchInput = $header.find('.header__search-input');
        $searchInput.on('keydown', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            const query = $(this).val().trim();
            if (query) {
              // Perform search (can be customized)
              console.log('Searching for:', query);
              // Example: window.location.href = '/search?q=' + encodeURIComponent(query);
            }
          }
        });
        
        // Header scroll effect
        this.initHeaderScroll($header);
      });
    },

    initHeaderScroll: function ($header) {
      let lastScrollTop = 0;
      const scrollThreshold = 100;
      
      $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();
        
        // Add/remove scrolled class
        if (scrollTop > scrollThreshold) {
          $header.addClass('header--scrolled');
        } else {
          $header.removeClass('header--scrolled');
        }
        
        // Hide/show header on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
          // Scrolling down
          $header.addClass('header--hidden');
        } else {
          // Scrolling up
          $header.removeClass('header--hidden');
        }
        
        lastScrollTop = scrollTop;
      });
    }
  };

})(jQuery, Drupal); 