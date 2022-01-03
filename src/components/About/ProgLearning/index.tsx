import { useRouter } from 'next/router';
import { Box } from 'src/components/@commons/Box';
import { SectionColumn } from 'src/components/@commons/SectionColumn';

const learningContents = [
  'HTML',
  'CSS',
  'Sass',
  'JavaScript',
  'React',
  'Nextjs',
  'TypeScript',
  'Nodejs',
  'Golang',
  'Storybook',
  'Firebase',
  'git',
  'GitHub',
];

export const AboutProgLearningPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="py-8">
        {/* progLearning */}
        <div className="fixed top-0 right-0 z-10 pb-12 text-white">
          <div className="flex flex-col justify-center items-center w-60 h-60 bg-amber-400 rounded-bl-full">
            <div className="pt-12 pr-4 space-y-4 w-full text-right">
              <div className="text-xs">プログラミング学習コミュニティ</div>
              <div className="pr-4 text-lg font-bold">`progLab`</div>
              <div>の方を</div>
            </div>
          </div>
          <div
            className="flex absolute bottom-0 left-12 justify-center items-center w-24 h-24 bg-red-300 rounded-full active:brightness-75 animate-bounce hover:animate-none cursor-pointer"
            onClick={() => router.push('/about/proglab')}
          >
            <p className=" text-lg font-bold">詳しく</p>
          </div>
        </div>
        <h1 className="text-xl text-center">
          プログラミング学習コミュニティ<span className="text-2xl font-bold text-teal-300">`progLearning`</span>
        </h1>
      </div>
      {/* Section1 */}
      <SectionColumn
        title="わかりやすいをプレゼント"
        paragraph="私は2020年よりプログラミングの学習を始めました。せっかくなので,知識をわかりやすくまとめてアウトプットしていきます。"
      />
      {/* Section2 */}
      <SectionColumn
        title="プログラミング学習コンテンツの提供"
        paragraph="progLearningとは、私が学習内容をアウトプットするために始めたYouTubeチャンネルの名前です。実際にプログラミング学習をして、この楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。これからはYouTube以外にも、プログラミングを学習するためのコンテンツを提供することで、一人でも多くの支えになることができれば嬉しいです。"
      />
      {/* Section3 */}
      <div className="flex gap-16 justify-center items-center py-12 px-4">
        <div className="w-96 shadow-md">
          <iframe
            className="aspect-video w-96"
            src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="w-96 text-center">
          <h2 className="text-xl font-bold">YouTubeチャンネル</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            プログラミング学習の効率化を目標とした学習内容をアウトプットするためのYouTubeチャンネル。同じようにつまずいた人の助けになっていれば嬉しいです。そしてなによりも、プログラミングを学ぶことの楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。
          </p>
        </div>
      </div>
      {/* Section4 */}
      <div className="flex gap-16 justify-center items-center py-12 px-4">
        <div className="w-96 text-center">
          <h2 className="text-xl font-bold">Blog記事</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            エンジニア向けのプログラミングに関する内容を投稿できるサービスのZennや自分のBlogなどでもテキストベースで様々なことをアウトプットしております。
          </p>
        </div>
        <div className="pl-12 space-y-6 w-96 text-teal-400">
          <a
            className="flex gap-2 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://noblog.nbr41.com/"
          >
            <i className=" bx bxs-right-arrow-circle bx-sm"></i>
            <div>管理人のZennの記事一覧</div>
          </a>
          <a
            className="flex gap-2 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nbr41.com/blogs"
          >
            <i className="bx bxs-right-arrow-circle bx-sm"></i>
            <div>MyBlogの記事一覧</div>
          </a>
        </div>
      </div>
      {/* Section5 */}
      <SectionColumn title="フロントエンドエンジニアになるための教材アプリ" paragraph="Coming soon ... " />
      {/* Section6 */}
      <SectionColumn
        title="プログラミング講師"
        paragraph="数学やプログラミングの講師としても活動しております。マンツーマンのオンラインレッスンなどをご希望の方は気軽にお問い合わせください。"
      />
    </div>
  );
};
