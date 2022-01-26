import type { AppProps } from 'next/app'
import { GlobalStyles } from '../src/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  ); 
}

export default MyApp
