import { debounce } from 'lodash';
import { useMemo, useEffect } from 'react';

export function useDebounce<T, S>(onChange: () => void, deps: string[]) {
  const debounced = useMemo(() => debounce(onChange, 1000), deps);

  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, []);

  return debounced;
}
