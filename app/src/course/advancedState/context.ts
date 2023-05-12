import {Dispatch, createContext} from "react";
import {StoriesState, StoryActions} from "../advancedState/storiesReducer";

export type StoriesDispatcher = Dispatch<StoryActions>;
// Content Value
export type StoriesContextType = {
  state: StoriesState;
  dispatch: StoriesDispatcher;
};
export type StoriesContexTypeArray = [
  state: StoriesState,
  dispatch: StoriesDispatcher
];
export const StoriesContext = createContext<StoriesContextType | null>(null);
