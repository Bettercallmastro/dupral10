import React, { useState, useEffect } from 'react';
import { PageData } from '../../types';
import Header from '../Header/Header';
import TextButtonsSection from '../TextButtonsSection/TextButtonsSection';
import HeadingButtonsImageSection from '../HeadingButtonsImageSection/HeadingButtonsImageSection';
import CategorySlideSection from '../CategorySlideSection/CategorySlideSection';
import Hero from '../Hero/Hero';
import TextImageSection from '../TextImageSection/TextImageSection';
import BackgroundSection from '../BackgroundSection/BackgroundSection';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
import styles from './Page.module.css';

interface PageProps {
  data: PageData;
  className?: string;
}

const Page: React.FC<PageProps> = ({ data, className = '' }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Listen for theme changes from header
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail.isDark);
    };

    window.addEventListener('themeChanged', handleThemeChange as EventListener);
    return () => {
      window.removeEventListener('themeChanged', handleThemeChange as EventListener);
    };
  }, []);

  return (
    <div className={`${styles.page} ${className}`}>
      {/* Header */}
      <Header data={data.header} />

      {/* Text Buttons Section */}
      {data.textButtonsSection && (
        <TextButtonsSection section={data.textButtonsSection} />
      )}

      {/* Hero Section */}
      <Hero hero={data.hero} />

      {/* Heading Buttons Image Section */}
      {data.headingButtonsImageSection && (
        <HeadingButtonsImageSection section={data.headingButtonsImageSection} />
      )}

      {/* Category Slide Section */}
      {data.categorySlideSection && (
        <CategorySlideSection section={data.categorySlideSection} />
      )}

      {/* Text Image Section */}
      {data.textImageSection && (
        <TextImageSection section={data.textImageSection} />
      )}

      {/* Background Section */}
      {data.backgroundSection && (
        <BackgroundSection section={data.backgroundSection} />
      )}

      {/* Card Grid Slider */}
      {data.cardGrid && data.cardGrid.cards.length > 0 && (
        <Slider
          cards={data.cardGrid.cards}
          title={data.cardGrid.title}
          description={data.cardGrid.description}
        />
      )}

      {/* Footer */}
      <Footer data={data.footer} />
    </div>
  );
};

export default Page; 