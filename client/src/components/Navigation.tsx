import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import styles from './Navigation.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);
  const [hasPartialQuickProfile, setHasPartialQuickProfile] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isOnQuickProfile = location.pathname === '/assessment/quick-profile';

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

  useEffect(() => {
    if (isAuthenticated) {
      checkAssessmentStatus();
      fetchUserInfo();
    }
  }, [isAuthenticated]);

  const checkAssessmentStatus = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return;

      const response = await fetch(`${API_URL}/api/assessments/status`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setHasCompletedQuickProfile(data.quickProfileCompleted);
        setHasPartialQuickProfile(data.hasPartialQuickProfile);
      }
    } catch (error) {
      console.error('Failed to check assessment status:', error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return;

      const response = await fetch(`${API_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUserEmail(data.email);
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    }
  };

  const getInitials = (email: string): string => {
    if (!email) return 'U';
    const name = email.split('@')[0];
    const parts = name.split(/[._-]/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const handleExitQuickProfile = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/dashboard');
        closeMobileMenu();
        return;
      }

      // Get current responses from QuickProfile state (if any)
      // For now, just navigate - the QuickProfile component handles saving
      navigate('/dashboard');
      closeMobileMenu();

      // Refresh status to update button text
      await checkAssessmentStatus();
    } catch (error) {
      console.error('Failed to save progress:', error);
      navigate('/dashboard');
      closeMobileMenu();
    }
  };

  const handleLogout = () => {
    logout();
    closeMobileMenu();
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    closeMobileMenu();
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
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
              {isAuthenticated ? (
                <>
                  {/* Desktop: Show button + user menu */}
                  <div className={styles.desktopAuthNav}>
                    {!hasCompletedQuickProfile && !isOnQuickProfile && (
                      <Link to="/assessment/quick-profile" className={styles.assessmentButton} onClick={closeMobileMenu}>
                        {hasPartialQuickProfile ? 'Resume Quick Profile' : 'Quick Profile'}
                      </Link>
                    )}
                    {isOnQuickProfile && (
                      <button onClick={handleExitQuickProfile} className={styles.exitButton}>
                        Exit Quick Profile
                      </button>
                    )}
                    <div className={styles.userMenuWrapper}>
                      <UserMenu />
                    </div>
                  </div>

                  {/* Mobile: Show all items inline */}
                  <div className={styles.mobileAuthNav}>
                    {userEmail && (
                      <div className={styles.mobileUserInfo}>
                        <div className={styles.mobileUserPill}>
                          {getInitials(userEmail)}
                        </div>
                        <div className={styles.mobileUserEmail}>{userEmail}</div>
                      </div>
                    )}

                    {!hasCompletedQuickProfile && !isOnQuickProfile && (
                      <Link to="/assessment/quick-profile" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        {hasPartialQuickProfile ? 'Resume Quick Profile' : 'Quick Profile'}
                      </Link>
                    )}
                    {isOnQuickProfile && (
                      <button onClick={handleExitQuickProfile} className={styles.mobileNavItem}>
                        Exit Quick Profile
                      </button>
                    )}

                    <div className={styles.mobileDivider} />

                    <Link to="/dashboard" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                      Dashboard
                    </Link>

                    <div className={styles.mobileDivider} />

                    <Link to="/blog" className={styles.mobileNavItem} onClick={closeMobileMenu}>Blog</Link>
                    <Link to="/explore" className={styles.mobileNavItem} onClick={closeMobileMenu}>Explore</Link>
                    <Link to="/navigate" className={styles.mobileNavItem} onClick={closeMobileMenu}>Navigate</Link>
                    <Link to="/training" className={styles.mobileNavItem} onClick={closeMobileMenu}>Training</Link>
                    <Link to="/chapters" className={styles.mobileNavItem} onClick={closeMobileMenu}>Chapters</Link>
                    <Link to="/mission" className={styles.mobileNavItem} onClick={closeMobileMenu}>Mission</Link>

                    <div className={styles.mobileDivider} />

                    <button onClick={handleLogout} className={styles.mobileNavItem}>
                      Log Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/blog" className={styles.navLink} onClick={closeMobileMenu}>Blog</Link>
                  <Link to="/explore" className={styles.navLink} onClick={closeMobileMenu}>Explore</Link>
                  <Link to="/navigate" className={styles.navLink} onClick={closeMobileMenu}>Navigate</Link>
                  <Link to="/training" className={styles.navLink} onClick={closeMobileMenu}>Training</Link>
                  <Link to="/chapters" className={styles.navLink} onClick={closeMobileMenu}>Chapters</Link>
                  <Link to="/mission" className={styles.navLink} onClick={closeMobileMenu}>Mission</Link>
                  <button onClick={openLoginModal} className={styles.loginButton}>
                    Log In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default Navigation;
