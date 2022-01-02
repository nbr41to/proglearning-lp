import { ReactNode, VFC } from 'react';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  return <main className="pt-16 pb-8 mx-auto max-w-[1024px] min-h-full md:px-10 md:pt-28">{children}</main>;
};
