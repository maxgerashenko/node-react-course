import { useEffect, useRef, useState } from 'react';

export const useLocalStorageState = (key: any, initialState: any) => {
  const isMounted = useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    // avoid first rerender;
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
