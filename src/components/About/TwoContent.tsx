import { useRouter } from 'next/router';
import { Box } from '../@commons/Box';

export const TwoContent = () => {
  const router = useRouter();

  return (
    <Box className="p-12">
      <p className="mb-12 text-lg text-center text-slate-500 underline">プログラミング学習をいろんな角度でサポート</p>
      <div className="flex flex-wrap gap-x-32 gap-y-12 justify-center items-center">
        {/* progLearning */}
        <div className="relative pb-12 text-white">
          <div
            className="flex flex-col justify-center items-center w-72 h-72 bg-teal-300 rounded-full cursor-pointer"
            onClick={() => router.push('/about/proglearning')}
          >
            <p className="pt-4 text-sm">プログラミング学習コンテンツ</p>
            <h3 className="pb-8 mt-3 text-3xl font-bold">progLearning</h3>
          </div>
          <div
            className="flex absolute bottom-0 left-0 justify-center items-center w-28 h-28 bg-sky-400 rounded-full active:brightness-75 animate-bounce hover:animate-none cursor-pointer"
            onClick={() => router.push('/about/proglearning')}
          >
            <p className=" text-xl font-bold">詳しく</p>
          </div>
        </div>
        {/* progLab */}
        <div className="relative pb-12 text-white">
          <div
            className="flex flex-col justify-center items-center w-72 h-72 bg-amber-400 rounded-full cursor-pointer"
            onClick={() => router.push('/about/proglab')}
          >
            <p className="pt-4 text-sm">プログラミング学習コミュニティ</p>
            <h3 className="pb-8 mt-3 text-3xl font-bold">progLab</h3>
          </div>
          <div
            className="flex absolute bottom-0 left-0 justify-center items-center w-28 h-28 bg-red-300 rounded-full active:brightness-75 animate-bounce hover:animate-none cursor-pointer"
            onClick={() => router.push('/about/proglab')}
          >
            <p className=" text-xl font-bold">詳しく</p>
          </div>
        </div>
      </div>
    </Box>
  );
};
