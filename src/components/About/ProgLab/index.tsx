import Link from 'next/link';
import { useRouter } from 'next/router';
import { LinkButton } from 'src/components/@commons/Button/LinkButton';
import { SectionWithImage } from 'src/components/@commons/SectionWithImage';
import weekly from 'src/assets/images/weekly_sample.png';
import learning from 'src/assets/images/learning_sample.png';
import output from 'src/assets/images/output_sample.png';
import question from 'src/assets/images/question_sample.png';
import commitment from 'src/assets/images/commitment_sample.png';
import development from 'src/assets/images/development_sample.png';
import { SectionColumn } from 'src/components/@commons/SectionColumn';

export const AboutProgLabPage = () => {
  const router = useRouter();

  return (
    <div className="space-y-12">
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
          className="overflow-y-hidden fixed top-14 z-10 py-4 w-full bg-teal-300 shadow sm:hidden"
          onClick={() => router.push('/about/proglearning')}
        >
          <div className="relative z-10 text-sm font-bold text-center text-white ">
            学習コンテンツ`progLearning`を詳しく
          </div>
          <div className="absolute -top-4 w-32 h-32 bg-sky-400 rounded-full"></div>
        </div>
        <h1 className="text-lg text-center sm:text-xl">
          プログラミング学習コミュニティ<span className="text-2xl font-bold text-amber-400">`progLab`</span>
        </h1>
      </div>

      {/* Section1 */}
      <div className="mx-auto max-w-3xl">
        <h2 className="pl-6 my-8 text-5xl font-bold text-center sm:my-20 sm:text-7xl">圧倒的、破格。</h2>
        <div className="flex flex-wrap gap-y-6 justify-around items-center">
          <div className="w-80 text-center">
            <h3 className="text-lg font-bold">踏み出す人の味方になります。</h3>
            <p className="mt-4 text-sm leading-7 text-slate-500">
              progLabはプログラミングを学習したい人にとっては、間違いなく価格以上の価値を提供するサービスです。技術的な質問に答えるだけでなく、元教員のエンジニアならではのわかりやすい説明や相手の状況に適した対応をすることで成長をサポートします。また、勉強やキャリアに関する悩みを相談し放題で、心理学の知見に基づいたアドバイスをさせていただきます。
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

      {/* Section2 */}
      <SectionColumn
        title="¥1320/月で仲間と一緒にプログラミング学習を始めよう 👨‍💻"
        paragraph="progLabはSlackを使ったオンラインコミュニティです。Slack内の様々なチャンネルにおいてプログラミング学習のためになるような環境をご用意させていただいております。また、ボイスチャットも並行して活用しており、迅速な質問対応や、楽しく話をしながら学習を進めることができます。"
      />

      {/* Section3 */}
      <SectionColumn
        title="コミュニティ内の活動 🏂"
        paragraph="以下にSlackやボイスチャットを使ったコミュニティ内における活動の一部を紹介させていただきます。現在は15名程度で活動しており、コミュニティ内の活動は会員さんの提案によるものも多いです。楽しく成長できる活動の提案をお待ちしております。"
      />
      <SectionColumn
        title="🚀 定期開催「今週どうでしょう会」"
        paragraph="毎週日曜20時〜21時より、今週の出来事に関する雑談を交えながら、今週学んだことと来週取り組む予定のことを簡単にアウトプットする会をボイスチャットのグループ通話で開催しております。方針は、みんなで開発した専用アプリを使って最初に自分の話すテーマプレートを作成していき、それらからランダムにテーマが決まり、選ばれたテーマに関して話していきます。私が進行を努めておりますが、終始和やかな楽しい雰囲気づくりを目指しております。"
        imageSrc={weekly}
        annotation="↑2021年最後に開催した「今週どうでしょう会」の様子です。"
      />
      <SectionWithImage
        title="質問し放題 🙋‍♀️"
        paragraph="#question チャンネルではどんな質問もし放題となっており、24時間以内の応答が期待できます。また、私以外にも優しい現役エンジニアが多数在籍しているため、多様な回答が望むことができます。"
        imageSrc={question}
      />
      <SectionWithImage
        title="✏️ オンライン自習室の24時間開放"
        paragraph="#learning チャンネルではボイスチャットルームを24時間開放しており、いつでも勉強を開始することができます。「もくもく会」と呼ばれているものと同等です。オンライン同時接続で勉強することは、怠け防止だけでなく、知識のアウトプットや情報共有などをすることができるので学習速度が向上します。気の合う仲間との雑談のしすぎは注意ですが、そうなるほどに居心地が良くなることが大切だと考えております。なぜなら、新しいことの学習に最も大切なものは心身の安全であるとも言われているからです。また、学習する際にSlackに投稿することで、部屋にいた人と勉強した時間が記録されます。ぜひ仲間と一緒に切磋琢磨しましょう！"
        imageSrc={learning}
        reverse
      />
      <SectionWithImage
        title="勉強内容を発信 📣"
        paragraph="#output チャンネルではためになった記事や動画を共有したり、自分の書いた記事を発信できます。インプットしたことをアウトプットすることで記憶への定着率は段違いに変わると言われているので、被ってもいいので積極的に発信しましょう！これにより、会員のみなさまがより多くの知識をキャッチアップすることができるようにもなっております✨"
        imageSrc={output}
      />
      <SectionWithImage
        title="今日の目標やTODOを宣言 💪"
        paragraph="#commitment チャンネルでは今日の取り組みを発信できます。午前中の早い段階でその日の目標を宣言するだけで、達成率が大幅に上がること心理学ではわかっているそうです。事後報告でも構いませんので自分の日々の取り組みを発信しましょう！もちろん達成できなくても、自分を責める必要はありません。1つでも目標が達成できればバンザイです🙌"
        imageSrc={commitment}
        reverse
      />
      <SectionWithImage
        title="プロダクトの共同開発 💻"
        paragraph="主にReact / GitHub / Notionなどを活用して、多人数でのプロダクト開発の経験をすることができます。タスクごとの開発なので、自分のペースで開発に携わることが可能です。もちろん参加いただいた場合には、作成したプロダクトをポートフォリオの一つとしていただいても構いません👍"
        imageSrc={development}
      />
      <SectionColumn
        title="顔出しは任意、匿名の参加でOK 👯‍♀️"
        paragraph="このコミュニティの活動でビデオをオンにするようなものはなく、原則はSlackによるチャットとボイスチャットルームへの参加のみになります。どの時間帯でも気軽に活動ができるような配慮をしております。また、信用に関しては、入会時の管理人とのビデオチャット面接と月額制会員というところで果たされていると考えております。気分を害するような事があれば、すぐに管理人までご連絡ください。"
      />

      {/* Section4 */}
      <SectionColumn
        title="エンジニア内定者続出 🎉"
        paragraph="2021年4月から発足してから、少しずつこのコミュニティからエンジニア転職を成功させた方が出てきております。管理人としては大変嬉しい気持ちもありますが、これが終わりではなく、その後も楽しく学びを続けることができるようにサポートし、キャリアを伸ばせるような環境の提供を目指しております💪"
      />

      {/* Section5 */}
      <div>
        <SectionColumn
          title="今だけ初月無料 💨"
          paragraph="こちらよりお申し込みいただくことで、初月無料で加入することができます。1ヶ月の体験入会としてでも構いませんので、一緒にプログラミングを勉強できることを楽しみにしております。"
        />
        <div className="flex flex-wrap gap-4 justify-center items-center px-6 mt-8">
          <LinkButton href="/application" fill label="初月無料で申し込む" />
          <LinkButton href="/contact" label="まずは無料相談 →" />
        </div>
      </div>

      {/* Section6 */}
      <div className="py-12 px-6 mx-auto space-y-2 max-w-lg text-xs text-slate-500">
        <p>※ 案件の紹介をお約束するコミュニティではございません。</p>
        <p>※ エンジニア転職をお約束するコミュニティではございません。</p>
        <p>※ 質問対応はに24時間以内に解決をお約束するものではございません。</p>
      </div>
    </div>
  );
};
