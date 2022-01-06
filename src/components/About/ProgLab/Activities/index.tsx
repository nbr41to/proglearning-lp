import { SectionColumn } from 'src/components/@commons/SectionColumn';
import { SectionRow } from 'src/components/@commons/SectionRow';

import weekly from 'src/assets/images/weekly_sample.png';
import learning from 'src/assets/images/learning_sample.png';
import output from 'src/assets/images/output_sample.png';
import question from 'src/assets/images/question_sample.png';
import commitment from 'src/assets/images/commitment_sample.png';
import development from 'src/assets/images/development_sample.png';
import Image from 'next/image';

export const Activities = () => {
  return (
    <>
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
      <SectionRow
        title="質問し放題 🙋‍♀️"
        paragraph="#question チャンネルではどんな質問もし放題となっており、24時間以内の応答が期待できます。また、私以外にも優しい現役エンジニアが多数在籍しているため、多様な回答が望むことができます。"
      >
        <Image src={question} />
      </SectionRow>
      <SectionRow
        title="✏️ オンライン自習室の24時間開放"
        paragraph="#learning チャンネルではボイスチャットルームを24時間開放しており、いつでも勉強を開始することができます。「もくもく会」と呼ばれているものと同等です。オンライン同時接続で勉強することは、怠け防止だけでなく、知識のアウトプットや情報共有などをすることができるので学習速度が向上します。気の合う仲間との雑談のしすぎは注意ですが、そうなるほどに居心地が良くなることが大切だと考えております。なぜなら、新しいことの学習に最も大切なものは心身の安全であるとも言われているからです。また、学習する際にSlackに投稿することで、部屋にいた人と勉強した時間が記録されます。ぜひ仲間と一緒に切磋琢磨しましょう！"
        reverse
      >
        <Image src={learning} />
      </SectionRow>
      <SectionRow
        title="勉強内容を発信 📣"
        paragraph="#output チャンネルではためになった記事や動画を共有したり、自分の書いた記事を発信できます。インプットしたことをアウトプットすることで記憶への定着率は段違いに変わると言われているので、被ってもいいので積極的に発信しましょう！これにより、会員のみなさまがより多くの知識をキャッチアップすることができるようにもなっております✨"
      >
        <Image src={output} />
      </SectionRow>
      <SectionRow
        title="今日の目標やTODOを宣言 💪"
        paragraph="#commitment チャンネルでは今日の取り組みを発信できます。午前中の早い段階でその日の目標を宣言するだけで、達成率が大幅に上がること心理学ではわかっているそうです。事後報告でも構いませんので自分の日々の取り組みを発信しましょう！もちろん達成できなくても、自分を責める必要はありません。1つでも目標が達成できればバンザイです🙌"
        reverse
      >
        <Image src={commitment} />
      </SectionRow>
      <SectionRow
        title="プロダクトの共同開発 💻"
        paragraph="主にReact / GitHub / Notionなどを活用して、多人数でのプロダクト開発の経験をすることができます。タスクごとの開発なので、自分のペースで開発に携わることが可能です。もちろん参加いただいた場合には、作成したプロダクトをポートフォリオの一つとしていただいても構いません👍"
      >
        <Image src={development} />
      </SectionRow>
      <SectionColumn
        title="顔出しは任意、匿名の参加でOK 👯‍♀️"
        paragraph="このコミュニティの活動でビデオをオンにするようなものはなく、原則はSlackによるチャットとボイスチャットルームへの参加のみになります。どの時間帯でも気軽に活動ができるような配慮をしております。また、信用に関しては、入会時の管理人とのビデオチャット面接と月額制会員というところで果たされていると考えております。気分を害するような事があれば、すぐに管理人までご連絡ください。"
      />
    </>
  );
};
