import { Box } from '../@commons/Box';
import { SectionColumn } from '../@commons/SectionColumn';

export const ContactPage = () => {
  return (
    <div>
      <SectionColumn title="CONTACT" paragraph="現在、無料相談は受付中です。" />
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
      <div className="flex gap-8 justify-center items-center py-12">
        <div className="relative">
          <div className="w-32 h-32 bg-green-400 rounded-2xl shadow transition-all hover:rotate-6 origin-top-left cursor-pointer">
            <a
              className="flex flex-col gap-1 justify-center items-center h-full text-sm font-bold text-center text-white"
              href="https://lin.ee/JYDAgcH"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>LINEで</div>
              <div>お問い合わせ</div>
            </a>
          </div>
          <div className="absolute inset-1 -z-10 w-32 h-32 bg-gray-600 rounded-2xl shadow"></div>
          <div className="absolute inset-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
        </div>
        <div className="relative">
          <div className="w-32 h-32 bg-sky-400 rounded-2xl shadow transition-all hover:rotate-6 origin-top-left cursor-pointer">
            <a
              className="flex flex-col gap-1 justify-center items-center h-full text-sm font-bold text-center text-white"
              href="https://twitter.com/Knob_nbr41to"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>Twitterで</div>
              <div>お問い合わせ</div>
            </a>
          </div>
          <div className="absolute inset-1 -z-10 w-32 h-32 bg-gray-600 rounded-2xl shadow"></div>
          <div className="absolute inset-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
        </div>
        <div className="relative">
          <div className="w-32 h-32 bg-red-400 rounded-2xl shadow transition-all hover:rotate-6 origin-top-left cursor-pointer">
            <div className="flex flex-col gap-1 justify-center items-center h-full text-sm font-bold text-center text-white">
              <div>Emailで</div>
              <div>お問い合わせ</div>
            </div>
          </div>
          <div className="absolute inset-1 -z-10 w-32 h-32 bg-gray-600 rounded-2xl shadow"></div>
          <div className="absolute inset-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
        </div>
      </div>
    </div>
  );
};
