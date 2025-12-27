/**
 * Reusable progress bar component with customizable appearance
 */

import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number; // Current value (0-max)
  max?: number; // Maximum value (default: 100)
  label?: string; // Optional label above the bar
  showPercentage?: boolean; // Show percentage text
  color?: 'teal' | 'purple' | 'blue' | 'green' | 'orange' | 'red';
  size?: 'small' | 'medium' | 'large';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  color = 'teal',
  size = 'medium'
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={`${styles.progressBarContainer} ${styles[size]}`}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.barWrapper}>
        <div className={styles.progressBar}>
          <div
            className={`${styles.progressFill} ${styles[color]}`}
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={label || `Progress: ${Math.round(percentage)}%`}
          />
        </div>
        {showPercentage && (
          <div className={styles.percentage}>{Math.round(percentage)}%</div>
        )}
      </div>
    </div>
  );
};
