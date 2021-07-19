import '../styles/globals.css';
import '../styles/reset.css';
import Head from 'next/head';
import { Layout } from 'src/components/Layout';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/styles/theme';
import usePageViewHook from 'src/lib/usePageViewHook';

const MyApp = ({ Component, pageProps }: AppProps) => {
  usePageViewHook();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Head>
          <title>progLab</title>
          <meta
            name="description"
            content="楽しくプログラミングを学べる成長サポートコミュニティ 'progLab' は人生を変えるためのメソッドを提供します。"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
