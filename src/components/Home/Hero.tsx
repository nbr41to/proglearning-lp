import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="snap-x mx-auto snap-mandatory flex gap-10 w-full max-w-[1024px] overflow-x-auto">
      <div className="snap-start w-[600px] shrink-0 scroll-ml-52">
        <img src="/first-view.jpg" className="shrink-0 w-full rounded-lg" />
      </div>
      <div className="snap-start w-[600px] shrink-0 scroll-ml-52">
        <img src="/first-view.jpg" className="shrink-0 w-full rounded-lg" />
      </div>
      <div className="snap-start w-[600px] shrink-0 scroll-ml-52">
        <img src="/first-view.jpg" className="shrink-0 w-full rounded-lg" />
      </div>
      <div className="snap-start w-[600px] shrink-0 scroll-ml-52">
        <img src="/first-view.jpg" className="shrink-0 w-full rounded-lg" />
      </div>
    </div>
  );
};
