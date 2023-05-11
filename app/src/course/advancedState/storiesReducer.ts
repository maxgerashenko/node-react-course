export const storiesReducer = (state: any, action: any) => {
  alert('action type ' + action.type);
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

export function reducer(state: any, action: any) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    };
  }
  throw Error('Unknown action.');
}
