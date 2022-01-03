import { NextPage } from 'next';
import Head from 'next/head';
import { AboutProgLabPage } from 'src/components/About/ProgLab';

const AboutProgLab: NextPage = () => {
  return (
    <>
      <Head>
        <title>progLab</title>
      </Head>
      <AboutProgLabPage />
    </>
  );
};

export default AboutProgLab;
