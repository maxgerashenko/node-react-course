import { useEffect } from 'react';
import { StoriesDispatcher } from '../advancedState/context';
import { Story } from './data';
import axios from 'axios';
import { useDebounce } from '../advancedState/useDebounce';

export interface GetAsyncStoriesResponse {
  hits: Story[];
}

const storyRequest = async (
  searchTerm: string
): Promise<GetAsyncStoriesResponse> => {
  try {
    const response = await axios.get<GetAsyncStoriesResponse>(
      `${
        process?.env?.REACT_APP_API_ENDPOINT || 'default component api'
      }${searchTerm}`
    );
    return response.data;
  } catch (error: unknown) {
    throw error;
  }
};

const fetchResults = async (
  searchTerm: string,
  dispatch: StoriesDispatcher
) => {
  if (searchTerm == null || searchTerm === '') return [];

  dispatch({
    type: 'FETCH_INIT',
  });
  try {
    const startTime = Date.now();

    const result = await storyRequest(searchTerm);

    const minLoadingTime = 1000; // Minimum loading time in ms
    const elapsed = Date.now() - startTime;
    const delay = elapsed > minLoadingTime ? 0 : minLoadingTime - elapsed;

    setTimeout(() => {
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: result.hits,
      });
    }, delay);
  } catch (error) {
    dispatch({
      type: 'FETCH_FAILURE',
    });
  }
};

export const useFetchData = (
  searchTerm: string,
  dispatch: StoriesDispatcher
) => {
  const debouncedFetch = useDebounce(() => {
    fetchResults(searchTerm, dispatch);
  });

  useEffect(() => {
    if (!searchTerm || searchTerm === '') return;

    debouncedFetch();
  }, [searchTerm, debouncedFetch]);
};
