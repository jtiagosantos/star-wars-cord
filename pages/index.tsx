import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { useCustomToast } from '../src/hooks/useCustomToast';
import { 
  getGithubUserService, 
  GithubUser,
} from '../src/services/get-github-user';
import { useGithubUser } from '../src/hooks/useGithubUser';

import { Main, ProfileCard, Auth, PhotoProfile } from '../src/styles/home-styles';

export default function Home() {
  const [userInput, setUserInput] = useState('');

  const router = useRouter();
  const { errorToast, successToast } = useCustomToast();
  const { setUsername, userImageUrl, setUserImageUrl } = useGithubUser();

  const { 
    isLoading, 
    mutate,
  } = useMutation<GithubUser, unknown, string, unknown>(getGithubUserService, {
    onSuccess: (user) => {
      setUsername(userInput)
      setUserImageUrl(user.userImageUrl);
      
      successToast('Usuário encontrado.');
    },
    onError: (error: any) => errorToast(error.message),
  })

  const handleSearchUser = () => mutate(userInput);

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
                value={userInput}
                onChange={({ target }) => setUserInput(target.value)}
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
              <img src={userImageUrl} alt={userInput} />
              <p>jtiagosantos</p>
            </PhotoProfile>
          )}
        </ProfileCard>
      </Main>
    </>
  )
}