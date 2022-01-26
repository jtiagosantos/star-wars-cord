import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyles } from '../src/styles/GlobalStyles';

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  ); 
}

export default MyApp
