import { useEffect, useRef, useState } from 'react';

export const useDebounce = (query, debounceTime) => {
  const [debouncedQuery, setDebouncedQuery] = useState();

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedQuery(query);
    }, debounceTime);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [query, debounceTime]);

  return debouncedQuery;
};
