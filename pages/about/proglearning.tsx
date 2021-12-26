import { NextPage } from 'next';
import Head from 'next/head';
import { AboutProgLearningPage } from 'src/components/About/ProgLearning';

const AboutProgLearning: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | progLearning</title>
      </Head>
      <AboutProgLearningPage />
    </>
  );
};

export default AboutProgLearning;
