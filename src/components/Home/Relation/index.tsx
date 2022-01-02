import { ContentItem } from './ContentItem';

export const Relation = () => {
  return (
    <div className="py-10 space-y-8">
      <h2 className="mb-6 text-xl font-bold text-center sm:text-2xl">学習に関連する内容</h2>
      <div className="p-6 bg-slate-50 rounded sm:p-12">
        <h3 className="mb-12 text-xl text-center text-slate-700 underline">Main contents</h3>
        <div className="flex flex-wrap gap-8 justify-center">
          <ContentItem label="Chrome" icon={<i className="text-red-600 bx bxl-chrome bx-md"></i>} />
          <ContentItem label="HTML" icon={<i className="text-orange-500 bx bxl-html5 bx-md"></i>} />
          <ContentItem label="CSS" icon={<i className="text-sky-500 bx bxl-css3 bx-md"></i>} />
          <ContentItem label="Sass" icon={<i className="text-pink-500 bx bxl-sass bx-md"></i>} />
          <ContentItem label="JavaScript" icon={<i className="text-yellow-300 bx bxl-javascript bx-md"></i>} />
          <ContentItem label="React" icon={<i className="text-sky-400 bx bxl-react bx-md"></i>} />
          <ContentItem label="VSCode" icon={<i className="text-sky-600 bx bxl-visual-studio bx-md"></i>} />
          <ContentItem label="CLI" icon={<i className="bx bxs-terminal bx-md"></i>} />
          <ContentItem label="Firebase" icon={<i className="text-amber-400 bx bxl-firebase bx-md"></i>} />
          <ContentItem label="git" icon={<i className="text-orange-600 bx bxl-git bx-md"></i>} />
          <ContentItem label="GitHub" icon={<i className="bx bxl-github bx-md"></i>} />
          <ContentItem label="Slack" icon={<i className="text-teal-500 bx bxl-slack bx-md"></i>} />
        </div>
        <p className="px-2 mx-auto mt-12 mb-12 max-w-2xl text-center text-slate-600 md:px-12">
          プログラミング学習コミュニティprogLabではJavaScriptのモダンなライブラリであるReactの学習を中心とし、キャリアアップのための新しい学びが盛んに行われております。私自身がフロントエンドエンジニアになったロードマップということもあり、HTMLとCSSから始め、Webサイト作成の知識を身につけたのちに、JavaScript→Reactといった学習のプロセスを推奨します。もちろん学ぶペースや順番に制約はなく、自由に楽しく学ぶことを第一に活動しております。
        </p>
      </div>
      <div className="p-6 bg-slate-50 rounded sm:p-12">
        <h3 className="mb-12 text-xl text-center text-slate-700 underline">Sub contents</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <ContentItem label="Node.js" icon={<i className="text-green-600 bx bxl-nodejs bx-md"></i>} />
          <ContentItem label="Golang" icon={<i className="text-sky-500 bx bxl-go-lang bx-md"></i>} />
          <ContentItem label="PHP" icon={<i className="text-indigo-400 bx bxl-php bx-md"></i>} />
          <ContentItem label="Python" icon={<i className="text-sky-700 bx bxl-python bx-md"></i>} />
          <ContentItem label="Vue" icon={<i className="text-green-800 bx bxl-vuejs bx-md"></i>} />
          <ContentItem label="AWS" icon={<i className="text-amber-500 bx bxl-aws bx-md"></i>} />
          <ContentItem label="Docker" icon={<i className="text-sky-700 bx bxl-docker bx-md"></i>} />
          <ContentItem label="WordPress" icon={<i className="bx bxl-wordpress bx-md"></i>} />
          <ContentItem label="Tailwind" icon={<i className="text-sky-400 bx bxl-tailwind-css bx-md"></i>} />
          <ContentItem label="Figma" icon={<i className="text-purple-500 bx bxl-figma bx-md"></i>} />
          <ContentItem label="Unity" icon={<i className="bx bxl-unity bx-md"></i>} />
        </div>
        <p className="px-2 mx-auto mt-12 mb-12 max-w-2xl text-center text-slate-600 md:px-12">
          プログラミング学習のジャンルは膨大です。出会った仲間たちと楽しく情報共有をする中で、気になった技術を好きに学ぶのが良いと考えております。プログラミング学習コミュニティprogLabではいろんな分野に興味を持ち学びを深める好奇心のある方が多く在籍しております。そのジャンルはプログラミングだけでなく、Webデザインや、健康、猫についてなど本当に様々なことを楽しく学べる環境を提供しております。
        </p>
      </div>
    </div>
  );
};
