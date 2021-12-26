import { NextPage } from 'next';
import Head from 'next/head';
import { NewsPage } from 'src/components/News';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_INTERNAL_INTEGRATION_TOKEN || '' });
export const getStaticProps = async () => {
  const database_id = process.env.NOTION_DATABASE_ID || '';
  const response = await notion.databases.query({ database_id });
  return {
    props: {
      articles: response.results,
    },
  };
};

type Props = {
  articles: any;
};

const News: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>News | progLearning</title>
      </Head>
      <NewsPage articles={articles} />
    </>
  );
};

export default News;
