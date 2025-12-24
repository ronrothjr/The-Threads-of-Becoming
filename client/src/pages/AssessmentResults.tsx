import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AssessmentResults.module.css';

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

const AssessmentResults: React.FC = () => {
  const [results, setResults] = useState<Results | null>(null);
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

      const response = await fetch(`${API_URL}/api/assessments/quick-profile/results`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to load results');
      }

      const data = await response.json();
      setResults(data.results);
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

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading your results...</div>
      </div>
    );
  }

  if (error || !results) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error || 'No results found'}</div>
        <Link to="/assessment/quick-profile" className={styles.button}>Take Assessment</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Your Threads Profile</h1>
        <p className={styles.subtitle}>Quick Profile Assessment Results</p>
      </header>

      {/* What This Means */}
      <section className={styles.introSection}>
        <h2>What This Assessment Reveals</h2>
        <div className={styles.introContent}>
          <p>
            This assessment measures your <strong>current capacity to hold creative tension</strong> across seven developmental threads.
            These aren't personality traits—they're capacities you can develop through practice.
          </p>
          <p>
            <strong>Higher scores</strong> indicate greater capacity to stay present and integrated when facing tensions and challenges.
            <strong>Lower scores</strong> reveal where you tend to collapse under pressure—and therefore where focused practice will be most transformative.
          </p>
          <p>
            Think of these results as a map showing where you are right now, and where deliberate practice can help you grow.
            This is the beginning of your integration journey, not a verdict on who you are.
          </p>
        </div>
      </section>

      {/* Your Practice Focus */}
      <section className={styles.focusSection}>
        <h2>Your Practice Focus: Where to Begin</h2>
        <p className={styles.focusIntro}>
          Based on your responses, here are the threads where you most often collapse under pressure—and therefore where focused practice will create the most transformation in your first few weeks.
        </p>

        <div className={styles.focusCards}>
          {(() => {
            // Find the 2 lowest scoring threads
            const threadEntries = Object.entries(results.threadScores)
              .sort((a, b) => a[1].score - b[1].score)
              .slice(0, 2);

            const threadDescriptions: Record<string, { poles: string; collapse: string; practice: string }> = {
              presence: {
                poles: "Within ↔ Between • Here ↔ Elsewhere",
                collapse: "You tend to either isolate completely or lose yourself in others. You struggle to be fully present, often mentally elsewhere.",
                practice: "Practice noticing when you're physically present but mentally absent. In conversations, notice when you're relating to a category rather than the actual person."
              },
              consent: {
                poles: "Yes ↔ No • Self ↔ Other",
                collapse: "You find it hard to set boundaries while maintaining connection, or to honor others' refusals without feeling rejected.",
                practice: "Practice saying 'no' to small things while staying connected. Notice when you're trying to change someone's mind rather than allowing their experience."
              },
              memory: {
                poles: "Given ↔ Chosen • Telling ↔ Told",
                collapse: "You either feel trapped by your past story or try to completely rewrite it. Your identity feels fixed or fragmented.",
                practice: "Notice which stories you tell about yourself repeatedly. Ask: 'Am I telling this story, or is it telling me?'"
              },
              pause: {
                poles: "Not Yet ↔ Now • More ↔ Enough",
                collapse: "You tend toward either anxious rushing (never enough) or paralyzed waiting (not yet ready).",
                practice: "Before responding or acting, pause for three breaths. Notice: Am I acting from urgency or from fullness?"
              },
              embodiment: {
                poles: "Think ↔ Feel • Stay ↔ Go",
                collapse: "You either disconnect from your body entirely or get lost in physical sensation without meaning.",
                practice: "Set a timer to check in with your body three times daily. Simply notice: What sensations are present right now?"
              },
              uncertainty: {
                poles: "Hide ↔ Seek • Threat ↔ Wonder",
                collapse: "You need certainty to feel safe, or you use not-knowing to avoid commitment and responsibility.",
                practice: "In moments of uncertainty, practice saying 'I don't know yet' without immediately seeking an answer. Sit with the question."
              },
              becoming: {
                poles: "Same ↔ Different • Return ↔ Forward",
                collapse: "You either cling to who you've been or constantly reinvent yourself without integration.",
                practice: "Notice when you say 'I'm just not that kind of person.' Ask: Who am I becoming that I wasn't before?"
              }
            };

            return threadEntries.map(([thread, data]) => {
              const desc = threadDescriptions[thread];
              const poles = desc.poles.split(' • ');

              return (
                <div key={thread} className={styles.focusCard}>
                  <div className={styles.focusHeader}>
                    <h3>{thread.toUpperCase()}</h3>
                    <span className={styles.focusScore}>{data.percentage.toFixed(0)}%</span>
                  </div>
                  <div className={styles.tensionPoles}>
                    <div className={styles.tensionLabel}>Tension Poles:</div>
                    {poles.map((pole, idx) => (
                      <div key={idx} className={styles.poleGroup}>
                        {pole.split(' ↔ ').map((p, i, arr) => (
                          <React.Fragment key={i}>
                            <span className={styles.polePill}>{p.trim()}</span>
                            {i < arr.length - 1 && <span className={styles.tensionArrow}>↔</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    ))}
                  </div>
                  <p className={styles.focusCollapse}><strong>What this looks like:</strong> {desc.collapse}</p>
                  <p className={styles.focusPractice}><strong>Where to start:</strong> {desc.practice}</p>
                </div>
              );
            });
          })()}
        </div>

        <div className={styles.focusReminder}>
          <p>
            Focus on these threads for the next 3-4 weeks. Practice daily, and record your observations in your journal.
            After consistent practice and journaling, you'll unlock the Extended Assessment for deeper analysis across all seven threads.
          </p>
        </div>
      </section>

      {/* See. Hold. Emerge. Overview */}
      <section className={styles.movementSection}>
        <h2>See. Hold. Emerge.</h2>
        <p className={styles.movementIntro}>
          The seven Threads organize into three movements that mirror how transformation actually works.
          These scores show your average capacity across the threads in each movement. As you practice with your focus threads,
          you'll see these movement scores increase—this is how you track your integration journey.
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
            <p className={styles.movementDesc}>You locate where you are in the tension</p>
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
            <p className={styles.movementDesc}>You receive what body and mystery know</p>
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
            <p className={styles.movementDesc}>You become what's next</p>
            <div className={styles.threadsInMovement}>
              BECOMING
            </div>
          </div>
        </div>
      </section>

      {/* Individual Thread Scores */}
      <section className={styles.threadsSection}>
        <h2>All Seven Thread Scores</h2>
        <p className={styles.threadsIntro}>
          Here's your complete snapshot across all seven threads. While you'll focus your practice on your lowest-scoring threads,
          these percentages give you a baseline to track growth over time. As you journal and practice, you can retake this assessment
          to see how your capacity expands.
        </p>
        <div className={styles.threadsGrid}>
          {Object.entries(results.threadScores).map(([thread, data]) => {
            const { level, color } = getCapacityLevel(data.percentage);
            return (
              <div key={thread} className={styles.threadCard}>
                <h3>{thread.toUpperCase()}</h3>
                <div className={styles.scoreBar}>
                  <div
                    className={styles.scoreFill}
                    style={{ width: `${data.percentage}%`, backgroundColor: color }}
                  />
                </div>
                <div className={styles.scoreDetails}>
                  <span className={styles.percentage}>{data.percentage.toFixed(1)}%</span>
                  <span className={styles.capacity} style={{ color }}>{level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOLD Practice Mapping */}
      <section className={styles.practiceSection}>
        <h2>Your HOLD Practice Focus</h2>
        <p className={styles.practiceIntro}>
          Based on your thread scores, here's where to focus your HOLD practice:
        </p>

        <div className={styles.practiceGrid}>
          {results.holdPracticeMapping.halt.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>H - HALT</h3>
              <p>Stop automatic reaction; create space</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.halt.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.observe.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>O - OBSERVE</h3>
              <p>Notice body sensations and present reality</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.observe.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.look.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>L - LOOK</h3>
              <p>Name the tension; identify which poles are pulling</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.look.join(' • ')}
              </div>
            </div>
          )}

          {results.holdPracticeMapping.decide.length > 0 && (
            <div className={styles.practiceCard}>
              <h3>D - DECIDE</h3>
              <p>Choose from fullness, not fear</p>
              <div className={styles.practiceThreads}>
                {results.holdPracticeMapping.decide.join(' • ')}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Next Steps - Unlock Extended Assessment */}
      <section className={styles.unlockSection}>
        <h2>Unlock the Extended Assessment</h2>
        <p className={styles.unlockIntro}>
          The Quick Profile gives you a starting point. The <strong>Extended Assessment</strong> provides deep analysis
          of your collapse patterns, specific pole tendencies, and personalized integration pathways across all seven threads.
        </p>

        <div className={styles.unlockBenefits}>
          <h3>What the Extended Assessment Reveals:</h3>
          <ul>
            <li><strong>Pole-Specific Patterns:</strong> Discover exactly which pole you collapse toward in each thread (e.g., do you isolate or enmesh in PRESENCE?)</li>
            <li><strong>Cross-Thread Dynamics:</strong> See how your patterns in one thread trigger collapse in others</li>
            <li><strong>Developmental Trajectory:</strong> Get a personalized roadmap showing which threads to develop in which order</li>
            <li><strong>Shadow Work Guidance:</strong> Identify the specific shadows (intrusion/abandonment, coercion/avoidance, etc.) driving your patterns</li>
            <li><strong>Integration Practices:</strong> Receive customized practices based on your unique pattern constellation</li>
          </ul>
        </div>

        <div className={styles.unlockRequirements}>
          <h3>How to Unlock It:</h3>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>1</div>
              <h4>Focused Practice</h4>
              <p>Use the interactive practice tools on your dashboard to work with your two focus threads. Practice daily for 3-4 weeks.</p>
            </div>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>2</div>
              <h4>Journal Your Observations</h4>
              <p>Record journal entries on at least 10 separate days, documenting your experiences holding tension, moments of collapse, and insights gained. Real integration takes time—give yourself the gift of sustained attention.</p>
            </div>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>3</div>
              <h4>Extended Assessment Unlocked</h4>
              <p>After consistent practice and journaling, the 70-question Extended Assessment becomes available. You'll have earned the depth it provides—because you've done the work to meet it.</p>
            </div>
          </div>
        </div>

        <div className={styles.unlockCTA}>
          <Link to="/dashboard" className={styles.unlockButton}>Go to Dashboard to Begin →</Link>
          <p className={styles.unlockNote}>Your Focused Practice tools are waiting for you</p>
        </div>
      </section>

      {/* Additional Next Steps */}
      <section className={styles.nextSteps}>
        <h2>Learn More</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <h3>HOLD Practice Framework</h3>
            <p>Learn the four-step process: Halt, Observe, Look, Decide</p>
            <Link to="/practice" className={styles.stepLink}>Learn HOLD Practice →</Link>
          </div>

          <div className={styles.stepCard}>
            <h3>Explore the Threads</h3>
            <p>Deep dive into each of the seven threads</p>
            <Link to="/explore" className={styles.stepLink}>Explore Threads →</Link>
          </div>

          <div className={styles.stepCard}>
            <h3>Join a Community</h3>
            <p>Connect with others on the integration journey</p>
            <Link to="/chapters" className={styles.stepLink}>Find a Chapter →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentResults;
