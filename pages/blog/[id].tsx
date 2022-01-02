import { GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { BlogDetailPage } from 'src/components/BlogDetail';
import { getArticle, getArticles } from 'src/lib/getArticles';

/* 記事の内容を取得して静的に */
export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const article = await getArticle(id);

  return {
    props: { article },
  };
};

type Params = {
  id: string;
};

/* pathを生成して静的に */
export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articles = await getArticles();
  const paths = articles.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: 'blocking', // HTMLを生成しない
  };
};

type Props = {
  article: any;
};

const NewsDetail: NextPage<Props> = ({ article }) => {
  const title = article.page.properties.Title.title[0].plain_text;

  return (
    <>
      <Head>
        <title>{`${title} | progLearning`}</title>
      </Head>
      <BlogDetailPage article={article} />
    </>
  );
};

export default NewsDetail;
