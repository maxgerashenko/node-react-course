import { ReactNode, useReducer } from 'react';
import { StoriesContext, StoriesContexTypeArray } from './context';
import { initialStories } from './data';
import { storiesReducer } from './storiesReducer';

interface Props {
  children?: ReactNode;
}
export function StoriesProvider({ children }: Props) {
  const [state, dispatch]: StoriesContexTypeArray = useReducer(storiesReducer);

  return (
    <StoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </StoriesContext.Provider>
  );
}
