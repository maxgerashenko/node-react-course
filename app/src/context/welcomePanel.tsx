import { useContext } from 'react';
import { Greeting } from './greeting';
import { LoginForm } from './loginForm';
import { Panel } from './panel';
import { CurrentUserContext } from './providers';

export function WelcomePanel({ children }: any) {
  const { currentUser } = useContext<any>(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}
