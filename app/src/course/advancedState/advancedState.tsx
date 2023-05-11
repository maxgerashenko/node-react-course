import { useContext } from 'react';
import { Story } from '../advancedState/data';
import { InputWithLabel } from '../advancedState/inputWithLabel';
import { List } from '../advancedState/list';
import { useFetchData } from '../advancedState/useFetchData';
import { useLocalStorageState } from '../advancedState/useLocalStorageState';
import { StoriesContext, StoriesProvider } from './storiesProvider';

export function AdvancedState() {
  const [searchTerm, setSearchTerm] = useLocalStorageState('search', 'React');
  const { stories, dispatchStories } = useContext(StoriesContext);

  const { isLoading, isError } = useFetchData(searchTerm, dispatchStories);

  const handleRemoveStory = (item: Story) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const searchedStories: Story[] = stories!;

  return (
    <StoriesProvider>
      <div>
        <h1>My Hacker Stories</h1>

        <InputWithLabel
          type="text"
          id="search"
          value={searchTerm}
          focusOnInit
          onInputChange={handleSearch}
        >
          <strong>Search:</strong>
        </InputWithLabel>

        <hr />

        {isError ? (
          <p>Something went wrong ...</p>
        ) : isLoading ? (
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
    </StoriesProvider>
  );
}
