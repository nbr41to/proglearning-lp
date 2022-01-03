import { useRouter } from 'next/router';

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="py-4 text-center sm:py-16">
      <div className="">
        <div className="text-4xl font-bold animate-pulse sm:text-8xl">
          <div className="leading-snug">Change your life</div>
          <div>
            by <span className="text-teal-300">Learning</span>
          </div>
        </div>
        <div className="px-6 mt-8 text-xs tracking-wider sm:mt-16 sm:text-base">
          <span className="text-base font-bold text-amber-400">`progLearning`</span>{' '}
          はプログラミング学習支援のためのコンテンツを提供します。
        </div>
      </div>
      <div className="flex justify-center items-center py-4 mx-6 mt-8 bg-slate-100 sm:mt-16 sm:rounded-md sm:border">
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
