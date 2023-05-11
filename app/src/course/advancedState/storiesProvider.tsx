import { Dispatch, ReactNode, useReducer, createContext } from 'react';
import { Story } from '../advancedState/data';
import { storiesReducer } from '../advancedState/storiesReducer';

export type STORYACTIONS =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };

export interface StoriesContextInterface {
  stories: Story[];
  dispatchStories: Dispatch<STORYACTIONS>;
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
      {children}
    </StoriesContext.Provider>
  );
}
