import './styles.scss';
import { useContext } from 'react';
import { WelcomePanel } from './welcomePanel';
import { ThemeContext } from '../../contexts';
import { Providers } from './providers';

export function Context() {
  return (
    <>
      <Providers>
        <WelcomePanel />
      </Providers>
    </>
  );
}
