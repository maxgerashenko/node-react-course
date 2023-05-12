import { Story } from '../advancedState/data';

// State
export type StoriesState = { stories: Story[] };
// Actions
export type StoryActions =
  | { type: 'SET_STORIES'; payload: Story[] }
  | { type: 'REMOVE_STORY'; payload: Story };

export const storiesReducer = (state: StoriesState, action: StoryActions) => {
  switch (action.type) {
    case 'SET_STORIES':
      return action.payload;
    case 'REMOVE_STORY':
      return state.stories.filter(
        (story: any) => action.payload.objectID !== story.objectID
      );
    default:
      throw new Error();
  }
};
