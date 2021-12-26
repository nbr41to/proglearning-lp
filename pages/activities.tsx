import { NextPage } from 'next';
import Head from 'next/head';
import { ActivitiesPage } from 'src/components/Activities';

const Activities: NextPage = () => {
  return (
    <>
      <Head>
        <title>Activities | progLearning</title>
      </Head>
      <ActivitiesPage />
    </>
  );
};

export default Activities;
