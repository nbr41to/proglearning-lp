import { useState } from 'react';
import { Box } from '../@commons/Box';
import { PageTitle } from '../@commons/PageTitle';

export const ApplicationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-12">
      <PageTitle title="お申し込み" description="progLabへのお申し込みはこちらからお願いいたします。" />
      <Box className="p-8 text-center">
        {!isOpen ? (
          <button
            className="py-3 px-4 font-bold text-white bg-teal-300 hover:bg-teal-400 rounded"
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
      </Box>
    </div>
  );
};
