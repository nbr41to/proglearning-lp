import Image from 'next/image';
import { VFC } from 'react';
type Props = {
  title: string;
  paragraph: string;
  imageSrc: StaticImageData;
  reverse?: boolean;
};

export const SectionWithImage: VFC<Props> = ({ title, paragraph, imageSrc, reverse = false }) => {
  return (
    <div className={`flex flex-wrap gap-8 justify-evenly items-center px-4 py-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-96 text-center">
        <h2 className="text-lg font-bold sm:text-2xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-10">{paragraph}</p>
      </div>
      <div className="w-96 rounded shadow-md">
        <Image src={imageSrc} />
      </div>
    </div>
  );
};
