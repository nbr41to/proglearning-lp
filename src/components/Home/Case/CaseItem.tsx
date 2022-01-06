import Link from 'next/link';
import { VFC } from 'react';
import { LinkButton } from 'src/components/@commons/Button/LinkButton';

type Props = {
  title: string;
  paragraph: string;
  linkTo?: 'proglearning' | 'proglab';
};

export const CaseItem: VFC<Props> = ({ title, paragraph, linkTo = 'proglearning' }) => {
  const isProgLearning = linkTo === 'proglearning';

  return (
    <div className="relative p-6 w-80 bg-white rounded border shadow-sm">
      <h3 className="mb-3 font-bold">{title}</h3>
      <p className="mb-10 text-sm leading-relaxed text-slate-500">{paragraph}</p>
      <LinkButton
        className="absolute right-2 bottom-2 font-bold"
        label={isProgLearning ? '→ progLearning' : '→ progLab'}
        primary={isProgLearning}
        href={isProgLearning ? '/about/proglearning' : '/about/proglab'}
      />
    </div>
  );
};
