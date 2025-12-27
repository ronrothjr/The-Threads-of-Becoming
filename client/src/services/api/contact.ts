/**
 * Contact API service
 */

import { apiClient } from './client';
import type { ContactFormRequest, ContactFormResponse } from './types';

/**
 * Submit contact form
 */
export const submitForm = async (data: ContactFormRequest): Promise<ContactFormResponse> => {
  return apiClient.post<ContactFormResponse>('/api/contact', data, {
    requiresAuth: false, // Contact form doesn't require authentication
  });
};
