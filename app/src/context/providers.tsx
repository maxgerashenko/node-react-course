import { useState } from 'react';
import { ThemeContext, CurrentUserContext } from './contexts';

export function Providers({ children, theme, setTheme }: any) {
  const [currentUser, setCurrentUser]: any = useState<string>();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}
