import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PracticeAssignments.module.css';
import { logger } from '../utils/logger';
import * as practice from '../services/api/practice';

interface PracticeAssignment {
  _id: string;
  moduleId: string;
  assignmentType: string;
  prompt: string;
  scheduledDate: string;
  completedAt?: string;
  response?: string;
  metadata?: {
    type?: string;
    suggestedDuration?: number;
    guidance?: string;
    optional?: boolean;
  };
}

const PracticeAssignments: React.FC = () => {
  const [pendingAssignments, setPendingAssignments] = useState<PracticeAssignment[]>([]);
  const [upcomingAssignments, setUpcomingAssignments] = useState<PracticeAssignment[]>([]);
  const [currentAssignment, setCurrentAssignment] = useState<PracticeAssignment | null>(null);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadAssignments();
  }, []);

  const loadAssignments = async () => {
    try {
      // Use centralized practice service
      const [pending, upcoming] = await Promise.all([
        practice.getPendingAssignments(),
        practice.getUpcomingAssignments()
      ]);

      setPendingAssignments(pending as any);
      setUpcomingAssignments(upcoming as any);
    } catch (err) {
      logger.error('Failed to load practice assignments', { error: err });
    } finally {
      setLoading(false);
    }
  };

  const handleStartAssignment = (assignment: PracticeAssignment) => {
    setCurrentAssignment(assignment);
    setResponse('');
  };

  const handleSubmit = async () => {
    if (!currentAssignment || response.trim().length < 10) return;

    try {
      // Use centralized practice service
      await practice.submitAssignment(currentAssignment._id, { response });

      logger.info('Practice assignment submitted', { assignmentId: currentAssignment._id });
      setCurrentAssignment(null);
      setResponse('');
      loadAssignments(); // Reload to remove from pending list
    } catch (err) {
      logger.error('Failed to submit assignment', { error: err });
      alert('Failed to save your response. Please try again.');
    }
  };

  const handleSkip = async () => {
    if (!currentAssignment) return;

    try {
      // Use centralized practice service
      await practice.skipAssignment(currentAssignment._id);

      logger.info('Practice assignment skipped', { assignmentId: currentAssignment._id });
      setCurrentAssignment(null);
      loadAssignments();
    } catch (err) {
      logger.error('Failed to skip assignment', { error: err });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays > 1 && diffDays < 7) return `In ${diffDays} days`;
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading practice assignments...</div>
      </div>
    );
  }

  // Active assignment view
  if (currentAssignment) {
    return (
      <div className={styles.container}>
        <div className={styles.assignmentView}>
          <div className={styles.header}>
            <button className={styles.backButton} onClick={() => setCurrentAssignment(null)}>
              ← Back to Assignments
            </button>
            <div className={styles.assignmentType}>
              {currentAssignment.assignmentType.replace(/-/g, ' ')}
            </div>
          </div>

          <div className={styles.promptSection}>
            <h1>{currentAssignment.prompt}</h1>

            {currentAssignment.metadata?.guidance && (
              <div className={styles.guidance}>
                <p>{currentAssignment.metadata.guidance}</p>
              </div>
            )}

            <div className={styles.meta}>
              <span>Suggested time: ~{currentAssignment.metadata?.suggestedDuration || 5} minutes</span>
              <span>Type: {currentAssignment.metadata?.type || 'reflection'}</span>
            </div>
          </div>

          <div className={styles.responseSection}>
            <label htmlFor="response">Your Response</label>
            <textarea
              id="response"
              className={styles.responseInput}
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Take your time to reflect..."
              rows={12}
              autoFocus
            />
            <div className={styles.wordCount}>
              {response.split(/\s+/).filter(w => w.length > 0).length} words
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.skipButton}
              onClick={handleSkip}
            >
              Skip for now
            </button>
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={response.trim().length < 10}
            >
              Submit Response
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Assignment list view
  return (
    <div className={styles.container}>
      <div className={styles.listView}>
        <div className={styles.pageHeader}>
          <h1>Practice Assignments</h1>
          <p>Continue your learning between training sessions</p>
        </div>

        {pendingAssignments.length > 0 && (
          <section className={styles.section}>
            <h2>Ready for You ({pendingAssignments.length})</h2>
            <div className={styles.assignmentsList}>
              {pendingAssignments.map(assignment => (
                <div key={assignment._id} className={styles.assignmentCard}>
                  <div className={styles.cardHeader}>
                    <span className={styles.typeLabel}>
                      {assignment.assignmentType.replace(/-/g, ' ')}
                    </span>
                    <span className={styles.moduleLabel}>{assignment.moduleId.replace(/-/g, ' ')}</span>
                  </div>
                  <h3>{assignment.prompt}</h3>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      ~{assignment.metadata?.suggestedDuration || 5} min
                    </span>
                    <button
                      className={styles.startButton}
                      onClick={() => handleStartAssignment(assignment)}
                    >
                      Start →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {pendingAssignments.length === 0 && upcomingAssignments.length === 0 && (
          <div className={styles.empty}>
            <h2>No Practice Assignments Yet</h2>
            <p>Complete a training module to receive practice assignments</p>
            <button
              className={styles.moduleButton}
              onClick={() => navigate('/training/module/pause-foundation')}
            >
              Try PAUSE Foundation Module
            </button>
          </div>
        )}

        {upcomingAssignments.length > 0 && (
          <section className={styles.section}>
            <h2>Upcoming ({upcomingAssignments.length})</h2>
            <div className={styles.upcomingList}>
              {upcomingAssignments.map(assignment => (
                <div key={assignment._id} className={styles.upcomingCard}>
                  <div className={styles.upcomingDate}>
                    {formatDate(assignment.scheduledDate)}
                  </div>
                  <div className={styles.upcomingContent}>
                    <span className={styles.upcomingType}>
                      {assignment.assignmentType.replace(/-/g, ' ')}
                    </span>
                    <p>{assignment.prompt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default PracticeAssignments;
