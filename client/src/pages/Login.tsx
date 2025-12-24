import React, { useState, useRef, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';
import { login, LoginData } from '../services/api';

const Login: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data: LoginData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };

    try {
      const response = await login(data);

      // Store token
      localStorage.setItem('auth_token', response.access_token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1>Welcome Back</h1>
        <p className={styles.subtitle}>Continue your Threads journey</p>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Your password"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
