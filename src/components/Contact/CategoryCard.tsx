import { VFC } from 'react';

type CategoryCardProps = {
  className?: string;
  category: string;
  href: string;
};

export const CategoryCard: VFC<CategoryCardProps> = ({ className, category, href }) => {
  return (
    <div className="relative">
      <div
        className={`w-32 h-32 rounded-2xl shadow transition-all hover:rotate-6 origin-top-left cursor-pointer ${className}`}
      >
        <a
          className="flex flex-col gap-1 justify-center items-center h-full text-sm font-bold text-center text-white"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{category}で</div>
          <div>お問い合わせ</div>
        </a>
      </div>
      <div className="absolute inset-1 -z-10 w-32 h-32 bg-gray-600 rounded-2xl shadow"></div>
      <div className="absolute inset-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
    </div>
  );
};
