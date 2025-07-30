import React, { useEffect, useRef } from 'react';
import { SliderProps } from '../../types';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './Slider.module.css';

const Slider: React.FC<SliderProps> = ({ cards, title, description, className = '' }) => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Load SwiperJS dynamically
    const loadSwiper = async () => {
      if (typeof window !== 'undefined' && !(window as any).Swiper) {
        // Load Swiper CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Load Swiper JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
        script.onload = initSwiper;
        document.head.appendChild(script);
      } else if ((window as any).Swiper) {
        initSwiper();
      }
    };

    loadSwiper();

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, [cards]);

  const initSwiper = () => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      swiperRef.current = new (window as any).Swiper('.swiper', {
        slidesPerView: 4.2, // 4 card visibili + pezzetto della quinta
        spaceBetween: 15,
        loop: true,
        centeredSlides: false,
        
        breakpoints: {
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4.2,
            spaceBetween: 30,
          },
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        },
        
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        
        effect: 'slide',
        speed: 600,
        
        a11y: {
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
        },
        
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
        
        mousewheel: {
          forceToAxis: true,
        },
        
        touchEventsTarget: 'container',
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        
        // Assicuriamoci che le frecce siano sempre attive
        allowTouchMove: true,
        simulateTouch: true,
        
        // Configurazione per loop infinito
        loopAdditionalSlides: 2,
        loopedSlides: 2,
      });
    }
  };

  const handleButtonClick = (button: any) => {
    if (button.url) {
      window.open(button.url, '_blank');
    }
    console.log('Slider button clicked:', button.text);
  };

  return (
    <section className={`${styles.slider} ${className}`}>
      <div className={styles.slider__container}>
        {/* Top Section */}
        <div className={styles.slider__topSection}>
          <div className={styles.slider__content}>
            <div className={styles.slider__label}>Label</div>
            <h2 className={styles.slider__heading}>Heading</h2>
            <p className={styles.slider__body}>Body</p>
            <p className={styles.slider__bodySmall}>Body small</p>
            <div className={styles.slider__buttons}>
              <Button text="Button" variant="black" />
              <Button text="Button" variant="secondary" />
            </div>
          </div>
        </div>
        
        {/* Slider Section */}
        <div className="swiper">
          <div className="swiper-wrapper">
            {cards.map((card, index) => (
              <div key={index} className="swiper-slide">
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider; 