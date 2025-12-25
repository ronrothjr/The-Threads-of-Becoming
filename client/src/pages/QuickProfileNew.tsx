import React from 'react';
import AssessmentRunner, { AssessmentConfig } from '../components/AssessmentRunner';
import { quickProfileQuestions } from '../data/quickProfileQuestions';

const QuickProfile: React.FC = () => {
  const config: AssessmentConfig = {
    type: 'quick_profile',
    title: 'Quick Profile Assessment',
    subtitle: 'A 5-minute snapshot of your capacity across the 7 Threads of Becoming',
    questions: quickProfileQuestions,
    totalQuestions: 21,
    submitEndpoint: 'quick-profile',
    partialEndpoint: 'quick-profile/partial',
    resultsRoute: '/assessment/results',
    shouldShuffle: true, // Randomize questions for Quick Profile
    answerType: 'A', // uppercase for Quick Profile
  };

  return <AssessmentRunner config={config} />;
};

export default QuickProfile;
