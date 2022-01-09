import { ReactNode, VFC } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Box: VFC<Props> = ({ className, children }) => {
  return (
    <div className={`${className} relative bg-slate-100 shadow rounded-none border-0 sm:rounded-lg sm:border`}>
      {children}
      <div className="absolute top-3 left-3 w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="absolute top-3 right-3 w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-gray-500 rounded-full"></div>
      <div className="absolute right-3 bottom-3 w-2 h-2 bg-gray-500 rounded-full"></div>
    </div>
  );
};
