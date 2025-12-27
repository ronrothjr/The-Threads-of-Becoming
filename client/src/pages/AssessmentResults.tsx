import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './AssessmentResults.module.css';
import { logger } from '../utils/logger';

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
  const location = useLocation();
  // Determine which assessment type based on URL
  const isPersonalJourneyMap = location.pathname.includes('personal-journey-map');
  const assessmentTitle = isPersonalJourneyMap ? 'Personal Journey Map' : 'Quick Profile';
  useEffect(() => {
    loadResults();
  }, [location.pathname]);
  const loadResults = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      // Determine which assessment type based on the CURRENT URL
      const isPersonalJourneyMap = location.pathname.includes('personal-journey-map');
      const assessmentType = isPersonalJourneyMap ? 'personal-journey-map' : 'quick-profile';
      // Log to server for debugging
      logger.debug('AssessmentResults loading', {
        url: location.pathname,
        isPersonalJourneyMap,
        assessmentType,
        endpoint: `${API_URL}/api/assessments/${assessmentType}/results`,
      });
      const response = await fetch(`${API_URL}/api/assessments/${assessmentType}/results`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        logger.error('Failed to load assessment results', { status: response.status });
        throw new Error('Failed to load results');
      }
      const data = await response.json();
      logger.debug('AssessmentResults loaded', {
        presenceScore: data.results?.threadScores?.presence?.score,
        presencePercentage: data.results?.threadScores?.presence?.percentage,
        allThreadScores: data.results?.threadScores,
      });
      // Force state update
      setResults(null);
      setTimeout(() => setResults(data.results), 0);
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
        <p className={styles.subtitle}>{assessmentTitle} Results</p>
      </header>
      {/* What This Means */}
      <section className={styles.introSection}>
        <h2>What This Assessment Reveals</h2>
        <div className={styles.introContent}>
          <p>
            This assessment measures how you respond when life presents you with competing demands or conflicting needs.
            For example: wanting connection but also needing space, or knowing you should rest but feeling pressure to keep working.
            We call these situations <strong>"tensions"</strong>—not problems to solve, but natural parts of being human.
          </p>
          <p>
            <strong>Higher scores</strong> show where you can stay with these tensions without immediately picking a side or shutting down.
            <strong>Lower scores</strong> reveal where you tend to react automatically—either forcing a solution or avoiding the situation entirely.
            In the Threads framework, we call this automatic reaction <strong>"collapsing the tension"</strong> rather than holding it.
          </p>
          <p>
            These aren't personality traits—they're skills you can develop through practice.
            Think of these results as a map showing where you are right now, and where deliberate practice can help you grow.
          </p>
        </div>
      </section>
      {/* Your Practice Focus */}
      <section className={styles.focusSection}>
        <h2>Your Practice Focus: Where to Begin</h2>
        <p className={styles.focusIntro}>
          Based on your responses, here are the two areas where you most often react automatically under pressure—and therefore where focused practice will create the most transformation in your first few weeks.
          In the Threads framework, we call these areas "threads"—different types of tension you face in daily life.
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
                collapse: "In stressful moments, you either withdraw completely and shut people out, OR you lose yourself trying to please everyone and can't tell what you actually want. You're often physically present but mentally elsewhere, replaying the past or worrying about the future. We call this 'collapsing' the tension between being alone and being connected.",
                practice: "Practice noticing when you're physically present but mentally absent. In conversations, notice when you're relating to an idea about someone ('narcissist,' 'liberal,' 'my difficult mother') rather than the actual person in front of you."
              },
              consent: {
                poles: "Yes ↔ No • Self ↔ Other",
                collapse: "You either push your way forward and need others to agree with you, OR you give in completely and lose track of what you actually need. Setting a boundary feels like rejection; hearing 'no' feels personal. This is what we call collapsing the tension between honoring yourself and allowing others their autonomy.",
                practice: "Practice saying 'no' to small things while staying warm and connected. Notice when you're trying to convince someone or change their mind rather than simply allowing them their experience."
              },
              memory: {
                poles: "Given ↔ Chosen • Telling ↔ Told",
                collapse: "You're either stuck replaying old wounds and patterns (\"this always happens to me\"), OR you dismiss the past entirely and chase what's next without learning from it. Your identity feels either fixed by your history or fragmented into constant reinvention. We call this collapsing the tension between honoring the past and being present to now.",
                practice: "Notice which stories you tell about yourself repeatedly. Ask: 'Am I telling this story, or is it telling me?' Can you hold your history as true without letting it determine your future?"
              },
              pause: {
                poles: "Not Yet ↔ Now • More ↔ Enough",
                collapse: "You either rush to resolve things immediately (\"just do something!\") OR you delay endlessly and can't move forward (\"I'm not ready yet\"). You struggle to sense when it's time to act versus when more waiting is needed. This is collapsing the tension between 'not yet' and 'now.'",
                practice: "Before responding or acting, pause for three conscious breaths. Notice: Am I acting from urgency and anxiety, or from a sense of readiness and fullness?"
              },
              embodiment: {
                poles: "Think ↔ Feel • Stay ↔ Go",
                collapse: "You either disconnect from your body and live entirely in your head, OR you get overwhelmed by every sensation and can't function. Physical discomfort either gets ignored or floods your whole experience. We call this collapsing the tension between being grounded in your body and having perspective on it.",
                practice: "Set a timer to check in with your body three times daily. Simply notice: What sensations are present right now? Can you name them without either ignoring them or getting lost in them?"
              },
              uncertainty: {
                poles: "Hide ↔ Seek • Threat ↔ Wonder",
                collapse: "You either grasp for certainty and need definite answers to feel safe, OR you get lost in confusion and can't orient yourself at all. Not-knowing feels threatening, so you either force clarity or avoid making any commitments. This is collapsing the tension between the desire for answers and the reality of mystery.",
                practice: "In moments of uncertainty, practice saying 'I don't know yet' without immediately googling, asking someone, or forcing a decision. Can you sit with the question itself for a day?"
              },
              becoming: {
                poles: "Same ↔ Different • Return ↔ Forward",
                collapse: "You either stay stuck in old patterns despite intentions to change (\"I'm just not that kind of person\"), OR you constantly chase growth and new ideas without actually embodying them. Real transformation feels either impossible or superficial. We call this collapsing the tension between stability and change.",
                practice: "Notice when you say 'I'm just not that kind of person.' Ask: Who am I becoming that I wasn't before? Are you repeating old loops or genuinely different?"
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
                    <div className={styles.tensionLabel}>The Competing Pulls:</div>
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
            After consistent practice and journaling, you'll unlock your Personal Journey Map for deeper analysis across all seven threads.
          </p>
        </div>
      </section>
      {/* See. Hold. Emerge. Overview */}
      <section className={styles.movementSection}>
        <h2>How Transformation Actually Works</h2>
        <p className={styles.movementIntro}>
          The seven threads you've been assessed on actually follow a natural sequence—the way real change happens in your life.
          First, you <strong>See</strong> where you are (orienting yourself). Then you <strong>Hold</strong> the discomfort without immediately fixing it (sourcing wisdom from your body and the unknown).
          Finally, something new can <strong>Emerge</strong> (integrating the change into who you're becoming).
          In the Threads framework, we call these three movements <strong>"See. Hold. Emerge."</strong> These scores show your average capacity in each movement.
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
                <span className={styles.scoreMax}> / 8</span>
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
                <span className={styles.scoreMax}> / 4</span>
              </div>
            </div>
            <p className={styles.movementDesc}>Let something new arise: Who am I becoming? What's actually changing vs. rearranging?</p>
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
        <h2>A Simple Practice Tool: HOLD</h2>
        <p className={styles.practiceIntro}>
          When you notice yourself reacting automatically—shutting down, forcing a solution, avoiding, or pushing—you can use this four-step practice to interrupt the pattern.
          We call it <strong>HOLD</strong> (Halt, Observe, Look, Decide). Think of it as a way to pause the automatic response and create space for something new.
          Based on your scores, here's which step will be most helpful for your focus threads:
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
      {/* Next Steps - Unlock Personal Journey Map (only show for Quick Profile) */}
      {!isPersonalJourneyMap && (
      <section className={styles.unlockSection}>
        <h2>Unlock Your Personal Journey Map</h2>
        <p className={styles.unlockIntro}>
          The Quick Profile gives you a starting point. The <strong>Personal Journey Map</strong> provides deep analysis
          of your automatic reaction patterns, which direction you tend to go in each area, and a personalized roadmap
          for developing all seven threads. In the Threads framework, we call these automatic reactions "collapse patterns"
          and the different directions you can go "poles."
        </p>
        <div className={styles.unlockBenefits}>
          <h3>What Your Personal Journey Map Reveals:</h3>
          <ul>
            <li><strong>Your Specific Patterns:</strong> Discover exactly how you react in each area (e.g., do you withdraw OR merge in PRESENCE?)</li>
            <li><strong>How Your Patterns Connect:</strong> See how reacting automatically in one area triggers reactions in others (e.g., when you ignore your body, you also grasp for certainty)</li>
            <li><strong>Your Development Path:</strong> Get a personalized roadmap showing which areas to work on first, second, third</li>
            <li><strong>What's Driving This:</strong> Identify the deeper fears and needs underneath your automatic reactions</li>
            <li><strong>Custom Practices:</strong> Receive specific practices designed for your unique combination of patterns</li>
          </ul>
        </div>
        <div className={styles.unlockRequirements}>
          <h3>How to Unlock It:</h3>
          <div className={styles.requirementsGrid}>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>1</div>
              <h4>Focused Practice</h4>
              <p>Use the interactive practice tools on your dashboard to work with your two focus areas. Practice daily for 3-4 weeks to build new patterns.</p>
            </div>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>2</div>
              <h4>Journal Your Observations</h4>
              <p>Record journal entries on at least 10 separate days. Notice when you stayed with difficulty without immediately reacting, and when you reacted automatically. What did you learn? Real change takes time—give yourself the gift of sustained attention.</p>
            </div>
            <div className={styles.requirementCard}>
              <div className={styles.requirementIcon}>3</div>
              <h4>Personal Journey Map Unlocked</h4>
              <p>After consistent practice and journaling, your 70-question Personal Journey Map becomes available. You'll have earned the depth it provides—because you've done the work to meet it.</p>
            </div>
          </div>
        </div>
        <div className={styles.unlockCTA}>
          <Link to="/dashboard" className={styles.unlockButton}>Go to Dashboard to Begin →</Link>
          <p className={styles.unlockNote}>Your Focused Practice tools are waiting for you</p>
        </div>
      </section>
      )}
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
