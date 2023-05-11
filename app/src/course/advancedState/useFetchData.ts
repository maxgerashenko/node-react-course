import { useEffect } from 'react';
import { StoriesDispatch } from '../advancedState/context';
import { initialStories, Story } from '../advancedState/data';

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
  dispatchStories: StoriesDispatch,
  setIsLoading: (val: boolean) => void,
  setIsError: (val: boolean) => void
) => {
  useEffect(() => {
    if (searchTerm == null || searchTerm === '') return;
    setIsLoading(true);
    setIsError(false);
    const fetchData = async () => {
      try {
        const result = await getAsyncStories();
        dispatchStories({
          type: 'SET_STORIES',
          payload: result.data.stories,
        });
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [searchTerm]);
};
