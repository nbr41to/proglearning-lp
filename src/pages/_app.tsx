import '../styles/globals.css';
import '../styles/reset.css';
import Head from 'next/head';
import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <title>progLab</title>
      <meta
        name="description"
        content="「新しい好きよ。集まれ。」楽しくプログラミングを学べる成長サポートコミュニティ 'progLab' は人生を変えるためのメソッドを提供します。"
      />
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
