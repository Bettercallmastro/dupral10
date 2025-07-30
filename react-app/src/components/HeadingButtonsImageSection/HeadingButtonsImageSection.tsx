import React from 'react';
import { HeadingButtonsImageSectionProps } from '../../types';
import Button from '../Button/Button';
import styles from './HeadingButtonsImageSection.module.css';

const HeadingButtonsImageSection: React.FC<HeadingButtonsImageSectionProps> = ({ section, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('HeadingButtonsImageSection button clicked:', button.text);
  };

  return (
    <section className={`${styles.headingButtonsImageSection} ${className}`}>
      <div className={styles.headingButtonsImageSection__container}>
        {/* Text Content */}
        <div className={styles.headingButtonsImageSection__content}>
          {section.label && (
            <div className={styles.headingButtonsImageSection__label}>
              {section.label}
            </div>
          )}
          
          <h2 className={styles.headingButtonsImageSection__heading}>
            {section.heading}
          </h2>
          
          <p className={styles.headingButtonsImageSection__body}>
            {section.body}
          </p>
          
          {section.bodySmall && (
            <p className={styles.headingButtonsImageSection__bodySmall}>
              {section.bodySmall}
            </p>
          )}
        </div>
        
        {/* Buttons */}
        {section.buttons && section.buttons.length > 0 && (
          <div className={styles.headingButtonsImageSection__buttons}>
            {section.buttons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                active={button.active}
                variant={button.active ? 'black' : 'secondary'}
                onClick={() => handleButtonClick(button)}
                className={styles.headingButtonsImageSection__button}
              />
            ))}
          </div>
        )}
        
        {/* Image */}
        <div className={styles.headingButtonsImageSection__imageContainer}>
          <img 
            src={section.image} 
            alt={section.imageDescription || section.heading} 
            className={styles.headingButtonsImageSection__image} 
            loading="lazy" 
          />
          {section.imageDescription && (
            <p className={styles.headingButtonsImageSection__imageDescription}>
              {section.imageDescription}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeadingButtonsImageSection; 