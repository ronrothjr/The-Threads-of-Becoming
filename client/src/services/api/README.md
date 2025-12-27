# Centralized API Service

This directory contains the centralized API service layer for The Threads of Becoming platform.

## Architecture

```
services/api/
├── client.ts       # Base HTTP client with interceptors
├── types.ts        # TypeScript interfaces for all API calls
├── auth.ts         # Authentication endpoints
├── assessments.ts  # Assessment endpoints (TODO)
├── journal.ts      # Journal CRUD endpoints (TODO)
├── practice.ts     # Practice logging endpoints (TODO)
├── training.ts     # Training module endpoints (TODO)
├── admin.ts        # Admin endpoints (TODO)
├── contact.ts      # Contact form endpoint (TODO)
└── index.ts        # Main export file
```

## Features

### ✅ Automatic JWT Token Injection
All authenticated requests automatically include the JWT token from `localStorage`.

### ✅ Consistent Error Handling
- Automatic 401 redirect to login page
- Network error detection and retry logic
- Timeout handling (default: 30 seconds)
- Type-safe error responses

### ✅ Request/Response Interceptors
Add custom logic before/after every request:
```typescript
import { apiClient } from '@/services/api';

// Log all requests
apiClient.addRequestInterceptor((config) => {
  console.log('Making request:', config);
  return config;
});

// Transform all responses
apiClient.addResponseInterceptor((response) => {
  console.log('Got response:', response.status);
  return response;
});
```

### ✅ Type Safety
Full TypeScript support for all requests and responses:
```typescript
import { auth, type LoginRequest, type AuthResponse } from '@/services/api';

const credentials: LoginRequest = { email, password };
const response: AuthResponse = await auth.login(credentials);
```

## Usage Examples

### Authentication

```typescript
import { auth } from '@/services/api';

// Register
try {
  const response = await auth.register({
    email: 'user@example.com',
    password: 'securePassword123',
    name: 'John Doe'
  });

  // Store token
  auth.setAuthToken(response.access_token);

  // Redirect to dashboard
  navigate('/dashboard');
} catch (error) {
  if (error instanceof ApiClientError) {
    console.error(error.message, error.statusCode);
  }
}

// Login
try {
  const response = await auth.login({
    email: 'user@example.com',
    password: 'securePassword123'
  });

  auth.setAuthToken(response.access_token);
  navigate('/dashboard');
} catch (error) {
  // Handle error
}

// Get current user
const user = await auth.getCurrentUser();
console.log(user.email);

// Logout
auth.logout(); // Clears token and redirects to login

// Check if authenticated
if (auth.isAuthenticated()) {
  // User has token
}
```

### Direct API Client Usage

For custom endpoints not yet wrapped in a service:

```typescript
import { apiClient } from '@/services/api';

// GET request
const data = await apiClient.get('/api/custom/endpoint');

// POST request
const result = await apiClient.post('/api/custom/endpoint', {
  key: 'value'
});

// PUT request
const updated = await apiClient.put('/api/custom/endpoint/123', {
  key: 'newValue'
});

// DELETE request
await apiClient.delete('/api/custom/endpoint/123');

// File upload
const formData = new FormData();
formData.append('file', fileBlob);
const uploadResult = await apiClient.upload('/api/upload', formData);
```

### Error Handling

```typescript
import { auth, ApiClientError, UnauthorizedError, NetworkError } from '@/services/api';

try {
  await auth.login({ email, password });
} catch (error) {
  if (error instanceof UnauthorizedError) {
    // Invalid credentials - user already redirected to login
    console.error('Invalid credentials');
  } else if (error instanceof NetworkError) {
    // Network problem
    console.error('Network error - please check your connection');
  } else if (error instanceof ApiClientError) {
    // Other API error
    console.error(error.message, error.statusCode);
    if (error.errors) {
      // Validation errors
      Object.entries(error.errors).forEach(([field, message]) => {
        console.error(`${field}: ${message}`);
      });
    }
  }
}
```

### Custom Configuration

```typescript
import { apiClient } from '@/services/api';

// Custom timeout
const data = await apiClient.get('/api/slow-endpoint', {
  timeout: 60000 // 60 seconds
});

// Skip auth token
const publicData = await apiClient.get('/api/public', {
  requiresAuth: false
});

// Skip automatic redirect on 401
try {
  await apiClient.get('/api/check-auth', {
    skipAuthRedirect: true
  });
} catch (error) {
  // Handle 401 without redirect
}
```

## Migration Guide

### Before (Old Pattern)
```typescript
const token = localStorage.getItem('auth_token');
const response = await fetch(`${API_URL}/api/journal`, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

if (!response.ok) {
  throw new Error('Failed to fetch journals');
}

const data = await response.json();
```

### After (New Pattern)
```typescript
import { journal } from '@/services/api';

const data = await journal.getAll();
```

Benefits:
- ✅ No manual token management
- ✅ No manual header construction
- ✅ Automatic error handling
- ✅ Type safety
- ✅ Consistent across codebase
- ✅ Easy to test and mock

## Testing

```typescript
import { ApiClient } from '@/services/api';

// Create mock client for tests
const mockClient = new ApiClient('http://localhost:3001');

// Mock responses
jest.spyOn(mockClient, 'get').mockResolvedValue({ data: 'test' });

// Test component
render(<Component apiClient={mockClient} />);
```

## Best Practices

1. **Always use the service layer** - Don't make direct fetch() calls
2. **Use TypeScript types** - Import types from `types.ts`
3. **Handle errors gracefully** - Use try/catch and check error types
4. **Don't store tokens manually** - Use `auth.setAuthToken()` and `auth.getAuthToken()`
5. **Add new endpoints to domain services** - Don't use apiClient directly in components

## TODO

- [ ] Create `assessments.ts` service
- [ ] Create `journal.ts` service
- [ ] Create `practice.ts` service
- [ ] Create `training.ts` service
- [ ] Create `admin.ts` service
- [ ] Create `contact.ts` service
- [ ] Migrate all components to use new services
- [ ] Add request retry logic for failed requests
- [ ] Add request caching for GET requests
- [ ] Add request deduplication
- [ ] Add optimistic updates helper
