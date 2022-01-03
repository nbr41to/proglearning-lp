import { VFC } from 'react';
import { PageTitle } from '../@commons/PageTitle';
import { BlogItem } from './BlogItem';

type Props = {
  articles: any;
};

export const BlogPage: VFC<Props> = ({ articles }) => {
  return (
    <div className="space-y-4">
      <PageTitle title="Blog" description="progLearningに関する内容や、progLabでの活動の様子を公開しております！" />
      {/* BlogList */}
      <div className="flex flex-col px-4 divide-y-2 divide-slate-300">
        {articles.map((article: any) => (
          <BlogItem key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};
