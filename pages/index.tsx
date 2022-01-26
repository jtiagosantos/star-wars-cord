import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { GlobalStyles } from '../src/styles/GlobalStyles';
import { 
  getGithubUserImageUrlService 
} from '../src/services/get-github-user-image-url';

import { Main, ProfileCard, Auth, PhotoProfile } from '../src/styles/home-styles';

export default function Home() {
  const [userImageUrl, setUserImageUrl] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();

  function handleSearchUser() {
    try {
      const response = getGithubUserImageUrlService(username);
      setUserImageUrl(response);
    } catch(error: any) {
      alert(error.message)
    }
  }

  const navigateToChatPage = () => router.push('/chat');

  return (
    <>
      <Head>
        <title>Star Wars Cord</title>
      </Head>

      <Main>
        <ProfileCard>
          <Auth>
            <h2>Boas vindas!</h2>
            <p>Star Wars Cord 💥🚀</p>
            <section>
              <input 
                type="text" 
                placeholder="seu usuário do Github" 
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                readOnly={userImageUrl ? true : false}
              />
              {userImageUrl ? (
                <button 
                  className='enter_button'
                  onClick={navigateToChatPage}
                >
                  Entrar
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={handleSearchUser}
                  className='search_button'
                >
                  Buscar usuário
                </button>
              )}
            </section>
          </Auth>

          {userImageUrl && (
            <PhotoProfile>
              <img src={userImageUrl} alt={username} />
              <p>jtiagosantos</p>
            </PhotoProfile>
          )}
        </ProfileCard>
      </Main>
    </>
  )
}