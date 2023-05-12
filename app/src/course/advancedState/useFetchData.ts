import { useEffect } from 'react';
import { StoriesDispatcher } from '../advancedState/context';
import { useDebounce } from '../advancedState/useDebounce';
import { Story } from './data';

export interface GetAsyncStoriesResponse {
  hits: Story[];
}

function storyRequest(searchTerm: string): Promise<GetAsyncStoriesResponse> {
  return fetch(process.env.REACT_APP_API_ENDPOINT! + searchTerm)
    .then((response) => response.json())
    .catch((error) => {
      new Error(error);
    });
}

export const useFetchData = (
  searchTerm: string,
  dispatch: StoriesDispatcher
) => {
  const debounced = useDebounce(async () => {
    if (searchTerm == null || searchTerm === '') {
      return [];
    }

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
  }, []);

  useEffect(() => {
    let ignore = false;

    !ignore && debounced();

    return () => {
      ignore = true;
    };
  }, [searchTerm]);
};
