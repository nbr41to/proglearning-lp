import { ReactNode, VFC } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  return <main className="px-10 py-8 min-h-full">{children}</main>;
};
