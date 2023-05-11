import { Dispatch, createContext } from 'react';
import { Story } from '../advancedState/data';

export type STORYACTIONS =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };

export type ACTION = { type: 'incremented_age'; payload: { age: string } };

export type MYDispatch = Dispatch<STORYACTIONS>;
export type Context = { state: { age: string }; dispatch: MYDispatch };
export type StoriesDispatch = Dispatch<STORYACTIONS>;
export interface StoriesContextInterface {
  stories: Story[];
  dispatchStories: StoriesDispatch;
}
export const StoriesContext = createContext<Context | null>(null);
