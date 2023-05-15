import { render, screen } from '@testing-library/react';
import Course from './course';

test('renders all sections of the course', () => {
  render(<Course />);

  expect(screen.getByText('Advanced State')).toBeInTheDocument();
  expect(screen.getByText('Context + Reducer')).toBeInTheDocument();
  expect(screen.getByText('Conditions')).toBeInTheDocument();
  // Continue for all other sections...
});
