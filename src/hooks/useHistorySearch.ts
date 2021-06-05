import { useEffect, useState } from 'react';

export function useHistorySearch() {
  const [searchParams, setSearchParams] = useState('');
  console.log(setSearchParams);
  useEffect(() => {
    console.log('use effect');
    window.addEventListener('search-params-change', (e: Event) => {
      /* @ts-ignore */
      setSearchParams(e.detail?.newParams);
    });
    return () => {

    };
  }, []);
  return { searchParams };
}
