import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TrainingSession.module.css';
import { logger } from '../utils/logger';
import * as training from '../services/api/training';

// TrainingModule interfaces based on schema
interface AudioContent {
  text: string;
  voiceId?: string;
  speed?: number;
  model?: string;
  audioUrl?: string;
  duration?: number;
  generatedAt?: Date;
  charactersUsed?: number;
}
interface SlideContent {
  slideNumber: number;
  title: string;
  visualDescription: string;
  visualUrl?: string;
  narration: AudioContent;
  metadata?: any;
}

interface MeditationContent {
  duration: number;
  title?: string;
  audio: AudioContent;
  scriptSections?: {
    opening?: string;
    deepening?: string;
    closing?: string;
  };
}

interface ExerciseContent {
  type: string;
  title?: string;
  duration?: number;
  setup?: string;
  experience?: string;
  reflection?: string;
  instructionAudio?: AudioContent;
}

interface WritingPrompt {
  prompt: string;
  type?: string;
  suggestedDuration?: number;
  guidance?: string;
  context?: string; // 'in-session' | 'practice-assignment' | 'weekly-reflection'
  optional?: boolean;
  scheduledAfterDays?: number;
}

interface KnowledgeCheck {
  question: string;
  type?: string;
  scenario?: string;
  options: Array<{
    text: string;
    isCorrect: boolean;
    feedback: string;
  }>;
}

interface SessionStructure {
  ground?: { duration: number; elements?: string[] };
  teach?: { duration: number; slideSequence?: number[] };
  practice?: { duration: number; exerciseIndex?: number };
  integrate?: { duration: number; promptIndex?: number };
}

interface TrainingModule {
  _id: string;
  moduleId: string;
  thread: string;
  tier: string;
  title?: string;
  seedQuestion: string;
  learningObjectives?: string[];
  slides: SlideContent[];
  meditations: MeditationContent[];
  exercises: ExerciseContent[];
  writingPrompts: WritingPrompt[];
  knowledgeChecks: KnowledgeCheck[];
  estimatedDuration?: number;
  sessionStructure?: SessionStructure;
  published: boolean;
}

type Phase = 'ground' | 'teach' | 'practice' | 'integrate';
interface PhaseProgress {
  phase: Phase;
  itemIndex: number;
  responses: any[];
}

