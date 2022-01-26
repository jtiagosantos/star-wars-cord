import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GithubUserProvider } from '../src/contexts/GithubUserContext';

import { GlobalStyles } from '../src/styles/GlobalStyles';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GithubUserProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </GithubUserProvider>
  ); 
}

export default MyApp
