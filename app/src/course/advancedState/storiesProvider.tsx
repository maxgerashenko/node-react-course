import { ReactNode, useReducer } from 'react';
import { StoriesContext } from '../advancedState/context';
import { reducer } from '../advancedState/storiesReducer';

interface Props {
  children?: ReactNode;
}
export function StoriesProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  if (!dispatch) return null;
  // const [stories, dispatchStories] = useReducer(storiesReducer, []);
  alert('StoriesProvider' + JSON.stringify(state) + JSON.stringify(dispatch));
  return (
    <StoriesContext.Provider value={{ state, dispatch }}>
      {children}
    </StoriesContext.Provider>
  );
}
