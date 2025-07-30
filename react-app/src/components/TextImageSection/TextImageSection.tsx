import React from 'react';
import { TextImageSectionProps } from '../../types';
import Button from '../Button/Button';
import styles from './TextImageSection.module.css';

const TextImageSection: React.FC<TextImageSectionProps> = ({ section, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('TextImageSection button clicked:', button.text);
  };

  return (
    <section className={`${styles.textImageSection} ${className}`}>
      <div className={styles.textImageSection__container}>
        {/* Left Column - Text, Buttons, Image */}
        <div className={styles.textImageSection__leftColumn}>
          <div className={styles.textImageSection__content}>
            {section.label && (<div className={styles.textImageSection__label}>{section.label}</div>)}
            <h2 className={styles.textImageSection__heading}>{section.heading}</h2>
            <p className={styles.textImageSection__body}>{section.body}</p>
            {section.bodySmall && (<p className={styles.textImageSection__bodySmall}>{section.bodySmall}</p>)}
            {/* Buttons */}
            {section.buttons && section.buttons.length > 0 && (
              <div className={styles.textImageSection__buttons}>
                {section.buttons.map((button, index) => (
                  <Button key={index} text={button.text} active={button.active} variant={button.active ? 'black' : 'secondary'} onClick={() => handleButtonClick(button)} className={styles.textImageSection__button} />
                ))}
              </div>
            )}
          </div>
          {/* Image below buttons */}
          <div className={styles.textImageSection__imageContainer}>
            <img src={section.image} alt={section.imageDescription || section.heading} className={styles.textImageSection__image} loading="lazy" />
            {section.imageDescription && (<p className={styles.textImageSection__imageDescription}>{section.imageDescription}</p>)}
          </div>
        </div>
        {/* Right Column - Text only */}
        <div className={styles.textImageSection__rightColumn}>
          <div className={styles.textImageSection__content}>
            {section.label && (<div className={styles.textImageSection__label}>{section.label}</div>)}
            <h2 className={styles.textImageSection__heading}>{section.heading}</h2>
            <p className={styles.textImageSection__body}>{section.body}</p>
            {section.bodySmall && (<p className={styles.textImageSection__bodySmall}>{section.bodySmall}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection; 