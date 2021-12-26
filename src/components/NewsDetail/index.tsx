import { VFC } from 'react';

type Props = {
  article: any;
};

export const NewsDetailPage: VFC<Props> = ({ article }) => {
  return (
    <div>
      <h2 className="text-xl">{article.page.properties.Title.title[0].plain_text}</h2>
      <div className="py-2">
        {article.children.map((block) => {
          /* blockがparagraphだった場合 */
          if (block.type === 'paragraph') {
            return (
              <div key={block.id}>
                <p>{block.paragraph.text[0].plain_text}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
