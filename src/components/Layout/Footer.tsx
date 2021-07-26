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
  width: 100%;
  padding: 12px 24px;
  border-top: 1px solid #ccc;

  color: ${(props) => props.theme.colors.orange};
  text-align: center;
  font-weight: bold;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);

  /* position: relative;
  left: 0;
  bottom: 0; */

  > .copyright {
    font-size: 16px;
    > a {
      font-family: 'Apple LiGothic', sans-serif;
      font-size: 24px;
      margin: 0 6px;
    }
  }
`;
