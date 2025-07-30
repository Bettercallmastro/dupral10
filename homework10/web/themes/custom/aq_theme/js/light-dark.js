/**
 * Light/Dark Mode Toggle
 * AQ Theme
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.aqThemeLightDark = {
    attach: function (context, settings) {
      // Initialize theme mode
      this.initThemeMode();
      
      // Add event listener for theme toggle
      $(context).once('aq-theme-toggle').on('click', '#theme-toggle', function (e) {
        e.preventDefault();
        Drupal.behaviors.aqThemeLightDark.toggleTheme();
      });
    },

    initThemeMode: function () {
      // Get saved theme from localStorage or default to 'light'
      const savedTheme = localStorage.getItem('aq-theme-mode') || 'light';
      this.setTheme(savedTheme);
    },

    toggleTheme: function () {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    },

    setTheme: function (theme) {
      // Set data attribute on html element
      document.documentElement.setAttribute('data-theme', theme);
      
      // Save to localStorage
      localStorage.setItem('aq-theme-mode', theme);
      
      // Update body class for backward compatibility
      document.body.classList.remove('theme-mode--light', 'theme-mode--dark');
      document.body.classList.add('theme-mode--' + theme);
      
      // Dispatch custom event for other scripts
      const event = new CustomEvent('themeChanged', { detail: { theme: theme } });
      document.dispatchEvent(event);
      
      // Log for debugging
      console.log('Theme changed to:', theme);
    }
  };

})(jQuery, Drupal); 