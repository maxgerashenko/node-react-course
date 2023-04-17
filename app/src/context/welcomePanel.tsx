import { useContext } from 'react';
import { Greeting } from './greeting';
import { LoginForm } from './loginForm';
import { Panel } from './panel';

export function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}
