import { NextPage } from 'next';
import Head from 'next/head';
import { BlogPage } from 'src/components/Blog';
import { getArticles } from 'src/lib/getArticles';

export const getStaticProps = async () => {
  const articles = await getArticles();
  return {
    props: { articles },
  };
};

type Props = {
  articles: any;
};

const News: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Blog | progLearning</title>
      </Head>
      <BlogPage articles={articles} />
    </>
  );
};

export default News;
