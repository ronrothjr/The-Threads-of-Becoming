import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';
import { API_URL } from '../config';

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [message, setMessage] = useState('');
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    // Prevent double verification in React StrictMode
    if (hasVerified) return;

    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('No verification token provided');
      return;
    }

    setHasVerified(true);
    verifyEmail(token);
  }, [searchParams, hasVerified]);

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch(
        `${API_URL}/api/auth/verify-email?token=${token}`,
        {
          method: 'GET',
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Verification failed');
      }

      // Store the token if provided
      if (data.access_token) {
        localStorage.setItem('auth_token', data.access_token);
      }

      setStatus('success');
      setMessage(data.message || 'Email verified successfully!');

      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Verification failed');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        {status === 'verifying' && (
          <>
            <h1>Verifying Your Email...</h1>
            <p className={styles.subtitle}>Please wait while we verify your email address</p>
            <div style={{ textAlign: 'center', fontSize: '3rem', margin: '2rem 0' }}>
              ⏳
            </div>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ textAlign: 'center', fontSize: '4rem', marginBottom: '1rem' }}>
              ✅
            </div>
            <h1>Email Verified!</h1>
            <p className={styles.subtitle}>{message}</p>
            <p style={{ textAlign: 'center', color: '#6B7280', marginTop: '1rem' }}>
              Redirecting to your dashboard...
            </p>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ textAlign: 'center', fontSize: '4rem', marginBottom: '1rem' }}>
              ❌
            </div>
            <h1>Verification Failed</h1>
            <div className={styles.errorMessage}>
              {message}
            </div>
            <div className={styles.authFooter}>
              <p>
                <Link to="/login">Go to Login</Link> or <Link to="/signup">Sign Up Again</Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
