import { VFC } from 'react';

type Props = {
  title: string;
  description?: string;
  titleSize?: string;
};

export const PageTitle: VFC<Props> = ({ title, description, titleSize = 'text-2xl' }) => {
  return (
    <div className="px-6 mx-auto max-w-2xl text-center">
      <h1 className={`${titleSize} font-bold`}>{title}</h1>
      {description && <p className="mt-4 text-slate-500">{description}</p>}
    </div>
  );
};
