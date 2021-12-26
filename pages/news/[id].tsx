import { GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { Client } from '@notionhq/client';
import { NewsDetailPage } from 'src/components/NewsDetail';

const notion = new Client({ auth: process.env.NOTION_INTERNAL_INTEGRATION_TOKEN || '' });

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const page = await notion.pages.retrieve({ page_id: id }); // ページ情報の取得
  const children = await notion.blocks.children.list({ block_id: id }); // ページの子ブロックの取得

  return {
    props: {
      article: {
        page,
        children: children.results,
      },
    },
  };
};

type Params = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const database_id = process.env.NOTION_DATABASE_ID || '';
  const response = await notion.databases.query({ database_id });
  const paths = response.results.map(({ id }) => ({ params: { id } }));

  return {
    paths,
    fallback: 'blocking', // HTMLを生成しない
  };
};

type Props = {
  article: any;
};

const NewsDetail: NextPage<Props> = ({ article }) => {
  return (
    <>
      <Head>
        <title>{`${article.page.properties.Title.title[0].plain_text} | progLearning`}</title>
      </Head>
      <NewsDetailPage article={article} />
    </>
  );
};

export default NewsDetail;
