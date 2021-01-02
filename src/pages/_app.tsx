import '../styles/globals.css'
import '../styles/reset.css'
import { Header } from "src/components/Header"
import { Footer } from "src/components/Footer"
import Head from "next/head"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>progLab</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
