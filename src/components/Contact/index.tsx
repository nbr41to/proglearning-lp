import { Box } from '../@commons/Box';
import { PageTitle } from '../@commons/PageTitle';
import { CategoryCard } from './CategoryCard';

const contactCategories = [
  {
    name: 'LINE',
    href: 'https://lin.ee/JYDAgcH',
    colorName: 'bg-green-400',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Knob_nbr41to',
    colorName: 'bg-sky-400',
  },
  {
    name: 'Email',
    href: 'mailto:nbr.41to@gmail.com',
    colorName: 'bg-red-400',
  },
];

export const ContactPage = () => {
  return (
    <div className="space-y-8">
      <PageTitle title="CONTACT" description="無料相談受付けを開始しました。気軽にお問い合わせください！" />
      <Box className="py-8 mx-auto max-w-3xl">
        <ul className="space-y-3 text-sm font-bold text-center text-slate-700">
          <li>プログラミングの学習を始めようと思って悩んでいる方</li>
          <li>一緒に勉強できる仲間が欲しい方</li>
          <li>学習メンターをお探しの方</li>
          <li>初学者向けのわかりやすい講師をお探しの方</li>
          <li>漠然とした人生の悩みを解決したい方</li>
          <li>自分のレベル感を確かめたい方</li>
        </ul>
      </Box>
      <div className="flex flex-wrap gap-8 justify-center items-center py-12">
        {contactCategories.map((category) => (
          <CategoryCard
            key={category.name}
            className={category.colorName}
            category={category.name}
            href={category.href}
          />
        ))}
      </div>
      {/* Form */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <div className="w-64 h-24 bg-purple-400 rounded-2xl shadow transition-all hover:rotate-12 origin-top-left cursor-pointer">
            <a className="flex flex-col gap-1 justify-center items-center h-full font-bold text-center text-white">
              <div>フォームからお問い合わせ</div>
            </a>
          </div>
          <div className="absolute inset-1 -z-10 w-64 h-24 bg-gray-600 rounded-2xl shadow">
            <span className="absolute top-3 right-3 text-xs font-bold text-white">現在作成中🙇‍♂️</span>
          </div>
          <div className="absolute inset-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
        </div>
      </div>
    </div>
  );
};
