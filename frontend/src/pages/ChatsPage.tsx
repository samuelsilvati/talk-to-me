/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { PrettyChatWindow } from 'react-chat-engine-pretty';

interface User {
  username: string;
  secret: string;
}

interface ChatsPageProps {
  user: User;
}

function ChatsPage({ user }: ChatsPageProps) {
  return (
    <div className="h-screen font-sans">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_PROJECT_ID}
        username={user.username}
        secret={user.secret}
        style={{ height: '100%', fontFamily: 'sans-serif' }}
      />
    </div>
  );
}

export default ChatsPage;
