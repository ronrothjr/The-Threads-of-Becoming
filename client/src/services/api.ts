const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';

// Auth interfaces
export interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  message?: string;
}

// Auth functions
export const register = async (data: RegisterData): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Registration failed' }));
    throw new Error(errorData.message || 'Registration failed');
  }

  return response.json();
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
};

// Contact form interfaces
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  threadName?: string;
  seedQuestion?: string;
  poleA?: string;
  poleB?: string;
  universalQuestions?: string;
  metaQuestion?: string;
  creativeEdge?: string;
  evidence?: string;
  additionalNotes?: string;
  newsletter?: boolean;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      subject: data.subject,
      message: buildMessage(data),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Failed to send message' }));
    throw new Error(errorData.message || 'Failed to send message');
  }

  return response.json();
};

function buildMessage(data: ContactFormData): string {
  if (data.subject === 'discovery') {
    return `
THREAD DISCOVERY SUBMISSION

Thread Name: ${data.threadName || 'N/A'}
Seed Question: ${data.seedQuestion || 'N/A'}

Poles:
- Pole A: ${data.poleA || 'N/A'}
- Pole B: ${data.poleB || 'N/A'}

Universal Questions:
${data.universalQuestions || 'N/A'}

Meta-Question:
${data.metaQuestion || 'N/A'}

The Creative Edge:
${data.creativeEdge || 'N/A'}

Evidence of Universality:
${data.evidence || 'N/A'}

Additional Notes:
${data.additionalNotes || 'N/A'}

Newsletter Subscription: ${data.newsletter ? 'Yes' : 'No'}
    `.trim();
  }

  return `${data.message || ''}

Newsletter Subscription: ${data.newsletter ? 'Yes' : 'No'}`;
}
