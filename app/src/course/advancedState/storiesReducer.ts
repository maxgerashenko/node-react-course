import { Story } from '../advancedState/data';

// State
export type StoriesState = {
  stories: Story[];
  isLoading: boolean;
  isError: boolean;
};
// Actions
export type StoryActions =
  | { type: 'FETCH_INIT' }
  | { type: 'FETCH_SUCCESS'; payload: Story[] }
  | { type: 'FETCH_FAILURE' }
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };
// Reducer Type
export type storiesReducerType = (
  state: StoriesState,
  action: StoryActions
) => StoriesState;
// Reducer
export const storiesReducer = (state: StoriesState, action: StoryActions) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        stories: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'SET_STORIES':
      return { stories: action.payload };
    case 'REMOVE_STORY':
      return {
        ...state,
        stories: state.stories.filter(
          (story: any) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};
