import Head from 'next/head';
import { GlobalStyles } from '../src/styles/GlobalStyles';

export default function Home() {
  return (
    <>
      <GlobalStyles />

      <Head>
        <title>Code Cord</title>
      </Head>
    </>
  )
}