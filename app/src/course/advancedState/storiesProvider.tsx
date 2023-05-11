import { ReactNode, useReducer } from 'react';
import { StoriesContext } from '../advancedState/context';
import { storiesReducer } from '../advancedState/storiesReducer';

interface Props {
  children?: ReactNode;
}
export function StoriesProvider({ children }: Props) {
  const [stories, dispatchStories] = useReducer(storiesReducer, []);
  alert(stories);
  return (
    <StoriesContext.Provider value={{ stories, dispatchStories }}>
      {children}
    </StoriesContext.Provider>
  );
}
