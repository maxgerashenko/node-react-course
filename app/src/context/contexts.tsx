// Contexts.js
import { createContext } from 'react';

export const ThemeContext = createContext<any>(null);
export const CurrentUserContext = createContext<{
  [key: string]: string | undefined;
} | null>(null);
