import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
