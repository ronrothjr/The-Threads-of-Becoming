/**
 * Journal API service
 */

import { apiClient } from './client';
import type {
  JournalEntry,
  CreateJournalRequest,
  UpdateJournalRequest,
  JournalStats,
} from './types';

/**
 * Get all journal entries for current user
 */
export const getAll = async (): Promise<JournalEntry[]> => {
  return apiClient.get<JournalEntry[]>('/api/journal');
};

/**
 * Get journal statistics
 */
export const getStats = async (): Promise<JournalStats> => {
  return apiClient.get<JournalStats>('/api/journal/stats');
};

/**
 * Create new journal entry
 */
export const create = async (data: CreateJournalRequest): Promise<JournalEntry> => {
  return apiClient.post<JournalEntry>('/api/journal', data);
};

/**
 * Update existing journal entry
 */
export const update = async (entryId: string, data: UpdateJournalRequest): Promise<JournalEntry> => {
  return apiClient.put<JournalEntry>(`/api/journal/${entryId}`, data);
};

/**
 * Delete journal entry
 */
export const deleteEntry = async (entryId: string): Promise<void> => {
  return apiClient.delete<void>(`/api/journal/${entryId}`);
};
