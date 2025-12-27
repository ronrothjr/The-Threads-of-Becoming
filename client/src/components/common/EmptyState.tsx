import React from 'react';
import styles from './EmptyState.module.css';

interface EmptyStateProps {
  /**
   * Icon to display (emoji or image)
   */
  icon?: string;
  /**
   * Main heading text
   */
  title: string;
  /**
   * Supporting description text
   */
  description?: string;
  /**
   * Optional action button
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  /**
   * Size variant
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Additional CSS class
   */
  className?: string;
}

/**
 * EmptyState Component
 *
 * Displays a consistent empty state message with optional icon and action button.
 * Used when lists, tables, or content areas have no data to display.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   icon="📝"
 *   title="No journal entries yet"
 *   description="Start by recording your first observation above."
 * />
 *
 * <EmptyState
 *   icon="🎯"
 *   title="No practice assignments"
 *   description="Complete a training module to receive assignments"
 *   action={{
 *     label: "Browse Modules",
 *     onClick: () => navigate('/training')
 *   }}
 * />
 * ```
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  size = 'medium',
  className = ''
}) => {
  return (
    <div className={`${styles.emptyState} ${styles[size]} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      {action && (
        <button className={styles.actionButton} onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
