import { ReactNode, VFC } from 'react';
import styled from 'styled-components';
import { FirstView } from './FirstView';
import { useRouter } from 'next/router';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {router.pathname === '/' && <FirstView />}
      <StyledMain>{children}</StyledMain>
    </>
  );
};

const StyledMain = styled.div`
  padding: 12px 20px;
  border-top: 1px solid aquamarine;
`;
