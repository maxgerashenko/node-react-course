import './styles.scss';
import { createContext, useState } from 'react';
import { Providers } from './providers';
import { WelcomePanel } from './welcomePanel';

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
