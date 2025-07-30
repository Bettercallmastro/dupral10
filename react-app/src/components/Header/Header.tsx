import React, { useState } from 'react';
import { HeaderProps } from '../../types';
import Button from '../Button/Button';
import styles from './Header.module.css';

const Header: React.FC<HeaderProps> = ({ data, className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('IT');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Dispatch custom event for theme change
    const event = new CustomEvent('themeChanged', { detail: { isDark: !isDarkMode } });
    window.dispatchEvent(event);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.header__container}>
        {/* Logo */}
        <a href="/" className={styles.header__logo}>
          {data.logo || 'AQ'}
        </a>

        {/* Search Bar */}
        <div className={styles.header__search}>
          <form onSubmit={handleSearch} className={styles.header__searchForm}>
            <div className={styles.header__searchLabel}>Cerca</div>
            <input
              type="text"
              placeholder=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.header__searchInput}
            />
            <button type="submit" className={styles.header__searchButton}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </form>
        </div>

        {/* Right Side Controls */}
        <div className={styles.header__controls}>
          {/* Language Selector */}
          <div className={styles.header__language}>
            <select 
              value={selectedLanguage} 
              onChange={handleLanguageChange}
              className={styles.header__languageSelect}
            >
              <option value="IT">IT</option>
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="DE">DE</option>
            </select>
            <svg className={styles.header__languageIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>

          {/* Dark Mode Toggle */}
          <button
            className={styles.header__themeToggle}
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>

          {/* Contact Button */}
          <div className={styles.header__contact}>
            <Button
              text={data.contactButton || "Contattaci"}
              variant="black"
              className={styles.header__contactBtn}
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.header__menuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.header__navigation}>
        <div className={styles.header__navContainer}>
          <ul className={styles.header__navList}>
            {data.menuItems.map((item, index) => (
              <li key={index} className={styles.header__navItem}>
                <a href={item.url} className={styles.header__navLink}>
                  {item.title} -
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.header__navMobile}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__navList}>
              {data.menuItems.map((item, index) => (
                <li key={index} className={styles.header__navItem}>
                  <a 
                    href={item.url} 
                    className={styles.header__navLink}
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.header__searchMobile}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder={data.searchPlaceholder || "Cerca"}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.header__searchInput}
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 