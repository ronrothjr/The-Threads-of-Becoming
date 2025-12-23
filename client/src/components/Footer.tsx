import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* About Section */}
          <div className={styles.footerSection}>
            <h3>Creative Advance Institute</h3>
            <p className={styles.tagline}>See. Hold. Emerge.</p>
            <p className={styles.description}>
              To cultivate the human capacity to hold creative tension—so individuals, communities, and organizations can move from the collapse into extremes toward the emergence of new possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4>Explore</h4>
            <ul className={styles.linkList}>
              <li><Link to="/explore">The Seven Threads</Link></li>
              <li><Link to="/navigate">Tools & Resources</Link></li>
              <li><Link to="/training">Training Pathway</Link></li>
              <li><Link to="/mission">Mission & Roots</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className={styles.footerSection}>
            <h4>Get Involved</h4>
            <ul className={styles.linkList}>
              <li><a href="/training/tier1">Tier 1 Foundations</a></li>
              <li><a href="/training/tier2">Tier 2 Professional</a></li>
              <li><a href="/training/tier3">Tier 3 Facilitator</a></li>
              <li><a href="/donate">Support Our Work</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.footerSection}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com/ronrothjr/The-Threads-of-Becoming" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="mailto:contact@creativeadvance.org" aria-label="Email">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
            <p className={styles.contactInfo}>
              <strong>Email:</strong><br/>
              contact@creativeadvance.org
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Creative Advance Institute. All rights reserved.
          </p>
          <p className={styles.license}>
            Licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
