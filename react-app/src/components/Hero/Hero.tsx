import React from 'react';
import { HeroProps } from '../../types';
import Button from '../Button/Button';
import styles from './Hero.module.css';

const Hero: React.FC<HeroProps> = ({ hero, className = '' }) => {
  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('Button clicked:', button.text);
  };

  return (
    <section className={`${styles.hero} ${className}`}>
      <div 
        className={styles.hero__background}
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className={styles.hero__overlay}></div>
      </div>
    </section>
  );
};

export default Hero; 