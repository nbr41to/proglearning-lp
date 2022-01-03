import { NextPage } from 'next';
import Head from 'next/head';
import { HomePage } from 'src/components/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>progLearning</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
