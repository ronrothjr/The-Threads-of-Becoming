/**
 * Custom hook for managing async operations with loading, error, and data states
 *
 * @example
 * // Automatic execution on mount
 * const { data, loading, error } = useAsync(() => api.getData());
 *
 * @example
 * // Manual execution
 * const { data, loading, error, execute } = useAsync(() => api.getData(), false);
 * // Later: execute();
 *
 * @example
 * // With error handling
 * const { data, loading, error, reset } = useAsync(() => api.getData());
 * if (error) return <ErrorDisplay error={error} onRetry={reset} />;
 */

import { useState, useEffect, useCallback } from 'react';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: () => Promise<T | undefined>;
  reset: () => void;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true
): UseAsyncState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (): Promise<T | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const result = await asyncFunction();
      setData(result as any);
      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMsg);
      console.error('useAsync error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, execute, reset };
}
