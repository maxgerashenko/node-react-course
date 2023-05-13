import { useCallback, useEffect, } from "react";
import { debounce, } from "lodash";

export function useDebounce<T, S>(
  fetchResults: () => void,
  deps: string[] = [],
) {
  const debounced = useCallback(
    debounce(() => {
      fetchResults();
    }, 1000,),
    deps,
  );

  // cancel on on unsubscrive
  useEffect(() => {
    return () => {
      debounced.cancel();
    };
  }, [],);

  return debounced;
}
