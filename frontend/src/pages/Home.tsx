import { useState } from 'react';
import AuthPage from './AuthPage';
import ChatsPage from './ChatsPage';

export default function Home(): JSX.Element {
  const [authenticatedUser, setAuthenticatedUser] = useState<User | undefined>(
    undefined
  );

  interface User {
    username: string;
    secret: string;
  }

  if (!authenticatedUser) {
    console.log(authenticatedUser);
    return <AuthPage onAuth={(user: User) => setAuthenticatedUser(user)} />;
  }
  return <ChatsPage user={authenticatedUser} />;
}
