import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as assessments from '../services/api/assessments';
import * as practice from '../services/api/practice';
import * as training from '../services/api/training';
import { UnlockAnalysis, PracticeAnalytics } from '../services/api/types';
import { getLowestThreads } from '../utils/threadUtils';
import styles from './Dashboard.module.css';

interface FocusThread {
  name: string;
  score: number;
  percentage: number;
}
interface RetakeInfo {
  canRetake: boolean;
  daysUntilRetake: number | null;
  lastTakenDate: string | null;
  nextAvailableDate: string | null;
}
const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hasCompletedQuickProfile, setHasCompletedQuickProfile] = useState(false);
  const [hasPartialQuickProfile, setHasPartialQuickProfile] = useState(false);
  const [hasCompletedJourneyMap, setHasCompletedJourneyMap] = useState(false);
  const [hasPartialJourneyMap, setHasPartialJourneyMap] = useState(false);
  const [focusThreads, setFocusThreads] = useState<FocusThread[]>([]);
  const [unlockAnalysis, setUnlockAnalysis] = useState<UnlockAnalysis | null>(null);
  const [analytics, setAnalytics] = useState<PracticeAnalytics | null>(null);
  const [retakeInfo, setRetakeInfo] = useState<RetakeInfo | null>(null);
  const [pendingAssignmentsCount, setPendingAssignmentsCount] = useState(0);
  const [hasTrainingProgram, setHasTrainingProgram] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadDashboardData();
  }, []);
  const loadDashboardData = async () => {
    try {
      // Use centralized assessments service
      const statusData = await assessments.getStatus();
      setHasCompletedQuickProfile(statusData.quickProfileCompleted);
      setHasPartialQuickProfile(statusData.hasPartialQuickProfile);
      setHasCompletedJourneyMap(statusData.personalJourneyMapCompleted || false);

      // Set retake info
      if (statusData.canRetake !== undefined) {
        setRetakeInfo({
          canRetake: statusData.canRetake,
          daysUntilRetake: statusData.daysUntilRetake || null,
          lastTakenDate: statusData.lastTakenDate || null,
          nextAvailableDate: statusData.nextAvailableDate || null
        });
      }

      // If Quick Profile completed, load results for focus threads
      if (statusData.quickProfileCompleted) {
        const resultsData = await assessments.getQuickProfileResults();
        const threadScores = resultsData.results.threadScores;
        // Get 2 lowest scoring threads using utility function
        const lowestThreads = getLowestThreads(threadScores, 2);
        setFocusThreads(lowestThreads);

        // Load Personal Journey Map unlock analysis
        const unlockData = await assessments.getUnlockAnalysis();
        setUnlockAnalysis(unlockData as any);

        // Check for partial Personal Journey Map
        const partialData = await assessments.getPartialPersonalJourneyMap();
        setHasPartialJourneyMap(partialData && partialData.responses && partialData.responses.length > 0);

        // Load analytics using practice service
        const analyticsData = await practice.getAnalytics();
        setAnalytics(analyticsData as any);

        // Load pending practice assignments count
        const assignmentsData = await practice.getPendingAssignments();
        setPendingAssignmentsCount(assignmentsData.length);

        // Check if user has initialized training program
        try {
          await training.getProgress();
          setHasTrainingProgram(true);
        } catch (error) {
          // User hasn't initialized training yet
          setHasTrainingProgram(false);
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
          <div className={styles.layoutGrid}>
            {/* Left Column */}
            <div className={styles.leftColumn}>
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
            <div className={styles.card}>
                <h2>Thread Capacity Training</h2>
                <p>Structured training program to systematically build capacity in your growth-edge threads.</p>
                <ul className={styles.featureList}>
                  <li>Personalized daily sessions based on your assessment</li>
                  <li>Progressive skill-building across all 7 threads</li>
                  <li>Track capacity growth over time</li>
                </ul>
                {hasTrainingProgram ? (
                  <Link to="/training/dashboard" className={styles.primaryButton}>
                    Continue Your Training →
                  </Link>
                ) : (
                  <Link to="/training/setup" className={styles.primaryButton}>
                    Setup Your Training Program →
                  </Link>
                )}
            </div>
            </div>
            {pendingAssignmentsCount > 0 && (
              <div className={styles.card}>
                <h2>Practice Assignments</h2>
                <p>You have {pendingAssignmentsCount} practice {pendingAssignmentsCount === 1 ? 'assignment' : 'assignments'} ready to complete.</p>
                <ul className={styles.featureList}>
                  <li>Apply your learning between training sessions</li>
                  <li>Build sustainable practice habits</li>
                  <li>Track your growth over time</li>
                </ul>
                <Link to="/practice-assignments" className={styles.primaryButton}>
                  View Assignments ({pendingAssignmentsCount}) →
                </Link>
              </div>
            )}
            {/* Center Column - Analytics */}
            {hasCompletedQuickProfile && analytics && (analytics.journalStats.totalEntries > 0 || analytics.practiceStats.totalSessions > 0) && (
              <div className={styles.centerColumn}>
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
              </div>
            )}
            {/* Right Column - Personal Journey Map */}
            {hasCompletedQuickProfile && unlockAnalysis && (
              <div className={styles.rightColumn}>
                <div className={styles.card}>
                  <h2>Personal Journey Map</h2>
                  <p className={styles.subtitle}>$10 one-time purchase • Free for Premium subscribers</p>
                  <p>Complete these requirements to unlock your personalized 70-question journey map:</p>
                  <div className={styles.requirementsList}>
                  {/* Requirement 1: Journal Days */}
                  <div className={styles.requirement}>
                    <div className={styles.requirementHeader}>
                      <span className={styles.requirementIcon}>
                        {unlockAnalysis.requirements.journalDays.met ? '✓' : '○'}
                      </span>
                      <span className={styles.requirementTitle}>Journal on 10 different days</span>
                    </div>
                    <div className={styles.requirementProgress}>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${(unlockAnalysis.requirements.journalDays.current / unlockAnalysis.requirements.journalDays.required) * 100}%` }}
                        />
                      </div>
                      <span className={styles.requirementCount}>
                        {unlockAnalysis.requirements.journalDays.current} / {unlockAnalysis.requirements.journalDays.required}
                      </span>
                    </div>
                  </div>
                  {/* Requirement 2: Practice Sessions */}
                  <div className={styles.requirement}>
                    <div className={styles.requirementHeader}>
                      <span className={styles.requirementIcon}>
                        {unlockAnalysis.requirements.practiceSessions.met ? '✓' : '○'}
                      </span>
                      <span className={styles.requirementTitle}>Complete 5 practice sessions with notes</span>
                    </div>
                    <div className={styles.requirementProgress}>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${(unlockAnalysis.requirements.practiceSessions.current / unlockAnalysis.requirements.practiceSessions.required) * 100}%` }}
                        />
                      </div>
                      <span className={styles.requirementCount}>
                        {unlockAnalysis.requirements.practiceSessions.current} / {unlockAnalysis.requirements.practiceSessions.required}
                      </span>
                    </div>
                  </div>
                  {/* Requirement 3: Thread Diversity */}
                  <div className={styles.requirement}>
                    <div className={styles.requirementHeader}>
                      <span className={styles.requirementIcon}>
                        {unlockAnalysis.requirements.threadDiversity.met ? '✓' : '○'}
                      </span>
                      <span className={styles.requirementTitle}>Practice across 3 different threads</span>
                    </div>
                    <div className={styles.requirementProgress}>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${(unlockAnalysis.requirements.threadDiversity.current / unlockAnalysis.requirements.threadDiversity.required) * 100}%` }}
                        />
                      </div>
                      <span className={styles.requirementCount}>
                        {unlockAnalysis.requirements.threadDiversity.current} / {unlockAnalysis.requirements.threadDiversity.required}
                      </span>
                    </div>
                  </div>
                  {/* Requirement 4: Time Elapsed */}
                  <div className={styles.requirement}>
                    <div className={styles.requirementHeader}>
                      <span className={styles.requirementIcon}>
                        {unlockAnalysis.requirements.daysSinceQuickProfile.met ? '✓' : '○'}
                      </span>
                      <span className={styles.requirementTitle}>14 days since Quick Profile</span>
                    </div>
                    <div className={styles.requirementProgress}>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${(unlockAnalysis.requirements.daysSinceQuickProfile.current / unlockAnalysis.requirements.daysSinceQuickProfile.required) * 100}%` }}
                        />
                      </div>
                      <span className={styles.requirementCount}>
                        {unlockAnalysis.requirements.daysSinceQuickProfile.current} / {unlockAnalysis.requirements.daysSinceQuickProfile.required} days
                      </span>
                    </div>
                  </div>
                </div>
                {unlockAnalysis?.insights?.personalizedMessage && (
                  <p className={styles.unlockMessage}>{unlockAnalysis.insights.personalizedMessage}</p>
                )}
                {/* DEV: Override for local testing */}
                {true || unlockAnalysis?.isUnlocked ? (
                  hasCompletedJourneyMap ? (
                    <Link to="/assessment/personal-journey-map/results" className={styles.primaryButton}>
                      View Your Journey Map Results →
                    </Link>
                  ) : hasPartialJourneyMap ? (
                    <Link to="/assessment/personal-journey-map" className={styles.primaryButton}>
                      Resume Personal Journey Map →
                    </Link>
                  ) : (
                    <Link to="/assessment/personal-journey-map" className={styles.primaryButton}>
                      Start Personal Journey Map ($10) →
                    </Link>
                  )
                ) : (
                  <div className={styles.actionButtons}>
                    <Link to="/journal" className={styles.secondaryButton}>
                      Continue Journaling
                    </Link>
                    <Link to="/practice-tool" className={styles.secondaryButton}>
                      Practice HOLD
                    </Link>
                  </div>
                )}
              </div>
            </div>
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
                </div>
              </>
            )}
          </div>
      </section>
      <div className={styles.accountSection}>
        <h2>Account</h2>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
