import { VFC } from 'react';
import Image from 'next/image';

type Props = {
  article: any;
};

export const BlogDetailPage: VFC<Props> = ({ article }) => {
  const title = article.page.properties.Title.title[0]?.plain_text;
  const tags = article.page.properties.Tags.multi_select;
  const blocks = article.children.results;

  return (
    <div className="space-y-4">
      {/* TitleやTags */}
      <div className="py-4 px-6 border-b">
        <h2 className="text-xl text-center">{title}</h2>
        <div className="space-x-2 text-right">
          {tags?.map((tag: any) => (
            <span key={tag.id} className="text-sm text-slate-500">
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* BlogContents */}
      <div className="p-4 mx-auto space-y-4 max-w-2xl">
        {blocks?.map((block: any) => {
          /* blockがparagraphだった場合 */
          if (block.type === 'paragraph') {
            return <p key={block.id}>{block.paragraph.text[0]?.plain_text}</p>;
          }
          /* blockがimageだった場合 */
          if (block.type === 'image') {
            return (
              <div key={block.id} className="relative w-full h-40 sm:h-80">
                <Image src={block.image.file.url} layout="fill" objectFit="contain" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