const TrainingSession: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const [module, setModule] = useState<TrainingModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const [currentPhase, setCurrentPhase] = useState<Phase>('ground');
  const [phaseItemIndex, setPhaseItemIndex] = useState(0);
  const [itemStartTime, setItemStartTime] = useState<number>(Date.now());
  const [currentResponse, setCurrentResponse] = useState('');
  const [allResponses, setAllResponses] = useState<any[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [viewedAnswers, setViewedAnswers] = useState<Set<number>>(new Set());
  const [hasProgress, setHasProgress] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    loadModule();
  }, [moduleId]);

  // Load current item's response when resuming
  useEffect(() => {
    if (started && allResponses.length > 0 && hasProgress) {
      const savedResponse = allResponses.find(r => r.phase === currentPhase && r.itemIndex === phaseItemIndex);
      if (savedResponse) {
        setCurrentResponse(savedResponse.response || '');
        setSelectedAnswer(savedResponse.selectedAnswer ?? null);
        if (savedResponse.selectedAnswer !== undefined && savedResponse.selectedAnswer !== null) {
          setShowFeedback(true);
          setViewedAnswers(new Set([savedResponse.selectedAnswer]));
        }
      }
    }
  }, [started, hasProgress]);
  const loadModule = async () => {
    try {
      // For now, hardcode to PAUSE Foundation Module
      const [data, savedProgress] = await Promise.all([
        training.getModule('pause-foundation'),
        training.getModuleProgress('pause-foundation').catch(() => null)
      ]);

      setModule(data as any);

      // Load existing progress if any
      if (savedProgress) {
        setHasProgress(true);
        if (savedProgress.completed) {
          // For completed modules, load all responses but start from the beginning
          setIsCompleted(true);
          setAllResponses(savedProgress.allResponses || []);
          setCurrentPhase('ground');
          setPhaseItemIndex(0);
          // Don't set started, let user click "Review Module" button
          logger.info('Loaded completed module for review - starting from beginning', {
            totalResponses: savedProgress.allResponses?.length || 0
          });
        } else {
          // For in-progress modules, resume from saved position
          setCurrentPhase(savedProgress.currentPhase as Phase);
          setPhaseItemIndex(savedProgress.phaseItemIndex);
          setStarted(true);
          setSessionStartTime(savedProgress.sessionStartTime ? new Date(savedProgress.sessionStartTime).getTime() : Date.now());
          logger.info('Resumed from saved progress', {
            phase: savedProgress.currentPhase,
            itemIndex: savedProgress.phaseItemIndex
          });
        }
      }
    } catch (err) {
      logger.error('Failed to load training module', { error: err });
      alert('Unable to load training module. Please try again.');
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  const handleStartSession = () => {
    if (!module) return;
    setStarted(true);
    setSessionStartTime(Date.now());
    setItemStartTime(Date.now());
    logger.info('Training session started', { moduleId: module.moduleId });
  };

  const getPhaseOrder = (): Phase[] => {
    const structure = module?.sessionStructure;
    if (!structure) return ['ground', 'teach', 'practice', 'integrate'];
    const phases: Phase[] = [];
    if (structure.ground) phases.push('ground');
    if (structure.teach) phases.push('teach');
    if (structure.practice) phases.push('practice');
    if (structure.integrate) phases.push('integrate');
    return phases;
  };

  const getCurrentPhaseContent = () => {
    if (!module) return null;
    const structure = module.sessionStructure;
    switch (currentPhase) {
      case 'ground':
        if (structure?.ground?.elements) {
          const element = structure.ground.elements[phaseItemIndex];
          if (element?.startsWith('meditation:')) {
            const idx = parseInt(element.split(':')[1]);
            return { type: 'meditation', content: module.meditations[idx] };
          }
        }
        return { type: 'meditation', content: module.meditations[0] };
      case 'teach':
        const slideSequence = structure?.teach?.slideSequence || module.slides.map((_, i) => i);
        const slideIdx = slideSequence[phaseItemIndex];
        return { type: 'slide', content: module.slides[slideIdx] };
      case 'practice':
        const exerciseIdx = structure?.practice?.exerciseIndex || 0;
        return { type: 'exercise', content: module.exercises[exerciseIdx + phaseItemIndex] };
      case 'integrate':
        // Show all knowledge checks first, then in-session writing prompts
        const inSessionPrompts = module.writingPrompts?.filter(p => !p.context || p.context === 'in-session') || [];
        const knowledgeCheckCount = module.knowledgeChecks?.length || 0;
        const totalIntegrateItems = knowledgeCheckCount + inSessionPrompts.length;
        if (phaseItemIndex < knowledgeCheckCount) {
          // Show knowledge checks first
          return { type: 'knowledge', content: module.knowledgeChecks[phaseItemIndex] };
        } else {
          // Then show writing prompts
          const promptIdx = phaseItemIndex - knowledgeCheckCount;
          return { type: 'writing', content: inSessionPrompts[promptIdx] };
        }
      default:
        return null;
    }
  };
  const getPhaseItemCount = () => {
    if (!module) return 0;
    const structure = module.sessionStructure;
    switch (currentPhase) {
      case 'ground':
        return structure?.ground?.elements?.length || 1;
      case 'teach':
        return structure?.teach?.slideSequence?.length || module.slides.length;
      case 'practice':
        return module.exercises?.length || 0;
      case 'integrate':
        const inSessionPrompts = module.writingPrompts?.filter(p => !p.context || p.context === 'in-session') || [];
        return inSessionPrompts.length + (module.knowledgeChecks?.length || 0);
      default:
        return 0;
    }
  };

  const loadResponseForCurrentItem = (phase: Phase, itemIndex: number) => {
    // Find the saved response for this specific item
    const savedResponse = allResponses.find(r => r.phase === phase && r.itemIndex === itemIndex);
    if (savedResponse) {
      setCurrentResponse(savedResponse.response || '');
      setSelectedAnswer(savedResponse.selectedAnswer ?? null);
      if (savedResponse.selectedAnswer !== undefined && savedResponse.selectedAnswer !== null) {
        setShowFeedback(true);
        setViewedAnswers(new Set([savedResponse.selectedAnswer]));
      }
    } else {
      setCurrentResponse('');
      setSelectedAnswer(null);
      setShowFeedback(false);
      setViewedAnswers(new Set());
    }
  };

  // Audio playback management
  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playAudio = (audioUrl: string) => {
    stopAudio(); // Stop any existing audio first
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.load();
      audioRef.current.play().catch(error => {
        logger.warn('Audio autoplay prevented by browser', { error });
        // Browser prevented autoplay - user will need to click play manually
      });
    }
  };

  // Effect to manage audio playback when content changes
  useEffect(() => {
    if (!module || !started) return;
    const phaseContent = getCurrentPhaseContent();
    if (!phaseContent) return;
    let audioUrl: string | undefined;
    // Extract audio URL based on content type
    if (phaseContent.type === 'meditation') {
      audioUrl = (phaseContent.content as MeditationContent).audio?.audioUrl;
    } else if (phaseContent.type === 'slide') {
      audioUrl = (phaseContent.content as SlideContent).narration?.audioUrl;
    } else if (phaseContent.type === 'exercise') {
      audioUrl = (phaseContent.content as ExerciseContent).instructionAudio?.audioUrl;
    }

    // Auto-play audio if available
    if (audioUrl) {
      playAudio(audioUrl);
    }

    // Cleanup: stop audio when component unmounts or content changes
    return () => {
      stopAudio();
    };
  }, [currentPhase, phaseItemIndex, module, started]);

  const handlePreviousItem = () => {
    let newPhase = currentPhase;
    let newItemIndex = phaseItemIndex;
    if (phaseItemIndex > 0) {
      // Go to previous item in current phase
      newItemIndex = phaseItemIndex - 1;
    } else {
      // Go to previous phase
      const phases = getPhaseOrder();
      const currentPhaseIndex = phases.indexOf(currentPhase);
      if (currentPhaseIndex > 0) {
        newPhase = phases[currentPhaseIndex - 1];
        // Set to last item of previous phase
        const prevPhaseItemCount = getPreviousPhaseItemCount(newPhase);
        newItemIndex = prevPhaseItemCount - 1;
      }
    }

    // Stop any playing audio before navigation
    stopAudio();
    setCurrentPhase(newPhase);
    setPhaseItemIndex(newItemIndex);
    loadResponseForCurrentItem(newPhase, newItemIndex);
    window.scrollTo(0, 0);
  };

  const getPreviousPhaseItemCount = (phase: Phase): number => {
    if (!module) return 0;
    const structure = module.sessionStructure;
    switch (phase) {
      case 'ground':
        return structure?.ground?.elements?.length || 1;
      case 'teach':
        return structure?.teach?.slideSequence?.length || module.slides.length;
      case 'practice':
        return module.exercises?.length || 0;
      case 'integrate':
        const inSessionPrompts = module.writingPrompts?.filter(p => !p.context || p.context === 'in-session') || [];
        return inSessionPrompts.length + (module.knowledgeChecks?.length || 0);
      default:
        return 0;
    }
  };

  const handleNextItem = async () => {
    const timeSpent = Math.floor((Date.now() - itemStartTime) / 1000);
    // Save or update response
    const existingResponseIndex = allResponses.findIndex(
      r => r.phase === currentPhase && r.itemIndex === phaseItemIndex
    );
    let updatedResponses;
    if (existingResponseIndex >= 0) {
      // Update existing response
      updatedResponses = [...allResponses];
      updatedResponses[existingResponseIndex] = {
        phase: currentPhase,
        itemIndex: phaseItemIndex,
        response: currentResponse,
        selectedAnswer,
        timeSpent: (updatedResponses[existingResponseIndex].timeSpent || 0) + timeSpent
      };
    } else {
      // Add new response
      updatedResponses = [...allResponses, {
        phase: currentPhase,
        itemIndex: phaseItemIndex,
        response: currentResponse,
        selectedAnswer,
        timeSpent
      }];
    }

    setAllResponses(updatedResponses);
    const itemCount = getPhaseItemCount();
    const phases = getPhaseOrder();
    const currentPhaseIndex = phases.indexOf(currentPhase);
    let nextPhase = currentPhase;
    let nextItemIndex = phaseItemIndex;

    if (phaseItemIndex < itemCount - 1) {
      // Next item in current phase
      nextItemIndex = phaseItemIndex + 1;
    } else {
      // Move to next phase
      if (currentPhaseIndex < phases.length - 1) {
        nextPhase = phases[currentPhaseIndex + 1];
        nextItemIndex = 0;
      } else {
        // Complete session
        await handleCompleteSession();
        return;
      }
    }

    // Save progress to backend (only if not in review mode)
    if (!isCompleted) {
      try {
        if (module) {
          await training.saveProgress(module.moduleId, {
            currentPhase: nextPhase,
            phaseItemIndex: nextItemIndex,
            allResponses: updatedResponses,
            sessionStartTime: sessionStartTime ?? undefined,
            completed: false
          });
        }
      } catch (err) {
        logger.error('Failed to save progress', { error: err });
        // Don't block navigation if save fails
      }
    }

    // Update state for navigation
    setCurrentPhase(nextPhase);
    setPhaseItemIndex(nextItemIndex);
    setItemStartTime(Date.now());
    loadResponseForCurrentItem(nextPhase, nextItemIndex);
    window.scrollTo(0, 0);
  };

  const handleCompleteSession = async () => {
    if (!module || !sessionStartTime) return;

    try {
      const token = localStorage.getItem('auth_token');
      if (!token) return;

      const totalDuration = Math.floor((Date.now() - (sessionStartTime || 0)) / 60000);

      // Mark progress as completed
      await training.saveProgress(module.moduleId, {
        currentPhase: 'integrate',
        phaseItemIndex: 0,
        allResponses: allResponses,
        sessionStartTime: sessionStartTime || undefined,
        completed: true
      });

      // Create practice assignments for this module
      const practicePrompts = module.writingPrompts?.filter(
        p => p.context === 'practice-assignment' || p.context === 'weekly-reflection'
      ) || [];
      if (practicePrompts.length > 0) {
        await training.completeModule(module.moduleId, {
          duration: totalDuration,
          responses: allResponses,
        });
      }

      logger.info('Training session completed', {
        moduleId: module.moduleId,
        duration: totalDuration,
        responses: allResponses.length,
        practiceAssignmentsCreated: practicePrompts.length,
      });

      navigate('/training/dashboard');
    } catch (err) {
      logger.error('Failed to complete session', { error: err });
      alert('Failed to save session. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading training module...</div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Module Not Found</h2>
          <p>The requested training module could not be loaded.</p>
          <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
      </div>
    );
  }

  // Module preview screen
  if (!started) {
    const structure = module.sessionStructure;
    return (
      <div className={styles.container}>
        <div className={styles.overview}>
          {/* Fixed header with badges */}
          <div className={styles.overviewHeader}>
            <div className={styles.threadBadge}>{module.thread}</div>
            <div className={styles.tierBadge}>{module.tier}</div>
          </div>
          {/* Scrollable content */}
          <div className={styles.overviewContent}>
            <h1>{module.title}</h1>
            <div className={styles.objectiveBox}>
              <h3>Seed Question</h3>
              <p>{module.seedQuestion}</p>
            </div>
            {module.learningObjectives && module.learningObjectives.length > 0 && (
              <div className={styles.objectivesBox}>
                <h3>Learning Objectives</h3>
                <ul>
                  {module.learningObjectives.map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.sessionDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Duration</span>
                <span className={styles.detailValue}>{module.estimatedDuration || 60} minutes</span>
              </div>
            </div>

            <div className={styles.phaseBreakdown}>
              <h3>Session Structure</h3>
              {structure?.ground && (
                <div className={styles.phasePreview}>
                  <div className={styles.phaseName}>
                    <span className={styles.phaseIcon}>🌱</span>
                    <strong>GROUND</strong>
                    <span className={styles.phaseDuration}>{structure.ground.duration} min</span>
                  </div>
                  <p>Meditation & centering practice</p>
                </div>
              )}
              {structure?.teach && (
                <div className={styles.phasePreview}>
                  <div className={styles.phaseName}>
                    <span className={styles.phaseIcon}>📚</span>
                    <strong>TEACH</strong>
                    <span className={styles.phaseDuration}>{structure.teach.duration} min</span>
                  </div>
                  <p>{module.slides.length} slides with narration</p>
                </div>
              )}
              {structure?.practice && (
                <div className={styles.phasePreview}>
                  <div className={styles.phaseName}>
                    <span className={styles.phaseIcon}>🎯</span>
                    <strong>PRACTICE</strong>
                    <span className={styles.phaseDuration}>{structure.practice.duration} min</span>
                  </div>
                  <p>{module.exercises.length} experiential exercises</p>
                </div>
              )}
              {structure?.integrate && (
                <div className={styles.phasePreview}>
                  <div className={styles.phaseName}>
                    <span className={styles.phaseIcon}>✍️</span>
                    <strong>INTEGRATE</strong>
                    <span className={styles.phaseDuration}>{structure.integrate.duration} min</span>
                  </div>
                  <p>{module.writingPrompts.length} reflections, {module.knowledgeChecks.length} knowledge checks</p>
                </div>
              )}
            </div>

            <div className={styles.framingBox}>
              <h3>Before You Begin</h3>
              <p>Find a quiet space where you can focus without interruption. Have a journal or paper ready for reflection.</p>
            </div>
          </div>

          {/* Fixed action bar */}
          <div className={styles.overviewActionBar}>
            <button className={styles.exitButton} onClick={() => navigate('/training/dashboard')}>
              ← Exit Training
            </button>
            <button className={styles.startButton} onClick={handleStartSession}>
              {isCompleted ? 'Review Module →' : hasProgress ? 'Continue Module →' : 'Begin Module'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active session
  const phaseContent = getCurrentPhaseContent();
  if (!phaseContent) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Content Error</h2>
          <p>Unable to load current content.</p>
        </div>
      </div>
    );
  }

  const phases = getPhaseOrder();
  const currentPhaseIndex = phases.indexOf(currentPhase);
  const totalPhases = phases.length;
  const itemCount = getPhaseItemCount();
  // Render based on content type
  return (
    <div className={styles.container}>
      <div className={styles.sessionView}>
        {/* Exit button and phase indicators */}
        <div className={styles.phaseProgress}>
          <button
            className={styles.exitButton}
            onClick={async () => {
              const exitMessage = isCompleted
                ? 'Are you sure you want to exit?'
                : 'Are you sure you want to exit? Your progress will be saved.';
              if (window.confirm(exitMessage)) {
                // Save progress before exiting (only if not in review mode)
                if (!isCompleted) {
                  try {
                    if (module) {
                      await training.saveProgress(module.moduleId, {
                        currentPhase,
                        phaseItemIndex,
                        allResponses,
                        sessionStartTime: sessionStartTime ?? undefined,
                        completed: false
                      });
                    }
                  } catch (err) {
                    logger.error('Failed to save progress on exit', { error: err });
                  }
                }
                navigate('/training/dashboard');
              }
            }}
          >
            ← Exit Training
          </button>
          <div className={styles.phaseIndicators}>
            {phases.map((phase, idx) => (
              <div
                key={phase}
                className={`${styles.phaseIndicator} ${idx <= currentPhaseIndex ? styles.active : ''} ${idx === currentPhaseIndex ? styles.current : ''}`}
              >
                {phase.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Phase item progress */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((phaseItemIndex + 1) / itemCount) * 100}%` }}
          />
        </div>

        <div className={styles.itemHeader}>
          <span className={styles.phaseLabel}>{currentPhase.toUpperCase()}</span>
          <span className={styles.itemCounter}>
            {phaseItemIndex + 1} of {itemCount}
          </span>
        </div>

        {/* MEDITATION */}
        {phaseContent.type === 'meditation' && (
          <div className={styles.meditationView}>
            <div className={styles.meditationContent}>
              <h2>{(phaseContent.content as MeditationContent).title}</h2>
              <div className={styles.meditationDuration}>
                {(phaseContent.content as MeditationContent).duration} minutes
              </div>

              <div className={styles.meditationScript}>
                <p>{(phaseContent.content as MeditationContent).audio.text}</p>
              </div>

              {(phaseContent.content as MeditationContent).audio.audioUrl ? (
                <audio
                  ref={audioRef}
                  controls
                  className={styles.audioPlayer}
                >
                  <source src={(phaseContent.content as MeditationContent).audio.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <div className={styles.audioNote}>
                  <p>💬 Read the meditation script above at your own pace</p>
                </div>
              )}

              <div className={styles.meditationNote}>
                <p>Take your time with this practice. When you're ready, continue to the next phase.</p>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE */}
        {phaseContent.type === 'slide' && (
          <div className={styles.slideView}>
            <div className={styles.slideContent}>
              <div className={styles.slideNumber}>
                Slide {(phaseContent.content as SlideContent).slideNumber}
              </div>

              <h2>{(phaseContent.content as SlideContent).title}</h2>
              {(phaseContent.content as SlideContent).visualUrl ? (
                <div className={styles.slideVisual}>
                  <img src={(phaseContent.content as SlideContent).visualUrl} alt={(phaseContent.content as SlideContent).title} />
                </div>
              ) : (
                <div className={styles.visualDescription}>
                  <div className={styles.visualDescriptionIcon}>🎨</div>
                  <p>{(phaseContent.content as SlideContent).visualDescription}</p>
                </div>
              )}

              <div className={styles.slideNarration}>
                <p>{(phaseContent.content as SlideContent).narration.text}</p>
              </div>

              {(phaseContent.content as SlideContent).narration.audioUrl ? (
                <audio
                  ref={audioRef}
                  controls
                  className={styles.audioPlayer}
                >
                  <source src={(phaseContent.content as SlideContent).narration.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <div className={styles.audioNote}>
                  <p>💬 Read the narration above</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* EXERCISE */}
        {phaseContent.type === 'exercise' && (
          <div className={styles.exerciseView}>
            <div className={styles.exerciseContent}>
              <h2>{(phaseContent.content as ExerciseContent).title}</h2>
              <div className={styles.exerciseMeta}>
                <span className={styles.exerciseType}>{(phaseContent.content as ExerciseContent).type}</span>
                <span className={styles.exerciseDuration}>{(phaseContent.content as ExerciseContent).duration} min</span>
              </div>

              {(phaseContent.content as ExerciseContent).setup && (
                <div className={styles.exerciseSection}>
                  <h3>Setup</h3>
                  <p>{(phaseContent.content as ExerciseContent).setup}</p>
                </div>
              )}
              {(phaseContent.content as ExerciseContent).experience && (
                <div className={styles.exerciseSection}>
                  <h3>Experience</h3>
                  <p>{(phaseContent.content as ExerciseContent).experience}</p>
                </div>
              )}
              {(phaseContent.content as ExerciseContent).reflection && (
                <div className={styles.exerciseSection}>
                  <h3>Reflection</h3>
                  <p>{(phaseContent.content as ExerciseContent).reflection}</p>
                </div>
              )}

              {(phaseContent.content as ExerciseContent).instructionAudio?.audioUrl ? (
                <audio
                  ref={audioRef}
                  controls
                  className={styles.audioPlayer}
                >
                  <source src={(phaseContent.content as ExerciseContent).instructionAudio!.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <div className={styles.audioNote}>
                  <p>💬 Follow the instructions above</p>
                </div>
              )}

              <div className={styles.responseArea}>
                <label>Your Notes</label>
                <textarea
                  className={styles.responseInput}
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  placeholder="What did you notice during this exercise?"
                  rows={6}
                />
              </div>
            </div>
          </div>
        )}

        {/* WRITING PROMPT */}
        {phaseContent.type === 'writing' && (
          <div className={styles.writingView}>
            <div className={styles.writingContent}>
              <div className={styles.promptType}>{(phaseContent.content as WritingPrompt).type || 'reflection'}</div>
              <h2>{(phaseContent.content as WritingPrompt).prompt}</h2>
              {(phaseContent.content as WritingPrompt).guidance && (
                <div className={styles.promptGuidance}>
                  <p>{(phaseContent.content as WritingPrompt).guidance}</p>
                </div>
              )}

              <div className={styles.responseArea}>
                <label>Your Response</label>
                <textarea
                  className={styles.responseInput}
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  placeholder="Take your time... there's no right answer here."
                  rows={10}
                />
              </div>
            </div>
          </div>
        )}

        {/* KNOWLEDGE CHECK */}
        {phaseContent.type === 'knowledge' && (
          <div className={styles.knowledgeView}>
            <div className={styles.knowledgeContent}>
              <div className={styles.checkType}>{(phaseContent.content as KnowledgeCheck).type}</div>
              {(phaseContent.content as KnowledgeCheck).scenario && (
                <div className={styles.scenario}>
                  <p>{(phaseContent.content as KnowledgeCheck).scenario}</p>
                </div>
              )}

              <h2>{(phaseContent.content as KnowledgeCheck).question}</h2>
              <div className={styles.optionsList}>
                {(phaseContent.content as KnowledgeCheck).options.map((option, idx) => (
                  <button
                    key={idx}
                    className={`${styles.optionButton} ${selectedAnswer === idx ? styles.selected : ''} ${viewedAnswers.has(idx) && option.isCorrect ? styles.correct : ''} ${selectedAnswer === idx && viewedAnswers.has(idx) && !option.isCorrect ? styles.incorrect : ''}`}
                    onClick={() => {
                      setSelectedAnswer(idx);
                      setShowFeedback(true);
                      setViewedAnswers(prev => new Set(prev).add(idx));
                    }}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {showFeedback && selectedAnswer !== null && (
                <div className={`${styles.feedback} ${(phaseContent.content as KnowledgeCheck).options[selectedAnswer].isCorrect ? styles.correctFeedback : styles.incorrectFeedback}`}>
                  <p>{(phaseContent.content as KnowledgeCheck).options[selectedAnswer].feedback}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* UNIFIED ACTION BAR */}
        <div className={styles.actionBar}>
          <button
            className={styles.previousButton}
            onClick={handlePreviousItem}
            disabled={currentPhaseIndex === 0 && phaseItemIndex === 0}
          >
            ← Previous
          </button>
          {phaseContent.type === 'writing' && (phaseContent.content as WritingPrompt).optional && (
            <button
              className={styles.skipButton}
              onClick={handleNextItem}
            >
              Skip for now
            </button>
          )}

          <button
            className={styles.nextButton}
            onClick={handleNextItem}
            disabled={
              (phaseContent.type === 'knowledge' && viewedAnswers.size === 0) ||
              (phaseContent.type === 'writing' && !((phaseContent.content as WritingPrompt).optional) && currentResponse.trim().length < 10)
            }
          >
            {(phaseItemIndex < itemCount - 1) || (currentPhaseIndex < totalPhases - 1) ? 'Next' : 'Complete Module'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingSession;
