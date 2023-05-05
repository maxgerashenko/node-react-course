import { useContext } from 'react';
import { Greeting } from './greeting';
import { LoginForm } from './loginForm';
import { Panel } from '../../panel';
import { CurrentUserContext } from './contexts';
import { Button } from './button';

export function WelcomePanel({ children }: any) {
  const currentUserContext = useContext<CurrentUserContext | null>(
    CurrentUserContext
  );
  if (!currentUserContext) return <></>;
  const { currentUser, setCurrentUser } = currentUserContext;

  const onClick = () => {
    setCurrentUser(null);
  };
  return (
    <Panel title="Welcome">
      {currentUser != null ? (
        <>
          <Greeting />
          <Button onClick={onClick}>Log Out</Button>
        </>
      ) : (
        <LoginForm />
      )}
    </Panel>
  );
}
