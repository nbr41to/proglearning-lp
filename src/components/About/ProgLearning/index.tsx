import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { SectionColumn } from 'src/components/@commons/SectionColumn';

export const AboutProgLearningPage = () => {
  const router = useRouter();

  const [inputCode, setInputCode] = useState('<p class="text-lg font-bold">\n  魔法で色を変えよう！\n</p>');
  const inputClassName = useMemo(() => {
    return inputCode.match(/"(.*?)"/g)[0].replace(/"/g, '');
  }, [inputCode]);

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
          <div className="absolute top-4 right-4 text-white ">
            <i className="bx bxs-hand-up bx-sm bx-burst"></i>
          </div>
        </div>
        <h1 className="text-lg text-center sm:text-xl">
          プログラミング学習コンテンツ<span className="text-2xl font-bold text-teal-300">`progLearning`</span>
        </h1>
      </div>

      {/* Section1 */}
      <SectionColumn
        title="わかりやすいをプレゼント"
        paragraph="私は2020年よりプログラミングの学習を始めました。プログラミング学習は難しいことが多いので、自分なりに解釈をし直すことが多いです。せっかくなので、その知識をなるべくわかりやすくまとめてアウトプットしております。"
      />
      {/* Section1 */}
      <SectionColumn
        title="プログラミング（＝ 魔法）を学ぶ"
        paragraph="私は子どもの頃から魔法を使いたいと夢見てきました。大人になってそんな事はできないと知った今、世の中は魔法に包まれていました。魔法とは「〇〇をすると××が起こる」ことを指しています。身の回りの便利なもの全てに当てはまりませんか？そんな魔法を学びませんか？"
      >
        <div className="flex flex-wrap gap-8 justify-evenly py-12 px-4">
          <div className="w-64 text-center">
            <h2 className="pt-2 text-xl font-bold">魔法を使ってみる</h2>
            <p className="mt-6 text-sm leading-8 text-slate-500">
              プログラミングは、決まった構文や文字列を入力することで動作するものです。実際のコードとそれによる描画を用意しましたので、
              <code className="py-1 px-2 text-slate-700 bg-teal-50 rounded">class=&quot;&quot;</code>の
              <code className="py-1 px-2 text-slate-700 bg-teal-50 rounded">&quot;</code>
              で囲まれた箇所に
              <code className="py-1 px-2 text-slate-700 bg-teal-50 rounded">text-red-600</code>
              を追加して色を変えてみましょう！
            </p>
          </div>
          <div className="w-96">
            <div className="flex justify-center items-center h-24 rounded border">
              <p className={inputClassName}>魔法で色を変えてみよう！</p>
            </div>
            <pre className="mt-4">
              <code className="text-sm text-slate-800">
                <textarea
                  className="py-4 px-6 w-full h-36 bg-teal-50 rounded border focus:outline-none appearance-none resize-none"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                ></textarea>
              </code>
            </pre>
            <button
              className="mt-2 text-sm font-bold text-slate-500"
              onClick={() => setInputCode('<p class="text-xl font-bold">\n  魔法を使ってみよう！\n</p>')}
            >
              <span className="flex gap-1 justify-center items-center">
                <i className="bx bx-revision bx-sm"></i>
                <span>元に戻す</span>
              </span>
            </button>
          </div>
        </div>
      </SectionColumn>

      {/* Section2 */}
      <SectionColumn
        title="学習コンテンツの提供"
        paragraph="progLearningとは、私が学習内容をアウトプットするために始めたYouTubeチャンネルの名前です。実際にプログラミング学習をして、この楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。これからはYouTube以外にも、プログラミングを学習するためのコンテンツを提供することで、一人でも多くの支えになることができれば嬉しいです。"
      />

      {/* Section3 */}
      <div className="flex flex-row-reverse flex-wrap gap-8 justify-evenly items-center py-12 px-4">
        <div className="w-96 text-center">
          <h2 className="text-xl font-bold">YouTubeチャンネル</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            プログラミング学習の効率化を目標とした学習内容をアウトプットするためのYouTubeチャンネル。同じようにつまずいた人の助けになっていれば嬉しいです。そしてなによりも、プログラミングを学ぶことの楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました。
          </p>
        </div>
        <div className="w-96">
          <iframe
            className="aspect-video w-full shadow-md"
            src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Section4 */}
      <div className="flex flex-wrap gap-8 justify-evenly items-center py-12 px-4">
        <div className="w-96 text-center">
          <h2 className="text-xl font-bold">Blog記事</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            エンジニア向けのプログラミングに関する内容を投稿できるサービスのZennや自分のBlogなどでもテキストベースで様々なことをアウトプットしております。
          </p>
        </div>
        <div className="pl-16 space-y-6 w-96 text-teal-400">
          <a
            className="flex gap-1 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://noblog.nbr41.com/"
          >
            <i className=" bx bxs-right-arrow-circle bx-sm bx-fade-left"></i>
            <div>管理人のZennの記事一覧</div>
          </a>
          <a
            className="flex gap-1 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.nbr41.com/blogs"
          >
            <i className="bx bxs-right-arrow-circle bx-sm bx-fade-left"></i>
            <div>MyBlogの記事一覧</div>
          </a>
        </div>
      </div>
      {/* Section5 */}
      <div className="flex flex-wrap gap-8 justify-evenly items-center py-12 px-4">
        <div className="w-96 text-center">
          <h2 className="text-xl font-bold">学習用のソースコードを公開</h2>
        </div>
        <div className="pl-16 space-y-6 w-96 text-teal-400">
          <a
            className="flex gap-1 items-center w-fit hover:text-amber-400 transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/prog-learning"
          >
            <i className=" bx bxs-right-arrow-circle bx-sm bx-fade-left"></i>
            <div>progLearningのGitHub</div>
          </a>
        </div>
      </div>
      {/* Section6 */}
      <SectionColumn title="フロントエンドエンジニアになるための教材アプリ" paragraph="Coming soon... " />
      {/* Section7 */}
      <SectionColumn
        title="プログラミング講師"
        paragraph="数学やプログラミングの講師としても活動しております。マンツーマンのオンラインレッスンなどをご希望の方は気軽にお問い合わせください。"
      />
    </div>
  );
};
