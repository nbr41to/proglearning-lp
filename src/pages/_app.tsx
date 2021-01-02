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
        <meta name="description" content="「新しい好きよ。集まれ。」楽しくプログラミングを学べる成長サポートコミュニティ 'progLab' は人生を変えるためのメソッドを提供します。" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
