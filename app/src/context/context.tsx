import './styles.scss';
import { createContext, useContext, useState } from 'react';
import { Form } from './form';
import { CheckBox } from './checkBox';
import { Providers } from './providers';
import { WelcomePanel } from './welcomePanel';

export const ThemeContext = createContext<null | { theme: any; setTheme: any }>(
  null
);

export function Context() {
  const [theme, setTheme] = useState('dark');
  return (
    <>
      <Providers theme={theme} setTheme={setTheme}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          Use dark mode
        </label>
      </Providers>
    </>
  );
}
