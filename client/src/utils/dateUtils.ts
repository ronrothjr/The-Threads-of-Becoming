/**
 * Date Utility Functions
 *
 * Reusable utilities for date formatting and manipulation.
 */

/**
 * Formats a date string or Date object to localized date string
 *
 * @example
 * formatDate('2024-01-15') // '1/15/2024' (US locale)
 * formatDate(new Date()) // '12/27/2024'
 */
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString();
}

/**
 * Formats a date with relative descriptions (Today, Tomorrow, etc.)
 *
 * @example
 * formatRelativeDate('2024-12-27') // 'Today' (if today is 12/27)
 * formatRelativeDate('2024-12-28') // 'Tomorrow'
 * formatRelativeDate('2024-12-30') // 'In 3 days'
 * formatRelativeDate('2024-12-24') // '12/24/2024'
 */
export function formatRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 1 && diffDays < 7) return `In ${diffDays} days`;
  if (diffDays < -1 && diffDays > -7) return `${Math.abs(diffDays)} days ago`;

  return formatDate(date);
}

/**
 * Formats a date to long format
 *
 * @example
 * formatLongDate('2024-01-15') // 'January 15, 2024'
 */
export function formatLongDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Formats a date to short format (MM/DD)
 *
 * @example
 * formatShortDate('2024-01-15') // '01/15'
 */
export function formatShortDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit'
  });
}

/**
 * Formats a timestamp to time string
 *
 * @example
 * formatTime('2024-01-15T14:30:00') // '2:30 PM'
 */
export function formatTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });
}

/**
 * Formats a date to datetime string
 *
 * @example
 * formatDateTime('2024-01-15T14:30:00') // '1/15/2024, 2:30 PM'
 */
export function formatDateTime(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
}

/**
 * Gets the number of days between two dates
 *
 * @example
 * getDaysBetween('2024-01-15', '2024-01-20') // 5
 */
export function getDaysBetween(date1: string | Date, date2: string | Date): number {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Gets the number of days since a date
 *
 * @example
 * getDaysSince('2024-01-15') // Number of days since Jan 15
 */
export function getDaysSince(date: string | Date): number {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  return getDaysBetween(dateObj, now);
}

/**
 * Gets the number of days until a date
 *
 * @example
 * getDaysUntil('2024-12-31') // Number of days until Dec 31
 */
export function getDaysUntil(date: string | Date): number {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffDays = Math.floor((dateObj.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

/**
 * Checks if a date is today
 *
 * @example
 * isToday(new Date()) // true
 */
export function isToday(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return dateObj.toDateString() === today.toDateString();
}

/**
 * Checks if a date is in the past
 *
 * @example
 * isPast('2024-01-01') // true (if current date is after)
 */
export function isPast(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.getTime() < Date.now();
}

/**
 * Checks if a date is in the future
 *
 * @example
 * isFuture('2025-01-01') // true (if current date is before)
 */
export function isFuture(date: string | Date): boolean {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.getTime() > Date.now();
}

/**
 * Adds days to a date
 *
 * @example
 * addDays(new Date(), 7) // Date 7 days from now
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Subtracts days from a date
 *
 * @example
 * subtractDays(new Date(), 7) // Date 7 days ago
 */
export function subtractDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

/**
 * Gets the start of today (00:00:00)
 *
 * @example
 * getStartOfToday() // Today at 00:00:00
 */
export function getStartOfToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

/**
 * Gets the end of today (23:59:59)
 *
 * @example
 * getEndOfToday() // Today at 23:59:59
 */
export function getEndOfToday(): Date {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return today;
}
