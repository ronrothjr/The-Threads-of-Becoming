import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import styles from './TrainingDashboard.module.css';
import { logger } from '../utils/logger';

interface ModuleProgress {
  moduleId: string;
  currentPhase: string;
  phaseItemIndex: number;
  completed: boolean;
  lastAccessedAt: string;
}
interface TrainingModule {
  _id: string;
  thread: string;
  tier: string;
  title: string;
  description?: string;
  estimatedDuration?: number;
  published: boolean;
  progress?: ModuleProgress;
}
const TrainingDashboard: React.FC = () => {
  const [modules, setModules] = useState<TrainingModule[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    loadModules();
  }, []);
  const loadModules = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      const response = await fetch(`${API_URL}/api/training/modules/with-progress`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error('Failed to load modules');
      }
      const data = await response.json();
      setModules(data);
    } catch (err) {
      logger.error('Failed to load training modules', { error: err });
      alert('Unable to load training modules. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleModuleClick = (moduleId: string) => {
    navigate(`/training/module/${moduleId}`);
  };
  const getProgressPercentage = (progress?: ModuleProgress): number => {
    if (!progress) return 0;
    if (progress.completed) return 100;
    // Simple calculation - can be improved with actual phase counts
    const phaseWeights = {
      ground: 10,
      teach: 30,
      practice: 30,
      integrate: 30
    };
    const phases = ['ground', 'teach', 'practice', 'integrate'];
    const currentPhaseIndex = phases.indexOf(progress.currentPhase);
    if (currentPhaseIndex === -1) return 0;
    let totalProgress = 0;
    for (let i = 0; i < currentPhaseIndex; i++) {
      totalProgress += phaseWeights[phases[i] as keyof typeof phaseWeights];
    }
    // Add partial progress for current phase (rough estimate)
    totalProgress += phaseWeights[progress.currentPhase as keyof typeof phaseWeights] * 0.5;
    return Math.min(100, Math.round(totalProgress));
  };
  const getStatusBadge = (module: TrainingModule) => {
    if (module.progress?.completed) {
      return <span className={styles.statusCompleted}>✓ Completed</span>;
    } else if (module.progress) {
      return <span className={styles.statusInProgress}>In Progress</span>;
    } else {
      return <span className={styles.statusNotStarted}>Not Started</span>;
    }
  };
  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading training modules...</div>
      </div>
    );
  }
  const availableModules = modules.filter(m => !m.progress?.completed);
  const completedModules = modules.filter(m => m.progress?.completed);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate('/dashboard')}>
          ← Back to Main Dashboard
        </button>
        <h1>Your Training</h1>
        <p className={styles.subtitle}>Continue your journey through the seven threads</p>
      </div>
      {/* Available Modules Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Available Modules</h2>
        <div className={styles.modulesList}>
          {availableModules.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No modules available</h3>
              <p>All modules have been completed. Check back soon for new training content.</p>
            </div>
          ) : (
            availableModules.map(module => (
              <div
                key={module._id}
                className={styles.moduleCard}
                onClick={() => handleModuleClick(module._id)}
              >
                <div className={styles.moduleHeader}>
                  <div className={styles.moduleMeta}>
                    <span className={styles.threadBadge}>{module.thread}</span>
                    <span className={styles.tierBadge}>{module.tier}</span>
                  </div>
                  {getStatusBadge(module)}
                </div>
                <h2 className={styles.moduleTitle}>{module.title}</h2>
                {module.description && (
                  <p className={styles.moduleDescription}>{module.description}</p>
                )}
                {module.estimatedDuration && (
                  <div className={styles.moduleDuration}>
                    ⏱ {module.estimatedDuration} minutes
                  </div>
                )}
                {module.progress && !module.progress.completed && (
                  <div className={styles.progressSection}>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${getProgressPercentage(module.progress)}%` }}
                      />
                    </div>
                    <div className={styles.progressText}>
                      {getProgressPercentage(module.progress)}% complete
                    </div>
                  </div>
                )}
                <div className={styles.moduleFooter}>
                  {module.progress ? (
                    <button className={styles.continueButton}>Continue Training →</button>
                  ) : (
                    <button className={styles.startButton}>Start Module →</button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Completed Modules Section */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Completed Modules</h2>
        <div className={styles.modulesList}>
          {completedModules.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>No completed modules yet</h3>
              <p>Finish a module to see it here!</p>
            </div>
          ) : (
            completedModules.map(module => (
              <div
                key={module._id}
                className={styles.moduleCard}
                onClick={() => handleModuleClick(module._id)}
              >
                <div className={styles.moduleHeader}>
                  <div className={styles.moduleMeta}>
                    <span className={styles.threadBadge}>{module.thread}</span>
                    <span className={styles.tierBadge}>{module.tier}</span>
                  </div>
                  {getStatusBadge(module)}
                </div>
                <h2 className={styles.moduleTitle}>{module.title}</h2>
                <div className={styles.moduleFooter}>
                  <button className={styles.reviewButton}>Review Module →</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default TrainingDashboard;
