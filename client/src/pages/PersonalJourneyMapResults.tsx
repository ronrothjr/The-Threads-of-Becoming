import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './PersonalJourneyMapResults.module.css';
import { logger } from '../utils/logger';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

interface ThreadScore {
  score: number;
  percentage: number;
  collapseDirection: string;
}

interface Results {
  threadScores: {
    presence: ThreadScore;
    consent: ThreadScore;
    memory: ThreadScore;
    pause: ThreadScore;
    embodiment: ThreadScore;
    uncertainty: ThreadScore;
    becoming: ThreadScore;
  };
  movementAverages: {
    see: number;
    hold: number;
    emerge: number;
  };
  holdPracticeMapping: {
    halt: string[];
    observe: string[];
    look: string[];
    decide: string[];
  };
}

interface PatternInsight {
  category: string;
  insight: string;
  evidence: string[];
  recommendation: string;
}

interface PatternAnalysis {
  insights: PatternInsight[];
  summary: string;
  threadFocus: Record<string, number>;
  commonThemes: string[];
  practiceConsistency: {
    totalDays: number;
    averageGap: number;
    longestStreak: number;
    threadDiversity: number;
  };
}

interface CollapsePattern {
  id: string;
  name: string;
  coreCollapse: string[];
  description: string;
  experience: string;
  behavioralSigns: string[];
  theTrap: string;
  breakingThePattern: string[];
  holdFocus: string;
  deeperFears: string[];
  deeperNeeds: string[];
  customPractices: string[];
  detectionConfidence: number;
}

interface PatternCascade {
  trigger: string;
  sequence: Array<{
    thread: string;
    collapseType: string;
    effect: string;
  }>;
  finalPattern: string;
}

interface DevelopmentPath {
  priority: 'immediate' | 'near-term' | 'long-term';
  thread: string;
  currentState: string;
  targetState: string;
  rationale: string;
  practices: string[];
  estimatedWeeks: number;
}

interface ComprehensiveAnalysis {
  detectedPatterns: CollapsePattern[];
  cascades: PatternCascade[];
  developmentPath: DevelopmentPath[];
}

