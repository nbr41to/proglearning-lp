import { useRouter } from 'next/router';
import { VFC } from 'react';

type Props = {
  article: any;
};

export const BlogItem: VFC<Props> = ({ article }) => {
  const router = useRouter();

  return (
    <div className="p-4 hover:bg-slate-100 cursor-pointer" onClick={() => router.push(`/blog/${article.id}`)}>
      {/* Date */}
      <div className="text-sm font-bold tracking-wider text-slate-500">
        {article.properties.Date.date?.start.replace(/-/g, '/') || '日付なし'}
      </div>
      {/* Title */}
      <h3 className="mt-2 text-lg">{article.properties.Title.title[0].plain_text}</h3>
      {/* Tags */}
      <div className="space-x-2">
        {article.properties.Tags.multi_select?.map((option: any) => (
          <span key={option.id} className="text-sm text-slate-500">
            #{option.name}
          </span>
        ))}
      </div>
    </div>
  );
};
