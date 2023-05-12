import { ReactNode, useReducer } from 'react';
import { StoriesContext } from './context';
import { initialStories } from './data';
import { storiesReducer, storiesReducerType } from './storiesReducer';

interface Props {
  children?: ReactNode;
}
export function StoriesProvider({ children }: Props) {
  const [state, dispatch] = useReducer<storiesReducerType>(storiesReducer, {
    stories: initialStories,
    isLoading: false,
    isError: false,
  });

  return (
    <StoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </StoriesContext.Provider>
  );
}
