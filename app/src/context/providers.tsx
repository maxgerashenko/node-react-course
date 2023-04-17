import { useState } from 'react';
import { createContext } from 'vm';

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export function Providers({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
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
