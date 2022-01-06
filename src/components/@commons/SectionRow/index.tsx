import { ReactNode, VFC } from 'react';
type Props = {
  title: string;
  paragraph: string;
  // imageSrc: StaticImageData;
  children: ReactNode;
  reverse?: boolean;
};

export const SectionRow: VFC<Props> = ({ title, paragraph, children, reverse = false }) => {
  return (
    <div className={`flex flex-wrap gap-8 justify-evenly items-center px-4 py-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-96">
        <h2 className="text-lg font-bold text-center sm:text-2xl">{title}</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-10">{paragraph}</p>
      </div>
      <div className="w-96 rounded shadow-md">{children}</div>
    </div>
  );
};
