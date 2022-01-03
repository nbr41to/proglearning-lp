import { ReactNode, VFC } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  return <main className="py-24 mx-auto max-w-[1024px] min-h-full sm:py-32">{children}</main>;
};
