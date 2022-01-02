import { ReactNode, VFC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { SpMenu } from './SpMenu';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
      <SpMenu />
    </div>
  );
};
