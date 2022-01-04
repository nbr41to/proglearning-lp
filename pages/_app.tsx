import Head from 'next/head';
import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import usePageViewHook from 'src/lib/usePageViewHook';
import 'src/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViewHook();

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="「学ぶことで人生に変化を。」`progLearning` は、一歩踏み出したい人のプログラミング学習を支援しております。"
        />
        <meta property="og:title" content="progLearning" />
        <meta
          property="og:description"
          content="「学ぶことで人生に変化を。」`progLearning` は、一歩踏み出したい人のプログラミング学習を支援しております。"
        />
        <meta property="og:image" content="./site_image.png" />
        <title>progLearning</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
