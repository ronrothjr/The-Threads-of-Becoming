/**
 * Admin API service
 */

import { apiClient } from './client';
import type {
  TrainingModule,
  Voice,
  GenerateAudioRequest,
  GenerateAudioResponse,
  UpdateScriptRequest,
  UpdateDescriptionRequest,
} from './types';

// ============================================================================
// MODULE MANAGEMENT
// ============================================================================

/**
 * Get all training modules (admin)
 */
export const getAllModules = async (): Promise<TrainingModule[]> => {
  return apiClient.get<TrainingModule[]>('/api/admin/training/modules');
};

/**
 * Get training module by ID (admin)
 */
export const getModule = async (moduleId: string): Promise<TrainingModule> => {
  return apiClient.get<TrainingModule>(`/api/admin/training/modules/${moduleId}`);
};

/**
 * Create or update training module
 */
export const saveModule = async (module: Partial<TrainingModule>): Promise<TrainingModule> => {
  return apiClient.post<TrainingModule>('/api/admin/training/modules', module);
};

/**
 * Delete training module
 */
export const deleteModule = async (moduleId: string): Promise<void> => {
  return apiClient.delete<void>(`/api/admin/training/modules/${moduleId}`);
};

// ============================================================================
// CONTENT UPDATES
// ============================================================================

/**
 * Update script for slide, meditation, or exercise
 */
export const updateScript = async (
  moduleId: string,
  type: 'slides' | 'meditations' | 'exercises',
  index: number,
  data: UpdateScriptRequest
): Promise<void> => {
  return apiClient.put<void>(
    `/api/admin/training/modules/${moduleId}/${type}/${index}/script`,
    data
  );
};

/**
 * Update visual description for slide
 */
export const updateDescription = async (
  moduleId: string,
  slideNumber: number,
  data: UpdateDescriptionRequest
): Promise<void> => {
  return apiClient.put<void>(
    `/api/admin/training/modules/${moduleId}/slides/${slideNumber}/description`,
    data
  );
};

// ============================================================================
// AUDIO GENERATION
// ============================================================================

/**
 * Get available voices for audio generation
 */
export const getVoices = async (): Promise<Voice[]> => {
  return apiClient.get<Voice[]>('/api/admin/training/voices');
};

/**
 * Generate audio for slide narration
 */
export const generateSlideAudio = async (
  moduleId: string,
  slideNumber: number,
  data: GenerateAudioRequest
): Promise<GenerateAudioResponse> => {
  return apiClient.post<GenerateAudioResponse>(
    `/api/admin/training/modules/${moduleId}/slides/${slideNumber}/audio`,
    data
  );
};

/**
 * Generate audio for meditation
 */
export const generateMeditationAudio = async (
  moduleId: string,
  index: number,
  data: GenerateAudioRequest
): Promise<GenerateAudioResponse> => {
  return apiClient.post<GenerateAudioResponse>(
    `/api/admin/training/modules/${moduleId}/meditations/${index}/audio`,
    data
  );
};

/**
 * Generate audio for exercise
 */
export const generateExerciseAudio = async (
  moduleId: string,
  index: number,
  data: GenerateAudioRequest
): Promise<GenerateAudioResponse> => {
  return apiClient.post<GenerateAudioResponse>(
    `/api/admin/training/modules/${moduleId}/exercises/${index}/audio`,
    data
  );
};

/**
 * Generate all audio for a module
 */
export const generateAllAudio = async (moduleId: string): Promise<void> => {
  return apiClient.post<void>(`/api/admin/training/modules/${moduleId}/generate-all-audio`);
};
