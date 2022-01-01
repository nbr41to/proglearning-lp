import { NextPage } from 'next';
import Head from 'next/head';
import { ApplicationPage } from 'src/components/Application';

const Application: NextPage = () => {
  return (
    <>
      <Head>
        <title>Application | progLearning</title>
      </Head>
      <ApplicationPage />
    </>
  );
};

export default Application;
