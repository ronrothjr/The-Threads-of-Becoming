import React, { useState, useRef, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Auth.module.css';
import { register, RegisterData } from '../services/api';

const Signup: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data: RegisterData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      name: formData.get('name') as string,
    };

    const confirmPassword = formData.get('confirmPassword') as string;

    // Validation
    if (data.password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    if (data.password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await register(data);

      // Registration successful - show verification message
      setSuccess(true);
      setRegisteredEmail(data.email);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div style={{ textAlign: 'center', fontSize: '4rem', marginBottom: '1rem' }}>
            📧
          </div>
          <h1>Check Your Email!</h1>
          <p className={styles.subtitle}>We've sent a verification link to:</p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#14B8A6', margin: '1rem 0' }}>
            {registeredEmail}
          </p>
          <div style={{ background: '#F3F4F6', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#6B7280' }}>
              Click the verification link in the email to activate your account.
              The link will expire in 24 hours.
            </p>
          </div>
          <div className={styles.authFooter}>
            <p>
              Didn't receive the email? Check your spam folder or <Link to="/signup">try again</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1>Create Your Account</h1>
        <p className={styles.subtitle}>Begin your Threads journey</p>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
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
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={8}
              placeholder="At least 8 characters"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              minLength={8}
              placeholder="Re-enter your password"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className={styles.authFooter}>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
