/**
 * Authentication API service
 */

import { apiClient } from './client';
import type {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  UserProfile,
} from './types';

/**
 * Register a new user
 */
export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  return apiClient.post<AuthResponse>('/api/auth/register', data, {
    requiresAuth: false, // Registration doesn't require auth token
  });
};

/**
 * Login user
 */
export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  return apiClient.post<AuthResponse>('/api/auth/login', data, {
    requiresAuth: false, // Login doesn't require auth token
  });
};

/**
 * Get current user profile
 */
export const getCurrentUser = async (): Promise<UserProfile> => {
  return apiClient.get<UserProfile>('/api/auth/me');
};

/**
 * Logout user (client-side only - clears local storage)
 * Note: Server uses JWT so no server-side logout needed
 */
export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }
};

/**
 * Check if user is authenticated (has valid token in localStorage)
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('auth_token');
  return !!token;
};

/**
 * Store auth token in localStorage
 */
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

/**
 * Get auth token from localStorage
 */
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

/**
 * Verify email with token from email link
 */
export const verifyEmail = async (token: string): Promise<AuthResponse> => {
  return apiClient.get<AuthResponse>(`/api/auth/verify-email?token=${token}`, {
    requiresAuth: false,
  });
};
