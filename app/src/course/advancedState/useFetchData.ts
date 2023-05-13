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
    const result = await storyRequest(searchTerm);
    dispatch({
      type: 'FETCH_SUCCESS',
      payload: result.hits,
    });
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
