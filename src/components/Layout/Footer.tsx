import { VFC } from 'react';
import styled from 'styled-components';

export const Footer: VFC = () => {
  return (
    <FooterStyled>
      <div className="copyright">
        Copylight 2021
        <a href="#">progL</a>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  font-size: 26px;
  color: aquamarine;
  margin-top: 24px;
  padding: 12px 24px;
  border-top: 1px solid #ccc;
  text-align: center;
  .copyright {
    font-size: 14px;
    a {
      font-family: 'Apple LiGothic', sans-serif;
      font-size: 20px;
      margin: 0 6px;
    }
  }
`;
