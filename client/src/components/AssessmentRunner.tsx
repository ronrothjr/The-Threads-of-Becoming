import React, { useState, useEffect, useMemo } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import styles from './AssessmentRunner.module.css';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
export interface AssessmentQuestion {
  id: string;
  thread: string;
  category?: string;
  text: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}
export interface AssessmentConfig {
  type: 'quick_profile' | 'personal_journey_map';
  title: string;
  subtitle: string;
  questions: AssessmentQuestion[];
  totalQuestions: number;
  submitEndpoint: string;
  partialEndpoint?: string;
  resultsRoute: string;
  shouldShuffle?: boolean;
  hideThread?: boolean;
  answerType: 'A' | 'B' | 'C' | 'D' | 'a' | 'b' | 'c' | 'd';
}

interface AssessmentRunnerProps {
  config: AssessmentConfig;
}
type AnswerValue = 'A' | 'B' | 'C' | 'D' | 'a' | 'b' | 'c' | 'd';
const AssessmentRunner: React.FC<AssessmentRunnerProps> = ({ config }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, AnswerValue>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
  const navigate = useNavigate();
  // Get questions - shuffled or ordered based on config
  const orderedQuestions = useMemo(() => {
    if (questionOrder.length > 0) {
      // Restore saved order
      return questionOrder
        .map((id) => config.questions.find((q) => q.id === id))
        .filter((q) => q !== undefined) as AssessmentQuestion[];
    }
    // Create order based on config
    if (config.shouldShuffle) {
      return shuffleArray(config.questions);
    }
    return config.questions;
  }, [questionOrder, config.questions, config.shouldShuffle]);
  // Load partial progress on mount
  useEffect(() => {
    const loadPartialProgress = async () => {
      if (!config.partialEndpoint) {
        setIsLoading(false);
        return;
      }
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          setIsLoading(false);
          return;
        }
        const response = await fetch(`${API_URL}/api/assessments/${config.partialEndpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          if (data && data.responses) {
            const loadedResponses: Record<string, AnswerValue> = {};
            data.responses.forEach((r: { questionId: string; answer: AnswerValue }) => {
              loadedResponses[r.questionId] = r.answer;
            });
            setResponses(loadedResponses);
            // Restore question order if saved
            if (data.questionOrder && data.questionOrder.length > 0) {
              setQuestionOrder(data.questionOrder);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load partial progress:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadPartialProgress();
  }, [config.partialEndpoint]);
  // Set current question to first unanswered after questions are loaded
  useEffect(() => {
    if (!isLoading && orderedQuestions.length > 0 && Object.keys(responses).length > 0) {
      const firstUnanswered = orderedQuestions.findIndex((q) => !responses[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentQuestion(firstUnanswered);
      }
    }
  }, [isLoading, orderedQuestions, responses]);
  // Save partial progress when user navigates away
  useEffect(() => {
    const savePartialProgress = async () => {
      if (
        config.partialEndpoint &&
        Object.keys(responses).length > 0 &&
        Object.keys(responses).length < config.totalQuestions
      ) {
        try {
          const token = localStorage.getItem('auth_token');
          if (!token) return;
          const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
            questionId,
            answer,
          }));
          const order = questionOrder.length > 0 ? questionOrder : orderedQuestions.map((q) => q.id);
          await fetch(`${API_URL}/api/assessments/${config.partialEndpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              responses: formattedResponses,
              questionOrder: order,
            }),
          });
        } catch (err) {
          console.error('Failed to save partial progress:', err);
        }
      }
    };
    window.addEventListener('beforeunload', savePartialProgress);
    return () => {
      window.removeEventListener('beforeunload', savePartialProgress);
      savePartialProgress();
    };
  }, [responses, questionOrder, orderedQuestions, config.partialEndpoint, config.totalQuestions]);
  // Save question order after randomization
  useEffect(() => {
    if (orderedQuestions.length > 0 && questionOrder.length === 0) {
      setQuestionOrder(orderedQuestions.map((q) => q.id));
    }
  }, [orderedQuestions, questionOrder]);
  const handleAnswer = async (questionId: string, answer: AnswerValue) => {
    const newResponses = { ...responses, [questionId]: answer };
    setResponses(newResponses);
    setError('');
    setIsTransitioning(true);
    // Save partial progress immediately after answering
    if (config.partialEndpoint) {
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          const formattedResponses = Object.entries(newResponses).map(([questionId, answer]) => ({
            questionId,
            answer,
          }));
          const order = questionOrder.length > 0 ? questionOrder : orderedQuestions.map((q) => q.id);
          fetch(`${API_URL}/api/assessments/${config.partialEndpoint}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              responses: formattedResponses,
              questionOrder: order,
            }),
          })
            .then(async (response) => {
              if (!response.ok) {
                const errorText = await response.text();
                console.error('Save progress failed:', response.status, errorText);
              }
            })
            .catch((err) => console.error('Failed to save progress (network error):', err));
        }
      } catch (err) {
        console.error('Failed to save progress (exception):', err);
      }
    }
    // Auto-advance after 1 second
    setTimeout(() => {
      if (currentQuestion === orderedQuestions.length - 1) {
        handleSubmit(newResponses);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }
    }, 1000);
  };
  const handleNext = () => {
    if (currentQuestion < orderedQuestions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }, 150);
    } else {
      handleSubmit();
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleSubmit = async (finalResponses: Record<string, AnswerValue> = responses) => {
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        navigate('/login');
        return;
      }
      const formattedResponses = Object.entries(finalResponses).map(([questionId, answer]) => ({
        questionId,
        answer,
      }));
      const response = await fetch(`${API_URL}/api/assessments/${config.submitEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          responses: formattedResponses,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to submit assessment');
      }
      navigate(config.resultsRoute);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit assessment');
    } finally {
      setIsSubmitting(false);
    }
  };
  if (isLoading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading...</div>
      </div>
    );
  }
  if (orderedQuestions.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>No questions available</div>
      </div>
    );
  }
  const question = orderedQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / orderedQuestions.length) * 100;
  const answeredCount = Object.keys(responses).length;
  return (
    <div className={styles.container}>
      <div className={styles.compactLayout}>
        {/* Instructions at top */}
        <div className={styles.instructions}>
          <p>Choose how you <strong>actually</strong> respond in challenging moments—not how you wish you responded. There are no "right" answers.</p>
        </div>
        {/* Progress and Question */}
        <div className={styles.header}>
          <div className={styles.progressInfo}>
            Question {currentQuestion + 1} of {orderedQuestions.length}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
        {/* Question and Options */}
        <div className={`${styles.questionCard} ${isTransitioning ? styles.transitioning : ''}`} key={question.id}>
          {!config.hideThread && (
            <div className={styles.threadBadge}>{question.thread}</div>
          )}
          <h2 className={styles.questionText}>{question.text}</h2>
          <div className={styles.options}>
            {question.options.map((option) => (
              <label
                key={`${question.id}-${option.value}`}
                className={`${styles.option} ${
                  responses[question.id] === option.value ? styles.selected : ''
                } ${isTransitioning ? styles.disabled : ''}`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={responses[question.id] === option.value}
                  onChange={() => !isTransitioning && handleAnswer(question.id, option.value as AnswerValue)}
                  disabled={isTransitioning}
                />
                <span className={styles.optionLabel}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
      {/* Fixed Bottom Navigation Bar */}
      <div className={styles.bottomNav}>
        <div className={styles.bottomNavContent}>
          {currentQuestion > 0 && !isSubmitting && (
            <button
              onClick={handlePrevious}
              disabled={isTransitioning}
              className={styles.buttonSecondary}
            >
              ← Previous
            </button>
          )}
          <div className={styles.spacer}></div>
          {currentQuestion < orderedQuestions.length - 1 && responses[question.id] && !isSubmitting && (
            <button
              onClick={handleNext}
              className={styles.buttonPrimary}
            >
              Next →
            </button>
          )}
          {isSubmitting && (
            <div className={styles.submittingText}>Submitting your assessment...</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AssessmentRunner;
