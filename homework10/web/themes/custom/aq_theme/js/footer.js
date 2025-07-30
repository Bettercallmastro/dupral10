/**
 * Footer Functionality
 * AQ Theme
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeFooter = {
    attach: function (context, settings) {
      // Initialize footer interactions
      this.initFooterInteractions(context);
      
      // Initialize social icons
      this.initSocialIcons(context);
      
      // Initialize back to top
      this.initBackToTop(context);
    },

    initFooterInteractions: function (context) {
      // Footer menu interactions
      $(context).find('.footer__menu-link').on('click', function (e) {
        const href = $(this).attr('href');
        
        // Handle external links
        if (href && href.startsWith('http')) {
          // Open in new tab for external links
          window.open(href, '_blank');
        }
      });
      
      // Footer logo click
      $(context).find('.footer__logo').on('click', function (e) {
        // Scroll to top when logo is clicked
        $('html, body').animate({
          scrollTop: 0
        }, 600);
      });
    },

    initSocialIcons: function (context) {
      // Social icon interactions
      $(context).find('.footer__social-icon, .social-icon').each(function () {
        const $icon = $(this);
        const href = $icon.attr('href');
        
        $icon.on('click', function (e) {
          if (href) {
            // Track social clicks (optional)
            console.log('Social icon clicked:', href);
            
            // Open in new tab
            window.open(href, '_blank');
          }
        });
        
        // Add hover animation
        $icon.on('mouseenter', function () {
          $(this).addClass('social-icon--hovered');
        }).on('mouseleave', function () {
          $(this).removeClass('social-icon--hovered');
        });
      });
    },

    initBackToTop: function (context) {
      // Create back to top button
      const $backToTop = $('<button class="back-to-top" aria-label="Back to top">↑</button>');
      
      // Add styles for back to top button
      const backToTopCSS = `
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background-color: var(--color-primary);
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .back-to-top:hover {
          background-color: var(--color-accent);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        
        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 18px;
          }
        }
      `;
      
      // Inject CSS if not already present
      if (!document.querySelector('#aq-back-to-top')) {
        const style = document.createElement('style');
        style.id = 'aq-back-to-top';
        style.textContent = backToTopCSS;
        document.head.appendChild(style);
      }
      
      // Add button to page
      $('body').append($backToTop);
      
      // Show/hide back to top button
      $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();
        const showThreshold = 300;
        
        if (scrollTop > showThreshold) {
          $backToTop.addClass('visible');
        } else {
          $backToTop.removeClass('visible');
        }
      });
      
      // Back to top functionality
      $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
      });
    }
  };

})(jQuery, Drupal); 