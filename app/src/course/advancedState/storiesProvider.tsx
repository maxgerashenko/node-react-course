import { Dispatch, ReactNode, ReducerAction, useReducer } from 'react';
import { createContext } from 'vm';
import { Story } from '../advancedState/data';
import { storiesReducer } from '../advancedState/storiesReducer';

export type ACTIONTYPE =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };

export interface StoriesContextInterface {
  stories: Story[];
  dispatchStories: Dispatch<ReducerAction<ACTIONTYPE>>;
}
export const StoriesContext = createContext<StoriesContextInterface | null>(
  null
);

interface Props {
  children?: ReactNode;
}
function StoriesProvider({ children }: Props) {
  const [stories, dispatchStories] = useReducer(storiesReducer, []);

  return (
    <StoriesContext.Provider value={{ stories, dispatchStories }}>
      {{ children }}
    </StoriesContext.Provider>
  );
}
