import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import styles from './TrainingSetup.module.css';
import { logger } from '../utils/logger';

interface ComprehensiveAnalysis {
  detectedPatterns: any[];
  cascades: any[];
  developmentPath: any[];
  threadScores: any;
}
const TrainingSetup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [analysis, setAnalysis] = useState<ComprehensiveAnalysis | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // Configuration state
  const [config, setConfig] = useState({
    growthEdges: [] as string[],
    intensity: 'moderate' as 'gentle' | 'moderate' | 'challenging',
    duration: 30,
    learningStyle: [] as string[],
    sessionsPerWeek: 3,
  });
  useEffect(() => {
    loadAnalysis();
  }, []);

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);
  const loadAnalysis = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      const response = await fetch(`${API_URL}/api/assessments/personal-journey-map/comprehensive-analysis`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error('Failed to load analysis');
      }
      const data = await response.json();
      setAnalysis(data);
    } catch (err) {
      logger.error('Failed to load analysis', { error: err });
    } finally {
      setLoading(false);
    }
  };
  const handleGrowthEdgeToggle = (thread: string) => {
    setConfig(prev => ({
      ...prev,
      growthEdges: prev.growthEdges.includes(thread)
        ? prev.growthEdges.filter(t => t !== thread)
        : [...prev.growthEdges, thread]
    }));
  };

  const handleLearningStyleToggle = (style: string) => {
    setConfig(prev => ({
      ...prev,
      learningStyle: prev.learningStyle.includes(style)
        ? prev.learningStyle.filter(s => s !== style)
        : [...prev.learningStyle, style]
    }));
  };
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      const response = await fetch(`${API_URL}/api/training/initialize`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });
      if (!response.ok) {
        throw new Error('Failed to initialize training');
      }
      logger.info('Training program initialized');
      navigate('/training/session');
    } catch (err) {
      logger.error('Failed to initialize training', { error: err });
      alert('Failed to start training program. Please try again.');
    }
  };
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading your assessment data...</div>
      </div>
    );
  }
  if (!analysis) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>No Assessment Found</h2>
          <p>Please complete your Personal Journey Map assessment first.</p>
          <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        </div>
      </div>
    );
  }
  // Get thread scores sorted by percentage (lowest first)
  const sortedThreads = Object.entries(analysis.threadScores)
    .map(([name, data]: [string, any]) => ({ name, percentage: data.percentage }))
    .sort((a, b) => a.percentage - b.percentage);
  const immediatePriorities = sortedThreads.filter(t => t.percentage < 50);
  const nearTermOpportunities = sortedThreads.filter(t => t.percentage >= 50 && t.percentage < 70);
  const longTermDevelopment = sortedThreads.filter(t => t.percentage >= 70);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Thread Capacity Training Setup</h1>
        <p className={styles.subtitle}>Create your personalized training program</p>
        <div className={styles.stepIndicator}>
          <div className={`${styles.stepDot} ${step >= 1 ? styles.active : ''}`}>1</div>
          <div className={styles.stepLine}></div>
          <div className={`${styles.stepDot} ${step >= 2 ? styles.active : ''}`}>2</div>
          <div className={styles.stepLine}></div>
          <div className={`${styles.stepDot} ${step >= 3 ? styles.active : ''}`}>3</div>
          <div className={styles.stepLine}></div>
          <div className={`${styles.stepDot} ${step >= 4 ? styles.active : ''}`}>4</div>
        </div>
      </div>
      {step === 1 && (
        <div className={styles.step}>
          <h2>Step 1: Select Your Growth Edges</h2>
          <p className={styles.stepIntro}>
            Based on your Personal Journey Map, choose 1-3 threads to focus on.
            We recommend starting with your lowest-scoring threads or those related to your primary pattern.
          </p>
          {immediatePriorities.length > 0 && (
            <div className={styles.threadGroup}>
              <h3>🎯 Immediate Priorities (Recommended)</h3>
              <p className={styles.groupDesc}>These threads show significant collapse patterns</p>
              {immediatePriorities.map(thread => (
                <div
                  key={thread.name}
                  className={`${styles.threadOption} ${config.growthEdges.includes(thread.name) ? styles.selected : ''}`}
                  onClick={() => handleGrowthEdgeToggle(thread.name)}
                >
                  <div className={styles.threadHeader}>
                    <span className={styles.threadName}>{thread.name.toUpperCase()}</span>
                    <span className={styles.threadScore}>{thread.percentage.toFixed(0)}% capacity</span>
                  </div>
                  {analysis.detectedPatterns[0]?.coreCollapse.map((t: string) => t.toLowerCase()).includes(thread.name) && (
                    <div className={styles.patternBadge}>
                      Part of your {analysis.detectedPatterns[0].name} pattern
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {nearTermOpportunities.length > 0 && (
            <div className={styles.threadGroup}>
              <h3>📍 Near-Term Opportunities</h3>
              <p className={styles.groupDesc}>Moderate capacity with room for growth</p>
              {nearTermOpportunities.map(thread => (
                <div
                  key={thread.name}
                  className={`${styles.threadOption} ${config.growthEdges.includes(thread.name) ? styles.selected : ''}`}
                  onClick={() => handleGrowthEdgeToggle(thread.name)}
                >
                  <div className={styles.threadHeader}>
                    <span className={styles.threadName}>{thread.name.toUpperCase()}</span>
                    <span className={styles.threadScore}>{thread.percentage.toFixed(0)}% capacity</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {longTermDevelopment.length > 0 && (
            <div className={styles.threadGroup}>
              <h3>🌱 Long-Term Development</h3>
              <p className={styles.groupDesc}>Higher capacity - deepening work</p>
              {longTermDevelopment.map(thread => (
                <div
                  key={thread.name}
                  className={`${styles.threadOption} ${config.growthEdges.includes(thread.name) ? styles.selected : ''}`}
                  onClick={() => handleGrowthEdgeToggle(thread.name)}
                >
                  <div className={styles.threadHeader}>
                    <span className={styles.threadName}>{thread.name.toUpperCase()}</span>
                    <span className={styles.threadScore}>{thread.percentage.toFixed(0)}% capacity</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.stepActions}>
            <button
              className={styles.primaryButton}
              onClick={() => setStep(2)}
              disabled={config.growthEdges.length === 0 || config.growthEdges.length > 3}
            >
              Continue
            </button>
            <p className={styles.selectionCount}>
              {config.growthEdges.length} of 1-3 threads selected
            </p>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={styles.step}>
          <h2>Step 2: Choose Training Intensity</h2>
          <p className={styles.stepIntro}>
            How intensively do you want to train? This affects session frequency and challenge level.
          </p>
          <div className={styles.intensityOptions}>
            <div
              className={`${styles.intensityCard} ${config.intensity === 'gentle' ? styles.selected : ''}`}
              onClick={() => setConfig({ ...config, intensity: 'gentle', sessionsPerWeek: 2 })}
            >
              <h3>Gentle</h3>
              <div className={styles.intensityDetails}>
                <p><strong>2 sessions/week</strong></p>
                <p>15 minutes each</p>
                <p>Comfortable pacing, low pressure</p>
                <p>Focus on awareness and small shifts</p>
              </div>
              <div className={styles.bestFor}>
                <strong>Best for:</strong> Busy schedules, gentle exploration
              </div>
            </div>
            <div
              className={`${styles.intensityCard} ${config.intensity === 'moderate' ? styles.selected : ''} ${styles.recommended}`}
              onClick={() => setConfig({ ...config, intensity: 'moderate', sessionsPerWeek: 3 })}
            >
              <div className={styles.recommendedBadge}>Recommended</div>
              <h3>Moderate</h3>
              <div className={styles.intensityDetails}>
                <p><strong>3 sessions/week</strong></p>
                <p>20-30 minutes each</p>
                <p>Consistent growth, reasonable challenge</p>
                <p>Mix of awareness and skill-building</p>
              </div>
              <div className={styles.bestFor}>
                <strong>Best for:</strong> Committed growth, sustainable practice
              </div>
            </div>
            <div
              className={`${styles.intensityCard} ${config.intensity === 'challenging' ? styles.selected : ''}`}
              onClick={() => setConfig({ ...config, intensity: 'challenging', sessionsPerWeek: 5 })}
            >
              <h3>Challenging</h3>
              <div className={styles.intensityDetails}>
                <p><strong>5 sessions/week</strong></p>
                <p>30-45 minutes each</p>
                <p>Rapid development, high engagement</p>
                <p>Deep work and integration</p>
              </div>
              <div className={styles.bestFor}>
                <strong>Best for:</strong> Dedicated practitioners, focused periods
              </div>
            </div>
          </div>
          <div className={styles.stepActions}>
            <button className={styles.secondaryButton} onClick={() => setStep(1)}>
              Back
            </button>
            <button className={styles.primaryButton} onClick={() => setStep(3)}>
              Continue
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={styles.step}>
          <h2>Step 3: Session Duration</h2>
          <p className={styles.stepIntro}>
            How long can you commit per session?
          </p>
          <div className={styles.durationOptions}>
            <div
              className={`${styles.durationCard} ${config.duration === 15 ? styles.selected : ''}`}
              onClick={() => setConfig({ ...config, duration: 15 })}
            >
              <h3>15-20 minutes</h3>
              <p>Focused sessions</p>
              <p className={styles.recommended}>✓ Recommended</p>
            </div>
            <div
              className={`${styles.durationCard} ${config.duration === 30 ? styles.selected : ''}`}
              onClick={() => setConfig({ ...config, duration: 30 })}
            >
              <h3>30-45 minutes</h3>
              <p>Deep dives</p>
            </div>
            <div
              className={`${styles.durationCard} ${config.duration === 60 ? styles.selected : ''}`}
              onClick={() => setConfig({ ...config, duration: 60 })}
            >
              <h3>60+ minutes</h3>
              <p>Immersive workshops</p>
            </div>
          </div>
          <div className={styles.stepActions}>
            <button className={styles.secondaryButton} onClick={() => setStep(2)}>
              Back
            </button>
            <button className={styles.primaryButton} onClick={() => setStep(4)}>
              Continue
            </button>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className={styles.step}>
          <h2>Step 4: Learning Style</h2>
          <p className={styles.stepIntro}>
            What learning approaches resonate most? (Select all that apply)
          </p>
          <div className={styles.learningStyles}>
            <div
              className={`${styles.styleCard} ${config.learningStyle.includes('reflective') ? styles.selected : ''}`}
              onClick={() => handleLearningStyleToggle('reflective')}
            >
              <h3>📝 Reflective</h3>
              <p>Journaling, introspection, self-inquiry</p>
              <p className={styles.example}>"Why does this pattern exist?"</p>
            </div>
            <div
              className={`${styles.styleCard} ${config.learningStyle.includes('experiential') ? styles.selected : ''}`}
              onClick={() => handleLearningStyleToggle('experiential')}
            >
              <h3>🎯 Experiential</h3>
              <p>Real-world practice, experiments, trying new behaviors</p>
              <p className={styles.example}>"Let me test this in my life"</p>
            </div>
            <div
              className={`${styles.styleCard} ${config.learningStyle.includes('structured') ? styles.selected : ''}`}
              onClick={() => handleLearningStyleToggle('structured')}
            >
              <h3>📊 Structured</h3>
              <p>Step-by-step instructions, clear frameworks, progression</p>
              <p className={styles.example}>"Show me exactly what to do"</p>
            </div>
            <div
              className={`${styles.styleCard} ${config.learningStyle.includes('relational') ? styles.selected : ''}`}
              onClick={() => handleLearningStyleToggle('relational')}
            >
              <h3>🤝 Relational</h3>
              <p>Impact on others, interpersonal dynamics</p>
              <p className={styles.example}>"How does this affect my relationships?"</p>
            </div>
          </div>
          <div className={styles.summary}>
            <h3>Your Training Program Summary</h3>
            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <strong>Focus Threads:</strong>
                <p>{config.growthEdges.map(t => t.toUpperCase()).join(', ')}</p>
              </div>
              <div className={styles.summaryItem}>
                <strong>Intensity:</strong>
                <p>{config.intensity.charAt(0).toUpperCase() + config.intensity.slice(1)} - {config.sessionsPerWeek}x/week</p>
              </div>
              <div className={styles.summaryItem}>
                <strong>Duration:</strong>
                <p>{config.duration} minutes per session</p>
              </div>
              <div className={styles.summaryItem}>
                <strong>Learning Styles:</strong>
                <p>{config.learningStyle.length > 0 ? config.learningStyle.join(', ') : 'All styles'}</p>
              </div>
            </div>
          </div>
          <div className={styles.stepActions}>
            <button className={styles.secondaryButton} onClick={() => setStep(3)}>
              Back
            </button>
            <button
              className={styles.primaryButton}
              onClick={handleSubmit}
              disabled={config.learningStyle.length === 0}
            >
              Start Training Program
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default TrainingSetup;
