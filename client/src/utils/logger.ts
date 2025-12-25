const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

export const logger = {
  info: (message: string, data?: any) => {
    fetch(`${API_URL}/api/logging/client`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level: 'info', message, data }),
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
