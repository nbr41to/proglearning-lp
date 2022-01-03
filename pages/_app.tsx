import Head from 'next/head';
import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import usePageViewHook from 'src/lib/usePageViewHook';
// import 'src/styles/reset.css';
import 'src/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViewHook();

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="学ぶことで人生に変化を。`progLearning` はプログラミング学習支援コンテンツを提供しております。"
        />
        <meta property="og:title" content="progLearning" />
        <meta
          property="og:description"
          content="学ぶことで人生に変化を。`progLearning` はプログラミング学習支援コンテンツを提供しております。"
        />
        <title>progLearning</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
