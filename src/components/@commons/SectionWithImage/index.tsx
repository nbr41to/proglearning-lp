import Image from 'next/image';
import { VFC } from 'react';
type Props = {
  title: string;
  paragraph: string;
  imageSrc: StaticImageData;
  titleSize?: string;
  reverse?: boolean;
};

export const SectionWithImage: VFC<Props> = ({
  title,
  paragraph,
  imageSrc,
  reverse = false,
  titleSize = 'text-2xl',
}) => {
  return (
    <div className={`flex gap-16 justify-center items-center px-4 py-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-96 text-center">
        <h2 className={`${titleSize} font-bold`}>{title}</h2>
        <p className="mt-6 leading-8 text-slate-500">{paragraph}</p>
      </div>
      <div className="w-72 rounded shadow-md">
        <Image src={imageSrc} />
      </div>
    </div>
  );
};
