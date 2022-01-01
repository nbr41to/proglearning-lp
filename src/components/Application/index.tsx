import { useState } from 'react';

export const ApplicationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-12">
      <h1 className="my-12 text-2xl text-center">お申し込み</h1>
      {!isOpen ? (
        <div className="p-12 text-center bg-slate-50 rounded">
          <button
            className="py-3 px-4 font-bold text-white bg-teal-400 hover:bg-teal-300 rounded"
            onClick={() => setIsOpen(true)}
          >
            申し込みフォームを入力する
          </button>
        </div>
      ) : (
        <div>
          {/* Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgBXSg-I3s7znuAiDB1pa7HO6_2lxw7UOZ4waFeSVGEHZXOA/viewform?embedded=true"
            width="100%"
            height="1000px"
            frameBorder="0"
          >
            読み込んでいます…
          </iframe>
        </div>
      )}
    </div>
  );
};
