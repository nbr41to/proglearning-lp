import { Client } from '@notionhq/client/build/src';

const notion = new Client({ auth: process.env.NOTION_INTERNAL_INTEGRATION_TOKEN || '' });
const database_id = process.env.NOTION_DATABASE_ID || '';

/* NotionのDBから公開予定のBlogの記事を取得 */
export const getArticles = async (): Promise<any> => {
  const response = await notion.databases.query({
    database_id,
    filter: {
      or: [
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results;
};

/* NotionのDBからBlogの記事の詳細を取得 */
export const getArticle = async (id: string): Promise<any> => {
  const page = await notion.pages.retrieve({ page_id: id }); // ページ情報の取得
  const children = await notion.blocks.children.list({ block_id: id }); // ページの子ブロックの取得

  return { page, children };
};
