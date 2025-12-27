/**
 * Centralized configuration module
 * Manages environment variables and application settings
 */

interface AppConfig {
  apiUrl: string;
  environment: 'development' | 'production' | 'test';
  isDevelopment: boolean;
  isProduction: boolean;
}

/**
 * Load configuration from environment variables
 * Falls back to localhost for development if not specified
 */
function loadConfig(): AppConfig {
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5050';
  const nodeEnv = import.meta.env.MODE || 'development';

  const environment = nodeEnv === 'production'
    ? 'production'
    : nodeEnv === 'test'
    ? 'test'
    : 'development';

  return {
    apiUrl,
    environment,
    isDevelopment: environment === 'development',
    isProduction: environment === 'production',
  };
}

// Export singleton config instance
export const config = loadConfig();

// Export individual values for convenience
export const API_URL = config.apiUrl;
export const ENVIRONMENT = config.environment;
export const IS_DEVELOPMENT = config.isDevelopment;
export const IS_PRODUCTION = config.isProduction;

// Default export
export default config;
