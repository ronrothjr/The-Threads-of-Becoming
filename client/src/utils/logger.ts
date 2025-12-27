import { API_URL } from '../config';

export const logger = {
  info: (message: string, data?: any) => {
    fetch(`${API_URL}/api/logging/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'info', message, data }),
    }).catch(() => {}); // Silent fail
  },

  warn: (message: string, data?: any) => {
    fetch(`${API_URL}/api/logging/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'warn', message, data }),
    }).catch(() => {}); // Silent fail
  },

  error: (message: string, data?: any) => {
    fetch(`${API_URL}/api/logging/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'error', message, data }),
    }).catch(() => {}); // Silent fail
  },

  debug: (message: string, data?: any) => {
    fetch(`${API_URL}/api/logging/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'debug', message, data }),
    }).catch(() => {}); // Silent fail
  },
};
