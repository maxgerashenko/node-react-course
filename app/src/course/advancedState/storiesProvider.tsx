import { Dispatch, ReactNode, useReducer, createContext } from 'react';
import { Story } from '../advancedState/data';
import { storiesReducer } from '../advancedState/storiesReducer';

export type STORYACTIONS =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };

export type StoriesDispatch = Dispatch<STORYACTIONS>;
export interface StoriesContextInterface {
  stories: Story[];
  dispatchStories: StoriesDispatch;
}
export const StoriesContext = createContext<StoriesContextInterface>({
  stories: [],
  dispatchStories: () => {
    throw new Error('dispatchStories not implemented');
  },
});

interface Props {
  children?: ReactNode;
}
export function StoriesProvider({ children }: Props) {
  const [stories, dispatchStories] = useReducer(storiesReducer, []);

  return (
    <StoriesContext.Provider value={{ stories, dispatchStories }}>
      {children}
    </StoriesContext.Provider>
  );
}
