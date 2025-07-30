import React from 'react';
import { ButtonProps } from '../../types';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
  text,
  active = false,
  variant = 'secondary',
  onClick,
  className = '',
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    active ? styles['button--active'] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button; 