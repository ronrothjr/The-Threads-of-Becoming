import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import * as auth from '../services/api/auth';
import { ApiClientError } from '../services/api/client';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  if (!isOpen) return null;
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Use centralized auth service
      const response = await auth.login({ email, password });
      login(response.access_token);
      onClose();
      navigate('/dashboard');
    } catch (err) {
      // Handle errors from centralized service
      if (err instanceof ApiClientError) {
        setError(err.message);
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSignUpClick = () => {
    onClose();
    navigate('/signup');
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>Log In</h2>
        <p className={styles.subtitle}>Welcome back to your Threads journey</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
        <div className={styles.signupSection}>
          <p>Don't have an account?</p>
          <button onClick={handleSignUpClick} className={styles.signupButton}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginModal;
