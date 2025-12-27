/**
 * Practice API service
 */

import { apiClient } from './client';
import type {
  PracticeEntry,
  LogPracticeRequest,
  UpdatePracticeRequest,
  PracticeAnalytics,
  PracticeAssignment,
  SubmitAssignmentRequest,
} from './types';

/**
 * Get practice history for current user
 */
export const getHistory = async (): Promise<PracticeEntry[]> => {
  return apiClient.get<PracticeEntry[]>('/api/practice/history');
};

/**
 * Get practice analytics
 */
export const getAnalytics = async (): Promise<PracticeAnalytics> => {
  return apiClient.get<PracticeAnalytics>('/api/practice/analytics');
};

/**
 * Log new practice entry
 */
export const log = async (data: LogPracticeRequest): Promise<PracticeEntry> => {
  return apiClient.post<PracticeEntry>('/api/practice/log', data);
};

/**
 * Update practice entry notes
 */
export const update = async (entryId: string, data: UpdatePracticeRequest): Promise<PracticeEntry> => {
  return apiClient.put<PracticeEntry>(`/api/practice/${entryId}`, data);
};

/**
 * Delete practice entry
 */
export const deleteEntry = async (entryId: string): Promise<void> => {
  return apiClient.delete<void>(`/api/practice/${entryId}`);
};

// ============================================================================
// PRACTICE ASSIGNMENTS
// ============================================================================

/**
 * Get pending practice assignments
 */
export const getPendingAssignments = async (): Promise<PracticeAssignment[]> => {
  return apiClient.get<PracticeAssignment[]>('/api/practice-assignments/pending');
};

/**
 * Get upcoming practice assignments
 */
export const getUpcomingAssignments = async (): Promise<PracticeAssignment[]> => {
  return apiClient.get<PracticeAssignment[]>('/api/practice-assignments/upcoming');
};

/**
 * Submit practice assignment response
 */
export const submitAssignment = async (
  assignmentId: string,
  data: SubmitAssignmentRequest
): Promise<PracticeAssignment> => {
  return apiClient.post<PracticeAssignment>(
    `/api/practice-assignments/${assignmentId}/submit`,
    data
  );
};

/**
 * Skip practice assignment
 */
export const skipAssignment = async (assignmentId: string): Promise<PracticeAssignment> => {
  return apiClient.post<PracticeAssignment>(
    `/api/practice-assignments/${assignmentId}/skip`
  );
};
