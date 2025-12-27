/**
 * Assessments API service
 */

import { apiClient } from './client';
import type {
  AssessmentStatus,
  PartialAssessment,
  AssessmentResults,
  SubmitAssessmentRequest,
  SubmitAssessmentResponse,
  ComprehensiveAnalysis,
  PatternAnalysis,
  UnlockAnalysis,
} from './types';

/**
 * Get assessment status (Quick Profile and Personal Journey Map completion)
 */
export const getStatus = async (): Promise<AssessmentStatus> => {
  return apiClient.get<AssessmentStatus>('/api/assessments/status');
};

/**
 * Get partial Quick Profile assessment
 */
export const getPartialQuickProfile = async (): Promise<PartialAssessment> => {
  return apiClient.get<PartialAssessment>('/api/assessments/quick-profile/partial');
};

/**
 * Save partial Quick Profile assessment
 */
export const savePartialQuickProfile = async (data: PartialAssessment): Promise<void> => {
  return apiClient.post<void>('/api/assessments/quick-profile/partial', data);
};

/**
 * Submit completed Quick Profile assessment
 */
export const submitQuickProfile = async (
  data: SubmitAssessmentRequest
): Promise<SubmitAssessmentResponse> => {
  return apiClient.post<SubmitAssessmentResponse>('/api/assessments/quick-profile', data);
};

/**
 * Get Quick Profile results
 */
export const getQuickProfileResults = async (): Promise<{ results: AssessmentResults }> => {
  return apiClient.get<{ results: AssessmentResults }>('/api/assessments/quick-profile/results');
};

/**
 * Get partial Personal Journey Map assessment
 */
export const getPartialPersonalJourneyMap = async (): Promise<PartialAssessment> => {
  return apiClient.get<PartialAssessment>('/api/assessments/personal-journey-map/partial');
};

/**
 * Save partial Personal Journey Map assessment
 */
export const savePartialPersonalJourneyMap = async (data: PartialAssessment): Promise<void> => {
  return apiClient.post<void>('/api/assessments/personal-journey-map/partial', data);
};

/**
 * Submit completed Personal Journey Map assessment
 */
export const submitPersonalJourneyMap = async (
  data: SubmitAssessmentRequest
): Promise<SubmitAssessmentResponse> => {
  return apiClient.post<SubmitAssessmentResponse>('/api/assessments/personal-journey-map', data);
};

/**
 * Get Personal Journey Map results
 */
export const getPersonalJourneyMapResults = async (): Promise<{ results: AssessmentResults }> => {
  return apiClient.get<{ results: AssessmentResults }>('/api/assessments/personal-journey-map/results');
};

/**
 * Get comprehensive analysis (patterns, cascades, development path)
 */
export const getComprehensiveAnalysis = async (): Promise<ComprehensiveAnalysis> => {
  return apiClient.get<ComprehensiveAnalysis>('/api/assessments/personal-journey-map/comprehensive-analysis');
};

/**
 * Get pattern analysis from journal/practice history
 */
export const getPatternAnalysis = async (): Promise<PatternAnalysis> => {
  return apiClient.get<PatternAnalysis>('/api/assessments/personal-journey-map/pattern-analysis');
};

/**
 * Get unlock analysis for Personal Journey Map
 */
export const getUnlockAnalysis = async (): Promise<UnlockAnalysis> => {
  return apiClient.get<UnlockAnalysis>('/api/assessments/personal-journey-map/unlock-analysis');
};

/**
 * Get assessment results by type
 */
export const getResultsByType = async (
  assessmentType: 'quick-profile' | 'personal-journey-map'
): Promise<{ results: AssessmentResults }> => {
  return apiClient.get<{ results: AssessmentResults }>(`/api/assessments/${assessmentType}/results`);
};
