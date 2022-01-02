import { useRouter } from 'next/router';

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="p-4 text-center sm:py-10 sm:px-0">
      <div className="">
        <div className="my-6 text-4xl font-bold animate-pulse sm:my-14 sm:text-8xl">
          <div className="leading-snug">Change your life</div>
          <div>
            by <span className="text-teal-300">Learning</span>
          </div>
        </div>
        <div className="px-4 text-xs sm:text-base">
          <span className="text-base font-bold text-amber-400">`progLearning`</span>{' '}
          はプログラミング学習支援のためのコンテンツを提供します。
        </div>
      </div>
      <div className="flex justify-center items-center py-4 my-12 bg-slate-50 rounded-md border">
        <div>Come and</div>
        <button
          className="py-2 px-4 mx-3 font-bold text-white bg-amber-400 rounded-md border shadow-md"
          onClick={() => router.push('/about/proglab')}
        >
          join
        </button>
        <div>us!!</div>
      </div>
    </div>
  );
};
