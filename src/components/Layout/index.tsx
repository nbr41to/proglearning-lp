import { ReactNode, VFC } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
