/**
 * Base HTTP client with automatic JWT injection, error handling, and request/response interceptors
 */

import { API_URL } from '../../config';
import type { ApiError } from './types';

// ============================================================================
// CONFIGURATION
// ============================================================================

const DEFAULT_TIMEOUT = 30000; // 30 seconds
const AUTH_TOKEN_KEY = 'auth_token';

// ============================================================================
// ERROR CLASSES
// ============================================================================

export class ApiClientError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public errors?: Record<string, string>
  ) {
    super(message);
    this.name = 'ApiClientError';
  }
}

export class UnauthorizedError extends ApiClientError {
  constructor(message = 'Unauthorized. Please log in again.') {
    super(message, 401);
    this.name = 'UnauthorizedError';
  }
}

export class NetworkError extends ApiClientError {
  constructor(message = 'Network error. Please check your connection.') {
    super(message);
    this.name = 'NetworkError';
  }
}

// ============================================================================
// REQUEST CONFIGURATION
// ============================================================================

export interface RequestConfig extends RequestInit {
  timeout?: number;
  requiresAuth?: boolean;
  skipAuthRedirect?: boolean;
}

// ============================================================================
// INTERCEPTORS
// ============================================================================

type RequestInterceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
type ResponseInterceptor = (response: Response) => Response | Promise<Response>;
type ErrorInterceptor = (error: Error) => Error | Promise<Error>;

class InterceptorManager {
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private errorInterceptors: ErrorInterceptor[] = [];

  addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    this.requestInterceptors.push(interceptor);
    return () => {
      const index = this.requestInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.requestInterceptors.splice(index, 1);
      }
    };
  }

  addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    this.responseInterceptors.push(interceptor);
    return () => {
      const index = this.responseInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.responseInterceptors.splice(index, 1);
      }
    };
  }

  addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    this.errorInterceptors.push(interceptor);
    return () => {
      const index = this.errorInterceptors.indexOf(interceptor);
      if (index > -1) {
        this.errorInterceptors.splice(index, 1);
      }
    };
  }

  async runRequestInterceptors(config: RequestConfig): Promise<RequestConfig> {
    let modifiedConfig = config;
    for (const interceptor of this.requestInterceptors) {
      modifiedConfig = await interceptor(modifiedConfig);
    }
    return modifiedConfig;
  }

  async runResponseInterceptors(response: Response): Promise<Response> {
    let modifiedResponse = response;
    for (const interceptor of this.responseInterceptors) {
      modifiedResponse = await interceptor(modifiedResponse);
    }
    return modifiedResponse;
  }

  async runErrorInterceptors(error: Error): Promise<Error> {
    let modifiedError = error;
    for (const interceptor of this.errorInterceptors) {
      modifiedError = await interceptor(modifiedError);
    }
    return modifiedError;
  }
}

// ============================================================================
// API CLIENT
// ============================================================================

class ApiClient {
  private baseURL: string;
  private interceptors = new InterceptorManager();

  constructor(baseURL: string = API_URL) {
    this.baseURL = baseURL;
    this.setupDefaultInterceptors();
  }

  /**
   * Setup default interceptors for auth token injection and error handling
   */
  private setupDefaultInterceptors(): void {
    // Request interceptor: Add JWT token and Content-Type headers
    this.interceptors.addRequestInterceptor((config) => {
      const headers = new Headers(config.headers);

      // Add JWT token if required (default: true)
      const requiresAuth = config.requiresAuth !== false;
      if (requiresAuth) {
        const token = this.getAuthToken();
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
      }

      // Add Content-Type for JSON requests
      if (config.body && typeof config.body === 'string') {
        headers.set('Content-Type', 'application/json');
      }

      return { ...config, headers };
    });

    // Response interceptor: Log responses in development
    this.interceptors.addResponseInterceptor((response) => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[API] ${response.status} ${response.url}`);
      }
      return response;
    });

    // Error interceptor: Handle 401 and redirect to login
    this.interceptors.addErrorInterceptor((error) => {
      if (error instanceof UnauthorizedError) {
        const skipRedirect = (error as any).skipAuthRedirect;
        if (!skipRedirect && typeof window !== 'undefined') {
          // Clear auth token
          this.clearAuthToken();

          // Redirect to login (only if not already there)
          if (!window.location.pathname.includes('/login')) {
            window.location.href = '/login';
          }
        }
      }
      return error;
    });
  }

  /**
   * Get auth token from localStorage
   */
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }

  /**
   * Clear auth token from localStorage
   */
  private clearAuthToken(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  /**
   * Add request interceptor
   */
  public addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    return this.interceptors.addRequestInterceptor(interceptor);
  }

  /**
   * Add response interceptor
   */
  public addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    return this.interceptors.addResponseInterceptor(interceptor);
  }

  /**
   * Add error interceptor
   */
  public addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    return this.interceptors.addErrorInterceptor(interceptor);
  }

  /**
   * Make HTTP request with timeout and error handling
   */
  private async request<T>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const timeout = config.timeout || DEFAULT_TIMEOUT;
    const url = `${this.baseURL}${endpoint}`;

    // Run request interceptors
    const modifiedConfig = await this.interceptors.runRequestInterceptors(config);

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      // Make fetch request
      const response = await fetch(url, {
        ...modifiedConfig,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Run response interceptors
      const modifiedResponse = await this.interceptors.runResponseInterceptors(response);

      // Handle HTTP errors
      if (!modifiedResponse.ok) {
        await this.handleErrorResponse(modifiedResponse, config);
      }

      // Parse JSON response
      const data = await modifiedResponse.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      // Handle network errors
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          const timeoutError = new ApiClientError('Request timeout', 408);
          throw await this.interceptors.runErrorInterceptors(timeoutError);
        }

        if (error instanceof ApiClientError) {
          throw await this.interceptors.runErrorInterceptors(error);
        }

        const networkError = new NetworkError(error.message);
        throw await this.interceptors.runErrorInterceptors(networkError);
      }

      throw error;
    }
  }

  /**
   * Handle error responses
   */
  private async handleErrorResponse(response: Response, config: RequestConfig): Promise<never> {
    let errorData: ApiError;

    try {
      errorData = await response.json();
    } catch {
      errorData = { message: response.statusText || 'An error occurred' };
    }

    // Handle 401 Unauthorized
    if (response.status === 401) {
      const error = new UnauthorizedError(errorData.message);
      (error as any).skipAuthRedirect = config.skipAuthRedirect;
      throw error;
    }

    // Handle other errors
    throw new ApiClientError(
      errorData.message || 'An error occurred',
      response.status,
      errorData.errors
    );
  }

  /**
   * GET request
   */
  public async get<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'GET',
    });
  }

  /**
   * POST request
   */
  public async post<T>(
    endpoint: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  public async put<T>(
    endpoint: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  public async patch<T>(
    endpoint: string,
    data?: any,
    config?: RequestConfig
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  public async delete<T>(endpoint: string, config?: RequestConfig): Promise<T> {
    return this.request<T>(endpoint, {
      ...config,
      method: 'DELETE',
    });
  }

  /**
   * Upload file (FormData)
   */
  public async upload<T>(
    endpoint: string,
    formData: FormData,
    config?: RequestConfig
  ): Promise<T> {
    // Note: Don't set Content-Type header for FormData - browser sets it automatically with boundary
    return this.request<T>(endpoint, {
      ...config,
      method: 'POST',
      body: formData,
    });
  }
}

// ============================================================================
// SINGLETON INSTANCE
// ============================================================================

export const apiClient = new ApiClient();

// Export the class for testing/mocking purposes
export { ApiClient };
