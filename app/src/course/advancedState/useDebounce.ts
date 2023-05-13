import { debounce } from 'lodash';
import { useEffect, useCallback } from 'react';

export function useDebounce<T, S>(
  fetchResults: () => void,
  deps: string[] = []
) {
  const debounced = useCallback(
    debounce(() => {
      fetchResults();
    }, 1000),
    deps
  );

  // cancel on on unsubscrive
  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, []);

  return debounced;
}
