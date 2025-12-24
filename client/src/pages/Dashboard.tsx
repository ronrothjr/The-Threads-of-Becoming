import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

interface FocusThread {
  name: string;
  score: number;
  percentage: number;
}

interface UnlockStatus {
  extendedUnlocked: boolean;
  journalDaysCount: number;
  journalRequirementMet: boolean;
  journalDaysRemaining: number;
  practiceDaysCount: number;
}

interface RetakeInfo {
  canRetake: boolean;
  daysUntilRetake: number | null;
  lastTakenDate: string | null;
  nextAvailableDate: string | null;
}

interface Analytics {
  journalStats: {
    totalEntries: number;
    journalDaysCount: number;
    threadBreakdown: Record<string, number>;
    recentActivity: Array<{ date: string; count: number }>;
  };
  practiceStats: {
    totalSessions: number;
    practiceDaysCount: number;
    threadBreakdown: Record<string, number>;
    typeBreakdown: Record<string, number>;
    recentActivity: Array<{ date: string; count: number }>;
  };
  streaks: {
    currentStreak: number;
    longestStreak: number;
  };
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);
  const [hasPartialQuickProfile, setHasPartialQuickProfile] = useState(false);
  const [focusThreads, setFocusThreads] = useState<FocusThread[]>([]);
  const [unlockStatus, setUnlockStatus] = useState<UnlockStatus | null>(null);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [retakeInfo, setRetakeInfo] = useState<RetakeInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }

      // Load assessment status
      const statusResponse = await fetch(`${API_URL}/api/assessments/status`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (statusResponse.ok) {
        const statusData = await statusResponse.json();
        setHasCompletedQuickProfile(statusData.quickProfileCompleted);
        setHasPartialQuickProfile(statusData.hasPartialQuickProfile);

        // Set retake info
        if (statusData.canRetake !== undefined) {
          setRetakeInfo({
            canRetake: statusData.canRetake,
            daysUntilRetake: statusData.daysUntilRetake,
            lastTakenDate: statusData.lastTakenDate,
            nextAvailableDate: statusData.nextAvailableDate
          });
        }

        // If Quick Profile completed, load results for focus threads
        if (statusData.quickProfileCompleted) {
          const resultsResponse = await fetch(`${API_URL}/api/assessments/quick-profile/results`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          if (resultsResponse.ok) {
            const resultsData = await resultsResponse.json();
            const threadScores = resultsData.results.threadScores;

            // Get 2 lowest scoring threads
            const sortedThreads = Object.entries(threadScores)
              .map(([name, data]: [string, any]) => ({
                name,
                score: data.score,
                percentage: data.percentage
              }))
              .sort((a, b) => a.score - b.score)
              .slice(0, 2);

            setFocusThreads(sortedThreads);
          }

          // Load unlock status
          const unlockResponse = await fetch(`${API_URL}/api/assessments/unlock-status`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          if (unlockResponse.ok) {
            const unlockData = await unlockResponse.json();
            setUnlockStatus(unlockData);
          }

          // Load analytics
          const analyticsResponse = await fetch(`${API_URL}/api/practice/analytics`, {
            headers: { 'Authorization': `Bearer ${token}` }
          });

          if (analyticsResponse.ok) {
            const analyticsData = await analyticsResponse.json();
            setAnalytics(analyticsData);
          }
        }
      }
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    navigate('/');
  };

  return (
    <div className={styles.dashboard}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Welcome to Your Threads Journey</h1>
          <p className={styles.subtitle}>Your personal assessment and growth platform</p>
        </div>
      </section>

      <section className={`${styles.content} section-lg`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Quick Profile Assessment</h2>
              <p>Get started with our 21-question assessment to discover your Thread patterns.</p>
              <p className={styles.meta}>5 minutes • Free{retakeInfo?.canRetake ? ' • Available every 30 days' : ''}</p>
              {hasCompletedQuickProfile ? (
                <>
                  <Link to="/assessment/results" className={styles.primaryButton}>
                    View Your Results →
                  </Link>
                  {retakeInfo && retakeInfo.canRetake && (
                    <Link to="/assessment/quick-profile" className={styles.secondaryButton}>
                      Retake Assessment →
                    </Link>
                  )}
                  {retakeInfo && !retakeInfo.canRetake && retakeInfo.daysUntilRetake !== null && retakeInfo.daysUntilRetake > 0 && (
                    <button disabled className={styles.retakeButton}>
                      Retake Available in {retakeInfo.daysUntilRetake} {retakeInfo.daysUntilRetake === 1 ? 'Day' : 'Days'}
                    </button>
                  )}
                </>
              ) : (
                <Link to="/assessment/quick-profile" className={styles.primaryButton}>
                  {hasPartialQuickProfile ? 'Resume Quick Profile →' : 'Start Quick Profile →'}
                </Link>
              )}
            </div>

            {hasCompletedQuickProfile && focusThreads.length > 0 && (
              <div className={styles.card}>
                <h2>Your Focused Practice</h2>
                <p>Based on your Quick Profile, these are your growth-edge threads:</p>
                <div className={styles.focusThreads}>
                  {focusThreads.map((thread) => (
                    <div key={thread.name} className={styles.focusThread}>
                      <span className={styles.threadName}>{thread.name.toUpperCase()}</span>
                      <span className={styles.threadScore}>{thread.percentage.toFixed(0)}%</span>
                    </div>
                  ))}
                </div>
                <p className={styles.focusGuidance}>
                  Use the interactive practice tools to work with these threads daily.
                </p>
                <Link to="/practice-tool" className={styles.primaryButton}>
                  Start Interactive Practice →
                </Link>
              </div>
            )}

            {hasCompletedQuickProfile && unlockStatus && (
              <div className={styles.card}>
                <h2>Unlock Extended Assessment</h2>
                <p>Journal your practice observations to unlock deeper analysis.</p>
                <div className={styles.unlockProgress}>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${(unlockStatus.journalDaysCount / 10) * 100}%` }}
                    />
                  </div>
                  <p className={styles.progressText}>
                    {unlockStatus.extendedUnlocked ? (
                      <span className={styles.unlocked}>✓ Extended Assessment Unlocked!</span>
                    ) : (
                      <span>
                        {unlockStatus.journalDaysCount} / 10 days completed
                        {unlockStatus.journalDaysRemaining > 0 && (
                          <span className={styles.remaining}> • {unlockStatus.journalDaysRemaining} days remaining</span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
                {unlockStatus.extendedUnlocked ? (
                  <Link to="/assessment/extended" className={styles.primaryButton}>
                    Take Extended Assessment →
                  </Link>
                ) : (
                  <Link to="/journal" className={styles.secondaryButton}>
                    Continue Journaling →
                  </Link>
                )}
              </div>
            )}

            {hasCompletedQuickProfile && analytics && (analytics.journalStats.totalEntries > 0 || analytics.practiceStats.totalSessions > 0) && (
              <>
                <div className={styles.card}>
                  <h2>Your Practice Analytics</h2>

                  <div className={styles.streaks}>
                    <div className={styles.streakCard}>
                      <div className={styles.streakNumber}>{analytics.streaks.currentStreak}</div>
                      <div className={styles.streakLabel}>Day Streak</div>
                    </div>
                    <div className={styles.streakCard}>
                      <div className={styles.streakNumber}>{analytics.streaks.longestStreak}</div>
                      <div className={styles.streakLabel}>Longest Streak</div>
                    </div>
                  </div>

                  <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                      <div className={styles.statNumber}>{analytics.journalStats.totalEntries}</div>
                      <div className={styles.statLabel}>Journal Entries</div>
                      <div className={styles.statSubtext}>{analytics.journalStats.journalDaysCount} unique days</div>
                    </div>
                    <div className={styles.statBox}>
                      <div className={styles.statNumber}>{analytics.practiceStats.totalSessions}</div>
                      <div className={styles.statLabel}>Practice Sessions</div>
                      <div className={styles.statSubtext}>{analytics.practiceStats.practiceDaysCount} unique days</div>
                    </div>
                  </div>
                </div>

                {Object.keys(analytics.journalStats.threadBreakdown).length > 0 && (
                  <div className={styles.card}>
                    <h2>Thread Focus Distribution</h2>
                    <p className={styles.subtitle}>Where you've been directing your attention</p>

                    <div className={styles.threadBreakdown}>
                      <h3>Journal Entries</h3>
                      {Object.entries(analytics.journalStats.threadBreakdown)
                        .sort(([, a], [, b]) => b - a)
                        .map(([thread, count]) => {
                          const total = analytics.journalStats.totalEntries;
                          const percentage = (count / total) * 100;
                          return (
                            <div key={`journal-${thread}`} className={styles.threadBar}>
                              <div className={styles.threadBarLabel}>
                                <span>{thread.toUpperCase()}</span>
                                <span>{count} entries ({percentage.toFixed(0)}%)</span>
                              </div>
                              <div className={styles.threadBarTrack}>
                                <div
                                  className={styles.threadBarFill}
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </div>

                    {Object.keys(analytics.practiceStats.threadBreakdown).length > 0 && (
                      <div className={styles.threadBreakdown}>
                        <h3>Practice Sessions</h3>
                        {Object.entries(analytics.practiceStats.threadBreakdown)
                          .sort(([, a], [, b]) => b - a)
                          .map(([thread, count]) => {
                            const total = analytics.practiceStats.totalSessions;
                            const percentage = (count / total) * 100;
                            return (
                              <div key={`practice-${thread}`} className={styles.threadBar}>
                                <div className={styles.threadBarLabel}>
                                  <span>{thread.toUpperCase()}</span>
                                  <span>{count} sessions ({percentage.toFixed(0)}%)</span>
                                </div>
                                <div className={styles.threadBarTrack}>
                                  <div
                                    className={styles.threadBarFill}
                                    style={{ width: `${percentage}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            {!hasCompletedQuickProfile && (
              <>
                <div className={styles.card}>
                  <h2>Extended Journey</h2>
                  <p>Deep dive into your collapse patterns with our comprehensive 70-question assessment.</p>
                  <p className={styles.meta}>20-25 minutes</p>
                  <button className={styles.secondaryButton} disabled>
                    Complete Quick Profile First
                  </button>
                </div>

                <div className={styles.card}>
                  <h2>Your Progress</h2>
                  <p>Track your growth through the See, Hold, Emerge movements.</p>
                  <div className={styles.progressPlaceholder}>
                    <p>📊 Assessment results will appear here</p>
                  </div>
                </div>

                <div className={styles.card}>
                  <h2>Practice Journal</h2>
                  <p>Record your daily Thread navigation and insights.</p>
                  <button className={styles.secondaryButton} disabled>
                    Complete Quick Profile First
                  </button>
                </div>
              </>
            )}
          </div>

          <div className={styles.accountSection}>
            <h2>Account</h2>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log Out
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
