import './styles.scss';
import { WelcomePanel } from './welcomePanel';
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
