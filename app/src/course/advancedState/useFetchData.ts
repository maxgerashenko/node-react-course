import { useEffect } from 'react';
import { StoriesDispatcher } from '../advancedState/context';
import { Story, initialStories } from '../advancedState/data';

export interface GetAsyncStoriesResponse {
  data: {
    stories: Story[];
  };
}
const getAsyncStories = () =>
  new Promise<GetAsyncStoriesResponse>((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  );

export const useFetchData = (
  searchTerm: string,
  dispatch: StoriesDispatcher
) => {
  useEffect(() => {
    if (searchTerm == null || searchTerm === '') return;

    const fetchData = async () => {
      dispatch({
        type: 'FETCH_INIT',
      });
      try {
        const result = await getAsyncStories();
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: result.data.stories,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_FAILURE',
        });
      }
    };

    fetchData();
  }, [searchTerm]);
};
