import Head from 'next/head';
import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import usePageViewHook from 'src/lib/usePageViewHook';
import 'src/styles/globals.css';

const ogTitle = 'progLearning';
const ogDescription =
  '「学ぶことで人生に変化を。」`progLearning` は、一歩踏み出したい人のプログラミング学習を支援しております。';
const ogImage = '/site_image.png';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViewHook();

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={ogDescription} />
        {/* OGP */}
        <meta property="og:site_name" content={ogTitle} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="ja_JP" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={'https://proglab.nbr41.com/' + ogImage} />
        <meta name="twitter:url" content="https://proglab.nbr41.com/" />
        <meta name="twitter:site" content="@Knob_nbr41to" />

        <title>progLearning</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
