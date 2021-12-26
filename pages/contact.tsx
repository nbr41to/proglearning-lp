import { NextPage } from 'next';
import Head from 'next/head';
import { ContactPage } from 'src/components/Contact';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact | progLearning</title>
      </Head>
      <ContactPage />
    </>
  );
};

export default Contact;
