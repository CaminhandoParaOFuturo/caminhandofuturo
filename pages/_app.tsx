import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/view/components/Home/Header/Header'
import Footer from '../src/view/components/Home/Footer/Footer'


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

export default MyApp
