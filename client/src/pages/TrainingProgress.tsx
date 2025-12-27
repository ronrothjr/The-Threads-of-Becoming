import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import styles from './TrainingProgress.module.css';
import { logger } from '../utils/logger';

interface ThreadProgress {
  startingCapacity: number;
  currentSelfRating: number;
  sessionCount: number;
  capacityGrowth: number;
  milestones: Array<{
    title: string;
    completedAt: Date;
    description: string;
  }>;
}
interface PatternProgress {
  sessionsFocused: number;
  lastFocusedDate: Date;
  practicesCompleted: string[];
}

interface TrainingProgress {
  userId: string;
  primaryThreads: string[];
  intensity: string;
  threadProgress: Record<string, ThreadProgress>;
  patternProgress: Record<string, PatternProgress>;
  totalSessions: number;
  completedSessions: number;
  currentStreak: number;
  longestStreak: number;
  averageDuration: number;
  startedAt: Date;
  lastSessionAt?: Date;
  nextScheduledSession?: Date;
}

const TrainingProgress: React.FC = () => {
  const [progress, setProgress] = useState<TrainingProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    loadProgress();
  }, []);
  const loadProgress = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      const response = await fetch(`${API_URL}/api/training/progress`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error('Failed to load training progress');
      }

      const data = await response.json();
      setProgress(data);
    } catch (err) {
      logger.error('Failed to load training progress', { error: err });
    } finally {
      setLoading(false);
    }
  };
  const getCapacityColor = (growth: number) => {
    if (growth >= 15) return 'var(--color-teal)';
    if (growth >= 5) return 'var(--color-purple)';
    return '#9ca3af';
  };

  const getStreakEmoji = (streak: number) => {
    if (streak >= 30) return '🔥🔥🔥';
    if (streak >= 14) return '🔥🔥';
    if (streak >= 7) return '🔥';
    return '💫';
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading your training progress...</div>
      </div>
    );
  }
  if (!progress) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>No Training Program Found</h2>
          <p>Start your training journey today.</p>
          <button onClick={() => navigate('/training/setup')}>Setup Training</button>
        </div>
      </div>
    );
  }

  const daysSinceStart = Math.floor((Date.now() - new Date(progress.startedAt).getTime()) / (1000 * 60 * 60 * 24));
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Training Progress</h1>
        <p className={styles.subtitle}>
          Training for {daysSinceStart} days • {progress.completedSessions} sessions completed
        </p>
      </div>

      {/* Overview Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>{getStreakEmoji(progress.currentStreak)}</div>
          <div className={styles.statValue}>{progress.currentStreak}</div>
          <div className={styles.statLabel}>Day Streak</div>
          <div className={styles.statSubtext}>Record: {progress.longestStreak} days</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>✓</div>
          <div className={styles.statValue}>{progress.completedSessions}</div>
          <div className={styles.statLabel}>Sessions Done</div>
          <div className={styles.statSubtext}>
            {Math.round((progress.completedSessions / progress.totalSessions) * 100)}% complete
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>⏱️</div>
          <div className={styles.statValue}>{Math.round(progress.averageDuration)}</div>
          <div className={styles.statLabel}>Avg Minutes</div>
          <div className={styles.statSubtext}>Per session</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statValue}>{progress.primaryThreads.length}</div>
          <div className={styles.statLabel}>Focus Threads</div>
          <div className={styles.statSubtext}>{progress.intensity} intensity</div>
        </div>
      </div>

      {/* Thread Progress */}
      <div className={styles.section}>
        <h2>Thread Capacity Growth</h2>
        <div className={styles.threadsGrid}>
          {progress.primaryThreads.map(thread => {
            const threadData = progress.threadProgress[thread];
            if (!threadData) return null;
            return (
              <div key={thread} className={styles.threadCard}>
                <div className={styles.threadHeader}>
                  <h3>{thread}</h3>
                  <span className={styles.sessionCount}>{threadData.sessionCount} sessions</span>
                </div>
                <div className={styles.capacityBar}>
                  <div className={styles.capacityLabel}>
                    <span>Starting</span>
                    <span>{threadData.startingCapacity}%</span>
                  </div>
                  <div className={styles.barOuter}>
                    <div
                      className={styles.barFill}
                      style={{
                        width: `${threadData.startingCapacity}%`,
                        background: '#e5e7eb'
                      }}
                    />
                  </div>
                  <div className={styles.capacityLabel}>
                    <span>Current</span>
                    <span>{threadData.currentSelfRating}%</span>
                  </div>
                  <div className={styles.barOuter}>
                    <div
                      className={styles.barFill}
                      style={{
                        width: `${threadData.currentSelfRating}%`,
                        background: getCapacityColor(threadData.capacityGrowth)
                      }}
                    />
                  </div>
                </div>
                <div className={styles.growthBadge}>
                  {threadData.capacityGrowth > 0 ? '+' : ''}
                  {threadData.capacityGrowth}% growth
                </div>

                {threadData.milestones.length > 0 && (
                  <div className={styles.milestones}>
                    <h4>Milestones</h4>
                    {threadData.milestones.slice(0, 2).map((milestone, idx) => (
                      <div key={idx} className={styles.milestone}>
                        <span className={styles.milestoneCheck}>✓</span>
                        <span className={styles.milestoneTitle}>{milestone.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Pattern Progress */}
      {Object.keys(progress.patternProgress).length > 0 && (
        <div className={styles.section}>
          <h2>Pattern Work</h2>
          <div className={styles.patternsGrid}>
            {Object.entries(progress.patternProgress).map(([patternName, patternData]) => (
              <div key={patternName} className={styles.patternCard}>
                <h3>{patternName}</h3>
                <p className={styles.patternSessions}>
                  {patternData.sessionsFocused} sessions focused on this pattern
                </p>
                {patternData.practicesCompleted.length > 0 && (
                  <div className={styles.practices}>
                    <h4>Practices Completed</h4>
                    <ul>
                      {patternData.practicesCompleted.slice(0, 3).map((practice, idx) => (
                        <li key={idx}>{practice}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Next Session CTA */}
      <div className={styles.nextSessionCta}>
        <h3>Ready for your next session?</h3>
        <p>Continue building capacity in {progress.primaryThreads.join(', ')}</p>
        <button
          className={styles.continueButton}
          onClick={() => navigate('/training/session')}
        >
          Start Next Session
        </button>
      </div>
    </div>
  );
};

export default TrainingProgress;
