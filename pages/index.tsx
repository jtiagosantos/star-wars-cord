import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { useCustomToast } from '../src/hooks/useCustomToast';
import { 
  getGithubUserImageUrlService 
} from '../src/services/get-github-user-image-url';

import { Main, ProfileCard, Auth, PhotoProfile } from '../src/styles/home-styles';

export default function Home() {
  const [userImageUrl, setUserImageUrl] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();
  const { errorToast, successToast } = useCustomToast();

  const { 
    isLoading, 
    mutate,
  } = useMutation(getGithubUserImageUrlService, {
    onSuccess: (url: string) => {
      setUserImageUrl(url);
      successToast('Usuário encontrado.')
    },
    onError: (error: any) => errorToast(error.message),
  })

  const handleSearchUser = () => mutate(username);

  const navigateToChatPage = () => router.push('/chat');

  return (
    <>
      <ToastContainer />

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
                  disabled={isLoading}
                >
                  {isLoading ? 'Buscando usuário...' : 'Buscar usuário'}
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