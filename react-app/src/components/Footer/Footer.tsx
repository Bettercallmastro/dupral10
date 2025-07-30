import React from 'react';
import { FooterProps } from '../../types';
import styles from './Footer.module.css';

const Footer: React.FC<FooterProps> = ({ data, className = '' }) => {
  const handleSocialClick = (social: any) => {
    if (social.url) {
      window.open(social.url, '_blank');
    }
    console.log('Social clicked:', social.name);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          {/* Logo Section */}
          <div className={styles.footer__logoSection}>
            <a href="/" className={styles.footer__logo} onClick={handleLogoClick}>
              {data.logo || 'AQ'}
            </a>
            <p className={styles.footer__description}>
              {data.description}
            </p>
          </div>

          {/* Menu Section */}
          <div className={styles.footer__menuSection}>
            {data.menuColumns.map((column, index) => (
              <div key={index} className={styles.footer__menuColumn}>
                <h3 className={styles.footer__menuTitle}>
                  {column.title}
                </h3>
                <ul className={styles.footer__menuList}>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className={styles.footer__menuItem}>
                      <a href={link.url} className={styles.footer__menuLink}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Section */}
          <div className={styles.footer__socialSection}>
            <h3 className={styles.footer__socialTitle}>
              Follow Us
            </h3>
            <div className={styles.footer__socialIcons}>
              {data.socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.footer__socialIcon}
                  onClick={() => handleSocialClick(social)}
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.footer__socialSvg}>
                    {/* Social icon paths would go here based on social.name */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            {data.copyright}
          </p>
          <div className={styles.footer__legal}>
            {data.legalLinks.map((link, index) => (
              <a key={index} href={link.url} className={styles.footer__legalLink}>
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 