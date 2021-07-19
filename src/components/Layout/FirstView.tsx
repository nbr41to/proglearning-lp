import { VFC } from 'react';
import styled from 'styled-components';

export const FirstView: VFC = () => {
  return (
    <StyledFirstView>
      <h2>仲間と続ける 学習と開発</h2>
    </StyledFirstView>
  );
};

const StyledFirstView = styled.div`
  width: 100%;
  height: 420px;
  background: linear-gradient(-160deg, rgba(254, 159, 58, 0.789), rgba(66, 220, 247, 0.8)), url('/first-view.jpg');
  background-size: cover;
  background-position: top 25% center;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.sp`
    height: 200px;
  `}

  > h2 {
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: 34px;
    letter-spacing: 2px;
    ${({ theme }) => theme.sp`
      font-size: 24px;
    `}
    color: white;
  }
`;
