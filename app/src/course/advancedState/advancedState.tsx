import { useContext, useEffect, useReducer, useState } from 'react';
import { initialStories, Story } from '../advancedState/data';
import { InputWithLabel } from '../advancedState/inputWithLabel';
import { List } from '../advancedState/list';
import {
  StoriesContext,
  StoriesContextInterface,
} from '../advancedState/storiesProvider';
import { storiesReducer } from '../advancedState/storiesReducer';

export interface GetAsyncStoriesResponse {
  data: {
    stories: Story[];
  };
}
const getAsyncStories = () =>
  new Promise<GetAsyncStoriesResponse>((resolve) =>
    setTimeout(() => resolve({ data: { stories: initialStories } }), 2000)
  );

const useSemiPersistentState = (key: any, initialState: any) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export function AdvancedState() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');
  const { stories, dispatchStories } =
    useContext<StoriesContextInterface>(StoriesContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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

  const handleRemoveStory = (item: Story) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const searchedStories: Story[] = stories;

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        focusOnInit
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>

      <hr />

      {isError && <p>Something went wrong ...</p>}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List
          list={searchedStories.filter((story: any) =>
            story.title.toLowerCase().includes(searchTerm.toLowerCase())
          )}
          onRemoveItem={handleRemoveStory}
        />
      )}
    </div>
  );
}
