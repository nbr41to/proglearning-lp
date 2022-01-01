import { useRouter } from 'next/router';

export const Hero = () => {
  const router = useRouter();

  return (
    <>
      <div className="py-10 text-center">
        <div className="my-14 text-5xl font-bold animate-pulse md:text-8xl">
          <div className="mb-2">Change your life</div>
          <div>
            by <span className="text-teal-300">Learning</span>
          </div>
        </div>
        <div>
          <span className="font-bold text-amber-400">`progLearning`</span>{' '}
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
    </>
  );
};
