import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface GithubUserFromContext {
  id: number;
  setId: Dispatch<SetStateAction<number>>;
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  userImageUrl: string;
  setUserImageUrl: Dispatch<SetStateAction<string>>;
}

interface GithubUserProviderProps {
  children: ReactNode;
}

export const GithubUserContext = createContext({} as GithubUserFromContext);

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [id, setId] = useState(0);
  const [username, setUsername] = useState('');
  const [userImageUrl, setUserImageUrl] = useState('');

  return (
    <GithubUserContext.Provider value={{ 
      id, 
      setId,
      username, 
      setUsername,
      userImageUrl,
      setUserImageUrl, 
    }}>
      {children}
    </GithubUserContext.Provider>
  );
}