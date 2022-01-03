import Image from 'next/image';
import { ReactNode, VFC } from 'react';

type Props = {
  title: string;
  paragraph: string;
  imageSrc?: StaticImageData;
  annotation?: string;
  children?: ReactNode;
};

export const SectionColumn: VFC<Props> = ({ title, paragraph, imageSrc, annotation, children }) => {
  return (
    <div className="py-8 px-4 mx-auto max-w-3xl text-center sm:py-12">
      <div className="">
        <h2 className="text-lg font-bold sm:text-2xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-10">{paragraph}</p>
      </div>
      {imageSrc && (
        <div className="p-4 mt-6 rounded shadow-lg">
          <Image src={imageSrc} />
        </div>
      )}
      {annotation && <div className="mt-8 text-sm text-slate-500">{annotation}</div>}
      {children}
    </div>
  );
};
