/**
 * Reusable error display component with retry and dismiss options
 */

import React from 'react';
import styles from './ErrorDisplay.module.css';

interface ErrorDisplayProps {
  error: string | null;
  onRetry?: () => void;
  onDismiss?: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  onRetry,
  onDismiss
}) => {
  if (!error) return null;

  return (
    <div className={styles.error}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <p className={styles.message}>{error}</p>
      </div>
      <div className={styles.actions}>
        {onRetry && (
          <button onClick={onRetry} className={styles.retryButton}>
            Try Again
          </button>
        )}
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={styles.dismissButton}
            aria-label="Dismiss error"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
