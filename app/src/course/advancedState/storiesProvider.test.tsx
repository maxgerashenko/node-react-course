import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { initialStories } from './data';
import { StoriesContext, StoriesContextType } from '../advancedState/context';
import { StoriesProvider } from '../advancedState/storiesProvider';

const mockData = [
  {
    title: 'Response1',
    url: 'url1',
    author: 'author1',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Response2',
    url: 'url2',
    author: 'author2',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  // more stories...
];

// Mock child component to inspect the context
const TestComponent = () => {
  const context = useContext(StoriesContext);
  if (context == null) throw Error();
  const { state, dispatch } = context as StoriesContextType;

  return (
    <div>
      <div data-testid="isLoading">{state.isLoading.toString()}</div>
      <div data-testid="isError">{state.isError.toString()}</div>
      <div data-testid="stories">{JSON.stringify(state.stories)}</div>
      <button onClick={() => dispatch({ type: 'FETCH_INIT' })}>Load</button>
      <button
        onClick={() => dispatch({ type: 'FETCH_SUCCESS', payload: mockData })}
      >
        Success
      </button>
      <button onClick={() => dispatch({ type: 'FETCH_FAILURE' })}>Error</button>
    </div>
  );
};
// '"FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE" | "SET_STORIES" | "REMOVE_STORY"'.
describe('StoriesProvider', () => {
  it('provides initial state', () => {
    render(
      <StoriesProvider>
        <TestComponent />
      </StoriesProvider>
    );

    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');
    expect(screen.getByTestId('isError')).toHaveTextContent('false');
    expect(screen.getByTestId('stories')).toHaveTextContent(
      JSON.stringify(initialStories)
    );
  });

  it('handles FETCH_INIT', async () => {
    render(
      <StoriesProvider>
        <TestComponent />
      </StoriesProvider>
    );

    fireEvent.click(screen.getByText('Load'));

    await waitFor(() => screen.getByTestId('isLoading'));

    expect(screen.getByTestId('isLoading')).toHaveTextContent('true');
    expect(screen.getByTestId('isError')).toHaveTextContent('false');
  });

  it('handles FETCH_STORIES_SUCCESS', async () => {
    render(
      <StoriesProvider>
        <TestComponent />
      </StoriesProvider>
    );

    // Assuming the 'Load' button dispatches a FETCH_STORIES_SUCCESS action with mock data
    fireEvent.click(screen.getByText('Success'));

    await waitFor(() => screen.getByTestId('stories'));

    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');
    expect(screen.getByTestId('isError')).toHaveTextContent('false');
    expect(screen.getByTestId('stories')).toHaveTextContent(
      JSON.stringify(mockData)
    );
  });

  it('handles FETCH_STORIES_FAILURE', async () => {
    render(
      <StoriesProvider>
        <TestComponent />
      </StoriesProvider>
    );

    // Assuming the 'Error' button dispatches a FETCH_STORIES_FAILURE action
    fireEvent.click(screen.getByText('Error'));

    await waitFor(() => screen.getByTestId('isError'));

    expect(screen.getByTestId('isLoading')).toHaveTextContent('false');
    expect(screen.getByTestId('isError')).toHaveTextContent('true');
  });
});
