import { useEffect } from 'react';
import { StoriesDispatcher } from '../advancedState/context';
import { useDebounce } from '../advancedState/useDebounce';
import { Story } from './data';
import axios from 'axios';

export interface GetAsyncStoriesResponse {
  hits: Story[];
}

const storyRequest = async (
  searchTerm: string
): Promise<GetAsyncStoriesResponse> => {
  try {
    console.log('searchTerm', searchTerm);
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
