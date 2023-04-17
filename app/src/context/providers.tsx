import { createContext, useState } from 'react';

export const ThemeContext = createContext<any>(null);
export const CurrentUserContext = createContext<{
  [key: string]: string | undefined;
} | null>(null);

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
