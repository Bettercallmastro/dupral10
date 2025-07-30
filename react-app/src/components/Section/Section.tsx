import React from 'react';
import { SectionProps } from '../../types';
import Button from '../Button/Button';
import styles from './Section.module.css';

const Section: React.FC<SectionProps> = ({ section, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('Section button clicked:', button.text);
  };

  const isImageLeft = section.imagePosition === 'left';

  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.section__container}>
        {/* Content */}
        <div className={`${styles.section__content} ${isImageLeft ? styles['section__content--right'] : ''}`}>
          {section.label && (
            <div className={styles.section__label}>
              {section.label}
            </div>
          )}
          
          <h2 className={styles.section__title}>
            {section.heading}
          </h2>
          
          <p className={styles.section__subtitle}>
            {section.subtitle}
          </p>
          
          {section.description && (
            <p className={styles.section__description}>
              {section.description}
            </p>
          )}
          
          {section.buttons && section.buttons.length > 0 && (
            <div className={styles.section__buttons}>
              {section.buttons.map((button, index) => (
                <Button
                  key={index}
                  text={button.text}
                  active={button.active}
                  variant={button.active ? 'primary' : 'secondary'}
                  onClick={() => handleButtonClick(button)}
                  className={styles.section__button}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Image */}
        <div className={`${styles.section__imageContainer} ${isImageLeft ? styles['section__imageContainer--left'] : ''}`}>
          <img 
            src={section.image} 
            alt={section.heading}
            className={styles.section__image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Section; 