const PersonalJourneyMapResults: React.FC = () => {
  const [results, setResults] = useState<Results | null>(null);
  const [patternAnalysis, setPatternAnalysis] = useState<PatternAnalysis | null>(null);
  const [comprehensiveAnalysis, setComprehensiveAnalysis] = useState<ComprehensiveAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }

      logger.debug('PersonalJourneyMapResults loading');

      // Fetch results, pattern analysis, and comprehensive analysis in parallel
      const [resultsResponse, patternResponse, comprehensiveResponse] = await Promise.all([
        fetch(`${API_URL}/api/assessments/personal-journey-map/results`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_URL}/api/assessments/personal-journey-map/pattern-analysis`, {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch(`${API_URL}/api/assessments/personal-journey-map/comprehensive-analysis`, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!resultsResponse.ok) {
        logger.error('Failed to load Personal Journey Map results', { status: resultsResponse.status });
        throw new Error('Failed to load results');
      }

      const resultsData = await resultsResponse.json();
      logger.debug('PersonalJourneyMapResults loaded', {
        presenceScore: resultsData.results?.threadScores?.presence?.score,
      });

      setResults(resultsData.results);

      // Pattern analysis is optional - don't fail if it errors
      if (patternResponse.ok) {
        const patternData = await patternResponse.json();
        logger.debug('Pattern analysis loaded', {
          insightsCount: patternData.insights?.length || 0,
        });
        setPatternAnalysis(patternData);
      } else {
        logger.error('Failed to load pattern analysis', { status: patternResponse.status });
      }

      // Comprehensive analysis is optional - don't fail if it errors
      if (comprehensiveResponse.ok) {
        const comprehensiveData = await comprehensiveResponse.json();
        logger.debug('Comprehensive analysis loaded', {
          patternsDetected: comprehensiveData.detectedPatterns?.length || 0,
        });
        setComprehensiveAnalysis(comprehensiveData);
      } else {
        logger.error('Failed to load comprehensive analysis', { status: comprehensiveResponse.status });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load results');
    } finally {
      setLoading(false);
    }
  };

  const getCapacityLevel = (percentage: number): { level: string; color: string } => {
    if (percentage >= 83) return { level: 'High', color: '#10B981' };
    if (percentage >= 58) return { level: 'Moderate', color: '#F59E0B' };
    if (percentage >= 33) return { level: 'Low', color: '#EF4444' };
    return { level: 'Very Low', color: '#991B1B' };
  };

  const getCollapseDirectionLabel = (direction: string, thread: string): string => {
    const directions: Record<string, Record<string, string>> = {
      presence: { low: 'Withdrawal/Isolation', balanced: 'Present & Connected' },
      consent: { low: 'Coercion/Control', balanced: 'Mutual Agency' },
      memory: { low: 'Trapped in Story', balanced: 'Story as Resource' },
      pause: { low: 'Reactive/Impulsive', balanced: 'Responsive Pause' },
      embodiment: { low: 'Disembodied', balanced: 'Embodied Awareness' },
      uncertainty: { low: 'Grasping for Certainty', balanced: 'Comfortable with Unknown' },
      becoming: { low: 'Identity Rigidity', balanced: 'Adaptive Identity' },
    };

    return directions[thread]?.[direction] || direction;
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading your Personal Journey Map...</div>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Unable to Load Results</h2>
          <p>{error || 'No results found'}</p>
          <Link to="/dashboard" className={styles.button}>Return to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Your Personal Journey Map</h1>
        <p className={styles.subtitle}>Comprehensive Pattern Analysis & Development Path</p>
      </header>

      {/* Introduction */}
      <section className={styles.introSection}>
        <h2>Your Unique Pattern Profile</h2>
        <div className={styles.introContent}>
          <p>
            This comprehensive assessment reveals not just <em>where</em> you struggle to hold tension,
            but <em>how</em> you collapse, <em>when</em> you collapse, and <em>what patterns</em> emerge
            across your seven developmental threads. This is your personalized roadmap for transformation.
          </p>
        </div>
      </section>

      {/* Thread Scores with Collapse Direction */}
      <section className={styles.threadsSection}>
        <h2>Your Thread Profile: Scores & Collapse Directions</h2>
        <p className={styles.threadsIntro}>
          Each thread shows your capacity level (0-100%) and your typical collapse direction.
          Understanding which direction you tend to collapse toward helps target specific practices.
        </p>

        <div className={styles.threadsGrid}>
          {Object.entries(results.threadScores).map(([thread, score]) => {
            const capacity = getCapacityLevel(score.percentage);
            return (
              <div key={thread} className={styles.threadCard}>
                <h3>{thread.toUpperCase()}</h3>
                <div className={styles.collapseDirection}>
                  <strong>Typical Pattern:</strong> {getCollapseDirectionLabel(score.collapseDirection, thread)}
                </div>
                <div className={styles.scoreBar}>
                  <div
                    className={styles.scoreFill}
                    style={{ width: `${score.percentage}%`, backgroundColor: capacity.color }}
                  />
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.percentage}>{score.percentage.toFixed(0)}%</span>
                  <span className={styles.rawScore}>({score.score}/40)</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* See, Hold, Emerge Movement Analysis */}
      <section className={styles.movementSection}>
        <h2>See. Hold. Emerge. Movement Analysis</h2>
        <p className={styles.movementIntro}>
          The seven threads follow a natural sequence: first you <strong>See</strong> where you are,
          then you <strong>Hold</strong> the discomfort, and finally something new can <strong>Emerge</strong>.
          These scores show your capacity in each movement.
        </p>

        <div className={styles.movementsGrid}>
          <div className={styles.movementCard}>
            <h3>SEE <span className={styles.movementSubtitle}>(Orienting)</span></h3>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreValue}>
                {results.movementAverages.see.toFixed(1)}
                <span className={styles.scoreMax}> / 12</span>
              </div>
            </div>
            <p className={styles.movementDesc}>Locate where you are: Am I present? Do I have agency? What story am I telling? Is this the right timing?</p>
            <div className={styles.threadsInMovement}>
              PRESENCE • CONSENT • MEMORY • PAUSE
            </div>
          </div>

          <div className={styles.movementCard}>
            <h3>HOLD <span className={styles.movementSubtitle}>(Sourcing)</span></h3>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreValue}>
                {results.movementAverages.hold.toFixed(1)}
                <span className={styles.scoreMax}> / 12</span>
              </div>
            </div>
            <p className={styles.movementDesc}>Stay with the discomfort: What is my body telling me? What happens if I don't force an answer?</p>
            <div className={styles.threadsInMovement}>
              EMBODIMENT • UNCERTAINTY
            </div>
          </div>

          <div className={styles.movementCard}>
            <h3>EMERGE <span className={styles.movementSubtitle}>(Integrating)</span></h3>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreValue}>
                {results.movementAverages.emerge.toFixed(1)}
                <span className={styles.scoreMax}> / 12</span>
              </div>
            </div>
            <p className={styles.movementDesc}>Let something new arise: Who am I becoming? What's actually changing vs. rearranging?</p>
            <div className={styles.threadsInMovement}>
              BECOMING
            </div>
          </div>
        </div>
      </section>

      {/* HOLD Practice Mapping */}
      <section className={styles.practiceSection}>
        <h2>Your HOLD Practice Mapping</h2>
        <p className={styles.practiceIntro}>
          Based on your thread profile, here's which step of the HOLD practice (Halt, Observe, Look, Decide)
          will be most effective for each of your focus areas.
        </p>

        <div className={styles.practiceGrid}>
          {results.holdPracticeMapping.halt.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>H - HALT</h3>
              <p>Stop the automatic reaction; create space before responding</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.halt.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.observe.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>O - OBSERVE</h3>
              <p>Notice what your body is telling you and what's actually happening right now</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.observe.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.look.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>L - LOOK</h3>
              <p>Name the tension: Which competing needs are pulling at you?</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.look.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.decide.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>D - DECIDE</h3>
              <p>Choose from readiness, not from anxiety or urgency</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.decide.join(' • ')}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Detected Collapse Patterns */}
      {comprehensiveAnalysis && comprehensiveAnalysis.detectedPatterns.length > 0 && (
        <section className={styles.collapsePatternSection}>
          <h2>Your Signature Collapse Patterns</h2>
          <p className={styles.sectionIntro}>
            Based on your thread profile, we've identified your signature collapse patterns—the characteristic ways
            you react when under pressure. Recognizing your pattern is often more useful than knowing individual thread scores.
          </p>

          {comprehensiveAnalysis.detectedPatterns.map((pattern, idx) => (
            <div key={pattern.id} className={styles.collapsePatternCard}>
              <div className={styles.patternHeader}>
                <h3>{pattern.name}</h3>
                <div className={styles.confidenceBadge}>
                  {(pattern.detectionConfidence * 100).toFixed(0)}% match
                </div>
              </div>

              <div className={styles.patternCoreThreads}>
                <strong>Core Collapse:</strong> {pattern.coreCollapse.join(' + ')}
              </div>

              <div className={styles.patternDescription}>
                {pattern.description}
              </div>

              <div className={styles.patternExperience}>
                <h4>The Experience:</h4>
                <blockquote>{pattern.experience}</blockquote>
              </div>

              <div className={styles.patternBehaviors}>
                <h4>Behavioral Signs:</h4>
                <ul>
                  {pattern.behavioralSigns.map((sign, i) => (
                    <li key={i}>{sign}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.patternTrap}>
                <h4>The Trap:</h4>
                <p>{pattern.theTrap}</p>
              </div>

              <div className={styles.patternFearNeed}>
                <div className={styles.fears}>
                  <h4>Deeper Fears Driving This:</h4>
                  <ul>
                    {pattern.deeperFears.map((fear, i) => (
                      <li key={i}>{fear}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.needs}>
                  <h4>Deeper Needs Underneath:</h4>
                  <ul>
                    {pattern.deeperNeeds.map((need, i) => (
                      <li key={i}>{need}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.patternBreaking}>
                <h4>Breaking the Pattern:</h4>
                <ol>
                  {pattern.breakingThePattern.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className={styles.patternHoldFocus}>
                <h4>HOLD Practice Focus:</h4>
                <p>{pattern.holdFocus}</p>
              </div>

              <div className={styles.patternCustomPractices}>
                <h4>Custom Practices for This Pattern:</h4>
                <ul>
                  {pattern.customPractices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Pattern Cascades */}
      {comprehensiveAnalysis && comprehensiveAnalysis.cascades.length > 0 && (
        <section className={styles.cascadeSection}>
          <h2>How Your Patterns Connect: Collapse Cascades</h2>
          <p className={styles.sectionIntro}>
            When one thread collapses under pressure, it often triggers collapse in connected threads.
            Understanding your cascade helps you intervene earlier.
          </p>

          {comprehensiveAnalysis.cascades.map((cascade, idx) => (
            <div key={idx} className={styles.cascadeCard}>
              <div className={styles.cascadeTrigger}>
                <strong>Trigger:</strong> {cascade.trigger}
              </div>

              <div className={styles.cascadeSequence}>
                {cascade.sequence.map((step, i) => (
                  <div key={i} className={styles.cascadeStep}>
                    <div className={styles.stepNumber}>{i + 1}</div>
                    <div className={styles.stepContent}>
                      <div className={styles.stepThread}>{step.thread}</div>
                      <div className={styles.stepType}>{step.collapseType}</div>
                      <div className={styles.stepEffect}>→ {step.effect}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cascadeFinal}>
                <strong>Result:</strong> {cascade.finalPattern}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Development Path */}
      {comprehensiveAnalysis && comprehensiveAnalysis.developmentPath.length > 0 && (
        <section className={styles.developmentPathSection}>
          <h2>Your Personalized Development Path</h2>
          <p className={styles.sectionIntro}>
            This is your roadmap: which threads to work on first, second, and third, with specific practices
            for each stage. Real transformation happens when you work systematically.
          </p>

          <div className={styles.pathTimeline}>
            {['immediate', 'near-term', 'long-term'].map(priority => {
              const pathItems = comprehensiveAnalysis.developmentPath.filter(p => p.priority === priority);
              if (pathItems.length === 0) return null;

              return (
                <div key={priority} className={styles.pathStage}>
                  <h3 className={styles.pathPriority}>
                    {priority === 'immediate' && '🎯 Immediate Priority'}
                    {priority === 'near-term' && '📍 Near-Term Focus'}
                    {priority === 'long-term' && '🌱 Long-Term Development'}
                  </h3>

                  {pathItems.map((item, idx) => (
                    <div key={idx} className={styles.pathItem}>
                      <div className={styles.pathItemHeader}>
                        <h4>{item.thread}</h4>
                        <span className={styles.pathWeeks}>{item.estimatedWeeks} weeks</span>
                      </div>

                      <div className={styles.pathStates}>
                        <div className={styles.currentState}>
                          <strong>Current:</strong> {item.currentState}
                        </div>
                        <div className={styles.pathArrow}>→</div>
                        <div className={styles.targetState}>
                          <strong>Target:</strong> {item.targetState}
                        </div>
                      </div>

                      <div className={styles.pathRationale}>
                        <strong>Why this matters:</strong> {item.rationale}
                      </div>

                      <div className={styles.pathPractices}>
                        <strong>Specific practices:</strong>
                        <ul>
                          {item.practices.map((practice, i) => (
                            <li key={i}>{practice}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Pattern Analysis from Journal & Practice History */}
      {patternAnalysis && (
        <section className={styles.patternSection}>
          <h2>Your Personal Pattern Analysis</h2>
          <div className={styles.patternSummary}>
            {patternAnalysis.summary}
          </div>

          {patternAnalysis.insights.length > 0 && (
            <div className={styles.insightsGrid}>
              {patternAnalysis.insights.map((insight, idx) => (
                <div key={idx} className={styles.insightCard}>
                  <div className={styles.insightCategory}>{insight.category}</div>
                  <p className={styles.insightText}>{insight.insight}</p>
                  {insight.evidence.length > 0 && (
                    <div className={styles.insightEvidence}>
                      <ul>
                        {insight.evidence.map((evidence, i) => (
                          <li key={i}>{evidence}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className={styles.insightRecommendation}>
                    <strong>Recommendation:</strong> {insight.recommendation}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Next Steps */}
      <section className={styles.nextSteps}>
        <h2>Continue Your Journey</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <h3>Journal Your Patterns</h3>
            <p>Record specific moments when you notice these collapse patterns in daily life</p>
            <Link to="/journal" className={styles.stepLink}>Open Journal →</Link>
          </div>

          <div className={styles.stepCard}>
            <h3>Practice HOLD</h3>
            <p>Use the interactive practice tools focused on your specific patterns</p>
            <Link to="/practice" className={styles.stepLink}>Start Practice →</Link>
          </div>

          <div className={styles.stepCard}>
            <h3>Track Your Progress</h3>
            <p>See your pattern analytics and retake assessments to measure growth</p>
            <Link to="/dashboard" className={styles.stepLink}>View Dashboard →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalJourneyMapResults;
