import React from 'react';
import { CardItem } from '../../types';
import Button from '../Button/Button';
import styles from './Card.module.css';

interface CardProps {
  card: CardItem;
  className?: string;
}

const Card: React.FC<CardProps> = ({ card, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.card__imageContainer}>
        <img 
          src="/images/image_default.png" 
          alt="Card Image" 
          className={styles.card__image}
          loading="lazy"
        />
        <div className={styles.card__badge}>BADGE</div>
      </div>
      
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>Heading</h3>
        <p className={styles.card__body}>Body</p>
        <p className={styles.card__bodySmall}>Body small</p>
        
        <div className={styles.card__buttons}>
          <Button text="Button" variant="black" className={styles.card__button} />
          <Button text="Button" variant="secondary" className={styles.card__button} />
        </div>
      </div>
    </div>
  );
};

export default Card; 