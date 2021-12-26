import { useRouter } from 'next/router';
import { VFC } from 'react';

type Props = {
  articles: any;
};

export const NewsPage: VFC<Props> = ({ articles }) => {
  const router = useRouter();

  return (
    <div>
      <h2>活動詳細</h2>
      <p>Notionからのコンテンツを表示</p>
      <div className="flex flex-col gap-2">
        {articles.map((article) => (
          <div key={article.id} className="p-2 border rounded-md" onClick={() => router.push(`/news/${article.id}`)}>
            <h3 className="text-xl">{article.properties.Title.title[0].plain_text}</h3>
            <div className="flex gap-2">
              {article.properties.Tags.multi_select?.map((option) => (
                <span key={option.id}>{option.name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
