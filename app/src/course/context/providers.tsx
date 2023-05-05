import { useState } from 'react';
import { CurrentUser, CurrentUserContext } from './contexts';

export function Providers({ children }: any) {
  const [currentUser, setCurrentUser]: any = useState<CurrentUser | null>();
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}
