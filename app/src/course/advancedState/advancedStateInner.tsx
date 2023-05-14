import { useCallback, useContext } from 'react';
import { StoriesContext } from './context';
import { Story } from '../advancedState/data';
import { List } from '../advancedState/list';
import { useFetchData } from '../advancedState/useFetchData';
import { useLocalStorageState } from '../advancedState/useLocalStorageState';
import { Search } from '../advancedState/search';
import { logComponent } from '../advancedState/advancdedSate';

export function AdvancedStateInner() {
  logComponent('AdvancdedSate');
  const [searchTerm, setSearchTerm] = useLocalStorageState(
      'search',
      'Seatch from localstorage'
    ),
    context = useContext(StoriesContext);

  if (!context) throw new Error('StoriesContext not provided');

  const { state, dispatch } = context,
    { stories, isLoading, isError } = state;

  useFetchData(searchTerm, dispatch);

  const handleRemoveStory = useCallback((item: Story) => {
    dispatch({
      type: 'REMOVE_STORY',
      payload: item,
    });
  }, []);
  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  const search = (
    <>
      <h1>My Hacker Stories</h1>
      <Search searchText={searchTerm} onSearch={handleSearch} />
      <hr />
    </>
  );

  if (isError)
    return (
      <div>
        {search}
        <p>Something went wrong ...</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="isLoading">
        {search}
        <List list={stories} onRemoveItem={handleRemoveStory} />
      </div>
    );

  return (
    <div>
      {search}
      <List list={stories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}
