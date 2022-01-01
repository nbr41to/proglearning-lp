import Image from 'next/image';
import { VFC } from 'react';
type Props = {
  title: string;
  paragraph: string;
  imageSrc?: StaticImageData;
  annotation?: string;
  titleSize?: string;
};

export const SectionColumn: VFC<Props> = ({ title, paragraph, imageSrc, annotation, titleSize = 'text-2xl' }) => {
  return (
    <div className="py-12 px-4 mx-auto max-w-3xl text-center">
      <div className="">
        <h2 className={`${titleSize} font-bold`}>{title}</h2>
        <p className="mt-6 leading-8 text-slate-500">{paragraph}</p>
      </div>
      {imageSrc && (
        <div className="p-4 mt-6 rounded shadow-lg">
          <Image src={imageSrc} />
        </div>
      )}
      {annotation && <div className="mt-8 text-sm text-slate-500">{annotation}</div>}
    </div>
  );
};
