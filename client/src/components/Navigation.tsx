import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as auth from '../services/api/auth';
import * as assessments from '../services/api/assessments';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);
  const [hasPartialQuickProfile, setHasPartialQuickProfile] = useState(false);
  const [hasPartialJourneyMap, setHasPartialJourneyMap] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isOnQuickProfile = location.pathname === '/assessment/quick-profile';
  const isOnPersonalJourneyMap = location.pathname === '/assessment/personal-journey-map';
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
      // Use centralized assessments service
      const data = await assessments.getStatus();
      setHasCompletedQuickProfile(data.quickProfileCompleted);
      setHasPartialQuickProfile(data.hasPartialQuickProfile);

      // Check for partial Personal Journey Map
      const partialData = await assessments.getPartialPersonalJourneyMap();
      setHasPartialJourneyMap(partialData && partialData.responses && partialData.responses.length > 0);
    } catch (error) {
      console.error('Failed to check assessment status:', error);
    }
  };
  const fetchUserInfo = async () => {
    try {
      // Use centralized auth service
      const data = await auth.getCurrentUser();
      setUserEmail(data.email);
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
      // Navigate to dashboard - the QuickProfile component handles saving
      navigate('/dashboard');
      closeMobileMenu();
      // Refresh status to update button text
      await checkAssessmentStatus();
    } catch (error) {
      console.error('Failed to save progress:', error);
    }
  };
  const handleExitPersonalJourneyMap = async () => {
    // Navigate to dashboard - the PersonalJourneyMap component handles auto-saving
    navigate('/dashboard');
    closeMobileMenu();
    await checkAssessmentStatus();
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
                    {!hasCompletedQuickProfile && !isOnQuickProfile && !isOnPersonalJourneyMap && (
                      <Link to="/assessment/quick-profile" className={styles.assessmentButton} onClick={closeMobileMenu}>
                        {hasPartialQuickProfile ? 'Resume Quick Profile' : 'Quick Profile'}
                      </Link>
                    )}
                    {isOnQuickProfile && (
                      <button onClick={handleExitQuickProfile} className={styles.exitButton}>
                        Pause Quick Profile
                      </button>
                    )}
                    {isOnPersonalJourneyMap && (
                      <button onClick={handleExitPersonalJourneyMap} className={styles.exitButton}>
                        Pause Personal Journey Map
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
                    {!hasCompletedQuickProfile && !isOnQuickProfile && !isOnPersonalJourneyMap && (
                      <Link to="/assessment/quick-profile" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                        {hasPartialQuickProfile ? 'Resume Quick Profile' : 'Quick Profile'}
                      </Link>
                    )}
                    {isOnQuickProfile && (
                      <button onClick={handleExitQuickProfile} className={styles.mobileNavItem}>
                        Pause Quick Profile
                      </button>
                    )}
                    {isOnPersonalJourneyMap && (
                      <button onClick={handleExitPersonalJourneyMap} className={styles.mobileNavItem}>
                        Pause Personal Journey Map
                      </button>
                    )}
                    <div className={styles.mobileDivider} />
                    <Link to="/dashboard" className={styles.mobileNavItem} onClick={closeMobileMenu}>
                      Dashboard
                    </Link>
                    <Link to="/blog" className={styles.mobileNavItem} onClick={closeMobileMenu}>Blog</Link>
                    <Link to="/explore" className={styles.mobileNavItem} onClick={closeMobileMenu}>Explore</Link>
                    <Link to="/navigate" className={styles.mobileNavItem} onClick={closeMobileMenu}>Navigate</Link>
                    <Link to="/training" className={styles.mobileNavItem} onClick={closeMobileMenu}>Training</Link>
                    <Link to="/chapters" className={styles.mobileNavItem} onClick={closeMobileMenu}>Chapters</Link>
                    <Link to="/mission" className={styles.mobileNavItem} onClick={closeMobileMenu}>Mission</Link>
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
