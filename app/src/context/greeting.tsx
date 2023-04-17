import { useContext } from 'react';
import { CurrentUserContext } from './contexts';

export function Greeting() {
  const { currentUser }: any = useContext(CurrentUserContext as any);
  return <p>You logged in as {currentUser.name}.</p>;
}
