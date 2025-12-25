import React from 'react';
import AssessmentRunner, { AssessmentConfig } from '../components/AssessmentRunner';
import { personalJourneyMapQuestions } from '../data/personalJourneyMapQuestions';

const PersonalJourneyMap: React.FC = () => {
  const config: AssessmentConfig = {
    type: 'personal_journey_map',
    title: 'Personal Journey Map',
    subtitle: '70 questions to reveal your unique patterns and create your personalized development path ($10 one-time purchase, free for Premium subscribers)',
    questions: personalJourneyMapQuestions,
    totalQuestions: 70,
    submitEndpoint: 'personal-journey-map',
    partialEndpoint: 'personal-journey-map/partial',
    resultsRoute: '/assessment/personal-journey-map/results',
    shouldShuffle: true, // Randomize question order
    hideThread: true, // Hide thread name to let user focus on the question
    answerType: 'a', // lowercase for Personal Journey Map
  };

  return <AssessmentRunner config={config} />;
};

export default PersonalJourneyMap;
