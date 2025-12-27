/**
 * Centralized API service exports
 *
 * Usage:
 * import { auth, apiClient } from '../services/api';
 *
 * const response = await auth.login({ email, password });
 */

// Export API client
export { apiClient, ApiClient, ApiClientError, UnauthorizedError, NetworkError } from './client';

// Export all types
export * from './types';

// Export domain services
import * as authService from './auth';
import * as assessmentsService from './assessments';
import * as journalService from './journal';
import * as practiceService from './practice';
import * as trainingService from './training';
import * as adminService from './admin';
import * as contactService from './contact';

export const auth = authService;
export const assessments = assessmentsService;
export const journal = journalService;
export const practice = practiceService;
export const training = trainingService;
export const admin = adminService;
export const contact = contactService;

// Re-export for convenience
export { register, login, getCurrentUser, logout, isAuthenticated, setAuthToken, getAuthToken } from './auth';
