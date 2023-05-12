import { useContext } from 'react';
import { StoriesContext } from './context';
import { Story } from '../advancedState/data';
import { List } from '../advancedState/list';
import { useFetchData } from '../advancedState/useFetchData';
import { useLocalStorageState } from '../advancedState/useLocalStorageState';
import { Search } from '../advancedState/search';

export function AdvancedStateInner() {
  const [searchTerm, setSearchTerm] = useLocalStorageState('search', 'React'),
    context = useContext(StoriesContext);

  if (!context) {
    throw new Error('StoriesContext not provided');
  }

  const { state, dispatch } = context,
    { stories, isLoading, isError } = state;

  useFetchData(searchTerm, dispatch);

  const handleRemoveStory = (item: Story) => {
      dispatch({
        type: 'REMOVE_STORY',
        payload: item,
      });
    },
    handleSearch = (value: string) => {
      setSearchTerm(value);
    };

  const search = (
    <>
      <h1>My Hacker Stories</h1>
      <Search searchText={searchTerm} onSearch={handleSearch} />
      <hr />
    </>
  );

  if (isError) {
    return (
      <div>
        {search}
        <p>Something went wrong ...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        {search}
        <p>Loading ...</p>
      </div>
    );
  }

  return (
    <div>
      {search}
      <List
        list={stories.filter((story: any) =>
          story.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onRemoveItem={handleRemoveStory}
      />
    </div>
  );
}
