import { useRouter } from 'next/router';
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
      <div className="flex flex-col gap-12 py-8">
        <div>
          <h3 className="text-xl">プログラミング学習コンテンツの提供</h3>
          <p className="p-2">
            progLearningとは,2020年に教員を退職し,地道に努力を重ねることでフリーランスエンジニアになった管理人のnobが学習内容をアウトプットするために始めたYouTubeチャンネルの名前です.プログラミングを勉強する楽しさを多くの人と共有したいという気持ちからコツコツと発信を続けて参りました.これからはYouTubeだけでなく,プログラミングを学習するためのコンテンツを多く提供していきたいと思っております.そして,そんな私のコンテンツを利用することで,一人でも多くの支えになることができれば幸いです.
          </p>
          <p>YouTubeチャンネルはこちら（もちろん無料公開）</p>
          <div className="w-96">
            <iframe
              className="aspect-video w-96"
              src="https://www.youtube.com/embed/?list=UUPcjWvYIfvqGPP4x30kEkMA"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div>
          <h3 className="text-xl">フロントエンドエンジニアになるための教材アプリ</h3>
          <p className="p-2">Coming soon ...</p>
        </div>
      </div>
    </div>
  );
};
