import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface GithubUserFromContext {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  userId: number;
  setUserId: Dispatch<SetStateAction<number>>;
  userImageUrl: string;
  setUserImageUrl: Dispatch<SetStateAction<string>>;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

export const GithubUserContext = createContext({} as GithubUserFromContext);

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState(0);
  const [userImageUrl, setUserImageUrl] = useState('');

  return (
    <GithubUserContext.Provider value={{ 
      username, 
      setUsername,
      userId,
      setUserId,
      userImageUrl,
      setUserImageUrl, 
    }}>
      {children}
    </GithubUserContext.Provider>
  );
}