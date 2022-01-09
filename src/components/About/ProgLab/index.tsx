import { useRouter } from 'next/router';
import { LinkButton } from 'src/components/@commons/Button/LinkButton';
import { SectionColumn } from 'src/components/@commons/SectionColumn';
import { Activities } from './Activities';
import { Members } from './Members';

export const AboutProgLabPage = () => {
  const router = useRouter();

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="mt-12 sm:m-0">
        {/* progLearningへ PC */}
        <div className="hidden fixed top-0 right-0 z-10 pb-12 text-white sm:block">
          <div className="flex flex-col justify-center items-center w-60 h-60 bg-teal-300 rounded-bl-full">
            <div className="pt-12 pr-4 space-y-4 w-full text-right">
              <div className="text-xs">プログラミング学習コンテンツ</div>
              <div className="text-lg font-bold">`progLearning`</div>
              <div>の方を</div>
            </div>
          </div>
          <div
            className="flex absolute bottom-0 left-12 justify-center items-center w-24 h-24 bg-sky-400 rounded-full active:brightness-75 animate-bounce hover:animate-none cursor-pointer"
            onClick={() => router.push('/about/proglearning')}
          >
            <p className=" text-lg font-bold">詳しく</p>
          </div>
        </div>
        {/* progLearningへ SP */}
        <div
          className="overflow-y-hidden fixed top-14 z-50 py-4 w-full bg-teal-300 shadow sm:hidden"
          onClick={() => router.push('/about/proglearning')}
        >
          <div className="relative z-10 text-sm font-bold text-center text-white ">
            学習コンテンツ`progLearning`を詳しく
          </div>
          <div className="absolute -top-4 w-32 h-32 bg-sky-400 rounded-full"></div>
          <div className="absolute right-2 bottom-0 text-white">
            <i className="bx bxs-hand-up bx-sm bx-fade-down"></i>
            <div className="absolute -top-2 right-2 w-4 h-4 bg-white/50 rounded-full animate-ping"></div>
            <div className="absolute -top-2 right-2 w-4 h-4 bg-white/40 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-lg text-center sm:text-xl">
          プログラミング学習コミュニティ<span className="text-2xl font-bold text-amber-400">`progLab`</span>
        </h1>
      </div>

      {/* Top View */}
      <div className="mx-auto max-w-3xl">
        <h2 className="pl-6 my-8 text-5xl font-bold text-center sm:my-20 sm:text-7xl">圧倒的、破格。</h2>
        <div className="flex flex-wrap gap-y-6 justify-around items-center">
          <div className="w-80">
            <h3 className="text-lg font-bold text-center">踏み出す人の味方になります。</h3>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              progLab
              はプログラミングを学習したい人にとって、間違いなく価格以上の価値を提供するサービスです。技術的な質問に答えるだけでなく、元教員のエンジニアならではのわかりやすい説明や相手の状況に適した対応をすることで成長をサポートします。また、勉強やキャリアに関する悩みを相談し放題で、心理学の知見に基づいたアドバイスをさせていただきます。
            </p>
          </div>
          <ul className="pl-4 space-y-2 w-80 font-bold">
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">現役エンジニアに質問し放題</span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">学習やキャリアに関する相談し放題</span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">最新の情報が手に入る環境</span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">実務レベルの開発を体験できる</span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">スキルに応じた案件を紹介</span>
            </li>
            <li className="flex gap-1 items-center">
              <i className="text-amber-400 bx bxs-check-square bx-sm"></i>
              <span className="text-slate-700">`わかりやすい`がもれなくついてくる</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sections */}
      <SectionColumn
        title="¥1320/月で仲間と一緒にプログラミング学習を始めよう 👨‍💻"
        paragraph="progLabはSlackを使ったオンラインコミュニティです。Slack内の様々なチャンネルにおいてプログラミング学習のためになるような環境をご用意させていただいております。また、ボイスチャットも並行して活用しており、迅速な質問対応や、楽しく話をしながら学習を進めることができます。"
      />
      <Activities />
      <SectionColumn
        title="エンジニア内定者続出 🎉"
        paragraph="2021年4月から発足してから、少しずつこのコミュニティからエンジニア転職を成功させた方が出てきております。管理人としては大変嬉しい気持ちもありますが、これが終わりではなく、その後も楽しく学びを続けることができるようにサポートし、キャリアを伸ばせるような環境の提供を目指しております💪"
      />
      <Members />
      <SectionColumn
        title="今だけ初月無料 💨"
        paragraph="こちらよりお申し込みいただくことで、初月無料で加入することができます。1ヶ月の体験入会としてでも構いませんので、一緒にプログラミングを勉強できることを楽しみにしております。"
      >
        <div className="flex flex-wrap gap-4 justify-center items-center px-6 mt-8">
          <LinkButton href="/application" fill label="初月無料で申し込む" />
          <LinkButton href="/contact" label="まずは無料相談 →" />
        </div>
      </SectionColumn>

      {/* Cautions */}
      <div className="py-12 px-6 mx-auto space-y-2 w-fit max-w-lg text-xs text-slate-500">
        <p>※ 案件の紹介をお約束するコミュニティではございません。</p>
        <p>※ エンジニア転職をお約束するコミュニティではございません。</p>
        <p>※ 質問対応は解決をお約束するものではございません。</p>
      </div>
    </div>
  );
};
