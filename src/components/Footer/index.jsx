import React from 'react';
import styles from './index.module.css';

const Footer = () => {

  return (
    <footer className={styles.footer}> 
      <div className={styles.footerContent}>
        <nav className={styles.footerLinks}>
          <a href="/sobre-nos" className={styles.footerLink}>Sobre nós</a>
          <a href="/politica-de-privacidade" className={styles.footerLink}>Política de Privacidade</a>
          <a href="/termos-de-uso" className={styles.footerLink}>Termos de Uso</a>
        </nav>
        <p className={styles.copyright}>
          Copyright © 2025 By CineStar
        </p>
      </div>
    </footer> 
  );
};

export default Footer;
