import React from 'react';
import { BackgroundSectionProps } from '../../types';
import Button from '../Button/Button';
import styles from './BackgroundSection.module.css';

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ section, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('BackgroundSection button clicked:', button.text);
  };

  return (
    <section 
      className={`${styles.backgroundSection} ${className}`}
      style={{
        backgroundImage: `url(${section.backgroundImage})`,
      }}
    >
      <div className={styles.backgroundSection__container}>
        <div className={styles.backgroundSection__content}>
          {section.label && (
            <div className={styles.backgroundSection__label}>
              {section.label}
            </div>
          )}
          
          <h2 className={styles.backgroundSection__heading}>
            {section.heading}
          </h2>
          
          <p className={styles.backgroundSection__body}>
            {section.body}
          </p>
          
          {section.bodySmall && (
            <p className={styles.backgroundSection__bodySmall}>
              {section.bodySmall}
            </p>
          )}

          {/* Buttons */}
          {section.buttons && section.buttons.length > 0 && (
            <div className={styles.backgroundSection__buttons}>
              {section.buttons.map((button, index) => (
                <Button
                  key={index}
                  text={button.text}
                  active={button.active}
                  variant={button.active ? 'primary' : 'secondary'}
                  onClick={() => handleButtonClick(button)}
                  className={styles.backgroundSection__button}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection; 