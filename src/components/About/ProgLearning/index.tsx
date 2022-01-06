import { useRouter } from 'next/router';
import { SectionColumn } from 'src/components/@commons/SectionColumn';
import { Experience } from './Experience';
import { YouTube } from './YouTube';

export const AboutProgLearningPage = () => {
  const router = useRouter();

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="mt-12 sm:m-0">
        {/* progLabへ PC */}
        <div className="hidden fixed top-0 right-0 z-10 pb-12 text-white sm:block">
          <div className="flex flex-col justify-center items-center w-60 h-60 bg-amber-400 rounded-bl-full">
            <div className="pt-12 pr-4 space-y-4 w-full text-right">
              <div className="text-xs">プログラミング学習コミュニティ</div>
              <div className="pr-2 text-lg font-bold">`progLab`</div>
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
        {/* progLabへ SP */}
        <div
          className="overflow-y-hidden fixed top-14 z-10 py-4 w-full bg-amber-400 shadow sm:hidden"
          onClick={() => router.push('/about/proglab')}
        >
          <div className="relative z-10 text-sm font-bold text-center text-white ">
            学習コミュニティ`progLab`を詳しく
          </div>
          <div className="absolute -top-4 w-32 h-32 bg-red-300 rounded-full"></div>
          <div className="absolute right-2 bottom-0 text-white">
            <i className="bx bxs-hand-up bx-sm bx-fade-down"></i>
            <div className="absolute -top-2 right-2 w-4 h-4 bg-white/50 rounded-full animate-ping"></div>
            <div className="absolute -top-2 right-2 w-4 h-4 bg-white/40 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-lg text-center sm:text-xl">
          プログラミング学習コンテンツ<span className="text-2xl font-bold text-teal-300">`progLearning`</span>
        </h1>
      </div>

      {/* Sections */}
      <SectionColumn
        title="わかりやすいをプレゼント"
        paragraph="私は2020年よりプログラミングの学習を始めました。プログラミング学習は難しいことが多いので、自分なりに解釈をし直すことが多いです。せっかくなので、その知識をなるべくわかりやすくまとめてアウトプットしております。"
      />
      <Experience />
      <SectionColumn
        title="学習コンテンツの提供"
        paragraph="progLearningとは、私が学習内容をアウトプットするために始めたYouTubeチャンネルの名前です。実際にプログラミング学習をして、この楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。これからはYouTube以外にも、プログラミングを学習するためのコンテンツを提供することで、一人でも多くの支えになることができれば嬉しいです。"
      />
      <YouTube />

      {/* Section4 */}
      <div className="flex flex-wrap gap-8 justify-evenly items-center py-12 px-4">
        <div className="w-96">
          <h2 className="text-xl font-bold text-center">Blog記事</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            エンジニア向けのプログラミングに関する内容を投稿できるサービスのZennや自分のBlogなどでもテキストベースで様々なことをアウトプットしております。
          </p>
        </div>
        <div className="pl-16 space-y-6 w-96 text-teal-400">
          <a
            className="flex gap-2 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://zenn.dev/nbr41to"
          >
            <i className=" bx bx-note bx-sm bx-tada"></i>
            <div>管理人のZennの記事一覧</div>
          </a>
          <a
            className="flex gap-2 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nbr41.com/blogs"
          >
            <i className="bx bxs-book-alt bx-sm bx-tada"></i>
            <div>MyBlogの記事一覧</div>
          </a>
        </div>
      </div>
      {/* Section5 */}
      <div className="flex flex-wrap gap-8 justify-evenly items-center py-12 px-4">
        <div className="w-96">
          <h2 className="text-xl font-bold text-center">学習用のソースコードを公開</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            私は普段新しいことを学ぶときは、なるべくわかりやすいノートのようなものを残すように心がけています。プログラミングの学習においてはソースコードになります。整理されているものはまだ少ないですが、あなたの学習の助けになれば嬉しいです。
          </p>
        </div>
        <div className="pl-16 space-y-6 w-96 text-teal-400">
          <a
            className="flex gap-2 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/prog-learning"
          >
            <i className=" bx bxl-github bx-sm bx-tada"></i>
            <div>progLearningのGitHub</div>
          </a>
        </div>
      </div>
      {/* Section6 */}
      <SectionColumn title="フロントエンドエンジニアになるための教材アプリ" paragraph="">
        <div className="mt-12 text-lg font-bold text-center text-slate-500 animate-pulse">Coming soon...</div>
      </SectionColumn>
      {/* Section7 */}
      <SectionColumn
        title="プログラミング講師"
        paragraph="数学やプログラミングの講師としても活動しております。マンツーマンのオンラインレッスンなどをご希望の方は気軽にお問い合わせください。"
      />
    </div>
  );
};
