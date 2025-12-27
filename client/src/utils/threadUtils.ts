/**
 * Thread Utility Functions
 *
 * Reusable utilities for working with thread scores, sorting, and filtering.
 */

import { ThreadScores } from '../services/api/types';

export interface ThreadWithScore {
  name: string;
  score: number;
  percentage: number;
  collapseDirection?: string;
}

/**
 * Converts ThreadScores object to array of threads with scores
 *
 * @example
 * const threads = getThreadsArray(threadScores);
 * // [{ name: 'presence', score: 12, percentage: 85.7 }, ...]
 */
export function getThreadsArray(threadScores: ThreadScores): ThreadWithScore[] {
  return Object.entries(threadScores).map(([name, data]) => ({
    name,
    score: data.raw || data.score,
    percentage: data.percentage,
    collapseDirection: data.collapseDirection
  }));
}

/**
 * Gets the lowest scoring threads (growth edges)
 *
 * @param threadScores - Thread scores from assessment
 * @param count - Number of threads to return (default: 2)
 * @returns Array of lowest scoring threads
 *
 * @example
 * const focusThreads = getLowestThreads(threadScores, 2);
 * // Returns 2 threads with lowest scores
 */
export function getLowestThreads(
  threadScores: ThreadScores,
  count: number = 2
): ThreadWithScore[] {
  return getThreadsArray(threadScores)
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

/**
 * Gets the highest scoring threads (strengths)
 *
 * @param threadScores - Thread scores from assessment
 * @param count - Number of threads to return (default: 2)
 * @returns Array of highest scoring threads
 *
 * @example
 * const strengths = getHighestThreads(threadScores, 2);
 */
export function getHighestThreads(
  threadScores: ThreadScores,
  count: number = 2
): ThreadWithScore[] {
  return getThreadsArray(threadScores)
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

/**
 * Sorts threads by score (lowest to highest)
 */
export function sortThreadsByScore(
  threadScores: ThreadScores,
  ascending: boolean = true
): ThreadWithScore[] {
  const threads = getThreadsArray(threadScores);
  return ascending
    ? threads.sort((a, b) => a.score - b.score)
    : threads.sort((a, b) => b.score - a.score);
}

/**
 * Gets threads within a specific percentage range
 *
 * @param threadScores - Thread scores from assessment
 * @param minPercentage - Minimum percentage (inclusive)
 * @param maxPercentage - Maximum percentage (inclusive)
 *
 * @example
 * const midRangeThreads = getThreadsInRange(threadScores, 50, 75);
 */
export function getThreadsInRange(
  threadScores: ThreadScores,
  minPercentage: number,
  maxPercentage: number
): ThreadWithScore[] {
  return getThreadsArray(threadScores).filter(
    thread => thread.percentage >= minPercentage && thread.percentage <= maxPercentage
  );
}

/**
 * Formats a thread name for display (capitalizes first letter)
 *
 * @example
 * formatThreadName('presence') // 'Presence'
 * formatThreadName('presence', true) // 'PRESENCE'
 */
export function formatThreadName(threadName: string, uppercase: boolean = false): string {
  if (uppercase) {
    return threadName.toUpperCase();
  }
  return threadName.charAt(0).toUpperCase() + threadName.slice(1);
}

/**
 * Gets a color class for a thread percentage
 * Useful for visual indicators
 *
 * @example
 * getThreadColorClass(85) // 'high'
 * getThreadColorClass(50) // 'medium'
 * getThreadColorClass(25) // 'low'
 */
export function getThreadColorClass(percentage: number): 'low' | 'medium' | 'high' {
  if (percentage >= 70) return 'high';
  if (percentage >= 40) return 'medium';
  return 'low';
}

/**
 * Thread name list for validation and iteration
 */
export const THREAD_NAMES = [
  'presence',
  'consent',
  'memory',
  'pause',
  'embodiment',
  'uncertainty',
  'becoming'
] as const;

export type ThreadName = typeof THREAD_NAMES[number];

/**
 * Validates if a string is a valid thread name
 */
export function isValidThreadName(name: string): name is ThreadName {
  return THREAD_NAMES.includes(name as ThreadName);
}
