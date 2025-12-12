import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.navContent}>
          <Link to="/" className={styles.logo}>
            <img src="/threads-logo-transparent.png" alt="Creative Advance Institute" className={styles.logoIcon} />
            <span>Creative Advance Institute</span>
          </Link>

          <div className={styles.navLinks}>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
            <Link to="/explore" className={styles.navLink}>Explore</Link>
            <Link to="/navigate" className={styles.navLink}>Navigate</Link>
            <Link to="/training" className={styles.navLink}>Training</Link>
            <Link to="/mission" className={styles.navLink}>Mission</Link>
            <Link to="/portal" className={`${styles.navLink} ${styles.portalLink}`}>Portal</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
