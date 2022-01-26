import Head from 'next/head';
import { useState } from 'react';
import { GlobalStyles } from '../src/styles/GlobalStyles';

import { Main, ProfileCard, Auth, PhotoProfile } from '../src/styles/home-styles';

export default function Home() {
  const [username, setUsername] = useState('jtiagosantos');

  return (
    <>
      <GlobalStyles />

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
              />
              <button type="button">Entrar</button>
            </section>
          </Auth>

          <PhotoProfile>
            <img src={`https://github.com/${username}.png`} />
            <p>jtiagosantos</p>
          </PhotoProfile>
        </ProfileCard>
      </Main>
    </>
  )
}