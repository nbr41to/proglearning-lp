import { ReactNode, VFC } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  return <main className="px-10 pt-28 pb-8 mx-auto max-w-[1024px] min-h-full">{children}</main>;
};
