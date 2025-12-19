import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/threads-logo-transparent.png" alt="Threads of Becoming" className={styles.logoIcon} />
            </Link>
            <Link to="/mission" className={styles.logoText} onClick={closeMobileMenu}>
              <span>Creative Advance<br />Institute</span>
            </Link>
          </div>

          <button
            className={styles.hamburger}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>

          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <Link to="/blog" className={styles.navLink} onClick={closeMobileMenu}>Blog</Link>
            <Link to="/explore" className={styles.navLink} onClick={closeMobileMenu}>Explore</Link>
            <Link to="/navigate" className={styles.navLink} onClick={closeMobileMenu}>Navigate</Link>
            <Link to="/training" className={styles.navLink} onClick={closeMobileMenu}>Training</Link>
            <Link to="/chapters" className={styles.navLink} onClick={closeMobileMenu}>Chapters</Link>
            <Link to="/mission" className={styles.navLink} onClick={closeMobileMenu}>Mission</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
