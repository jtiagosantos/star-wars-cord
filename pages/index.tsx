import Head from 'next/head';
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from 'react-query';
import { useCustomToast } from '../src/hooks/useCustomToast';
import { getGithubUserService } from '../src/services/github/get-github-user';
import { useGithubUser } from '../src/hooks/useGithubUser';

import { Main, ProfileCard, Auth, PhotoProfile } from '../src/styles/home-styles';
import { GithubUser } from '../src/types/github-user';

export default function Home() {
  const [userInput, setUserInput] = useState('');

  const router = useRouter();
  const { errorToast, successToast } = useCustomToast();
  const { setUsername, setUserId, userImageUrl, setUserImageUrl } = useGithubUser();

  const { 
    isLoading, 
    mutate,
  } = useMutation<GithubUser, unknown, string, unknown>(getGithubUserService, {
    onSuccess: (user) => {
      setUsername(userInput)
      setUserId(user.userId);
      setUserImageUrl(user.userImageUrl);
      
      successToast('Usuário encontrado.');
    },
    onError: (error: any) => errorToast(error.message),
  })

  function onSubmitSearchUser(event: FormEvent) {
    event.preventDefault();
    mutate(userInput)
  } 

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
              <form onSubmit={onSubmitSearchUser}>
                <input 
                  type="text" 
                  placeholder="seu usuário do Github" 
                  value={userInput}
                  onChange={({ target }) => setUserInput(target.value)}
                  readOnly={userImageUrl ? true : false}
                />
                {!userImageUrl && (
                  <button 
                    type="submit"
                    className='search_button'
                    disabled={isLoading}
                  >
                    {isLoading ? 'Buscando usuário...' : 'Buscar usuário'}
                  </button>
                )}
              </form>
              {userImageUrl && (
                <button 
                  type="button"
                  className='enter_button'
                  onClick={navigateToChatPage}
                >
                  Entrar
                </button>
              )}
            </section>
          </Auth>

          {userImageUrl && (
            <PhotoProfile>
              <img src={userImageUrl} alt={userInput} />
              <p>{userInput}</p>
            </PhotoProfile>
          )}
        </ProfileCard>
      </Main>
    </>
  )
}