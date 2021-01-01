import '../styles/globals.css'
import '../styles/reset.css'
import { Header } from "src/components/Header"
import { Footer } from "src/components/Footer"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
