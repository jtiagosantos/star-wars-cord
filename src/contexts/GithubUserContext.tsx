import { useState, createContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface GithubUserFromContext {
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
  const [username, setUsername] = useState('');
  const [userImageUrl, setUserImageUrl] = useState('');

  return (
    <GithubUserContext.Provider value={{ 
      username, 
      setUsername,
      userImageUrl,
      setUserImageUrl, 
    }}>
      {children}
    </GithubUserContext.Provider>
  );
}