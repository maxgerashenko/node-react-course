import { useContext } from 'react';
import { StoriesContext } from './context';
import { Story } from '../advancedState/data';
import { InputWithLabel } from '../advancedState/inputWithLabel';
import { List } from '../advancedState/list';
import { useFetchData } from '../advancedState/useFetchData';
import { useLocalStorageState } from '../advancedState/useLocalStorageState';

export function AdvancedStateInner() {
  const [searchTerm, setSearchTerm] = useLocalStorageState('search', 'React');
  const storiesContext = useContext(StoriesContext);
  alert('storiesContext' + JSON.stringify(storiesContext));
  if (!storiesContext) {
    return null;
  }
  const { stories, dispatchStories }: any = {};

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
  );
}
