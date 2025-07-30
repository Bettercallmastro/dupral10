import React, { useState } from 'react';
import { CategorySlideSectionProps } from '../../types';
import styles from './CategorySlideSection.module.css';

const CategorySlideSection: React.FC<CategorySlideSectionProps> = ({ section, className = '' }) => {
  const [activeCategory, setActiveCategory] = useState(
    section.categories.find(cat => cat.active)?.id || section.categories[0]?.id
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filtra le immagini per la categoria attiva
  const activeImages = section.images.filter(img => img.categoryId === activeCategory);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentImageIndex(0); // Reset dell'indice immagine quando cambia categoria
    console.log('Category clicked:', categoryId);
  };

  const handlePrevClick = () => {
    if (activeImages.length > 0) {
      const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : activeImages.length - 1;
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleNextClick = () => {
    if (activeImages.length > 0) {
      const nextIndex = currentImageIndex < activeImages.length - 1 ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(nextIndex);
    }
  };

  return (
    <section className={`${styles.categorySlideSection} ${className}`}>
      <div className={styles.categorySlideSection__container}>
        {/* Text Content */}
        <div className={styles.categorySlideSection__content}>
          {section.label && (
            <div className={styles.categorySlideSection__label}>
              {section.label}
            </div>
          )}
          
          <h2 className={styles.categorySlideSection__heading}>
            {section.heading}
          </h2>
          
          <p className={styles.categorySlideSection__body}>
            {section.body}
          </p>
          
          {section.bodySmall && (
            <p className={styles.categorySlideSection__bodySmall}>
              {section.bodySmall}
            </p>
          )}
        </div>
        
        {/* Categories */}
        <div className={styles.categorySlideSection__categoriesContainer}>
          <div className={styles.categorySlideSection__categories}>
            {section.categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categorySlideSection__category} ${
                  category.id === activeCategory ? styles.categorySlideSection__categoryActive : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          {activeImages.length > 1 && (
            <div className={styles.categorySlideSection__navigation}>
              <button 
                className={styles.categorySlideSection__navButton}
                onClick={handlePrevClick}
                aria-label="Previous image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <button 
                className={styles.categorySlideSection__navButton}
                onClick={handleNextClick}
                aria-label="Next image"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Images Slide */}
        <div className={styles.categorySlideSection__imagesContainer}>
          {activeImages.length > 0 && (
            <div className={styles.categorySlideSection__imageSlide}>
              <img 
                src={activeImages[currentImageIndex].src} 
                alt={activeImages[currentImageIndex].alt}
                className={styles.categorySlideSection__image}
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategorySlideSection; 