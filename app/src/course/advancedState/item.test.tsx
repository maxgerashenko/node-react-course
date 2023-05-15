export {};

import { render, fireEvent } from '@testing-library/react';
import { Item } from './item'; // Path to your Item component
import { Story } from './data';

describe.only('Item', () => {
  const mockOnRemoveItem = jest.fn();

  const story: Story = {
    objectID: 1,
    url: 'https://example.com',
    title: 'Example Title',
    author: 'Example Author',
    num_comments: 123,
    points: 456,
  };

  it('renders correctly', () => {
    const { getByText, getByRole } = render(
      <Item {...story} onRemoveItem={mockOnRemoveItem} />
    );

    expect(getByText('Example Title')).toBeInTheDocument();
    expect(getByText('Example Author')).toBeInTheDocument();
    expect(getByText('123')).toBeInTheDocument();
    expect(getByText('456')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('calls onRemoveItem on button click', () => {
    const { getByRole } = render(
      <Item {...story} onRemoveItem={mockOnRemoveItem} />
    );

    fireEvent.click(getByRole('button', { name: 'Dismiss' }));

    expect(mockOnRemoveItem).toHaveBeenCalledTimes(1);
    expect(mockOnRemoveItem).toHaveBeenCalledWith(story);
  });
});
