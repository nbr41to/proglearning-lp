import { ReactNode, VFC } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Box: VFC<Props> = ({ className, children }) => {
  return (
    <div className={`${className} relative bg-slate-100 shadow rounded-none border-0 sm:rounded-lg sm:border`}>
      {children}
      <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
      <div className="absolute top-2 right-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
      <div className="absolute right-2 bottom-2 w-2 h-2 bg-gray-600 rounded-full shadow"></div>
    </div>
  );
};
