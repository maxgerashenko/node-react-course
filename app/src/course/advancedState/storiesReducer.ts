import { Story } from '../advancedState/data';

// State
export type StoriesState = { stories: Story[] };
// Actions
export type StoryActions =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };
// Reducer Type
export type storiesReducerType = (
  state: StoriesState,
  action: StoryActions
) => StoriesState;
export const storiesReducer = (state: StoriesState, action: StoryActions) => {
  switch (action.type) {
    case 'SET_STORIES':
      return { stories: action.payload };
    case 'REMOVE_STORY':
      return {
        stories: state.stories.filter(
          (story: any) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};
