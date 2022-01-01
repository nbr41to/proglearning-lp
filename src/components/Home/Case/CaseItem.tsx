import Link from 'next/link';
import { VFC } from 'react';

type Props = {
  title: string;
  paragraph: string;
  linkTo?: 'proglearning' | 'proglab';
};

export const CaseItem: VFC<Props> = ({ title, paragraph, linkTo = 'proglearning' }) => {
  const isProgLearning = linkTo === 'proglearning';

  return (
    <div className="relative p-6 w-72 bg-white rounded border shadow-sm">
      <h3 className="mb-3 font-bold">{title}</h3>
      <p className="mb-10 text-sm text-slate-500">{paragraph}</p>
      <Link href={isProgLearning ? '/about/proglearning' : '/about/proglab'}>
        <a className={`${isProgLearning ? 'text-teal-300' : 'text-amber-400'} font-bold absolute bottom-4 right-4`}>
          → {isProgLearning ? 'progLearning' : 'progLab'}
        </a>
      </Link>
    </div>
  );
};
