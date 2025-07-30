import React from 'react';
import { TextButtonsSectionProps } from '../../types';
import Button from '../Button/Button';
import styles from './TextButtonsSection.module.css';

const TextButtonsSection: React.FC<TextButtonsSectionProps> = ({ section, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('TextButtonsSection button clicked:', button.text);
  };

  return (
    <section className={`${styles.textButtonsSection} ${className}`}>
      <div className={styles.textButtonsSection__container}>
        {/* Text Content */}
        <div className={styles.textButtonsSection__content}>
          {section.label && (
            <div className={styles.textButtonsSection__label}>
              {section.label}
            </div>
          )}
          
          <h2 className={styles.textButtonsSection__heading}>
            {section.heading}
          </h2>
          
          <p className={styles.textButtonsSection__body}>
            {section.body}
          </p>
          
          {section.bodySmall && (
            <p className={styles.textButtonsSection__bodySmall}>
              {section.bodySmall}
            </p>
          )}
        </div>
        
        {/* Buttons */}
        {section.buttons && section.buttons.length > 0 && (
          <div className={styles.textButtonsSection__buttons}>
            {section.buttons.map((button, index) => (
              <Button
                key={index}
                text={button.text}
                active={button.active}
                variant={button.active ? 'black' : 'secondary'}
                onClick={() => handleButtonClick(button)}
                className={styles.textButtonsSection__button}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TextButtonsSection; 