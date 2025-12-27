/**
 * Training API service
 */

import { apiClient } from './client';
import type {
  TrainingModule,
  ModuleProgress,
  SaveProgressRequest,
  CompleteModuleRequest,
  InitializeTrainingRequest,
  TrainingProgress,
} from './types';

// ============================================================================
// TRAINING MODULES
// ============================================================================

/**
 * Get training module by ID
 */
export const getModule = async (moduleId: string): Promise<TrainingModule> => {
  return apiClient.get<TrainingModule>(`/api/training/modules/${moduleId}`);
};

/**
 * Get all training modules with user progress
 */
export const getModulesWithProgress = async (): Promise<TrainingModule[]> => {
  return apiClient.get<TrainingModule[]>('/api/training/modules/with-progress');
};

/**
 * Get module progress for current user
 */
export const getModuleProgress = async (moduleId: string): Promise<ModuleProgress> => {
  return apiClient.get<ModuleProgress>(`/api/training/modules/${moduleId}/progress`);
};

/**
 * Save module progress
 */
export const saveProgress = async (
  moduleId: string,
  data: SaveProgressRequest
): Promise<void> => {
  return apiClient.post<void>(`/api/training/modules/${moduleId}/progress`, data);
};

/**
 * Complete training module
 */
export const completeModule = async (
  moduleId: string,
  data: CompleteModuleRequest
): Promise<void> => {
  return apiClient.post<void>(`/api/training/modules/${moduleId}/complete`, data);
};

// ============================================================================
// TRAINING PROGRAM
// ============================================================================

/**
 * Initialize training program from assessment data
 */
export const initializeProgram = async (
  data: InitializeTrainingRequest
): Promise<TrainingProgress> => {
  return apiClient.post<TrainingProgress>('/api/training/initialize', data);
};

/**
 * Get training progress for current user
 */
export const getProgress = async (): Promise<TrainingProgress> => {
  return apiClient.get<TrainingProgress>('/api/training/progress');
};

/**
 * Generate next training session
 */
export const generateNextSession = async (): Promise<any> => {
  return apiClient.post<any>('/api/training/session/next');
};

/**
 * Start training session
 */
export const startSession = async (sessionId: string): Promise<any> => {
  return apiClient.post<any>(`/api/training/session/${sessionId}/start`);
};

/**
 * Complete training session
 */
export const completeSession = async (sessionId: string, data?: any): Promise<any> => {
  return apiClient.post<any>(`/api/training/session/${sessionId}/complete`, data);
};
