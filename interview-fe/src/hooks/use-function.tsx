import { useState, useCallback } from 'react';
import useAppSnackbar from './use-app-snackbar';

type ApiFunction<P, T> = (payload: P) => Promise<T>;
export interface UseFunctionOptions {
  successMessage?: string;
  getErrorMessage?: (error: unknown) => string;
  hideSnackbarError?: boolean;
  disableSaving?: boolean;
  onSuccess?: () => void;
  onError?: () => void;
  fixedPayload?: any;
  cacheKey?: string; // save response to localStorage and use if next request failed
}

export interface UseFunctionReturnType<P, T> {
  call: (payload: P) => Promise<{ data?: T; error?: string }>;
  loading: boolean;
  error: Error | null;
  data: T | undefined;
  setData: (_: T | undefined) => void;
}

export const DEFAULT_FUNCTION_RETURN: UseFunctionReturnType<any, any> = {
  call: async () => ({}),
  loading: false,
  error: null,
  data: undefined,
  setData: () => {}
};

function useFunction<P, T>(
  apiFunction: ApiFunction<P, T>,
  options?: UseFunctionOptions
): UseFunctionReturnType<P, T> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T>();

  const { showSnackbarError, showSnackbarSuccess } = useAppSnackbar();

  const onRequestSuccess = useCallback(
    (result: T) => {
      if (options?.successMessage) {
        showSnackbarSuccess(options?.successMessage);
      }
      if (!options?.disableSaving) {
        console.log(result)
        setData(result);
      }
      options?.onSuccess?.();
      if (options?.cacheKey) {
        localStorage.setItem(options.cacheKey, JSON.stringify(result));
      }
      return { data: result };
    },
    [options, showSnackbarSuccess]
  );

  const call = useCallback(
    async (payload: P) => {
      setLoading(true);
      setError(null);
      setData(undefined);
      try {
        const result = await apiFunction(
          options?.fixedPayload
            ? {
                ...payload,
                ...options?.fixedPayload
              }
            : payload
        );

        return onRequestSuccess(result);
      } catch (error: any) {
        if (options?.cacheKey) {
          const raw = localStorage.getItem(options.cacheKey);
          if (raw) {
            const result = JSON.parse(raw);
            return onRequestSuccess(result);
          }
        }
        if (!options?.hideSnackbarError) {
          if (options?.getErrorMessage) {
            showSnackbarError(options.getErrorMessage(error));
          } else {
            if (error) {
              showSnackbarError(error);
            }
          }
        }
        setError(error as Error);
        options?.onError?.();
        return { error: error };
      } finally {
        setLoading(false);
      }
    },
    [apiFunction, onRequestSuccess, options, showSnackbarError]
  );

  return { call, loading, error, data, setData };
}

export default useFunction;
