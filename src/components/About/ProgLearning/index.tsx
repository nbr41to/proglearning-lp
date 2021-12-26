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
  return (
    <div>
      <h2 className="text-2xl">About progLearning</h2>
      <div className="flex flex-col gap-12 py-8">
        <div>
          <h3 className="text-xl">プログラミング学習コンテンツの提供</h3>
          <p className="p-2">
            progLearningとは,2020年に教員を退職し,地道に努力を重ねることでフリーランスエンジニアになった管理人のnobが学習内容をアウトプットするために始めたYouTubeチャンネルの名前です.プログラミングを勉強する楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました.これからはYouTubeだけでなく,プログラミングを学習するためのコンテンツを多く提供していきたいと思っております.そして,そんな私のコンテンツを利用することで,一人でも多くの支えになることができれば幸いです.
          </p>
          <p>YouTubeチャンネルはこちら（もちろん無料公開）</p>
          <iframe
            className="aspect-video"
            src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA"
            frameBorder="0"
          ></iframe>
        </div>
        <div>
          <h3 className="text-xl">主な学習内容</h3>
          <ul className="flex flex-wrap gap-3 my-2">
            {learningContents.map((content) => (
              <li key={content} className="px-2 py-1 ring-1 rounded-md">
                {content}
              </li>
            ))}
          </ul>
          <p className="p-2">
            私が勉強した道行きがそのままコンテンツになっております.HTML/CSSから始めてフロントエンドのReactを学び,FirebaseやAWSなどAPIやDBに少しずつふれることで,バックエンドのNode.jsやGo言語などに興味を持つようになっていきました.{' '}
          </p>
        </div>
        <div>
          <h3 className="text-xl">
            プログラミングを勉強するのって楽しいよね！そもそも勉強することって楽しかったんだね！を伝えたい.
          </h3>
          <p className="p-2">
            プログラミングを学習してフリーランスになった私が最も伝えたいことは,「みんなエンジニア転職しようぜwww給料ウハウハwで人生最高wwwwぶはぁw¥www」みたいなことでは,ありません.それは「学ぶことによる幸福を知ってほしい」ということです.おそらく日本で教育を受けた多くの人は「勉強は苦しくて嫌い」と思っていることでしょう.（もちろん私もそうでした.）この概念を20代,30代とずっと持っていると,やがて生きづらいということに気がつく人が多いです.そんな中一人でも多くの人が学ぶことに喜びを感じるように成長してくれたらいいなという想いを持っています.{' '}
          </p>
        </div>
        <div>
          <h3 className="text-xl">初学者のための”わかりやすい”を重視したコンテンツ</h3>
          <p className="p-2">
            いくつかのプログラミング学習スクールでの経験や実際に周りにいるエンジニアを観察していて思ったことがあります.「できるエンジニア＝説明が上手である」とうわけではないということです.エンジニアの多くはコミュニケーションがそれほど得意でなく,相手の気持ちや背景を考えずに,機会に命令するように教える人は多いです.だからこそ,元教員の私は教わる人の気持ちに寄り添ったわかりやすさを提供したいと考えております.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
