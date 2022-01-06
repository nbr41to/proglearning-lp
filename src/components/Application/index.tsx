import { useState } from 'react';
import { Box } from '../@commons/Box';
import { PageTitle } from '../@commons/PageTitle';
import { SectionColumn } from '../@commons/SectionColumn';

const checkItems = [
  'お申し込み後、Slackのワークスペースへの招待メールが届きますのでご確認ください。メールアドレスに間違いがある場合は招待メールが届きませんのでご注意ください。',
  '招待後にSlackのDMで日程調整をし、15分ほどのビデオ通話で初回面談を行います。',
  'こちらは、エンジニア転職や案件の紹介を約束するものではなく、あくまでもコミュニケーションを提供するサービスとなっております。',
  '他のメンバーを不快にさせるなどの迷惑行為が見られた際は、強制退会をさせていただく場合がございます。',
];

export const ApplicationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkLength, setCheckLength] = useState(Array(checkItems.length).fill(false));

  const handleCheck = (index: number) => {
    if (isOpen) return;
    const newCheck = [...checkLength];
    newCheck[index] = !newCheck[index];
    setCheckLength(newCheck);
  };

  return (
    <div className="space-y-12">
      <PageTitle title="お申し込み" description="progLab へのお申し込みはこちらからお願いいたします。" />
      <Box className="p-8">
        <div className="mx-auto space-y-4 max-w-2xl text-sm accent-teal-300">
          <h2 className="p-2 text-lg text-center">以下の項目をご確認の上、お申し込みください 🙇‍♂️</h2>
          {checkItems.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              {checkLength[index] ? (
                <i
                  className="text-red-500 cursor-pointer bx bx-checkbox-checked bx-md"
                  onClick={() => handleCheck(index)}
                ></i>
              ) : (
                <i
                  className="text-slate-400 cursor-pointer bx bx-checkbox bx-md"
                  onClick={() => handleCheck(index)}
                ></i>
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="py-8 -mx-8 text-center">
          {!isOpen ? (
            <button
              disabled={checkLength.filter((v) => v).length !== checkItems.length}
              className="py-3 px-4 font-bold text-white bg-teal-300 hover:bg-teal-400 disabled:bg-slate-300 rounded"
              onClick={() => setIsOpen(true)}
            >
              申し込みフォームを入力する
            </button>
          ) : (
            <div>
              {/* Google Form */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdgBXSg-I3s7znuAiDB1pa7HO6_2lxw7UOZ4waFeSVGEHZXOA/viewform?embedded=true"
                width="100%"
                height="1400px"
                frameBorder="0"
              >
                読み込んでいます…
              </iframe>
            </div>
          )}
        </div>
      </Box>
      <SectionColumn
        title="プログラミング講座をご希望の方"
        paragraph="プログラミングの講座やマンツーマンのレッスン（オンライン）などをご希望の方は恐れ入りますが、お問い合わせページよりご連絡をお願いいたします。"
      />
    </div>
  );
};
