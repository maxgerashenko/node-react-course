import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './themeProvider';
import { ThemeContext } from './contexts';
import { useContext } from 'react';

test('provides theme context', () => {
  const TestComponent = () => {
    const { theme } = useContext(ThemeContext);
    return <div>{theme}</div>;
  };

  render(
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
  );

  expect(screen.getByText('dark')).toBeInTheDocument();
});
