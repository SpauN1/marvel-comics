import { useState, useCallback } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState('waiting');

  const request = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-type': 'application/json' }
    ) => {
      setLoading(true);
      setProcess('loading');

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        setProcess('error');
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
    setProcess('loading');
  }, []);

  return { loading, error, process, setProcess, request, clearError };
};

export default useHttp;
