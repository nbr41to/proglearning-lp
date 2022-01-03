import React from 'react';
import { Box } from 'src/components/@commons/Box';
import { MemberCard } from './MemberCard';

const memberDescriptions = [
  {
    name: '男子大学生N.H',
    liveIn: '東京',
    hobby: 'オフィス行くか彼女に付き合う',
    oden: '大根',
    currentHappy: '最近ちょっと成長してるなって肌で感じれたこと！',
    hope: 'フロントエンドを勉強したい',
    comment: '',
    iconColorName: 'text-blue-500',
  },
  {
    name: '20代女性S.H',
    liveIn: '北海道',
    hobby: 'TRPG',
    oden: '焼き豆腐',
    currentHappy: 'ずっとやりたかった TRPG のシナリオを 2 回も回せた',
    hope: 'Node.js / React / ReactNative / AWS / TypeScript で一通りのことが出来るようになりたい！（そして個人開発したい）',
    iconColorName: 'text-amber-500',
    comment: '',
  },
  {
    name: '20代女性T.K',
    liveIn: '岩手',
    hobby:
      '勉強、ドラム、ギター、読書、アニメ鑑賞、映画鑑賞、ゲーム、ぬいぐるみ作り、雑貨作り、工作、ダーツ、筋トレ、猫と昼寝、洗車、掃除、バイクいじり、バイクでツーリング、自転車でツーリング、ドライブ、バーベキュー etc...のどれか',
    oden: 'ちくわぶ',
    currentHappy: 'メロンソーダのお酒が新発売',
    hope: 'アニメーションの技術を磨きたいです！',
    iconColorName: 'text-red-500',
    comment: '',
  },
  {
    name: '30代弾税N.K',
    liveIn: '神奈川',
    hobby: 'ゲームとスノボー',
    oden: '牛すじ',
    currentHappy: 'お世話になった人にまた会えたこと',
    hope: 'フルスタックエンジニアになりたい',
    iconColorName: 'text-teal-500',
    comment: '',
  },
];

export const Members = () => {
  return (
    <div className="py-8 mx-auto max-w-3xl sm:py-12">
      <h2 className="text-lg font-bold text-center sm:text-2xl">こんなメンバーがいます 💁‍♂️</h2>
      <Box className="flex flex-col flex-wrap gap-y-6 justify-center items-center p-6 mt-6 md:max-h-[1000px]">
        {memberDescriptions.map((description, index) => (
          <MemberCard key={index} description={description} />
        ))}
      </Box>
    </div>
  );
};
