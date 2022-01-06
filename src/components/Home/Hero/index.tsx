import { LinkButton } from 'src/components/@commons/Button/LinkButton';

export const Hero = () => {
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
      {/* PC */}
      <div className="hidden justify-center items-center mt-8 sm:flex sm:mt-12">
        <LinkButton
          size="large"
          label="Come and join us!!"
          // className="flex justify-center items-center py-4 px-7 text-xl font-bold text-white bg-amber-400 rounded-lg shadow"
          href="/about/proglab"
          fill
        />
      </div>
      {/* SP */}
      <div className="flex justify-center items-center mt-8 sm:hidden sm:mt-12">
        <LinkButton size="medium" label="Come and join us!!" href="/about/proglab" fill />
      </div>
    </div>
  );
};
