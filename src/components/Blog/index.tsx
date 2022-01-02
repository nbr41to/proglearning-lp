import { useRouter } from 'next/router';
import { VFC } from 'react';
import { SectionColumn } from '../@commons/SectionColumn';

type Props = {
  articles: any;
};

export const BlogPage: VFC<Props> = ({ articles }) => {
  const router = useRouter();

  return (
    <div>
      <SectionColumn title="Blog" paragraph="progLearningに関する内容や、progLabでの活動の様子を公開しております！" />
      <div className="flex flex-col divide-y-2 divide-slate-300">
        {articles.map((article: any) => (
          <div
            key={article.id}
            className="p-4 hover:bg-slate-100 cursor-pointer"
            onClick={() => router.push(`/blog/${article.id}`)}
          >
            <div className="text-sm font-bold tracking-wider text-slate-500">
              {article.properties.Date.date?.start.replace(/-/g, '/') || '日付なし'}
            </div>
            <h3 className="mt-2 text-lg">{article.properties.Title.title[0].plain_text}</h3>
            <div className="space-x-2">
              {article.properties.Tags.multi_select?.map((option: any) => (
                <span key={option.id} className="text-sm text-slate-500">
                  #{option.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
