import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { quickProfileQuestions } from '../data/quickProfileQuestions';
import styles from './QuickProfile.module.css';
import * as assessments from '../services/api/assessments';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
const QuickProfile: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [questionOrder, setQuestionOrder] = useState<string[]>([]);
  const navigate = useNavigate();
  // Get randomized questions - either from saved order or create new
  const randomizedQuestions = useMemo(() => {
    if (questionOrder.length > 0) {
      // Restore saved order
      return questionOrder
        .map(id => quickProfileQuestions.find(q => q.id === id))
        .filter(q => q !== undefined);
    }
    // Create new random order
    return shuffleArray(quickProfileQuestions);
  }, [questionOrder]);
  // Load partial progress on mount
  useEffect(() => {
    const loadPartialProgress = async () => {
      try {
        const data = await assessments.getPartialQuickProfile();
        if (data && data.responses) {
          const loadedResponses: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
          data.responses.forEach((r: any) => {
            loadedResponses[r.questionId] = r.answer as 'A' | 'B' | 'C' | 'D';
          });
          setResponses(loadedResponses);
          // Restore question order if saved
          if (data.questionOrder && data.questionOrder.length > 0) {
            setQuestionOrder(data.questionOrder);
          }
        }
      } catch (err) {
        console.error('Failed to load partial progress:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadPartialProgress();
  }, []);
  // Set current question to first unanswered after questions are loaded
  useEffect(() => {
    if (!isLoading && randomizedQuestions.length > 0 && Object.keys(responses).length > 0) {
      const firstUnanswered = randomizedQuestions.findIndex(q => !responses[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentQuestion(firstUnanswered);
      }
    }
  }, [isLoading, randomizedQuestions, responses]);
  // Save partial progress when user navigates away
  useEffect(() => {
    const savePartialProgress = async () => {
      if (Object.keys(responses).length > 0 && Object.keys(responses).length < 21) {
        try {
          const formattedResponses = Object.entries(responses).map(([questionId, answer]) => ({
            questionId,
            answer
          }));
          // Save the current question order
          const currentQuestionOrder = randomizedQuestions.map(q => q.id);
          await assessments.savePartialQuickProfile({
            responses: formattedResponses,
            questionOrder: currentQuestionOrder
          });
        } catch (err) {
          console.error('Failed to save partial progress:', err);
        }
      }
    };
    // Save on unmount if there are partial responses
    return () => {
      savePartialProgress();
    };
  }, [responses, randomizedQuestions]);
  const question = randomizedQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / randomizedQuestions.length) * 100;
  const isLastQuestion = currentQuestion === randomizedQuestions.length - 1;
  // Don't render if question is not available
  if (!question) {
    return (
      <div className={styles.quickProfileContainer}>
        <div className={styles.loadingText}>Loading question...</div>
      </div>
    );
  }
  const handleAnswer = (answer: 'A' | 'B' | 'C' | 'D') => {
    // Save the response (using original question ID for scoring)
    const newResponses = { ...responses, [question.id]: answer };
    setResponses(newResponses);
    setError('');
    setIsTransitioning(true);
    // Auto-advance after 1 second
    setTimeout(() => {
      if (isLastQuestion) {
        handleSubmit(newResponses);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      }
    }, 1000);
  };
  const handlePrevious = () => {
    if (currentQuestion > 0 && !isTransitioning) {
      setCurrentQuestion(currentQuestion - 1);
      setError('');
    }
  };
  const handleNext = () => {
    if (!isLastQuestion && !isTransitioning) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handleSubmit = async (finalResponses: Record<string, 'A' | 'B' | 'C' | 'D'> = responses) => {
    setIsSubmitting(true);
    try {
      const formattedResponses = Object.entries(finalResponses).map(([questionId, answer]) => ({
        questionId,
        answer
      }));
      await assessments.submitQuickProfile({ responses: formattedResponses });
      // Navigate to results page
      navigate('/assessment/results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit assessment');
      setIsSubmitting(false);
      setIsTransitioning(false);
    }
  };
  if (isLoading) {
    return (
      <div className={styles.quickProfileContainer}>
        <div className={styles.loadingText}>Loading assessment...</div>
      </div>
    );
  }
  return (
    <div className={styles.quickProfileContainer}>
      <div className={styles.compactLayout}>
        {/* Instructions at top */}
        <div className={styles.instructions}>
          <p>Choose how you <strong>actually</strong> respond in challenging moments—not how you wish you responded. There are no "right" answers.</p>
        </div>
        {/* Progress and Question */}
        <div className={styles.header}>
          <div className={styles.progressInfo}>
            Question {currentQuestion + 1} of {randomizedQuestions.length}
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
        {/* Question and Options */}
        <div className={`${styles.questionCard} ${isTransitioning ? styles.transitioning : ''}`} key={question.id}>
          <h2 className={styles.questionText}>{question.text}</h2>
          <div className={styles.options}>
            {question.options.map((option) => (
              <label
                key={`${question.id}-${option.value}`}
                className={`${styles.option} ${responses[question.id] === option.value ? styles.selected : ''} ${isTransitioning ? styles.disabled : ''}`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={responses[question.id] === option.value}
                  onChange={() => !isTransitioning && handleAnswer(option.value)}
                  disabled={isTransitioning}
                />
                <span className={styles.optionLabel}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        {error && (
          <div className={styles.error}>{error}</div>
        )}
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
          {!isLastQuestion && responses[question.id] && !isSubmitting && (
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
export default QuickProfile;
