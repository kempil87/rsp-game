import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

export type MainView = 'game' | 'result';
export type SearchParamsView = { view: MainView };

type Return<T> = T extends undefined ? SearchParamsView : T;

type UseUrlReturn<T> = {
  paramsEntries: Return<T>;
  updateUrl: (name: keyof Return<T>, value: string) => void;
  removeEntry: (name: keyof Return<T>) => void;
};

export const useUrl = <T extends undefined>(
  props: URLSearchParamsInit = {}
): UseUrlReturn<T> => {
  const [searchParams, setSearchParams] = useSearchParams(props);

  const updateUrl = (name: keyof Return<T>, value: string) => {
    if (searchParams.has(name as string)) {
      searchParams.delete(name as string);
    } else {
      searchParams.set(name as string, value);
    }

    setSearchParams(searchParams);
  };

  const removeEntry = (name: keyof Return<T>) => {
    searchParams.delete(name as string);

    setSearchParams(searchParams);
  };

  return {
    paramsEntries: Object.fromEntries(searchParams) as Return<T>,
    updateUrl,
    removeEntry,
  };
};
