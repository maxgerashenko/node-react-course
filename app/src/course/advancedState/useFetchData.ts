import { useEffect, useState } from 'react';
import { initialStories, Story } from '../advancedState/data';
import { StoriesDispatch } from '../advancedState/storiesProvider';

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
  dispatchStories: StoriesDispatch
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  return { isLoading, isError };
};
