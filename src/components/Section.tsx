import { ReactNode, VFC } from 'react';
import styled from 'styled-components';

type SectionProps = {
  ImageComp: any;
  children: ReactNode;
};

export const Section: VFC<SectionProps> = ({ ImageComp, children }) => {
  return (
    <StyledSection>
      <div>{<ImageComp />}</div>
      {children}
    </StyledSection>
  );
};
const StyledSection = styled.div`
  display: flex;
  > div {
    width: 100px;
    border: 1px solid #000;
    path {
      width: 100px;
    }
  }
`;
