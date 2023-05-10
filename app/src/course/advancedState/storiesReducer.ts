export const storiesReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_STORIES':
      return action.payload;
    case 'REMOVE_STORY':
      return state.filter(
        (story: any) => action.payload.objectID !== story.objectID
      );
    default:
      throw new Error();
  }
};
