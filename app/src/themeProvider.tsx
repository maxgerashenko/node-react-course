import { useState } from 'react';
import { ThemeContext } from './contexts';

export function ThemeProvider({ children }: any) {
  const [theme, setTheme]: any = useState<string>('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
