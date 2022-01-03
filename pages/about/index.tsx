import { NextPage } from 'next';
import Head from 'next/head';
import { AboutPage } from 'src/components/About';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | progLearning</title>
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
