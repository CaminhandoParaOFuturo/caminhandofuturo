import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/view/components/Home/Header/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
<<<<<<< HEAD
  <Header/>
  <Component {...pageProps} />
=======
    <Component {...pageProps} />
>>>>>>> 62b606f91c071220e0696cee50c66e47a61cce7e
  </>
}

export default MyApp
