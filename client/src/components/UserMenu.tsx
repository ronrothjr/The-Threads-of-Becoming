import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as auth from '../services/api/auth';
import styles from './UserMenu.module.css';

const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetchUserInfo();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
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
  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.userMenu} ref={menuRef}>
      <button
        className={styles.userPill}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User menu"
      >
        <span className={styles.initials}>{getInitials(userEmail)}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.userInfo}>
            <div className={styles.email}>{userEmail}</div>
          </div>
          <div className={styles.divider} />
          <Link
            to="/dashboard"
            className={styles.menuItem}
            onClick={handleMenuItemClick}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </Link>
          <Link to="/blog" className={styles.menuItem} onClick={handleMenuItemClick}>
            Blog
          </Link>
          <Link to="/explore" className={styles.menuItem} onClick={handleMenuItemClick}>
            Explore
          </Link>
          <Link to="/navigate" className={styles.menuItem} onClick={handleMenuItemClick}>
            Navigate
          </Link>
          <Link to="/training" className={styles.menuItem} onClick={handleMenuItemClick}>
            Training
          </Link>
          <Link to="/chapters" className={styles.menuItem} onClick={handleMenuItemClick}>
            Chapters
          </Link>
          <Link to="/mission" className={styles.menuItem} onClick={handleMenuItemClick}>
            Mission
          </Link>
          <div className={styles.divider} />
          <button
            onClick={handleLogout}
            className={styles.menuItem}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
