import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

export const Main: VFC<MainProps> = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

const StyledMain = styled.div`
  padding: 12px 20px;
`;
