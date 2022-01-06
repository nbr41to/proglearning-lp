import { useMemo, useState } from 'react';
import { SectionColumn } from 'src/components/@commons/SectionColumn';

export const Experience = () => {
  const [inputCode, setInputCode] = useState('<p class="text-lg font-bold">\n  魔法で色を変えよう！\n</p>\n');
  const inputClassName = useMemo(() => {
    return inputCode.match(/"(.*?)"/g)[0].replace(/"/g, '');
  }, [inputCode]);

  return (
    <SectionColumn
      title="プログラミング（＝ 魔法）を学ぶ"
      paragraph="子どもの頃から魔法を使いたいと夢見ていた人は多いと思います。大人になってからは「そんな事はできない」と思っていませんか？私はその逆でした？大人になった今、世の中は魔法に包まれていたのです。魔法とは「詳しくはわからないけど、〇〇をすると××が起こる」ことを指します。現代の私たちは多くの魔法を使いながら暮らしていたのです。そんな魔法を私たちと一緒に学びませんか？"
    >
      <div className="flex flex-wrap gap-8 justify-evenly py-12 px-4">
        <div className="w-64">
          <h2 className="pt-2 text-xl font-bold text-center">魔法を使ってみる</h2>
          <p className="mt-6 text-sm leading-8 text-slate-500">
            プログラミングは、決まった構文や文字列を入力することで動作するものです。実際のコードとそれによる描画を用意しましたので、
            <code className="py-1 px-2 mx-1 text-slate-700 bg-teal-50 rounded">class=&quot;&quot;</code>の
            <code className="py-1 px-2 mx-1 text-slate-700 bg-teal-50 rounded">&quot;</code>
            で囲まれた箇所に
            <code className="py-1 px-2 mx-1 text-slate-700 bg-teal-50 rounded">text-red-600</code>
            を追加して色を変えてみましょう！
          </p>
        </div>
        <div className="w-96 text-center">
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
  );
};
